class Mangoes{
    constructor(x,y){
        var options={
         isStatic:true,
         restitution:0.5,
         friction:0.004
        }
        this.angle=0;
        this.image=loadImage("mango.png");
        this.x=x;
        this.y=y;
        this.r=35;
        this.body=Bodies.circle(x,y,this.r,options);

        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,0,0,35,35);
       // ellipseMode(RADIUS);
       //ellipse(0,0,this.r);
        pop()
    }

}