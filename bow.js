class Bow{
    constructor(x,y,w,h){
        var options = {
            isStatic : true,
            
            currentRotation: 0, 
            rotationSpeed: 1
        }
        
        this.body = Bodies.rectangle(x,y,w,h,options);
        
        this.w = w;
        this.h = h;
        World.add(world,this.body);
        this.body.collisionFilter = {
            'group': 1,
            'category': 2,
            'mask': 0,
          };
          Matter.Body.rotate(this.body,180);
        this.image = loadImage("images/Bow.png");
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
}