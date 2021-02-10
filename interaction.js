
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.xi = 0;
  this.yi = 0;
  this.xf = 0;
  this.yf = 0;

  this.mouseDown = false;

	// Developper les 3 fonctions gérant les événements

  this.pression = function (evt) {
    evt = getMousePosition(canvas, evt);
    this.xi = evt.x;
    this.yi = evt.y;
    this.mouseDown = true;
    console.log("click :", this.xi," ",this.yi);
  };

  this.deplacement = function(evt) {
    evt = getMousePosition(canvas, evt);
    if (this.mouseDown) {
      this.xf = evt.x;
      this.yf = evt.y;
      console.log("drag :", this.xf," ",this.yf)
    };
  };

  this.relachement = function (evt) {
    evt = getMousePosition(canvas, evt);
    if (this.mouseDown) {
      this.xf = evt.x;
      this.yf = evt.y;
      this.mouseDown = false;
      console.log("drop :", this.xf," ",this.yf)
    };
  };

	// Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacement, false);
  canvas.addEventListener('mouseup', this.relachement, false);

};





// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



