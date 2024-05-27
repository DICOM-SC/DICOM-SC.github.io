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

let tl = gsap.timeline();
tl.to("#page1", {duration:0, opacity: 0})
  .to("#page1", {duration:1, opacity: 1})
  .to("#page1", {duration:8, opacity: 1})
  .to("#page2", {duration:0, left:0})
  .to("#page1", {duration:1, opacity: 0})
  .to("#page1", {duration:0, left:"-100%"});

function bajarMenu(){
  gsap.to("#menuBar", {bottom:"-80px", duration:0});
		menuActive=false;
};
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
  bajarMenu()
  console.log("Pantallas principales bajadas")
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("HomeToGalerias").addEventListener("click", function () {
    console.log("A galerías")
    gsap.to("#page2", { duration: .5, left:"-100%" })
    gsap.to("#page8", { duration: .5, left:"0" })
    console.log("Galerías abierto")
    bajarMenu()
  });

  document.getElementById("HomeToLibro").addEventListener("click", function () {
    gsap.to("#page2", { duration: .5, left:"-100%" })
    gsap.to("#page6", { duration: .5, left:"0" })
    console.log("Libro abierto")
    bajarMenu()
  });

  document.getElementById("HomeToAbstracciones").addEventListener("click", function () {
    gsap.to("#page2", { duration: .5, left:"-100%" })
    gsap.to("#page11", { duration: .5, left:"0" })
    console.log("Abstracciones abierto")
    bajarMenu()
  });

  document.getElementById("HomeToAlbum").addEventListener("click", function () {
    gsap.to("#page2", { duration: .5, left:"-100%" })
    gsap.to("#page5", { duration: .5, left:"0" })
    console.log("Álbum abierto")
    bajarMenu()
  });

  document.getElementById("HomeToDocumental").addEventListener("click", function () {
    gsap.to("#page2", { duration: .5, left:"-100%" })
    gsap.to("#page7", { duration: .5, left:"0" })
    console.log("Documental abierto")
    bajarMenu()
  });

  document.getElementById("HomeToZira").addEventListener("click", function () {
    gsap.to("#page2", { duration: .5, left:"-100%" })
    gsap.to("#page3", { duration: .5, left:"0" })
    console.log("Zira abierto")
    bajarMenu()
  });

  document.getElementById("HomeToTeatro").addEventListener("click", function () {
    gsap.to("#page2", { duration: .5, left:"-100%" })
    gsap.to("#page10", { duration: .5, left:"0" })
    console.log("Teatro abierto")
    bajarMenu()
  });

});

function ToHome(){
  rightAll();
  gsap.to("#page2", {duration:.5, left:0})
  console.log("De vuleta al Home")
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
function menuToAlbum(){
  bottomAll();
  gsap.to("#page5", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page5", { duration:.5, left:0, top:0})
};

function menuToLibro(){
  bottomAll();
  gsap.to("#page6", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page6", { duration:.5, left:0, top:0})
};

function menuToTeatro(){
  bottomAll();
  gsap.to("#page10", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page10", { duration:.5, left:0, top:0})
};

function menuToDocumental(){
  bottomAll();
  gsap.to("#page7", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page7", { duration:.5, left:0, top:0})
};

function menuToAbstracciones(){
  bottomAll();
  gsap.to("#page11", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page11", { duration:.5, left:0, top:0})
};

function menuToZira(){
  bottomAll();
  gsap.to("#page3", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page3", { duration:.5, left:0, top:0})
};

function menuToGalerias(){
  bottomAll();
  gsap.to("#page8", { duration:0, left:0, top:"100%", zIndex:50 })
  gsap.to("#page8", { duration:.5, left:0, top:0})
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