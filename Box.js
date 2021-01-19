class Box extends Baseclass {
  constructor(x, y, width, height) {
   super(x,y,width,height);
   //overwriting a property
   this.image = loadImage("sprites/wood1.png");
  }
 
};
