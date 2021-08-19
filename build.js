var seed = document.location.hash.split("#")[1]
if(seed === undefined){
  seed = window.location.search.split("?seed=")[1]
}

var pizza_image = new Image();
var galaxy_image = new Image();
var rainbow_image = new Image();
const line_width = 4;
var c;
var ctx;
var rowLength;
const startTime = performance.now();

function generate(traits) {
    ctx.lineWidth = line_width;
    rowLength = canvas.width * 4
    ctx.strokeStyle = "#001131";
    draw_background()
    if(traits['Gender'] == "Male"){
        draw_face_male()
        draw_eyes_male()
        draw_head_male()

    }else{
        draw_face_female()
        draw_eyes_female()
    }
    draw_nose()
    draw_mouth()

    draw_left_eyebrow()
    draw_right_eyebrow()


    function draw_right_eyebrow(){
        const eyebrow = traits['Right Eyebrow']
        ctx.beginPath()
        if(eyebrow == "Normal"){
            draw_normal_right_eyebrow()
        }
        if(eyebrow == "Angry"){
            draw_angry_right_eyebrow()
        }
        if(eyebrow == "Suprised"){
            draw_suprised_right_eyebrow()
        }
        ctx.stroke()
    }

    function draw_normal_right_eyebrow(){
        ctx.moveTo(240, 115);
        ctx.lineTo(260, 115);

    }
    function draw_angry_right_eyebrow(){
        ctx.moveTo(220, 125);
        ctx.lineTo(240, 105);

     }
    function draw_suprised_right_eyebrow(){
        ctx.moveTo(240, 105);
        ctx.lineTo(260, 105);

     }







    function draw_left_eyebrow(){
        const eyebrow = traits['Left Eyebrow']
        ctx.beginPath()
        if(eyebrow == "Normal"){
            draw_normal_left_eyebrow()
        }
        if(eyebrow == "Angry"){
            draw_angry_left_eyebrow()
        }
        if(eyebrow == "Suprised"){
            draw_suprised_left_eyebrow()
        }
        ctx.stroke()
    }


    function draw_normal_left_eyebrow(){
        ctx.moveTo(140, 115);
        ctx.lineTo(160, 115);
    }
    function draw_angry_left_eyebrow(){
        ctx.moveTo(160, 105);
        ctx.lineTo(180, 125);
    }
    function draw_suprised_left_eyebrow(){
        ctx.moveTo(140, 105);
        ctx.lineTo(160, 105);
    }


    function draw_head_male(){
        var head = traits['Head']
        const face = traits['Face']
        ctx.beginPath()
        if(head == "Left Swoop"){
            if(face == "Small Circle"){
                draw_left_swoop_small_circle()
            }
            if(face == "Medium Circle"){
                draw_left_swoop_medium_circle()
            }
            if(face == "Big Circle"){
                draw_left_swoop_big_circle()
            }
            if(face == "Triangle" || face == "Square"){
                draw_left_swoop_other()
            }
        }
        if(head == "Right Swoop"){
            if(face == "Small Circle"){
                draw_right_swoop_small_circle()
            }
            if(face == "Medium Circle"){
                draw_right_swoop_medium_circle()
            }
            if(face == "Big Circle"){
                draw_right_swoop_big_circle()
            }
            if(face == "Triangle" || face == "Square"){
                draw_right_swoop_other()
            }
        }

        if(head== "Left Swirl"){
            if(face == "Small Circle"){
                draw_left_swirl_small_circle()
            }
            if(face == "Medium Circle"){
                draw_left_swirl_medium_circle()
            }
            if(face == "Big Circle"){
                draw_left_swirl_big_circle()
            }
            if(face == "Triangle" || face == "Square"){
                draw_left_swirl_other()
            }
        }

        if(head ==  "Right Swirl"){
            if(face == "Small Circle"){
                draw_right_swirl_small_circle()
            }
            if(face == "Medium Circle"){
                draw_right_swirl_medium_circle()
            }
            if(face == "Big Circle"){
                draw_right_swirl_big_circle()
            }
            if(face == "Triangle" || face == "Square"){
                draw_right_swirl_other()
            }

        }
        if(head ==  "Fedora"){
            draw_fedora(traits["Hat Color"])
        }
        if(head == "Chefs Hat"){
            draw_chefs_hat()
        }
        if(head == "Top Hat"){
            draw_top_hat(traits["Hat Color"])

        }
        if(head == "Bald"){

        }
    }


    function drawRipple(color) {
        // licensed via creative commons from awesome js developer https://www.bryanbraun.com/projects/
        let r,g,b;
        const rgbcolor = hexToRgb(color)
        r=rgbcolor.r/255;
        g=rgbcolor.g/255;
        b=rgbcolor.b/255;
        /*
        if(color == "Red"){
            r=1;
            g=0;
            b=0;
        }else if(color == "Yellow"){
            r=1;g=1;b=0
        }else if (color == "Blue"){
            r=0;g=0;b=1;
        }else if (color == "Green"){
            r=0;g=1;b=1;
        }else if(color =="Purple"){
            r=1;g=0;b=1;
        }*/

        let elapsedTimeSeconds = (performance.now() - startTime) / 1000;
        const nextPixelData = ctx.createImageData(c.width, c.height);
        // 200x200 means 40,000 pixels, x4 values per pixel = 160,000 elements to loop over.
        // If a single row has 200 pixels, x4 values per pixel, every 800 values is a new row.
        for (let i = 0; i < nextPixelData.data.length; i += 4) {
          // calculate the current x and y (canvas cooridnates)
          let x = Math.floor(i / 4) % c.width;
          let y = Math.floor(i / rowLength);
      
          // calculate the alternative x and y, if the origin were in the center
          let reIndexedX = -((c.width - x) - (c.width / 2));
          let reIndexedY = (c.height - y) - (c.height / 2);
          
          let radialX = hypotenuseLength(reIndexedX, reIndexedY);
          let waveHeight = sineFunction(radialX, elapsedTimeSeconds);
          let scaledHeight = (waveHeight * 60) + (255/2);
          
          // FOR LOGGING. PRINTS ONCE PER "FRAME".
          if (reIndexedX === 0 && reIndexedY == 0) {
            console.log(`elapsed time: ${elapsedTimeSeconds}`);
            console.log(`wave height: ${scaledHeight}`);
          }
      
          // Write new pixel values
          nextPixelData.data[i]     = scaledHeight*r; // red
          nextPixelData.data[i + 1] = scaledHeight*g; // green
          nextPixelData.data[i + 2] = scaledHeight*b; // blue
          nextPixelData.data[i + 3] = 255; // opacity
        }
        
        ctx.putImageData(nextPixelData, 0, 0);
      }
      
      function hypotenuseLength(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      }
      
      function sineFunction(x, t) {
        let frequencyConstant = 8;
        let scaledTime = t * 20;
      
        // For reference, see https://www.desmos.com/calculator/bp9t79pfa0
        return Math.sin((x - scaledTime) / frequencyConstant);
      }
      
      

    function draw_fedora(color){
        ctx.fillStyle = color

        ctx.beginPath();
        ctx.ellipse(200, 85, 45, 10, 00, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(175, 70, 50, 18);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(200, 70, 25, 5, 00, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

    }

    function draw_chefs_hat(){
        ctx.fillStyle = "white";
        ctx.beginPath()
        ctx.moveTo(170, 85);
        ctx.lineTo(230, 85);
        ctx.lineTo(230, 55);
        ctx.moveTo(170, 85);
        ctx.lineTo(170, 55);
        ctx.arc(170, 45, 10, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.arc(230, 45, 10, 1.5 * Math.PI, 0.5 * Math.PI);
        ctx.moveTo(170, 75);
        ctx.lineTo(230, 75);
        ctx.fill();
        ctx.stroke()

    }
    function draw_top_hat(color){
        ctx.fillStyle = color

        ctx.beginPath();
        ctx.ellipse(200, 88, 35, 12, 00, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(185, 35, 30, 54);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(200, 35, 15, 5, 00, 0, 2 * Math.PI);
        ctx.fill();     
        ctx.stroke();
   
    }


    function draw_left_swirl_small_circle(){
        ctx.moveTo(200, 85);
                ctx.lineTo(200, 105);
                ctx.moveTo(190, 105);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.75);
                    y = (1 + angle) * Math.cos(angle - 20.75);
                    ctx.lineTo(189 + x, 105 + y);
                } 

        ctx.stroke()
    }

    function draw_left_swirl_medium_circle(){
        ctx.moveTo(200, 60);
                ctx.lineTo(200, 80);
                ctx.moveTo(190, 80);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.75);
                    y = (1 + angle) * Math.cos(angle - 20.75);
                    ctx.lineTo(189 + x, 80 + y);
                }

        ctx.stroke()


    }
    function draw_left_swirl_big_circle(){
        ctx.moveTo(200, 35);
        ctx.lineTo(200, 55);
        ctx.moveTo(190, 55);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.sin(angle - 20.75);
            y = (1 + angle) * Math.cos(angle - 20.75);
            ctx.lineTo(189 + x, 55 + y);
        }

        ctx.stroke()


    }
    function draw_left_swirl_other(){
        ctx.moveTo(200, 25);
                ctx.lineTo(200, 45);
                ctx.moveTo(190, 45);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.75);
                    y = (1 + angle) * Math.cos(angle - 20.75);
                    ctx.lineTo(189 + x, 45 + y);
                }

        ctx.stroke()
    }



    function draw_left_swoop_small_circle(){
        ctx.moveTo(180 + 20 * Math.cos(2 * Math.PI), 85 + 20 * Math.sin(2 * Math.PI));
        ctx.arc(180, 85, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()
    }

    function draw_left_swoop_medium_circle(){
        ctx.moveTo(180 + 20 * Math.cos(2 * Math.PI), 60 + 20 * Math.sin(2 * Math.PI));
        ctx.arc(180, 60, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()


    }
    function draw_left_swoop_big_circle(){
        ctx.moveTo(180 + 20 * Math.cos(2 * Math.PI), 35 + 20 * Math.sin(2 * Math.PI));
        ctx.arc(180, 35, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()


    }
    function draw_left_swoop_other(){
        ctx.moveTo(180 + 20 * Math.cos(2 * Math.PI), 25 + 20 * Math.sin(2 * Math.PI));
        ctx.arc(180, 25, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()
    }




    function draw_right_swirl_small_circle(){
        ctx.moveTo(200, 85);
        ctx.lineTo(200, 105);
        ctx.moveTo(210, 105);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            ctx.lineTo(210.5 + x, 105 + y);
        }

        ctx.stroke()
    }

    function draw_right_swirl_medium_circle(){
        ctx.moveTo(200, 60);
        ctx.lineTo(200, 80);
        ctx.moveTo(210, 80);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            ctx.lineTo(210.5 + x, 80 + y);
        }

        ctx.stroke()


    }
    function draw_right_swirl_big_circle(){
        ctx.moveTo(200, 35);
        ctx.lineTo(200, 55);
        ctx.moveTo(210, 55);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            ctx.lineTo(210.5 + x, 55 + y);
        }

        ctx.stroke()
    }
    function draw_right_swirl_other(){
        ctx.moveTo(200, 25);
        ctx.lineTo(200, 45);
        ctx.moveTo(210, 45);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            ctx.lineTo(210.5 + x, 45 + y);
        }

        ctx.stroke()
    }


    function draw_right_swoop_small_circle(){
        ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 85 + 20 * Math.sin(0.4 * Math.PI));
        ctx.arc(215, 85, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()
    }

    function draw_right_swoop_medium_circle(){
        ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 60 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 60, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()


    }
    function draw_right_swoop_big_circle(){
        ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 35 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 35, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()
    }
    function draw_right_swoop_other(){
        ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 25 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 25, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()
    }



    function draw_eyes_female(){
        const eyes = traits['Eye']
        const color = traits['Eye Color']
        ctx.beginPath()
        ctx.fillStyle = color

        if(eyes == "Circle"){
            draw_circle_eyes_female(color)
        }
        if(eyes == "Square" || eyes == "Hexagon"){
            draw_square_eyes_female(color)
        }
    }

    function draw_square_eyes_female(color){
        ctx.rect(140, 140, 35, 35);
        ctx.moveTo(140, 140);
        ctx.lineTo(140, 130);
        ctx.moveTo(149, 140);
        ctx.lineTo(149, 130);
        ctx.moveTo(158, 140);
        ctx.lineTo(158, 130);
        ctx.moveTo(167, 140);
        ctx.lineTo(167, 130);
        ctx.moveTo(175, 140);
        ctx.lineTo(175, 130);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        ctx.moveTo(147.5, 147.4);
        ctx.rect(147.5, 147.5, 10, 10);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(240, 140, 35, 35);
        ctx.moveTo(240, 140);
        ctx.lineTo(240, 130);
        ctx.moveTo(249, 140);
        ctx.lineTo(249, 130);
        ctx.moveTo(258, 140);
        ctx.lineTo(258, 130);
        ctx.moveTo(267, 140);
        ctx.lineTo(267, 130);
        ctx.moveTo(275, 140);
        ctx.lineTo(275, 130);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(247.5, 147.4);
        ctx.rect(247.5, 147.5, 10, 10);
        ctx.fillStyle = color;
        ctx.fill();     
        ctx.stroke()   
    }

    function draw_circle_eyes_female(color){
        ctx.arc(150, 150, 15, 0, 2 * Math.PI);
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.moveTo(150 + 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        ctx.lineTo(150 + 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        ctx.moveTo(150 + 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        ctx.lineTo(150 + 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        ctx.moveTo(150 - 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        ctx.lineTo(150 - 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        ctx.moveTo(150 - 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        ctx.lineTo(150 - 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        ctx.moveTo(156, 150);
        ctx.arc(150, 150, 6, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(265, 150);
        ctx.arc(250, 150, 15, 0, 2 * Math.PI);
        ctx.moveTo(250, 135);
        ctx.lineTo(250, 125);
        ctx.moveTo(250 + 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        ctx.lineTo(250 + 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        ctx.moveTo(250 + 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        ctx.lineTo(250 + 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        ctx.moveTo(250 - 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        ctx.lineTo(250 - 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        ctx.moveTo(250 - 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        ctx.lineTo(250 - 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(256, 150);
        ctx.arc(250, 150, 6, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();        
        ctx.stroke()
    }

    function draw_eyes_male(){
        const eyes = traits['Eye']
        const color = traits['Eye Color']
        ctx.beginPath()
        ctx.fillStyle = color

        if(eyes == "Circle"){
            draw_circle_eyes(color)
        }
        if(eyes == "Square"){
            draw_square_eyes(color)
        }
        if(eyes == "Hexagon"){
            newColor = "white";
            if (color == "#001131"){
                draw_hexagon_eyes(newColor)
            }else{
            draw_hexagon_eyes(color)
            }
        }
    }
    function draw_square_eyes(color){
        ctx.rect(122.5, 140, 35, 35);
        ctx.fillStyle = 'white'; //
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        ctx.moveTo(130, 147.4);
        ctx.rect(130, 147.5, 10, 10);
        ctx.fillStyle = color
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(240, 140, 35, 35);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.moveTo(247.5, 147.4);

        ctx.beginPath();
        ctx.rect(247.5, 147.5, 10, 10);
        ctx.fillStyle = color
        ctx.fill();
        ctx.stroke()
    }

    function draw_circle_eyes(color){
        ctx.arc(150, 150, 15, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        ctx.moveTo(157.5, 150);
        ctx.arc(150, 150, 7.5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(265, 150);
        ctx.arc(250, 150, 15, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.moveTo(253, 150);
        ctx.beginPath();
        ctx.arc(250, 150, 7.5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke()
    }

    function draw_hexagon_eyes(color){
        var numberOfSides = 6,
        size = 20,
        Xcenter = 150,
        Ycenter = 150;
    
    ctx.beginPath();
    ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
    
    for (var i = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    size = 10;
    ctx.moveTo(160, 150);
    
    for (var i = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(Xcenter + size * Math.cos(i * 1 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 1 * Math.PI / numberOfSides));
    }
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    
    
    var numberOfSides = 6,
        size = 20,
        Xcenter = 250,
        Ycenter = 150;
    
    ctx.beginPath();
    ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
    
    for (var i = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    size = 10;
    ctx.moveTo(260, 150);
    
    for (var i = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(Xcenter + size * Math.cos(i * 1 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 1 * Math.PI / numberOfSides));
    }
    
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
      

    function draw_mouth(){
        const mouth = traits['Mouth']
        const color = traits['Mouth Color']
        ctx.beginPath()
        ctx.fillStyle = color
        if(mouth == "Big Happy"){
            draw_big_happy_mouth()
        }
        if(mouth == "Small Happy"){
            small_happy_mouth()
        }
        if(mouth ==  "Right Happy"){
            right_happy_mouth()
        }
        if(mouth == "Big Sad"){
            big_sad_mouth()

        }
        if(mouth == "Left Sad"){
            left_sad_mouth()

        }
        if(mouth == "Suprised"){
            suprised_mouth()

        }
        if(mouth == "Small Sad"){
            small_sad_mouth()

        }
        ctx.stroke()
        ctx.fill()
    }

    function left_sad_mouth(){
        ctx.arc(190, 275, 50, 10, 2 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(190 + ((50 + line_width / 2) * Math.cos(10)), 275 + ((50 + line_width / 2) * Math.sin(10)));
        ctx.lineTo(240 + line_width / 2 - .5, 275 + line_width / 2 - .5);
    }
    function suprised_mouth(){
        ctx.arc(200, 255, 10, 0, 2 * Math.PI);
        ctx.stroke()
        ctx.beginPath()

    }
    function small_sad_mouth(){
        ctx.arc(200, 255, 10, Math.PI, 2 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(190 - line_width / 2, 255);
        ctx.lineTo(210 + line_width / 2, 255);
    }
    function right_happy_mouth(){
        ctx.arc(210, 235, 50, 2 * Math.PI, 2.5658958);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(210 + ((50 + line_width / 2) * Math.cos(2.5658958)), 235 + ((50 + line_width / 2) * Math.sin(2.5658958)));
        ctx.lineTo(260 + line_width / 2, 235 + line_width / 2 - .5);
    }
    function big_sad_mouth(){
        ctx.arc(200, 295, 50, 1 * Math.PI, 2 * Math.PI, 0 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(150 - line_width / 2, 295);
        ctx.lineTo(250 + line_width / 2, 295)
    }

    function small_happy_mouth(){
        ctx.arc(200, 255, 10, 2 * Math.PI, Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(190 - line_width / 2, 255);
        ctx.lineTo(210 + line_width / 2, 255);
    }

    function draw_big_happy_mouth(){
        ctx.arc(200, 255, 50, Math.PI, 2 * Math.PI, 1 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(150 - line_width / 2, 255);
        ctx.lineTo(250 + line_width / 2, 255);
    }


    function draw_nose(){
        const nose = traits['Nose']
        ctx.beginPath()
        if(nose ==  "Left Pointing"){
           return draw_left_nose()
        }
        if(nose ==  "Right Pointing"){
            return draw_right_nose()
        }

        const color = traits['Nose Color']
        ctx.fillStyle=color
        if(nose == "Triangle"){
            draw_triangle_nose()
        }
        if(nose == "3D Triangle"){
            draw_3d_triangle_nose()
        }
    }
    function draw_left_nose(){
        ctx.moveTo(200, 200);
        ctx.lineTo(200, 150 + line_width / 2);
        ctx.moveTo(200 + line_width / 2, 200);
        ctx.lineTo(180, 200);
        ctx.stroke()
    }

    function draw_right_nose(){
        ctx.moveTo(200, 200);
        ctx.lineTo(200, 150 + line_width / 2);
        ctx.moveTo(200 - line_width / 2, 200);
        ctx.lineTo(220, 200);
        ctx.stroke()

    }

    function draw_triangle_nose(){
        ctx.moveTo(200, 150);
        ctx.lineTo(220, 200);
        ctx.lineTo(200, 150);
        ctx.lineTo(180, 200);
        ctx.lineTo(220, 200);
        ctx.fill();
        ctx.closePath();
        ctx.stroke()

    }
    function draw_3d_triangle_nose(){
        const leftp = [194.5, 192];
        const rightp = [207.5, 192];
        ctx.moveTo(200, 150);
        ctx.lineTo(220, 200);
        ctx.lineTo(200, 150);
        ctx.lineTo(180, 200);
        ctx.lineTo(220, 200);
        ctx.fill();
        ctx.closePath();
        ctx.rect(195, 198, 1, 1);
        ctx.rect(204, 198, 1, 1);

        ctx.moveTo(180, 200);
        ctx.lineTo(leftp[0], leftp[1]);
        ctx.moveTo(220, 200);
        ctx.lineTo(rightp[0], rightp[1]);
        ctx.lineTo(leftp[0] - line_width / 2, leftp[1])
        ctx.lineWidth = 1;
        ctx.lineTo(200, 150);
        ctx.moveTo(rightp[0], rightp[1]);
        ctx.lineTo(200, 150);
        ctx.lineWidth = 4;
    }

    function draw_background(){
        const background = traits['Background Color']
        if (background == "Galaxy") {
            ctx.drawImage(galaxy_image, 0, 0);
        } else if (background == "Pizza") {
            ctx.drawImage(pizza_image, 0, 0, 800,800, 0, 0, 400, 400);

        } else if (background == "Rainbow") {
            ctx.drawImage(rainbow_image, 0, 0, 1024, 1024, 0, 0, 400, 400);
        }else if (background == "Ripple"){
            drawRipple(traits['Ripple Color']);
        } else {
            ctx.fillStyle = background
            ctx.fillRect(0, 0, c.width, c.height);
        }
    }
    function draw_face_female(){
        ctx.beginPath();
        if(traits['Face'] == "Small Circle"){
            small_female_face()
        }else if(traits['Face'] == 'Medium Circle'){
            medium_female_face()
        }
    }
    function small_female_face(){
        ctx.fillStyle = traits['Hair Color']
        ctx.rect(50, 30, 300, 260);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = traits['Face Color']
        ctx.arc(200, 200, 115, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    function medium_female_face(){
        ctx.fillStyle = traits['Hair Color']
        ctx.rect(25, 20, 350, 285);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.stroke();
        ctx.arc(200, 200, 140, 0, 2 * Math.PI);
        ctx.fillStyle = traits['Face Color']
        ctx.fill();
        ctx.stroke();
    }

    function draw_face_male(){
        const face = traits['Face']
        const color = traits['Face Color']
        
        ctx.beginPath()
        ctx.fillStyle = color

        if(face == "Medium Circle"){
            medium_circle_face(color)
        }
        if(face == "Big Circle"){
            big_circle_face(color)

        }
        if(face == "Small Circle"){
            small_circle_face(color)
        }
        if(face == "Triangle"){
            triangle_face(color)
        }
        if(face == "Square"){
            square_face(color)
        }
        if(face == "Polygon"){
            polygon_face(color)
        }
        
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function medium_circle_face(color){
        ctx.arc(200, 200, 140, 0, 2 * Math.PI);
    }
    function big_circle_face(color){
        ctx.arc(200, 200, 165, 0, 2 * Math.PI);
    }
    function small_circle_face(color){
        ctx.arc(200, 200, 115, 0, 2 * Math.PI);
    }
    function triangle_face(color){
        ctx.moveTo(5, 25);
        ctx.lineTo(395, 25);
        ctx.lineTo(200, 400);
        ctx.lineTo(5, 25);
        ctx.closePath();
    }
    function square_face(color){
        ctx.rect(25, 25, 350, 350);
    }
    

    function polygon_face(color){ 
        const sides = traits['Polygon Sides']
        var numberOfSides = sides,
        size = 140,
        Xcenter = 200,
        Ycenter = 200;
    
    ctx.beginPath();
    ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
    
    for (var i = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    }
  /*
    if (window.location.protocol != 'file:') { // will throw error because of hosted images
        var canvasImage = new Image()
        canvasImage.src = c.toDataURL('image/png');
        content.appendChild(canvasImage);
    } else {
        content.appendChild(c);
    }
  */

  return;


}

function removeJS() {
    let scripts = document.getElementsByTagName("script")
    while (scripts.length) {
        scripts[0].remove()
        scripts = document.getElementsByTagName("script")
    }
}
window.addEventListener("load", function() {
    removeJS()
    setTimeout(function() {
        removeJS();
    }, 1000);
});

window.addEventListener("load", function() {
    rainbow_image.src = "./rainbow.png";
    rainbow_image.addEventListener("load", (e) => {
        galaxy_image.src = "./galaxy.png";
        galaxy_image.addEventListener("load", (e) => {
            pizza_image.src = "./pizza.jpeg";
            pizza_image.addEventListener("load", (e) => {
                    c = document.getElementById("canvas");
                    ctx = c.getContext("2d");
                    const traits = build_traits(seed)

                  const anim = () => {
                        generate(traits);
                        requestAnimationFrame(anim);
                    }
                    anim();
            });
        });
    });
});
