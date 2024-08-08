function render() {
    const app = document.getElementById('container');
    app.innerHTML = "";
    const content = `
          <header>
          HIGHLIGHTS FOR 1992
          </header>
          <body style="background-color:black;">

          <div class="card" style="width: 50rem;">
          
          <div class="card-body">
            <h3 class="card-title">1 - With who did Monserrat Caballé perform the opening song of 1992 Barcelona Olympiad Games?</h3>
            <img src="montserrat.jpg" class="card-img-top" alt="aladin">
            <h4 class="card-subtitle mb-2 text-muted">Correct Answer - Freddie Mercury</h4>
            <p class="card-text">Montserrat Caballé performed the 1992 Barcelona Olympic Games opening song, "Barcelona," with Freddie Mercury, making it an iconic anthem for the event.</p>
            
          </div>
        </div>
        <header></header>  

          <div class="card" style="width: 50rem;">
          
          <div class="card-body">
            <h3 class="card-title">2 - What country won the most number of medals in 
            1992 Barcelona Olympiad games?</h3>
            <img src="unifiedTeam.jpg" class="card-img-top" alt="aladin">
            <h4 class="card-subtitle mb-2 text-muted">Correct Answer - Unified Team(Soviet Union)</h4>
            <p class="card-text">The Unified Team (ex-USSR countries that competed together 
                because the Soviet Union broke up several months before the start of the Games) 
                won the most medals overall, 112, as well as the most gold medals, 45.</p>
            
          </div>
        </div>
        <header></header>            
        <div class="card" style="width: 50rem;">
          
          <div class="card-body">
            <h3 class="card-title">3 - What sport would Freddy play if he was an olympic athlete?</h3>
            <img src="FreddieMercury.jpg" class="card-img-top" alt="aladin">
            <h4 class="card-subtitle mb-2 text-muted">Correct Answer - Boxing</h4>
            <p class="card-text">Freedie was sent to an boarding school where he gain interest in music and some sports specially for boxing. He was brilliant in boxing but his mother didn't like the sport because was too violent, which led him to stop boxing.</p>
            
          </div>
        </div>
        <header></header>          
        <div class="card" style="width: 50rem;">
           
        <div class="card-body">
            <h3 class="card-title">4 - What was the 1992 Olympiad games mascot?</h3>
            <img src="cobi1992.jpg" class="card-img-top" alt="aladin">
            <h4 class="card-subtitle mb-2 text-muted">Correct Answer - Cobi</h4>
            <p class="card-text">Cobi is a humanised Pyrenean mountain dog in a cubist style. 
            While his expression and three spiky hairs are the same, he has an impressively large wardrobe.</p>
            
          </div>
        </div>
        <header></header>  
        <div class="card-body">
            <h3 class="card-title">5 - How many extra teeth grew in Freddy’s mouth as he grew up?</h3>
            <img src="dentesfreddy.jpg" class="card-img-top" alt="aladin">
            <h4 class="card-subtitle mb-2 text-muted">Correct Answer - Four</h4>
            <p class="card-text">Freddie Mercury had four extra teeth that grew in his mouth as he grew up, which contributed to his distinctive overbite.</p>
            
          </div>
        </div>
        <header></header>  
        <div class="card-body">
            <h3 class="card-title">6 - What’s Freddy favourite pet animal?"</h3>
            <img src="catfreddy.jpg" class="card-img-top" alt="aladin">
            <h4 class="card-subtitle mb-2 text-muted">Correct Answer - Cat</h4>
            <p class="card-text">Cats were known to be Freddie Mercury's family. He adopted a lot of cats from shelters and hospitals in order to save their lives.</p>
            
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