class Boy{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            friction:1,
            density:1.5

        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        this.image = loadImage("Plucking mangoes/boy.png")
        World.add(world,this.body);
    
    }
    display(){

        var pos = this.body.position;

        push();
       // translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
        pop();
    }
}