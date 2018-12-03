let x=0,y=0;
let theta=0;
let r;//=900;
let alpha=140;
function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);
    r=width/2;
    r=900;
    img=loadImage("meditate2.png");
}
function draw()
{
	translate(width/2,height/2);
    x=r*cos(theta);
    y=r*sin(theta);
    image(img,-14.5,-11,img.width/5,img.height/5);
    fill(random(255),random(255),random(255));
    ellipse(x,y,16,16);
    ellipse(-x,-y,16,16);
    theta+=0.1;
    r=r-0.5;
    if(abs(r)>width/2)
    {
    background(0);
    r=width/2;
    }
  
}