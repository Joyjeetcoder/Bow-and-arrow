class Target{
    constructor(x,y){
        var options = {
           isStatic : true
        }
        this.body = Bodies.circle(x,y,5,options);
        this.r = 100;
        World.add(world,this.body);
        this.image = loadImage("images/target.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}
