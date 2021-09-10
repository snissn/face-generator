var seed = document.location.hash.split("#")[1]
var cheese = false;
if (seed === undefined) {
    seed = window.location.search.split("?seed=")[1]
}



var background_image = new Image();

var images = {
    "Worm Hole": "Images/wormhole.png",
    "Money": "Images/money/money_small.jpg",
    "Saturn": "Images/saturn.jpg",
    "Moon Landing": "Images/space-station.jpg",
    "Cryptos": "Images/business.jpg",
    "Space Lambo": "Images/milky-way.jpg",
    "Railway": "Images/railway/railway_small.jpg",
    "Bitcoin": "Images/bitcoin.jpg",
    "American Flag": "Images/american-flag.png",
    "Mount Rushmore": "Images/mount-rushmore/mount-rushmore_small.jpg",
    "Brooklyn Bridge": "Images/brooklyn-bridge/brooklyn-bridge_small.jpg",
    "Bokeh": "Images/bokeh/bokeh_small.jpg",
    "Rainbow": "Images/rainbow.png",
    "Galaxy": "Images/galaxy.png",
    "Pizza": "Images/pizza.jpeg",
    "Matrix": "Images/matrix.jpg"
}

const line_width = 4;
var c;
var ctx;

var x_delta = 0
var y_delta = 0
var x_speed =0;
var y_speed = 0;

function ellipse(a, b, c, d, e, f, g) {
    ctx.ellipse(a + x_delta, b + y_delta, c, d, e, f, g);
}


function quadraticCurveTo(a, b, c, d) {
    ctx.quadraticCurveTo(a+x_delta, b+y_delta, c + x_delta, d + y_delta);
}

function rect(a, b, c, d) {
    ctx.rect(a + x_delta, b + y_delta, c, d);
}

function arc(a, b, c, d, e, f) {
    ctx.arc(a + x_delta, b + y_delta, c, d, e, f)
}

function moveTo(a, b) {
    ctx.moveTo(a + x_delta, b + y_delta)
}

function lineTo(a, b) {
    ctx.lineTo(a + x_delta, b + y_delta)
}




var rowLength;
const startTime = performance.now();

var canvas_width = 400
var canvas_height = 400

