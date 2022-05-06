class Bob{
constructor(x,y,r){
var options={ //JSON format
restitution:1,
isStatic:false,
density:1,
friction:10

}
this.x=x;
this.y=y;
this.r=r;
this.bob=Bodies.circle(x,y,r,options)
World.add(world,this.bob)
}
display(){
ellipseMode(CENTER)
ellipse(this.bob.position.x,this.bob.position.y,this.r,this.r)
}
}
  
