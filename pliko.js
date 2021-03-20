class Plinko {
    constructor(x,y,width,height){
        var options ={
            isstatic : true 
        }
     // this.r=r ; 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height  = height ;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position ;
     // var angle = this.body.angle ; 
       fill("white");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
    }
}