function generate(traits) {
    ctx.lineWidth = line_width;
    var animate = false
    rowLength = canvas.width * 4
    ctx.strokeStyle = "#001131";
    draw_background()
    if (traits['Gender'] == "Male") {
        draw_face_male()
        draw_eyes_male()
        draw_head_male()

    } else {
        draw_face_female()
        draw_eyes_female()
      if(traits['Head']=="Crown"){
        draw_crown();
      }
      if(traits['Head']=="Halo"){
        draw_halo();
      }

    }
    draw_nose()
    draw_mouth()

    draw_left_eyebrow()
    draw_right_eyebrow()


    function draw_right_eyebrow() {
        const eyebrow = traits['Right Eyebrow']
        ctx.beginPath()
        if (eyebrow == "Normal") {
            draw_normal_right_eyebrow()
        }
        if (eyebrow == "Angry") {
            draw_angry_right_eyebrow()
        }
        if (eyebrow == "Suprised") {
            draw_suprised_right_eyebrow()
        }
        ctx.stroke()
    }

    function draw_normal_right_eyebrow() {
        moveTo(240, 115);
        lineTo(260, 115);

    }

    function draw_angry_right_eyebrow() {
        moveTo(220, 125);
        lineTo(240, 105);

    }

    function draw_suprised_right_eyebrow() {
        moveTo(240, 105);
        lineTo(260, 105);

    }




    function draw_left_eyebrow() {
        const eyebrow = traits['Left Eyebrow']
        ctx.beginPath()
        if (eyebrow == "Normal") {
            draw_normal_left_eyebrow()
        }
        if (eyebrow == "Angry") {
            draw_angry_left_eyebrow()
        }
        if (eyebrow == "Suprised") {
            draw_suprised_left_eyebrow()
        }
        ctx.stroke()
    }


    function draw_normal_left_eyebrow() {
        moveTo(140, 115);
        lineTo(160, 115);
    }

    function draw_angry_left_eyebrow() {
        moveTo(160, 105);
        lineTo(180, 125);
    }

    function draw_suprised_left_eyebrow() {
        moveTo(140, 105);
        lineTo(160, 105);
    }


    function draw_head_male() {
        var head = traits['Head']
        const face = traits['Face']
        ctx.beginPath()
        if (head == "Left Swoop") {
            if (face == "Small Circle") {
                draw_left_swoop_small_circle()
            }
            if (face == "Medium Circle") {
                draw_left_swoop_medium_circle()
            }
            if (face == "Big Circle") {
                draw_left_swoop_big_circle()
            }
            if (face == "Triangle" || face == "Square") {
                draw_left_swoop_other()
            }
        }
        if (head == "Right Swoop") {
            if (face == "Small Circle") {
                draw_right_swoop_small_circle()
            }
            if (face == "Medium Circle") {
                draw_right_swoop_medium_circle()
            }
            if (face == "Big Circle") {
                draw_right_swoop_big_circle()
            }
            if (face == "Triangle" || face == "Square") {
                draw_right_swoop_other()
            }
        }

        if (head == "Left Swirl") {
            if (face == "Small Circle") {
                draw_left_swirl_small_circle()
            }
            if (face == "Medium Circle") {
                draw_left_swirl_medium_circle()
            }
            if (face == "Big Circle") {
                draw_left_swirl_big_circle()
            }
            if (face == "Triangle" || face == "Square") {
                draw_left_swirl_other()
            }
        }

        if (head == "Right Swirl") {
            if (face == "Small Circle") {
                draw_right_swirl_small_circle()
            }
            if (face == "Medium Circle") {
                draw_right_swirl_medium_circle()
            }
            if (face == "Big Circle") {
                draw_right_swirl_big_circle()
            }
            if (face == "Triangle" || face == "Square") {
                draw_right_swirl_other()
            }

        }
        if (head == "Fedora") {
            draw_fedora(traits["Hat Color"])
        }
        if (head == "Chefs Hat") {
            draw_chefs_hat()
        }
        if (head == "Top Hat") {
            draw_top_hat(traits["Hat Color"])

        }
        if (head == "Halo") {
            draw_halo(traits["Hat Color"])

        }
        if (head == "Crown") {
            draw_crown(traits["Hat Color"])

        }
        if (head == "Bald") {

        }
    }


    function drawRipple(color) {
        // licensed via creative commons from awesome js developer https://www.bryanbraun.com/projects/
        let r, g, b;
        const rgbcolor = hexToRgb(color)
        r = rgbcolor.r / 255;
        g = rgbcolor.g / 255;
        b = rgbcolor.b / 255;
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
            let scaledHeight = (waveHeight * 60) + (255 / 2);

            // FOR LOGGING. PRINTS ONCE PER "FRAME".
            /*  if (reIndexedX === 0 && reIndexedY == 0) {
                console.log(`elapsed time: ${elapsedTimeSeconds}`);
                console.log(`wave height: ${scaledHeight}`);
              }
              */

            // Write new pixel values
            nextPixelData.data[i] = scaledHeight * r; // red
            nextPixelData.data[i + 1] = scaledHeight * g; // green
            nextPixelData.data[i + 2] = scaledHeight * b; // blue
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
        ellipse(200, 85, 45, 10, 00, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        rect(175, 70, 50, 18);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ellipse(200, 70, 25, 5, 00, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

    }

    function draw_halo() {
        ctx.strokeStyle = "yellow";
      ctx.lineWidth=8
        ctx.beginPath()
        ellipse(200, 25, 85, 18, 00, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();



    ctx.strokeStyle = "white"
      ctx.lineWidth=1
        ctx.beginPath()
        ellipse(200, 25, 85-4, 18-4, 00, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();

        ctx.beginPath()
        ellipse(200, 25, 85+4, 18+4, 00, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();


    ctx.strokeStyle = "#001131";

    ctx.lineWidth = line_width;
    }
    function draw_crown() {
        ctx.fillStyle = "gold";
        ctx.beginPath()
        moveTo(170, 95);
        lineTo(230, 95);
        lineTo(230, 55);
        lineTo(220, 70);

        lineTo(210, 55);

        lineTo(200, 70);
        lineTo(190, 55);
        lineTo(180, 70);
        lineTo(170, 55);
        lineTo(170, 95);
        ctx.fill();
        ctx.closePath()
        ctx.stroke()
      ctx.beginPath()

      ctx.fillStyle="yellow"
        moveTo(210, 85);
        lineTo(215, 80);
        lineTo(210, 75);
        lineTo(205, 80);
        lineTo(210, 85);
        ctx.fill();
        ctx.closePath()


      ctx.beginPath()
      ctx.fillStyle="red"
        moveTo(190, 85);
        lineTo(195, 80);
        lineTo(190, 75);
        lineTo(185, 80);
        lineTo(190, 85);
        ctx.fill();
        ctx.closePath()


      ctx.beginPath()
      ctx.fillStyle="blue"
        moveTo(230+2, 85);
        lineTo(40+190+2, 75);
        lineTo(40+185, 80);
        lineTo(40+190+2, 85);
        ctx.fill();
        ctx.closePath()

      ctx.beginPath()
      ctx.fillStyle="blue"
        moveTo(190-20, 85);
        lineTo(-20+195, 80);
        lineTo(-20+190-2, 75);
        lineTo(-20+190-2, 85);
        ctx.fill();
        ctx.closePath()


    }
    function draw_chefs_hat() {
        ctx.fillStyle = "white";
        ctx.beginPath()
        moveTo(170, 85);
        lineTo(230, 85);
        lineTo(230, 55);
        moveTo(170, 85);
        lineTo(170, 55);
        arc(170, 45, 10, 0.5 * Math.PI, 1.5 * Math.PI);
        arc(230, 45, 10, 1.5 * Math.PI, 0.5 * Math.PI);
        moveTo(170, 75);
        lineTo(230, 75);
        ctx.fill();
        ctx.stroke()

    }

    function draw_top_hat(color) {
        ctx.fillStyle = color

        ctx.beginPath();
        ellipse(200, 88, 35, 12, 00, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        rect(185, 35, 30, 54);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ellipse(200, 35, 15, 5, 00, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

    }


    function draw_left_swirl_small_circle() {
        moveTo(200, 85);
        lineTo(200, 105);
        moveTo(190, 105);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.sin(angle - 20.75);
            y = (1 + angle) * Math.cos(angle - 20.75);
            lineTo(189 + x, 105 + y);
        }

        ctx.stroke()
    }

    function draw_left_swirl_medium_circle() {
        moveTo(200, 60);
        lineTo(200, 80);
        moveTo(190, 80);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.sin(angle - 20.75);
            y = (1 + angle) * Math.cos(angle - 20.75);
            lineTo(189 + x, 80 + y);
        }

        ctx.stroke()


    }

    function draw_left_swirl_big_circle() {
        moveTo(200, 35);
        lineTo(200, 55);
        moveTo(190, 55);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.sin(angle - 20.75);
            y = (1 + angle) * Math.cos(angle - 20.75);
            lineTo(189 + x, 55 + y);
        }

        ctx.stroke()


    }

    function draw_left_swirl_other() {
        moveTo(200, 25);
        lineTo(200, 45);
        moveTo(190, 45);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.sin(angle - 20.75);
            y = (1 + angle) * Math.cos(angle - 20.75);
            lineTo(189 + x, 45 + y);
        }

        ctx.stroke()
    }



    function draw_left_swoop_small_circle() {
        moveTo(180 + 20 * Math.cos(2 * Math.PI), 85 + 20 * Math.sin(2 * Math.PI));
        arc(180, 85, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()
    }

    function draw_left_swoop_medium_circle() {
        moveTo(180 + 20 * Math.cos(2 * Math.PI), 60 + 20 * Math.sin(2 * Math.PI));
        arc(180, 60, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()


    }

    function draw_left_swoop_big_circle() {
        moveTo(180 + 20 * Math.cos(2 * Math.PI), 35 + 20 * Math.sin(2 * Math.PI));
        arc(180, 35, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()


    }

    function draw_left_swoop_other() {
        moveTo(180 + 20 * Math.cos(2 * Math.PI), 25 + 20 * Math.sin(2 * Math.PI));
        arc(180, 25, 20, 2 * Math.PI, 0.6 * Math.PI);
        ctx.stroke()
    }




    function draw_right_swirl_small_circle() {
        moveTo(200, 85);
        lineTo(200, 105);
        moveTo(210, 105);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            lineTo(210.5 + x, 105 + y);
        }

        ctx.stroke()
    }

    function draw_right_swirl_medium_circle() {
        moveTo(200, 60);
        lineTo(200, 80);
        moveTo(210, 80);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            lineTo(210.5 + x, 80 + y);
        }

        ctx.stroke()


    }

    function draw_right_swirl_big_circle() {
        moveTo(200, 35);
        lineTo(200, 55);
        moveTo(210, 55);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            lineTo(210.5 + x, 55 + y);
        }

        ctx.stroke()
    }

    function draw_right_swirl_other() {
        moveTo(200, 25);
        lineTo(200, 45);
        moveTo(210, 45);
        for (i = 0; i < 100; i += 1) {
            angle = 0.1 * i;
            x = (1 + angle) * Math.cos(angle - 19);
            y = (1 + angle) * Math.sin(angle - 19);
            lineTo(210.5 + x, 45 + y);
        }

        ctx.stroke()
    }


    function draw_right_swoop_small_circle() {
        moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 85 + 20 * Math.sin(0.4 * Math.PI));
        arc(215, 85, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()
    }

    function draw_right_swoop_medium_circle() {
        moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 60 + 20 * Math.sin(0.4 * Math.PI));
        arc(215, 60, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()


    }

    function draw_right_swoop_big_circle() {
        moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 35 + 20 * Math.sin(0.4 * Math.PI));
        arc(215, 35, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()
    }

    function draw_right_swoop_other() {
        moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 25 + 20 * Math.sin(0.4 * Math.PI));
        arc(215, 25, 20, 0.4 * Math.PI, Math.PI);

        ctx.stroke()
    }



    function draw_eyes_female() {
        const eyes = traits['Eye']
        const color = traits['Eye Color']
        ctx.beginPath()
        ctx.fillStyle = color

        if (eyes == "Circle") {
            draw_circle_eyes_female(color)
        }
        if (eyes == "Square")
            draw_square_eyes_female(color)
        }
    }

    function draw_square_eyes_female(color) {
        var x = -17.5;
        rect(140 + x, 140, 35, 35);
        moveTo(140 + x, 140);
        lineTo(140 + x, 130);
        moveTo(149 + x, 140);
        lineTo(149 + x, 130);
        moveTo(158 + x, 140);
        lineTo(158 + x, 130);
        moveTo(167 + x, 140);
        lineTo(167 + x, 130);
        moveTo(175 + x, 140);
        lineTo(175 + x, 130);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        moveTo(147.5 + x, 147.4);
        rect(147.5 + x, 147.5, 10, 10);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        rect(240, 140, 35, 35);
        moveTo(240, 140);
        lineTo(240, 130);
        moveTo(249, 140);
        lineTo(249, 130);
        moveTo(258, 140);
        lineTo(258, 130);
        moveTo(267, 140);
        lineTo(267, 130);
        moveTo(275, 140);
        lineTo(275, 130);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        moveTo(247.5, 147.4);
        rect(247.5, 147.5, 10, 10);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke()
    }

    function draw_circle_eyes_female(color) {
        arc(150, 150, 15, 0, 2 * Math.PI);
        moveTo(150, 135);
        lineTo(150, 125);
        moveTo(150 + 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        lineTo(150 + 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        moveTo(150 + 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        lineTo(150 + 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        moveTo(150 - 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        lineTo(150 - 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        moveTo(150 - 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        lineTo(150 - 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        moveTo(156, 150);
        arc(150, 150, 6, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        moveTo(265, 150);
        arc(250, 150, 15, 0, 2 * Math.PI);
        moveTo(250, 135);
        lineTo(250, 125);
        moveTo(250 + 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        lineTo(250 + 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        moveTo(250 + 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        lineTo(250 + 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        moveTo(250 - 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
        lineTo(250 - 25 * Math.cos(Math.PI / 3), 150 - 25 * Math.sin(Math.PI / 3));
        moveTo(250 - 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
        lineTo(250 - 25 * Math.cos(Math.PI / 6), 150 - 25 * Math.sin(Math.PI / 6));
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        moveTo(256, 150);
        arc(250, 150, 6, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke()
    }

    function draw_eyes_male() {
        const eyes = traits['Eye']
        const color = traits['Eye Color']
        ctx.beginPath()
        ctx.fillStyle = color

        if (eyes == "Circle") {
            draw_circle_eyes(color)
        }
        if (eyes == "Square") {
            draw_square_eyes(color)
        }
        if (eyes == "Hexagon") {
            newColor = "white";
            if (color == "#001131") {
                draw_hexagon_eyes(newColor)
            } else {
                draw_hexagon_eyes(color)
            }
        }
        if (eyes == "Polygon") {
            draw_polygon_eyes(color)
        }
        if (eyes == "Hearts") {
            newColor = "white";
            if (color == "#001131") {
                draw_heart_eyes(newColor)
            } else {
                draw_heart_eyes(color)
            }
        }
    }

    function draw_polygon_eyes(color) {
        const sides = traits['Polygon Eyes Sides']
        var numberOfSides = sides,
            size = 20,
            Xcenter = 150,
            Ycenter = 150;

        ctx.beginPath();
        moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

        for (var i = 1; i <= numberOfSides; i += 1) {
            lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        ctx.fillStyle = "white";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        moveTo(253, 150);
        ctx.beginPath();
        arc(150, 150, 7.5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        size = 20,
            Xcenter = 250,
            Ycenter = 150;

        ctx.beginPath();
        moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

        for (var i = 1; i <= numberOfSides; i += 1) {
            lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        ctx.fillStyle = "white";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        moveTo(253, 150);
        ctx.beginPath();
        arc(250, 150, 7.5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    function draw_heart_eyes(color) {
        var w = 45,
            h = 45;
        var d = Math.min(w, h);
        var k = 150;
        var y = -10
        var x = -30

        moveTo(k + x, (k + d / 4) + y);
        quadraticCurveTo(k + x, k + y, (k + d / 4) + x, k + y);
        quadraticCurveTo((k + d / 2) + x, k + y, (k + d / 2) + x, (k + d / 4) + y);
        quadraticCurveTo((k + d / 2) + x, k + y, (k + d * 3 / 4) + x, k + y);
        quadraticCurveTo((k + d) + x, k + y, (k + d) + x, (k + d / 4) + y);
        quadraticCurveTo((k + d) + x, (k + d / 2) + y, (k + d * 3 / 4) + x, (k + d * 3 / 4) + y);
        lineTo((k + d / 2) + x, k + d + y);
        lineTo((k + d / 4) + x, (k + d * 3 / 4) + y);
        quadraticCurveTo(k + x, (k + d / 2) + y, k + x, (k + d / 4) + y);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        var w = 45,
            h = 45;
        var d = Math.min(w, h);
        var k = 250;
        var y = -110
        var x = -15

        moveTo(k + x, (k + d / 4) + y);
        quadraticCurveTo(k + x, k + y, (k + d / 4) + x, k + y);
        quadraticCurveTo((k + d / 2) + x, k + y, (k + d / 2) + x, (k + d / 4) + y);
        quadraticCurveTo((k + d / 2) + x, k + y, (k + d * 3 / 4) + x, k + y);
        quadraticCurveTo((k + d) + x, k + y, (k + d) + x, (k + d / 4) + y);
        quadraticCurveTo((k + d) + x, (k + d / 2) + y, (k + d * 3 / 4) + x, (k + d * 3 / 4) + y);
        lineTo((k + d / 2) + x, k + d + y);
        lineTo((k + d / 4) + x, (k + d * 3 / 4) + y);
        quadraticCurveTo(k + x, (k + d / 2) + y, k + x, (k + d / 4) + y);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    function draw_square_eyes(color) {
        rect(122.5, 140, 35, 35);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        moveTo(130, 147.4);
        rect(130, 147.5, 10, 10);
        ctx.fillStyle = color
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        rect(240, 140, 35, 35);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        moveTo(247.5, 147.4);

        ctx.beginPath();
        rect(247.5, 147.5, 10, 10);
        ctx.fillStyle = color
        ctx.fill();
        ctx.stroke()
    }

    function draw_circle_eyes(color) {
        arc(150, 150, 15, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

        moveTo(157.5, 150);
        arc(150, 150, 7.5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        moveTo(265, 150);
        arc(250, 150, 15, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        moveTo(253, 150);
        ctx.beginPath();
        arc(250, 150, 7.5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke()
    }

    function draw_hexagon_eyes(color) {
        var numberOfSides = 6,
            size = 20,
            Xcenter = 150,
            Ycenter = 150;

        moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

        ctx.beginPath();
        for (var i = 1; i <= numberOfSides; i += 1) {
            lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        ctx.closePath()
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        size = 10;
        moveTo(160, 150);

        for (var i = 1; i <= numberOfSides; i += 1) {
            lineTo(Xcenter + size * Math.cos(i * 1 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 1 * Math.PI / numberOfSides));
        }
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();


        var numberOfSides = 6,
            size = 20,
            Xcenter = 250,
            Ycenter = 150;

        ctx.beginPath();
        moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

        for (var i = 1; i <= numberOfSides; i += 1) {
            lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath()
        size = 10;
        moveTo(260, 150);

        for (var i = 1; i <= numberOfSides; i += 1) {
            lineTo(Xcenter + size * Math.cos(i * 1 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 1 * Math.PI / numberOfSides));
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


    function draw_mouth() {
        const mouth = traits['Mouth']
        const color = traits['Mouth Color']
        ctx.beginPath()
        ctx.fillStyle = color
        if (mouth == "Big Happy") {
            draw_big_happy_mouth()
        }
        if (mouth == "Small Happy") {
            small_happy_mouth()
        }
        if (mouth == "Right Happy") {
            right_happy_mouth()
        }
        if (mouth == "Big Sad") {
            big_sad_mouth()

        }
        if (mouth == "Left Sad") {
            left_sad_mouth()

        }
        if (mouth == "Suprised") {
            suprised_mouth()

        }
        if (mouth == "Small Sad") {
            small_sad_mouth()

        }
        if (mouth == "Trapezoid") {
            trapezoid_mouth(color)

        }
        ctx.stroke()
        ctx.fill()
    }

    function trapezoid_mouth(color) {
        moveTo(135, 255); //Big
        lineTo(265, 255);


        lineTo(225, 290);
        lineTo(175, 290);
        lineTo(135, 255);
        lineTo(265, 255);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();

    }

    function left_sad_mouth() {
        arc(190, 275, 50, 10, 2 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        moveTo(190 + ((50 + line_width / 2) * Math.cos(10)), 275 + ((50 + line_width / 2) * Math.sin(10)));
        lineTo(240 + line_width / 2 - .5, 275 + line_width / 2 - .5);
    }

    function suprised_mouth() {
        arc(200, 255, 10, 0, 2 * Math.PI);
        ctx.stroke()
        ctx.beginPath()

    }

    function small_sad_mouth() {
        arc(200, 255, 10, Math.PI, 2 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        moveTo(190 - line_width / 2, 255);
        lineTo(210 + line_width / 2, 255);
    }

    function right_happy_mouth() {
        arc(210, 235, 50, 2 * Math.PI, 2.5658958);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        moveTo(210 + ((50 + line_width / 2) * Math.cos(2.5658958)), 235 + ((50 + line_width / 2) * Math.sin(2.5658958)));
        lineTo(260 + line_width / 2, 235 + line_width / 2 - .5);
    }

    function big_sad_mouth() {
        arc(200, 295, 50, 1 * Math.PI, 2 * Math.PI, 0 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        moveTo(150 - line_width / 2, 295);
        lineTo(250 + line_width / 2, 295)
    }

    function small_happy_mouth() {
        arc(200, 255, 10, 2 * Math.PI, Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        moveTo(190 - line_width / 2, 255);
        lineTo(210 + line_width / 2, 255);
    }

    function draw_big_happy_mouth() {
        arc(200, 255, 50, Math.PI, 2 * Math.PI, 1 * Math.PI);
        ctx.fill()
        ctx.stroke()
        ctx.beginPath()
        moveTo(150 - line_width / 2, 255);
        lineTo(250 + line_width / 2, 255);
    }


    function draw_nose() {
        const nose = traits['Nose']
        ctx.beginPath()
        if (nose == "Left Pointing") {
            return draw_left_nose()
        }
        if (nose == "Right Pointing") {
            return draw_right_nose()
        }
        if (nose == "Right Pointing Angle") {
            return draw_right_nose_angled()
        }
        if (nose == "Left Pointing Angle") {
            return draw_left_nose_angled()
        }

        const color = traits['Nose Color']
        ctx.fillStyle = color
        if (nose == "Triangle") {
            draw_triangle_nose()
        }
        if (nose == "3D Triangle") {
            draw_3d_triangle_nose()
        }
    }

    function draw_left_nose_angled() {
        moveTo(200, 150 + line_width / 2);
        lineTo(220, 200);
        lineTo(200, 200);
        ctx.stroke()
    }

    function draw_left_nose() {
        moveTo(200, 200);
        lineTo(200, 150 + line_width / 2);
        moveTo(200 + line_width / 2, 200);
        lineTo(180, 200);
        ctx.stroke()
    }

    function draw_right_nose_angled() {
        moveTo(200, 150 + line_width / 2);
        lineTo(180, 200);
        lineTo(200, 200);
        ctx.stroke()
    }

    function draw_right_nose() {
        moveTo(200, 200);
        lineTo(200, 150 + line_width / 2);
        moveTo(200 - line_width / 2, 200);
        lineTo(220, 200);
        ctx.stroke()
    }

    function draw_triangle_nose() {
        moveTo(200, 150);
        lineTo(220, 200);
        lineTo(200, 150);
        lineTo(180, 200);
        lineTo(220, 200);
        ctx.fill();
        ctx.closePath();
        ctx.stroke()

    }

    function draw_3d_triangle_nose() {
        const leftp = [194.5, 192];
        const rightp = [207.5, 192];
        moveTo(200, 150);
        lineTo(220, 200);
        lineTo(200, 150);
        lineTo(180, 200);
        lineTo(220, 200);
        ctx.fill();

        ctx.closePath();
        ctx.stroke()

        rect(195, 198, 1, 1);
        rect(204, 198, 1, 1);
        ctx.stroke()
        moveTo(180, 200);
        lineTo(leftp[0], leftp[1]);
        moveTo(220, 200);
        lineTo(rightp[0], rightp[1]);
        lineTo(leftp[0] - line_width / 2, leftp[1])
        ctx.lineWidth = 1;
        lineTo(200, 150);
        moveTo(rightp[0], rightp[1]);
        lineTo(200, 150);
        ctx.stroke()
        ctx.lineWidth = 4;
    }



    function draw_triangles(rand1,rand2, rand3,color,color2){
      if(rand3> 0.5){
        function fill(){
          ctx.fill();
        }
        console.log('fill');
      }else{
         function fill(){
         }
        console.log('nofill');
      }
        function fill(){
          ctx.fill();
        }

  function draw_single_background_triangle(x,y,r){
    const x1 = x -  r*Math.sqrt(3)/3
    const y1 = y +  r*Math.sqrt(3)/3

    const x2 = x
    const y2 = y -  r*Math.sqrt(3)/3

    const x3 = x +  r*Math.sqrt(3)/3 
    const y3 = y +  r*Math.sqrt(3)/3
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.lineTo(x3,y3)
    ctx.closePath()
    ctx.stroke()
    fill()
  }

      let triangle_distance =15+ 40*rand1
      let triangle_radius = 15+40*rand2
            ctx.fillStyle = color
      ctx.strokeStyle = color2;
            ctx.lineWidth = 1;
       /*   ctx.beginPath()
          draw_single_background_triangle(200,200,triangle_radius)
          ctx.stroke();fill()
          */
      for(var x = 0; x< 400/2 + triangle_distance + triangle_radius; x+=triangle_distance){
        for(var y = 0; y< 400 + triangle_distance + triangle_radius; y+=triangle_distance){
            draw_single_background_triangle(200+x,y,triangle_radius)
            //draw_single_background_triangle( 200+x,200-y,-triangle_radius)
            if(x!=0)
            draw_single_background_triangle( 200-x,y,triangle_radius)
            //draw_single_background_triangle(200-x,200-y,-triangle_radius)
        }
      }
            ctx.lineWidth = line_width;
    ctx.strokeStyle = "#001131";
    }
    function draw_circles(rand1,rand2, rand3,color,color2){
            ctx.fillStyle = color
      ctx.strokeStyle = color2;
      if(rand3> 0.5){
        function fill(){
          ctx.fill();
        }
        console.log('fill');
      }else{
         function fill(){
         }
        console.log('nofill');
      }

      let circle_distance =15+ 40*rand1
      let circle_radius = 15+40*rand2
            ctx.lineWidth = 1;
          ctx.beginPath()
          ctx.arc(200,200,circle_radius, 0*Math.PI,2*Math.PI)
          ctx.stroke();fill();

          for(var x = circle_distance; x< 400/2 + circle_distance + circle_radius; x+=circle_distance){
              var y = 0;
              ctx.beginPath()
              ctx.arc(200+x,200+y,circle_radius, 0*Math.PI,2*Math.PI)
              ctx.stroke();fill();
              ctx.beginPath()
              ctx.arc(200-x,200-y,circle_radius, 0*Math.PI,2*Math.PI)
              ctx.stroke();fill();

          }
          for(var y = circle_distance; y< 400/2 + circle_distance + circle_radius; y+=circle_distance){
            var x = 0;
            ctx.beginPath()
            ctx.arc(200+x,200+y,circle_radius, 0*Math.PI,2*Math.PI)
            ctx.stroke();fill();
            ctx.beginPath()
            ctx.arc(200-x,200-y,circle_radius, 0*Math.PI,2*Math.PI)
            ctx.stroke();fill();
        }

    
      for(var x = circle_distance; x< 400/2 + circle_distance + circle_radius; x+=circle_distance){
      for(var y = circle_distance; y< 400/2 + circle_distance + circle_radius; y+=circle_distance){
          ctx.beginPath()
          ctx.arc(200+x,200+y,circle_radius, 0*Math.PI,2*Math.PI)
          ctx.stroke();fill();
          
          ctx.beginPath()
          ctx.arc(200+x,200-y,circle_radius, 0*Math.PI,2*Math.PI)
          ctx.stroke();fill();
          

          ctx.beginPath()
          ctx.arc(200-x,200+y,circle_radius, 0*Math.PI,2*Math.PI)
          ctx.stroke();fill();

          ctx.beginPath()
          ctx.arc(200-x,200-y,circle_radius, 0*Math.PI,2*Math.PI)
          ctx.stroke();fill();
      }
      }
            ctx.lineWidth = line_width;
    ctx.strokeStyle = "#001131";
    }
    function draw_grid(rand1,rand2, color){
            ctx.strokeStyle = color
            ctx.lineWidth = 1;
            var line_distance = rand1*100+5
          var skew = 0
            for(var y = 200;  y < 400+line_distance; y += line_distance){
              ctx.beginPath()
              ctx.moveTo(0,y)
              ctx.lineTo(400,y)
              ctx.stroke()
              ctx.closePath()
            }
            for(var y = 200-line_distance;  y > 0 ;  y -= line_distance){
              ctx.beginPath()
              ctx.moveTo(0,y)
              ctx.lineTo(400,y)
              ctx.stroke()
              ctx.closePath()
            }
            for(var x = 200;  x < 400+line_distance; x += line_distance){
              ctx.beginPath()
              ctx.moveTo(x,0)
              ctx.lineTo(x,400)
              ctx.stroke()
              ctx.closePath()
            }
            for(var x = 200-line_distance;  x > 0 ;  x -= line_distance){
              ctx.beginPath()
              ctx.moveTo(x,0)
              ctx.lineTo(x,400)
              ctx.stroke()
              ctx.closePath()
            }
          
            ctx.lineWidth = line_width;
            ctx.strokeStyle = "#001131";
    }
    function draw_rhombus(rand1,rand2, color){
            ctx.strokeStyle = color
            ctx.lineWidth = 1;
            var line_distance = rand1*50+10
          var skew = line_distance* Math.sqrt(2+2*Math.cos(rand2*Math.PI*2))
            for(var x = -skew ; x < 400+skew; x += line_distance){
              ctx.beginPath()
              ctx.moveTo(x,0)
              ctx.lineTo(x+skew,400)
              ctx.stroke()
              ctx.closePath()
              ctx.beginPath()
              ctx.moveTo(0,x)
              ctx.lineTo(400,x+skew)
              ctx.stroke()
              ctx.closePath()
            }
            ctx.lineWidth = line_width;
            ctx.strokeStyle = "#001131";
    }
    function draw_background() {
        const background = traits['Background']
        if (images[background]) {
            const width = background_image.width
            const height = background_image.height

            var hRatio = canvas_width / width;
            var vRatio = canvas_height / height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas_width - width * ratio) / 2;
            var centerShift_y = (canvas_height - height * ratio) / 2;
            ctx.drawImage(background_image, 0, 0, width, height,
                centerShift_x, centerShift_y, width * ratio, height * ratio);

        } else if (background == "Ripple") {
            drawRipple(traits['background_color_1']);
            animate = true
        } else {
            ctx.fillStyle = traits['background_color_1']
            ctx.fillRect(0, 0, c.width, c.height);
          if(traits['Background'] == "Graph Paper"){
            draw_grid(traits['background_rand_1'],traits['background_rand_2'], traits['background_color_2'])
          }
          if(traits['Background'] == "Rhombus"){
            draw_rhombus(traits['background_rand_1'],traits['background_rand_2'], traits['background_color_2'])
          }
          if(traits['Background'] == "Circles"){
            draw_circles(traits['background_rand_1'],traits['background_rand_2'], traits['background_rand_3'],traits['background_color_2'], traits['background_color_3'])
          }
          if(traits['Background'] == "Triangles"){
            draw_triangles(traits['background_rand_1'],traits['background_rand_2'], traits['background_rand_3'],traits['background_color_2'], traits['background_color_3'])
          }
          if(traits['Background'] == "Circles And Triangles"){

            if(traits['background_rand_7'] > 0.5){
                draw_circles(traits['background_rand_1'],traits['background_rand_2'], 1,traits['background_color_2'], traits['background_color_3'])
                draw_triangles(traits['background_rand_4'],traits['background_rand_5'], 0,traits['background_color_2'], traits['background_color_3'])
                  }else{
                    draw_triangles(traits['background_rand_4'],traits['background_rand_5'], 1,traits['background_color_2'], traits['background_color_3'])
                    draw_circles(traits['background_rand_1'],traits['background_rand_2'], 0,traits['background_color_2'], traits['background_color_3'])
                  }
              }

        }
    }

    function draw_face_female() {
        ctx.beginPath();
        if (traits['Face'] == "Small Circle") {
            small_female_face()
        } else if (traits['Face'] == 'Medium Circle') {
            medium_female_face()
        }
    }

    function small_female_face() {
        ctx.fillStyle = traits['Hair Color']
        rect(50, 30, 300, 260);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = traits['Face Color']
        arc(200, 200, 115, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    function medium_female_face() {
        ctx.fillStyle = traits['Hair Color']
        rect(25, 20, 350, 285);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.stroke();
        arc(200, 200, 140, 0, 2 * Math.PI);
        ctx.fillStyle = traits['Face Color']
        ctx.fill();
        ctx.stroke();
    }

    function draw_face_male() {
        const face = traits['Face']
        const color = traits['Face Color']

        ctx.beginPath()
        ctx.fillStyle = color

        if (face == "Medium Circle") {
            medium_circle_face(color)
        }
        if (face == "Big Circle") {
            big_circle_face(color)

        }
        if (face == "Small Circle") {
            small_circle_face(color)
        }
        if (face == "Triangle") {
            triangle_face(color)
        }
        if (face == "Square") {
            square_face(color)
        }
        if (face == "Polygon") {
            polygon_face(color)
        }
        if (face == "Trapezoid") {
            trapezoid_face(color)
        }
        if (face == "Trapezoid Opp") {
            trapezoid_face_opposite(color);
        }
        if (face == "No Face") {
            no_face()
        }


        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function no_face() {}

    function trapezoid_face_opposite(color) {
        moveTo(340, 360);
        lineTo(340, 40);

        lineTo(60, 70);
        lineTo(60, 330);

        lineTo(340, 360);
        ctx.closePath();
    }

    function trapezoid_face(color) {
        moveTo(60, 360);
        lineTo(60, 40);

        lineTo(340, 70);
        lineTo(340, 330);

        lineTo(60, 360)
        ctx.closePath();
    }

    function medium_circle_face(color) {
        arc(200, 200, 140, 0, 2 * Math.PI);
    }

    function big_circle_face(color) {
        arc(200, 200, 165, 0, 2 * Math.PI);
    }

    function small_circle_face(color) {
        arc(200, 200, 115, 0, 2 * Math.PI);
    }

    function triangle_face(color) {
        moveTo(5, 25);
        lineTo(395, 25);
        lineTo(200, 400);
        lineTo(5, 25);
        ctx.closePath();
    }

    function square_face(color) {
        rect(25, 25, 350, 350);
    }


    function polygon_face(color) {
        const sides = traits['Polygon Face Sides']
        var numberOfSides = sides,
            size = 140,
            Xcenter = 200,
            Ycenter = 200;

        ctx.beginPath();
        moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

        for (var i = 1; i <= numberOfSides; i += 1) {
            lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        ctx.fillStyle = color;
        ctx.closePath()
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

    if (!cheese) {
        div = document.createElement("div");
        div.id = "url2png-cheese";
        document.body.appendChild(div)
        cheese = true;
    }
    return animate;


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


var stop = false;
var frameCount = 0;
var fps, fpsInterval, now, then, elapsed;

startAnimating(40);

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = performance.now();
}

var animation_frame




    function minimize_drift(number, max) {
        if (number > max) {
            return max;
        }
        if (number < -max) {
            return -max;
        }
        return number
    }


function screen_saver(){
    if(x_delta > 95 || x_delta < -95){
      x_speed *= -1
    }
    if(y_delta > 95 || y_delta < -95){
      y_speed *= -1
    }
    x_delta += x_speed
    y_delta += y_speed
}

function pacman(){
    if(x_delta > 380){
      x_delta = -380;
    }
    if(x_delta < -380){
      x_delta = 380;
    }
    x_delta += x_speed
}

function elevator(){
    if(y_delta > 350){
      y_speed*=-1
    }
    if(y_delta < -350){
      y_speed*=-1
    }
    y_delta += y_speed
}
function escalator(){
    x_delta += x_speed
    y_delta += y_speed
    if(x_delta > 350 || x_delta < -350){
      x_speed*=-1
      y_speed*=-1
    }
}
function run_animate(traits, homepage_loop_inner){
  generate(traits);
  const anim = () => {
      now = performance.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
          then = now - (elapsed % fpsInterval);


          if(traits['Animation'] == "Screen Saver"){
            screen_saver()
          }else if (traits['Animation'] == "Elevator"){
            elevator()
          }else if(traits['Animation'] == "Escalator"){
            escalator()
          }else if(traits['Animation'] == "Pac Man"){
            pacman()
          }



          generate(traits);





      }
    if(homepage_loop_inner == homepage_loop){
      animation_frame = requestAnimationFrame(anim);
    }
  }
  anim();
}

function run(seed, homepage_loop_inner) {


  const traits = build_traits(seed)
  console.log(traits)
  c = document.getElementById("canvas");
  ctx = c.getContext("2d");

  const background_color = traits['Background']
  if(background_color == "Ripple" || traits['Animation'] != "None"){
      x_speed =traits['x_speed']
      y_speed = traits['y_speed']
    if(traits['Animation'] == "Escalator" && !window.screen_shot){ // TODO make conditional on screenshot
      x_delta = -350
      y_delta =-350* traits['y_speed'] / Math.abs(traits['y_speed'])
    }

      if (images[background_color]) {
          background_image.src = images[background_color]
          background_image.addEventListener("load", (e) => {
              run_animate(traits, homepage_loop_inner)
          })
  

  }else{
      run_animate(traits, homepage_loop_inner)

  }
}else{
  if (images[background_color]) {
      background_image.src = images[background_color]
      background_image.addEventListener("load", (e) => {
          generate(traits)
      })
  } else {
      generate(traits)

  }
}

}




    /*
    */

var homepage_loop=0;
if (seed == "homepage") {
    run("random", homepage_loop)
    setInterval(function() {
      homepage_loop += 1
        x_delta = 0
        y_delta = 0
        x_speed =0;
        y_speed = 0;
        if (!!animation_frame) {
            cancelAnimationFrame(animation_frame);
            animation_frame = undefined
        }
        run("random", homepage_loop)
    }, 2*750);

} else {
    run(seed,0)
}
