lightbox.option({
  'resizeDuration': 150,
  'alwaysShowNavOnTouchDevices': true,
  'albumLabel': "Imagen %1 de %2",
  'fadeDuration': 150,
  'imageFadeDuration': 150,
});

const anioActual = new Date().getFullYear();
  const anioDicomElement = document.getElementById('anioDicom');
  anioDicomElement.textContent = `©DICOM ${anioActual}`;

var menuActive=false
var onHome=false
var actualPage=2

let tl = gsap.timeline();
tl.to("#page1", {duration:0, opacity: 0})
  .to("#page1", {duration:1, opacity: 1})
  .to("#page1", {duration:8, opacity: 1})
  .to("#page2", {duration:0, left:0})
  .to("#page1", {duration:1, opacity: 0})
  .to("#page1", {duration:0, left:"-100%"});

function rightAll(){
  gsap.to(".HideToHome", {duration:.5, left:"100%", top:0})
  console.log("Pantallas principales a la derecha")
};
function rightAllDelay(){
  gsap.to(".HideToHome", {duration:0, left:"100%", top:0, delay:.5})
  console.log("Pantallas principales a la derecha-sin delay")
};
function bottomAll(){
  gsap.to(".HideToHome", {duration:0, zIndex: 1})
  gsap.to(".HideToHome", {duration:0, left:"0", top:"100%", delay:.5})
  // bajarMenu()
  console.log("Pantallas principales bajadas")
};



// BTN ATRÁS

var PGalerias = gsap.utils.toArray("#page11, #page12, #page13, #page14, #page15, #page16, #page17")
var IconsMenu = gsap.utils.toArray("#zira-icon, #album-icon, #libro-icon, #teatro-icon, #documental-icon, #galerias-icon")
var BtnMenu = gsap.utils.toArray("#btn-page4, #btn-page9, #btn-page12, #btn-page10, #btn-page7, #btn-page8")

function validHome(){
  if(onHome==false){
    gsap.to(IconsMenu, {delay: 0, duration:0,display: "none"})
    gsap.to(".top-button", {display: "flex"})
    gsap.to(".top-button", {delay:.5, opacity: "1"})
    gsap.to(".back-bottom-bar", {duration:.5,height: "150px"})
    gsap.to("#menuBar", {bottom:"-80px", duration:0.2, ease: "elastic.out"});
    gsap.to(BtnMenu, {delay:.2,display:"flex"})
    menuActive=false
  }
  else{
    gsap.to(".top-button", {display: "none"})
    gsap.to(".top-button", {duration:.5,opacity:0})
    gsap.to(IconsMenu, {display: "none"})
    gsap.to(".back-bottom-bar", {height: "80px"})
    gsap.to(".bottom-bar", {bottom: 0})
    gsap.to(BtnMenu, {delay:0,display:"flex"})
    menuActive=false
  }
};



function ToHome(){
  rightAll();
  gsap.to("#page2", {duration:0, left:"-100%"});
  gsap.to("#page2", {duration:.5, left:0});
  onHome=true;
  validHome();
  console.log("De vuleta al Home");
  
};
var PopUps = gsap.utils.toArray("#AdZira, #AdAlbum, #AdLibro, #AdDesc")

function PopUpAdd(){
  if(actualPage==4){
    gsap.to("#AdZira", {duration:0, display:"flex"});
    gsap.to("#AdZira", {duration:.5, opacity:1});
    gsap.to(".marco-top", {delay:.3,duration:.5, scale:1,ease:"back.out"});
  }
  if(actualPage==9){
    gsap.to("#AdAlbum", {duration:0, display:"flex"});
    gsap.to("#AdAlbum", {duration:.5, opacity:1});
    gsap.to(".marco-top", {delay:.3,duration:.5, scale:1,ease:"back.out"});
  }
  if(actualPage==12){
    gsap.to("#AdLibro", {duration:0, display:"flex"});
    gsap.to("#AdLibro", {duration:.5, opacity:1});
    gsap.to(".marco-top", {delay:.3,duration:.5, scale:1,ease:"back.out"});
  }
};
function PopUpDone(){
  gsap.to("#AdDesc", {duration:0, display:"flex"});
  gsap.to("#AdDesc", {duration:.5, opacity:1});
  gsap.to(".marco-desc", {delay:.3,duration:.5, scale:1,ease:"back.out"});
  console.log("Done!")
}

function ClosePopUp(){
  gsap.to(".marco-top", {delay:0,duration:.5, scale:0,ease:"back.in"});
  gsap.to(".marco-desc", {delay:0,duration:.5, scale:0,ease:"back.in"});
  gsap.to(PopUps, {delay:.5, display:"none"});
  gsap.to(PopUps, {delay:.3,duration:.5, opacity:0});
  console.log("Popup cerrado");
}

