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

    // Se já está tocando este depoimento, pausa
    if (currentTestimony && currentTestimony.src.endsWith(audioFile) && !currentTestimony.paused) {
      currentTestimony.pause();
      currentTestimony.currentTime = 0;
      currentTestimony = null;
      playBtn.textContent = '▶️';

      // Restaura volume da música de fundo
      if (backgroundAudio && isMusicPlaying) {
        backgroundAudio.volume = defaultVolume;
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

    // Reduz volume da música de fundo se estiver tocando
    if (backgroundAudio && isMusicPlaying) {
      backgroundAudio.volume = defaultVolume * 0.1; // 10% do volume original
    }

    // Cria e toca o depoimento
    currentTestimony = new Audio(audioFile);
    currentTestimony.volume = 1.0;
    playBtn.textContent = '⏸️';

    // Eventos do depoimento
    currentTestimony.onended = function () {
      playBtn.textContent = '▶️';
      if (backgroundAudio && isMusicPlaying) {
        backgroundAudio.volume = defaultVolume;
      }
      currentTestimony = null;
    };

    currentTestimony.onpause = function () {
      if (this.currentTime > 0 && !this.ended) {
        playBtn.textContent = '▶️';
      }
    };

    currentTestimony.play().catch(error => {
      console.error('Erro ao tocar depoimento:', error);
      playBtn.textContent = '▶️';
    });
  }

  // Adiciona eventos aos botões de depoimento
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const phase = this.closest('.fase').getAttribute('data-fase');
      playTestimony(phase);
    });
  });
});
