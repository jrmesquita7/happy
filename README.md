# Happy 🎉

Uma aplicação web interativa para celebração de aniversário com linha do tempo personalizada, galeria de fotos e experiência musical imersiva.

## 📋 Sobre o Projeto

O Happy é uma aplicação web comemorativa que apresenta uma jornada visual e musical através da vida da aniversariante. Com design moderno, efeitos visuais avançados e interatividade, cria uma experiência única de celebração digital.

## ✨ Funcionalidades

### Página Principal (index.html)
- 🎨 **Background Animado**: Gradiente fluido com 6 cores em movimento
- 💖 **Partículas Flutuantes**: Corações e símbolos animados
- 📝 **Carta de Amor**: Mensagem personalizada com efeito glassmorphism
- 🎵 **Seletor Musical**: 3 categorias de música (Escolha do Beto, Hits Imortais, Vibe TikTok)
- 📊 **Contadores Especiais**: Dias juntos, sorrisos causados, nível de amor
- 💝 **Botão Surpresa**: Mensagens aleatórias românticas
- 🎭 **Efeitos 3D**: Títulos com profundidade e sombras avançadas

### Página de Conteúdo (conteudo.html)
- 📸 **Galeria Interativa**: Slideshow automático com controles manuais
- 🎯 **Hotspots nas Fotos**: Pontos clicáveis com tooltips informativos
- 🎵 **Player de Áudio**: Sistema de reprodução por fase
- 📈 **Barra de Progresso**: Indicador visual do scroll da timeline
- 🎮 **Quiz Interativo**: Perguntas sobre memórias específicas
- 😊 **Sistema de Reações**: Botões de emoji com contador
- 🌙 **Modo Noturno**: Toggle para tema escuro
- 👥 **Contador de Visitantes**: Simulação de analytics

## 🎪 Fases da Linha do Tempo

### 👶 Fase 1: Começo de Tudo
- Fotos da infância (9 imagens)
- Curiosidades e primeiras conquistas
- Depoimento em áudio
- Tema: One Piece (Yonkou, piratas)

### 🧸 Fase 2: Juventude  
- Adolescência (7 imagens)
- Quiz de memórias
- Estatísticas da época
- Idade: 14-15 anos

### 🎓 Fase 3: Início de uma Linda História
- Início do relacionamento (13 imagens)
- História do primeiro encontro
- Marcos do namoro
- Período: 2016

### 🌟 Fase 4: A Promessa
- Casamento e lua de mel (10 imagens)
- Momentos do pedido e cerimônia
- Transição para vida a dois

### 💖 Fase 5: Presente e Futuro
- Vida atual e planos (7 imagens)
- Faculdade e carreira
- Sonhos e objetivos futuros

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Flexbox e Grid Layout
  - Animações e transições avançadas
  - Glassmorphism e efeitos 3D
  - Responsive design
- **JavaScript ES6+**:
  - Intersection Observer API
  - Local Storage
  - Canvas para fogos de artifício
  - Manipulação do DOM

### Recursos Visuais
- **Google Fonts**: Poppins e Dancing Script
- **Gradientes Animados**: Background dinâmico
- **Backdrop Filter**: Efeitos de blur
- **CSS Animations**: Keyframes personalizados
- **Transform 3D**: Efeitos de profundidade

## 📦 Estrutura do Projeto

```
happy/
├── index.html              # Página principal
├── conteudo.html          # Timeline interativa
├── css/
│   ├── estilo_index.css   # Estilos da página inicial
│   └── estilo-conteudo.css # Estilos da timeline
├── js/
│   ├── musica.js          # Controle de áudio
│   └── fogos.js           # Animação de fogos
├── imagens/               # Galeria de fotos
│   ├── fase1-1.jpg        # Fotos da infância
│   ├── fase2-1.jpg        # Fotos da juventude
│   ├── fase3-1.jpg        # Fotos do relacionamento
│   ├── fase4-1.jpg        # Fotos do casamento
│   └── fase5-1.jpg        # Fotos atuais
└── musicas/               # Arquivos de áudio
    ├── background.mp3     # Música de fundo
    ├── beto1.mp3         # Playlist do Beto
    ├── classica1.mp3     # Hits clássicos
    └── vibe1.mp3         # Músicas TikTok
```

## 🎵 Sistema Musical

### Categorias Disponíveis
1. **Escolha do Beto**: 9 músicas personalizadas
2. **Hits Imortais**: 14 clássicos atemporais  
3. **Vibe TikTok**: 8 sucessos atuais

### Funcionalidades
- Reprodução automática em loop
- Controle de volume
- Transição suave entre faixas
- Armazenamento da preferência

## 🎨 Características Visuais

### Animações
- **Gradient Flow**: Background em movimento contínuo
- **Heart Particles**: Partículas flutuantes
- **Typing Effect**: Texto digitado em tempo real
- **Slide Transitions**: Transições suaves entre fotos
- **3D Transforms**: Efeitos de profundidade

### Responsividade
- **Desktop**: Layout completo com todos os efeitos
- **Tablet**: Adaptação para telas médias
- **Mobile**: Interface otimizada para touch

## 🔧 Instalação e Uso

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional)

### Execução Local

```bash
# Clonar o repositório
git clone https://github.com/jrmesquita7/happy.git
```

```bash
# Navegar para o diretório
cd happy
```

```bash
# Servir os arquivos (Python)
python -m http.server 8000
```

```bash
# Ou usar Node.js
npx serve .
```

Acesse: `http://localhost:8000`

## 📱 Como Usar

1. **Página Inicial**: 
   - Leia a carta de amor
   - Escolha uma categoria musical
   - Clique no botão surpresa para mensagens especiais

2. **Timeline**:
   - Navegue pelas fases usando scroll
   - Clique nas fotos para ver detalhes
   - Interaja com hotspots nas imagens
   - Responda aos quizzes
   - Reaja com emojis

3. **Controles**:
   - 🎵 Botão de música (canto superior)
   - 🌙 Modo noturno
   - ⬅️ Voltar para página inicial

## 🎯 Recursos Interativos

- **Contadores Animados**: Estatísticas que incrementam
- **Quiz de Memórias**: Perguntas sobre cada fase
- **Sistema de Reações**: Feedback emocional
- **Hotspots Informativos**: Detalhes sobre fotos específicas
- **Slideshow Inteligente**: Pausa quando fora da tela

## 🤝 Personalização

Para adaptar para outro aniversariante:

1. Substitua as imagens na pasta `imagens/`
2. Edite os textos em `index.html` e `conteudo.html`
3. Atualize as músicas na pasta `musicas/`
4. Modifique as datas e estatísticas
5. Personalize cores no CSS

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**JR Mesquita**
- GitHub: [@jrmesquita7](https://github.com/jrmesquita7)

## 🙏 Agradecimentos

- Inspiração em design moderno e glassmorphism
- Comunidade de desenvolvedores frontend
- Referências do universo One Piece
- Todos que tornaram esta celebração especial

---

**Feito com ❤️ para celebrar momentos especiais** 🎉

*"Que a vida lhe ofereça muitas razões para sorrir!"*
