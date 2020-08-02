class Stone{
constructor(x,y){
    var options={
     isStatic:true
    }
    this.angle=0;
    this.image=loadImage("stone.png");
    this.x=x;
    this.y=y;
    this.r=15;
    this.body=Bodies.circle(x,y,this.r,options);

    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0,20,35);
    //ellipseMode(RADIUS);
   // ellipse(0,0,this.r);
    pop()
}

}