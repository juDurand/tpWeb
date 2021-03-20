
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	Pencil.prototype.setLineWidth = function () {
		this.currLineWidth = document.getElementById('spinnerWidth').value;
	};

	Pencil.prototype.setColour = function () {
		this.currColour = document.getElementById('colour').value;
	};

	Pencil.prototype.setRect = function () {
		this.currEditingMode = editingMode.rect;
	};

	Pencil.prototype.setLine = function () {
		this.currEditingMode = editingMode.line;
	};

	document.getElementById('spinnerWidth').addEventListener('change', this.setLineWidth);
	document.getElementById('colour').addEventListener('change', this.setColour);
	document.getElementById('butRect').addEventListener('change', this.setRect);
	document.getElementById('butLine').addEventListener('change', this.setLine);

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	Pencil.prototype.onInteractionStart = function (dnd) {
		if ( this.currEditingMode == editingMode.rect ){
			this.currentShape = new Rectangle(dnd.xi, dnd.yi, 0, 0, this.currLineWidth, this.currColour);
		}
		else this.currentShape = new Line(dnd.xi, dnd.yi, dnd.xf, dnd.yf, this.currLineWidth, this.currColour);
	};

	Pencil.prototype.onInteractionUpdate = function (dnd) {
		drawing.paint(ctx);
		if ( this.currEditingMode == editingMode.rect ){
			this.currentShape.width= dnd.xf - dnd.xi;
			this.currentShape.height= dnd.yf - dnd.yi;
			drawing.paint(ctx);
		} else {
			this.currentShape.x2 = dnd.xf;
			this.currentShape.y2 = dnd.yf;
		};
		this.currentShape.paint(ctx);
	};

	Pencil.prototype.onInteractionEnd = function (dnd) {
		drawing.forms.push(this.currentShape);
		this.currentShape.updateShapeList();
		drawing.paint(ctx);
	};
};
