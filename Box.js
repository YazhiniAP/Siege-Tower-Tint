class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visible = 255;
        World.add(world, this.body);
      }
      display(color){
        var angle = this.body.angle;
        if(this.body.speed < 3.5){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill(color);
          rect(0, 0, this.width, this.height);
          pop();
        }else{
          push();
          fill(color);
          World.remove(world,this.body);
          this.visible = this.visible - 5;
          tint(255,this.visible);
          //rect(this.body.position.x, this.body.position.y,this.width,this.height);
          pop();
        }
      }
}