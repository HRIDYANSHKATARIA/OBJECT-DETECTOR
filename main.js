img = "" ;



function setup()
{
   canvas = createCanvas(640,420);
   canvas.center(); 
}

function preload()
{
   img = loadImage('https://www.pixelstalk.net/wp-content/uploads/2016/07/Sunrise-Image-Photo-Free-Download.jpg'); 
}

function draw()
{
    image(img,0,0,640,420);

    fill("red");
    
    text("CLOUD",10,10);
    noFill();
    stroke("red");
    rect(20,20,300,300);
    
    
    text("SUN",50,50);
    noFill();
    stroke("red");
    rect(60,60,100,100);


    text("WATER",70,70);
    noFill();
    stroke("red");
    rect(80,80,300,300);

     
    
}

