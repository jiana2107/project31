class Particle{
    constructor(x,y,r){
     var options={
         density:1.2,
         friction:0.5,
         restitution:0.3,
         //isStatic:true
     }
    // this.r=r;
     this.radius=r;
     this.body=Bodies.circle(x,y,r,options)
     this.color=color(random(0,255),random(0,255),random(0,255))
     //this.width=w;
     World.add(world,this.body);
    }
   
    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     //var width=this.width;
     //var height=this.height;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(RADIUS);
     fill(this.color);
     ellipse(0,0,this.radius,this.radius);
     pop();
    }
   
   }
