
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#FF0000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	Pencil.prototype.onInteractionStart = function (dnd) {
		if ( this.currEditingMode == editingMode.rect ) this.currentShape = new Rectangle(dnd.xi, dnd.yi, dnd.xf, dnd.yf, this.currLineWidth, this.currColour);
		else this.currentShape = new Line(dnd.xi, dnd.yi, dnd.xf, dnd.yf);
	};

	Pencil.prototype.onInteractionUpdate = function (dnd) {
		drawing.paint(ctx);
		if ( this.currEditingMode == editingMode.rect ){
			this.currentShape.width= dnd.xi + dnd.xf;
			this.currentShape.height= dnd.yi + dnd.yf;
		} else {
			this.currentShape.x2 = dnd.xf;
			this.currentShape.y2 = dnd.yf;
		};
		this.currentShape.paint(ctx);
	};

	Pencil.prototype.onInteractionEnd = function (dnd) {
		drawing.forms.push(this.currentShape);
		console.log(drawing.forms);
		drawing.paint(ctx);
	};
};
