function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    if (mouseX < width/2) {
        //console.log('LEFT');
        fill('#24FF00');
        ellipse(400,400, 200,200)
        
       
        fill('#000000')
        ellipse(360, 350, 25,25)
        
        fill('#000000')
        ellipse(440, 350, 25,25)

        noFill();
        arc(400, 425, 100, 100, 0, 650)
        
    }
    
    if (mouseX > width/2) {
        //console.log('RIGHT');
        fill('#FF0000');
        ellipse(400,400, 200,200)
        
       
        fill('#000000')
        ellipse(360, 350, 25,25)
        
        fill('#000000')
        ellipse(440, 350, 25,25)

        noFill();
        arc(400,450, 90, 90, 650, 0)
    }
    
}