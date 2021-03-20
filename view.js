// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Form.prototype.paint = function(ctx) {
    //ctx.strokeStyle = this.color;
    //ctx.lineWidth = this.thickness;
};

Rectangle.prototype.paint = function(ctx) {
    //Form.prototype.paint.call(this);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    //Form.prototype.paint.call(this);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
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

Line.prototype.updateShapeList = function() {
    var list = document.getElementById("shapeList");
    var li = document.createElement("li");
    var del = document.createElement("button");
    del.innerHTML = '<button type="button" class="btn btn-default"> <span class="glyphicon glyphicon-remove-sign"></span>   </button>'
    li.appendChild(del);
    li.appendChild(document.createTextNode("Line "+this.color));
    list.appendChild(li);
}

Rectangle.prototype.updateShapeList = function() {
    var list = document.getElementById("shapeList");
    var li = document.createElement("li");
    var del = document.createElement("button");
    del.innerHTML = '<button type="button" class="btn btn-default"> <span class="glyphicon glyphicon-remove-sign"></span>   </button>'
    li.appendChild(del);
    li.appendChild(document.createTextNode("Rect "+Math.abs(this.width)+"*"+Math.abs(this.height)+" "+this.color));
    list.appendChild(li);
}
