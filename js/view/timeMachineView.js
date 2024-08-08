
function render() {

    const app = document.getElementById('container');

    const content = `
          <header>
            1992 Barcelona Olympics
            <img src="js/resources/2008_TMWeb.jpg" alt="The Time Machine">
            Welcome to the TIME MACHINE
          </header>
          <div class="timeline">
          <div class="timeline-event">
              <h2>January, 1992: AT&T Video Phone</h2>
              <p>In 1992 AT&T introduced the VideoPhone 2500, the world's first colour videophone, that cost 1499$.</p>
            </div>
            <div class="timeline-event">
              <h2>February, 1992: Maastricht Treaty</h2>
              <p>The Maastricht Treaty is signed, founding the European Union.</p>
            </div>
            <div class="timeline-event">
              <h2>March, 1992: MichelAngelo Virus</h2>
              <p>We witnessed the Michelangelo virus(or March6) outbreak and the media hype in advance.</p>
            </div>
            <div class="timeline-event">
              <h2>April, 1992: DisneyLand Paris</h2>
              <p>The opening of Disneyland Paris in Marne-la-Vallee, France.</p>
            </div>
            <div class="timeline-event">
              <h2>May, 1992: Astronauts walk in Space</h2>
              <p>3 astronauts walk in space at the same time, for the first time.</p>
            </div>
            <div class="timeline-event">
              <h2>June, 1992: UEFA Euro 1992</h2>
              <p>Sweden hosts the UEFA Euro 1992 football tournament, which is won by Denmark.</p>
            </div>
            <div class="timeline-event">
              <h2>July 25, 1992: Opening Ceremony</h2>
              <p>The OLYMPIADS start NOW:</p>
            </div>
          </div>
          <button class="redirect-button" onclick="redirect()">YOU HAVE BEEN SUMMONED</button>
          <div class="audio-controls">
      <button class="play-button" onclick="playAudio()">Play Audio</button>
      <button class= "pause-button" onclick="pauseAudioButton()">Pause Audio</button>
    </div>
          <footer>
            &copy; Quinteto Kaputa, 2024 HACKATON @ codeforall_
          </footer>
        `;

    app.innerHTML = content;

    const redirectButton = document.querySelector('.redirect-button');
    redirectButton.addEventListener('click', redirect);

    const playButton = document.querySelector('.play-button');
    playButton.addEventListener('click', playAudio);
  
    const pauseButton = document.querySelector('.pause-button');
    pauseButton.addEventListener('click', pauseAudio);

};

function redirect() {
    window.location.href = "/countries";
}

function playAudio() {
    const audio = document.getElementById('background-audio');
  audio.play();
}

function pauseAudio() {
    const audio = document.getElementById('background-audio');
  audio.pause();
}

export default{ render };