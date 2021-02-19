// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.forms = new Array();
};

function Form(thickness, color){
    this.thickness = thickness;
    this.color = color;
};

function Rectangle(x, y, width, height, thickness, color){
    Form.call(this, thickness, color)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};
Rectangle.prototype = new Form();

function Line(x1, y1, x2, y2, thickness, color){
    Form.call(this, thickness, color)
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
};
Line.prototype = new Form();
