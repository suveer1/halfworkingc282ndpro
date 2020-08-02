class Tree{
constructor(x,y){
    
   // this.angle=0;
    this.image=loadImage("tree.png");
    this.body=Bodies.rectangle(x,y,this.width,this.height);
    this.x=x;
    this.y=y;
    this.width=50;
    this.height=500;
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
    //push()
    //translate(pos.x,pos.y);
    //rotate(this.angle);
    imageMode(CENTER);
    image(this.image,750,400,500,600);
   // rectMode(CENTER);
   // rect(pos.x,pos.y,this.width,this.height);
    //pop()
}

}