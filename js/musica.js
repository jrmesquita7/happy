document.addEventListener('DOMContentLoaded', () => {
  // Variáveis de controle de áudio
  let backgroundAudio = null;
  let currentTestimony = null;
  let isMusicPlaying = false;
  const defaultVolume = 0.7; // Volume padrão (70%)

  // Recupera a playlist e o índice atual do localStorage
  const playlist = JSON.parse(localStorage.getItem('playlist'));
  let musicaIndex = parseInt(localStorage.getItem('musicaIndex') || '0');

  // Função para tocar música da playlist
  // SUBSTITUIR a função tocarMusica() por esta versão corrigida:

  function tocarMusica(index) {
    if (!playlist || index >= playlist.length) return;

    backgroundAudio = new Audio(`musicas/${playlist[index]}`);

    // ALTERAÇÃO PRINCIPAL: Verificar se há depoimento tocando antes de definir o volume
    if (currentTestimony && !currentTestimony.paused) {
      // Se há depoimento tocando, usar volume reduzido
      backgroundAudio.volume = defaultVolume * 0.1;
    } else {
      // Se não há depoimento, usar volume normal
      backgroundAudio.volume = defaultVolume;
    }

    backgroundAudio.play().then(() => {
      isMusicPlaying = true;
    }).catch((error) => {
      console.warn('Autoplay bloqueado:', error);
    });

    backgroundAudio.onended = () => {
      musicaIndex++;
      localStorage.setItem('musicaIndex', musicaIndex.toString());
      tocarMusica(musicaIndex);
    };
  }

  if (playlist && playlist.length > 0) {
    tocarMusica(musicaIndex);
  }

  // Função para tocar depoimentos
  function playTestimony(phase) {
    const audioFile = `depoimentos/fase${phase}.mp3`;
    const playerElement = document.querySelector(`.fase[data-fase="${phase}"] .audio-player`);
    const playBtn = playerElement.querySelector('.play-btn');
    const progressBar = playerElement.querySelector('.audio-progress-bar');
    const progressContainer = playerElement.querySelector('.audio-progress');
    const currentTimeEl = playerElement.querySelector('.current-time');
    const totalTimeEl = playerElement.querySelector('.total-time');

    // Se já está tocando este depoimento, pausa/retoma
    if (currentTestimony && currentTestimony.src.endsWith(audioFile)) {
      if (currentTestimony.paused) {
        currentTestimony.play();
        playBtn.textContent = '⏸️';
      } else {
        currentTestimony.pause();
        playBtn.textContent = '▶️';
      }
      return;
    }

    // Pausa qualquer depoimento atual
    if (currentTestimony) {
      currentTestimony.pause();
      currentTestimony.currentTime = 0;
      document.querySelectorAll('.play-btn').forEach(btn => {
        if (btn !== playBtn) btn.textContent = '▶️';
      });
    }

    // Reduz volume da música de fundo
    if (backgroundAudio && isMusicPlaying) {
      backgroundAudio.volume = defaultVolume * 0.1;
    }

    // Cria o novo áudio
    currentTestimony = new Audio(audioFile);
    currentTestimony.volume = 1.0;
    playBtn.textContent = '⏸️';

    // Eventos do áudio
    currentTestimony.addEventListener('loadedmetadata', () => {
      totalTimeEl.textContent = formatTime(currentTestimony.duration);
    });

    currentTestimony.addEventListener('timeupdate', () => {
      const progress = (currentTestimony.currentTime / currentTestimony.duration) * 100;
      progressBar.style.width = progress + '%';
      currentTimeEl.textContent = formatTime(currentTestimony.currentTime);
    });

    currentTestimony.addEventListener('ended', () => {
      playBtn.textContent = '▶️';
      progressBar.style.width = '0%';
      currentTimeEl.textContent = '0:00';
      if (backgroundAudio && isMusicPlaying) {
        backgroundAudio.volume = defaultVolume;
      }
      currentTestimony = null;
    });

    // Click na barra de progresso
    progressContainer.addEventListener('click', (e) => {
      if (currentTestimony) {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        currentTestimony.currentTime = percentage * currentTestimony.duration;
      }
    });

    currentTestimony.play().catch(error => {
      console.error('Erro ao tocar depoimento:', error);
      playBtn.textContent = '▶️';
    });
  }

  // Função auxiliar para formatar tempo
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Adiciona eventos aos botões de depoimento
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const phase = this.closest('.fase').getAttribute('data-fase');
      playTestimony(phase);
    });
  });
});