function BackToGalerias(){
  gsap.to(PGalerias, {duration:.5, left:"100%", top:0})
  gsap.to(PGalerias, {delay:.5, duration:0, left:"100%", top:0})
  gsap.to("#page8", {duration:0, left:"-100%", top:0})
  gsap.to("#page8", {duration:.5, left:0, top:0})
  console.log("De vuleta a Galerías")
};

function menu_buttom(){
  
	if(menuActive==false){
		gsap.to("#menuBar", {bottom:"0", duration:0.5, ease:"back.out"});
		menuActive=true;
    console.log("Menu arriba")
	}
	else{
		gsap.to("#menuBar", {bottom:"-80px", duration:0.2, ease: "elastic.out"});
		menuActive=false;
    console.log("Menu abajo")
	}
};

// BOTONES MENÚ


function btnMActive(){
  bottomAll();
  validHome();
  if(actualPage==4){
    gsap.to("#page4", { duration:0, left:0, top:"100%", zIndex:50 })
    gsap.to("#page4", { duration:.5, left:0, top:0})
    gsap.to("#zira-icon", {display:"block"})
    gsap.to("#btn-page4", {delay:.2,display:"none"})
  }
  if(actualPage==9){
    gsap.to("#page9", { duration:0, left:0, top:"100%", zIndex:50 })
    gsap.to("#page9", { duration:.5, left:0, top:0})
    gsap.to("#album-icon", {display:"block"})
    gsap.to("#btn-page9", {delay:.2,display:"none"})
  }
  if(actualPage==12){
    gsap.to("#page12", { duration:0, left:0, top:"100%", zIndex:50 })
    gsap.to("#page12", { duration:.5, left:0, top:0})
    gsap.to("#libro-icon", {display:"block"})
    gsap.to("#btn-page12", {delay:.2,display:"none"})
  }
  if(actualPage==10){
    gsap.to("#page10", { duration:0, left:0, top:"100%", zIndex:50 })
    gsap.to("#page10", { duration:.5, left:0, top:0})
    gsap.to("#teatro-icon", {display:"block"})
    gsap.to("#btn-page10", {delay:.2,display:"none"})
  }
  if(actualPage==7){
    gsap.to("#page7", { duration:0, left:0, top:"100%", zIndex:50 })
    gsap.to("#page7", { duration:.5, left:0, top:0})
    gsap.to("#documental-icon", {display:"block"})
    gsap.to("#btn-page7", {delay:.2,display:"none"})
  }
  if(actualPage==8){
    gsap.to("#page8", { duration:0, left:0, top:"100%", zIndex:50 })
    gsap.to("#page8", { duration:.5, left:0, top:0})
    gsap.to("#galerias-icon", {display:"block"})
    gsap.to("#btn-page8", {delay:.2,display:"none"})
  }
};

function menuToZira(){
  actualPage=4;
  onHome=false;
  btnMActive();
};

function menuToAlbum(){
  actualPage=9;
  onHome=false;
  btnMActive();
};

function menuToLibro(){
  actualPage=12;
  onHome=false;
  btnMActive();
};

function menuToTeatro(){
  actualPage=10;
  onHome=false;
  btnMActive();
};

function menuToDocumental(){
  actualPage=7;
  onHome=false;
  btnMActive();
};

function menuToGalerias(){
  actualPage=8;
  onHome=false;
  btnMActive();
};

// BOTONES PÁGINAS PRE 
function btnToLibro(){
  gsap.to("#page12", {duration:0, left:"100%", top:0})
  gsap.to("#page12", {duration:.5, left:0, top:0})
  gsap.to("#page6", {duration:.5, left:"-100%", top:0})
};

function btnToAlbum(){
  gsap.to("#page9", {duration:0, left:"100%", top:0})
  gsap.to("#page9", {duration:.5, left:0, top:0})
  gsap.to("#page5", {duration:.5, left:"-100%", top:0})
};

function btnToZira(){
  gsap.to("#page4", {duration:0, left:"100%", top:0})
  gsap.to("#page4", {duration:.5, left:0, top:0})
  gsap.to("#page3", {duration:.5, left:"-100%", top:0})
};

// BOTONES PÁGINA GALERÍAS

function GalToMetamorfosis(){
  bottomAll();
  gsap.to("#page13", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page13", { duration:.5, left:0, top:0})
};
function GalToAbstracciones(){
  bottomAll();
  gsap.to("#page11", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page11", { duration:.5, left:0, top:0})
};
function GalToSuenosYEncuentros(){
  bottomAll();
  gsap.to("#page14", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page14", { duration:.5, left:0, top:0})
};
function GalToAbtractos(){
  bottomAll();
  gsap.to("#page15", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page15", { duration:.5, left:0, top:0})
};
function GalToGal1(){
  bottomAll();
  gsap.to("#page16", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page16", { duration:.5, left:0, top:0})
};
function GalToGal2PreSentimientos(){
  bottomAll();
  gsap.to("#page17", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page17", { duration:.5, left:0, top:0})
};