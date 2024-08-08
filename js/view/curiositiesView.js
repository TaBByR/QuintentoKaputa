function render() {
    const app = document.getElementById('container');
    const content = `
          <header>
          FUN FACTS FOR 1992
          </header>
          <body style="background-color:black;">
    <div id="father">
        <div id="box">
            <img src="alladin.jpg" alt="alladin">
            <img src="apartheid.jpeg" alt="apartheid">
        </div>
        <p></p>
        <div id="box">
            <img src="berlin-wall-falling.jpg" alt="coldwar">
            <img src="DAHMER.webp" alt="dahmer">
        </div>
        <div id="box">
            <img src="dreamteam.jpg" alt="dreamteam">
            <img src="George-Bush.avif" alt="bush">
        </div>
        <div id="box">
            <img src="petroleiro.jpeg" alt="catastrofe">
            <img src="royal_break.jpeg" alt="royal">
        </div>
    </div>
</body>
          <footer>
            &copy; Quinteto Kaputa, 2024 HACKATON @ codeforall_
          </footer>
        `;
    app.innerHTML = content;
};
export default{ render };