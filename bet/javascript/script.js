//Na skroll sakriva nav traku, skrol na gore ponovo prikazuje traku
let header = document.querySelector('#hedercic');
let navOpen = 0;
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (navOpen == 0) {
    if (prevScrollpos > currentScrollPos) {
      header.style.top = '0px';
    } else {
      header.style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  }
};


//Dugme za prikazivasnje i sakrivanje texta
let loricaBtn = document.querySelector('#loricin_btn');
let loticraTxt = document.getElementById('lorica')
let width = window.matchMedia("(max-width: 800px)")

console.log(width);

window.addEventListener('resize', function () { //Usled promene dimenzija screena stranica se ponovo ucitava, potrebno dole za dugmence
    window.location.reload(); 
});

if (width.matches) { //Uslov koji postavlja sa dole kod izvrsi ukoliko je max-width:800px
    loricaBtn.addEventListener("click", function(){ //funkcija da na klik buton regulise show i hide text
        if(loticraTxt.style.display == 'none'){
            loticraTxt.style.display = "block";
        } else {
            loticraTxt.style.display = "none";
        }
    });
} else { //Else postavlja da ukoliko je screen veci od 800px  tekst bude viljiv
    loticraTxt.style.display = "block";
}





    

  



