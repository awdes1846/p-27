class Roof{
  constructor(x,y,w,h){

this.y=y;
this.x = x;
this.w=w;
this.h=h;    
  this.roof =  Bodies.rectangle(x,y,w,h,{isStatic:true})
  World.add(world,this.roof)
  } 
display(){
rectMode(CENTER);    
rect(this.roof.position.x,this.roof.position.y,this.w,this.h);
}
}