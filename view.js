// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Form.prototype.paint = function(ctx) {
    //ctx.strokeStyle = this.color;
    //ctx.lineWidth = this.thickness;
};

Rectangle.prototype.paint = function(ctx) {
    //Form.prototype.paint.call(this);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness
    let x2 = this.x + this.width;
    let y2 = this.y + this.height;
    ctx.rect(this.x, this.y, x2, y2);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    //Form.prototype.paint.call(this);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.forms.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
