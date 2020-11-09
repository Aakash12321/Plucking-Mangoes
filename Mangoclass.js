class Mango
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            friction:1,
            density:1,
            restitution:0
			}
		this.x=x;
		this.y=y;
        this.r=r;
        this.image = loadImage("Plucking mangoes/mango.png")
		this.body=Bodies.circle(x , y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
            ellipseMode(RADIUS);
            imageMode(CENTER)
            image(this.image,0, 0, this.r*2,this.r*2);
			pop()
			
    }
}