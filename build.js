var seed = document.location.hash.split("#")[1]
Math.seedrandom(seed);

var pizza_image = new Image();
var galaxy_image = new Image();
var rainbow_image = new Image();
const line_width = 4;

function generate() {
    var c = document.createElement("canvas");
    c.height = 400;
    c.width = 400;
    var ctx = c.getContext("2d");
    var genderRand = Math.random()
    if(genderRand < 0.25){
      const gender = 0
    }else{
      const gender = 1
    }

    var pickface = Math.floor(Math.random() * 7 + 1);
    var hat_or_hair = Math.floor(Math.random() * 2);
    var pickeyes = Math.floor(Math.random() * 6 + 1);
    ctx.lineWidth = line_width;
    ctx.strokeStyle = "#001131";

    function getRandom() {
        return Math.random();
    }

    function getRandomEyeColor() {
        let ret = getRandomBackground()
        if (ret == "white") {
            return "#001131";
        }
        return ret;
    }

    function getRandomHairColor() {
        let colors = ["#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"];

        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomBackground() {
        let colors = ["white", "white", "white", "#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"];

        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getCrazyRandomBackground() {
        var backgroundpicker = Math.floor(Math.random() * 25 + 1);

        let colors = ["white", "white", "white", "#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"];

        if (backgroundpicker == 1) {
            ctx.drawImage(galaxy_image, 0, 0);
        } else if (backgroundpicker == 2) {
            ctx.drawImage(pizza_image, 0, 0);
        } else if (backgroundpicker == 3) {
            ctx.drawImage(rainbow_image, 0, 0, 1024, 1024, 0, 0, 400, 400);
        } else {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        }
    }

    /*function getRandomColor(){
	random = Math.floor(Math.random()* 3);
	if (random == 0){
		return "white";
	}

	else if (random == 1){
		//return "black";
		return 'white';
	}

	else{
		var letters = '0123456789ABCDEF';
  		var color = '#';
  		for (var i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
  		}
	
  return color;
  //return 'white';

	}
} */

    function call(fns, ctx) {
        ctx.beginPath();
        const ret = fns[Math.floor(getRandom() * fns.length)](ctx);
        ctx.stroke();
        return ret;
    }

    ctx.fillStyle = "blue";
    ctx.rect(10, 10, 30, 30);
    //ctx.fill();

    function left_eyes(ctx) {
        const fns = [
            function(ctx) {
                const eyecolor = getRandomEyeColor();

                ctx.arc(150, 150, 5, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(152.5, 150);
                ctx.strokeStyle = eyecolor;
                //ctx.arc(150, 150, 2.5, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(255, 150);
                ctx.arc(250, 150, 5, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(252.5, 150);
                ctx.strokeStyle = eyecolor;
                //ctx.arc(250, 150, 2.5, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Small Circle Eyes";
            },
            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.rect(140, 140, 25, 25);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(150, 150);
                ctx.rect(150, 150, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.rect(240, 140, 25, 25);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(250, 150);
                ctx.rect(250, 150, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Small Square Eyes";
            },

            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.arc(150, 150, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(153.5, 150);
                ctx.arc(150, 150, 3.5, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(260, 150);
                ctx.arc(250, 150, 10, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(253.5, 150);
                ctx.arc(250, 150, 3.5, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Medium Cicle Eyes";
            },

            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.rect(140, 140, 30, 30);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(145, 145);
                ctx.rect(145, 145, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.rect(240, 140, 30, 30);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(245, 145);
                ctx.rect(245, 145, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Medium Square Eyes";
            },

            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.arc(150, 150, 15, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(157.5, 150);
                ctx.arc(150, 150, 7.5, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
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
                ctx.fillStyle = eyecolor;
                ctx.fill();
                //ctx.stroke();
                return "Large Circle Eyes";
            },

            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.rect(140, 140, 35, 35);
                ctx.fillStyle = 'white'; //
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(147.5, 147.4);
                ctx.rect(147.5, 147.5, 10, 10);
                ctx.fillStyle = eyecolor
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
                ctx.fillStyle = eyecolor
                ctx.fill();
                return `Large Square Eyes`;
            },
        ];
        const fns1 = [
            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.arc(150, 150, 5, 0, 2 * Math.PI);
                ctx.moveTo(150, 145);
                ctx.lineTo(150, 135);
                ctx.moveTo(150 + 5 * Math.cos(Math.PI / 3), 150 - 5 * Math.sin(Math.PI / 3));
                ctx.lineTo(150 + 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
                ctx.moveTo(150 + 5 * Math.cos(Math.PI / 6), 150 - 5 * Math.sin(Math.PI / 6));
                ctx.lineTo(150 + 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
                ctx.moveTo(150 - 5 * Math.cos(Math.PI / 3), 150 - 5 * Math.sin(Math.PI / 3));
                ctx.lineTo(150 - 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
                ctx.moveTo(150 - 5 * Math.cos(Math.PI / 6), 150 - 5 * Math.sin(Math.PI / 6));
                ctx.lineTo(150 - 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(151, 150);
                //ctx.arc(150, 150, 1, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(255, 150);
                ctx.arc(250, 150, 5, 0, 2 * Math.PI);
                ctx.moveTo(250, 145);
                ctx.lineTo(250, 135);
                ctx.moveTo(250 + 5 * Math.cos(Math.PI / 3), 150 - 5 * Math.sin(Math.PI / 3));
                ctx.lineTo(250 + 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
                ctx.moveTo(250 + 5 * Math.cos(Math.PI / 6), 150 - 5 * Math.sin(Math.PI / 6));
                ctx.lineTo(250 + 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
                ctx.moveTo(250 - 5 * Math.cos(Math.PI / 3), 150 - 5 * Math.sin(Math.PI / 3));
                ctx.lineTo(250 - 15 * Math.cos(Math.PI / 3), 150 - 15 * Math.sin(Math.PI / 3));
                ctx.moveTo(250 - 5 * Math.cos(Math.PI / 6), 150 - 5 * Math.sin(Math.PI / 6));
                ctx.lineTo(250 - 15 * Math.cos(Math.PI / 6), 150 - 15 * Math.sin(Math.PI / 6));
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(251, 150);
                //ctx.arc(250, 150, 1, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Small Female Circle Eyes";
            },
            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.rect(140, 140, 25, 25);
                ctx.moveTo(140, 140);
                ctx.lineTo(140, 130);
                ctx.moveTo(146.25, 140);
                ctx.lineTo(146.25, 130);
                ctx.moveTo(152.5, 140);
                ctx.lineTo(152.5, 130);
                ctx.moveTo(158.75, 140);
                ctx.lineTo(158.75, 130);
                ctx.moveTo(165, 140);
                ctx.lineTo(165, 130);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(150, 150);
                ctx.rect(150, 150, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                // AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
                ctx.beginPath();
                ctx.rect(240, 140, 25, 25);
                ctx.moveTo(240, 140);
                ctx.lineTo(240, 130);
                ctx.moveTo(246.25, 140);
                ctx.lineTo(246.25, 130);
                ctx.moveTo(252.5, 140);
                ctx.lineTo(252.5, 130);
                ctx.moveTo(258.75, 140);
                ctx.lineTo(258.75, 130);
                ctx.moveTo(265, 140);
                ctx.lineTo(265, 130);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(250, 150);
                ctx.rect(250, 150, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Small Female Square Eyes";
            },

            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.arc(150, 150, 10, 0, 2 * Math.PI);
                ctx.moveTo(150, 140);
                ctx.lineTo(150, 130);
                ctx.moveTo(150 + 10 * Math.cos(Math.PI / 3), 150 - 10 * Math.sin(Math.PI / 3));
                ctx.lineTo(150 + 20 * Math.cos(Math.PI / 3), 150 - 20 * Math.sin(Math.PI / 3));
                ctx.moveTo(150 + 10 * Math.cos(Math.PI / 6), 150 - 10 * Math.sin(Math.PI / 6));
                ctx.lineTo(150 + 20 * Math.cos(Math.PI / 6), 150 - 20 * Math.sin(Math.PI / 6));
                ctx.moveTo(150 - 10 * Math.cos(Math.PI / 3), 150 - 10 * Math.sin(Math.PI / 3));
                ctx.lineTo(150 - 20 * Math.cos(Math.PI / 3), 150 - 20 * Math.sin(Math.PI / 3));
                ctx.moveTo(150 - 10 * Math.cos(Math.PI / 6), 150 - 10 * Math.sin(Math.PI / 6));
                ctx.lineTo(150 - 20 * Math.cos(Math.PI / 6), 150 - 20 * Math.sin(Math.PI / 6));
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(154, 150);
                ctx.arc(150, 150, 4, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(260, 150);
                ctx.arc(250, 150, 10, 0, 2 * Math.PI);
                ctx.moveTo(250, 140);
                ctx.lineTo(250, 130);
                ctx.moveTo(250 + 10 * Math.cos(Math.PI / 3), 150 - 10 * Math.sin(Math.PI / 3));
                ctx.lineTo(250 + 20 * Math.cos(Math.PI / 3), 150 - 20 * Math.sin(Math.PI / 3));
                ctx.moveTo(250 + 10 * Math.cos(Math.PI / 6), 150 - 10 * Math.sin(Math.PI / 6));
                ctx.lineTo(250 + 20 * Math.cos(Math.PI / 6), 150 - 20 * Math.sin(Math.PI / 6));
                ctx.moveTo(250 - 10 * Math.cos(Math.PI / 3), 150 - 10 * Math.sin(Math.PI / 3));
                ctx.lineTo(250 - 20 * Math.cos(Math.PI / 3), 150 - 20 * Math.sin(Math.PI / 3));
                ctx.moveTo(250 - 10 * Math.cos(Math.PI / 6), 150 - 10 * Math.sin(Math.PI / 6));
                ctx.lineTo(250 - 20 * Math.cos(Math.PI / 6), 150 - 20 * Math.sin(Math.PI / 6));
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(254, 150);
                ctx.arc(250, 150, 4, 0, 2 * Math.PI);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Medium Female Circle Eyes";
            },
            function(ctx) {
                const eyecolor = getRandomEyeColor();
                ctx.rect(140, 140, 30, 30);
                ctx.moveTo(140, 140);
                ctx.lineTo(140, 130);
                ctx.moveTo(147.5, 140);
                ctx.lineTo(147.5, 130);
                ctx.moveTo(155, 140);
                ctx.lineTo(155, 130);
                ctx.moveTo(162.5, 140);
                ctx.lineTo(162.5, 130);
                ctx.moveTo(170, 140);
                ctx.lineTo(170, 130);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();

                ctx.moveTo(145, 145);
                ctx.rect(145, 145, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.rect(240, 140, 30, 30);
                ctx.moveTo(240, 140);
                ctx.lineTo(240, 130);
                ctx.moveTo(247.5, 140);
                ctx.lineTo(247.5, 130);
                ctx.moveTo(255, 140);
                ctx.lineTo(255, 130);
                ctx.moveTo(262.5, 140);
                ctx.lineTo(262.5, 130);
                ctx.moveTo(270, 140);
                ctx.lineTo(270, 130);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(245, 145);
                ctx.rect(245, 145, 10, 10);
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Medium Female Square Eyes";
            },
            function(ctx) {
                const eyecolor = getRandomEyeColor();
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
                ctx.fillStyle = eyecolor;
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
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Large Female Circle Eyes";
            },
            function(ctx) {
                const eyecolor = getRandomEyeColor();
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
                ctx.fillStyle = eyecolor;
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
                ctx.fillStyle = eyecolor;
                ctx.fill();
                return "Large Female Square Eyes";
            },
        ];
        if (pickface <= 5) {
            return call(fns, ctx);
        } else {
            return call(fns1, ctx);
        }
    }

    function nose(ctx) {
        const fns = [
            function(ctx) {
                ctx.moveTo(200, 200);
                ctx.lineTo(200, 150 + line_width / 2);
                ctx.moveTo(200 - line_width / 2, 200);
                ctx.lineTo(220, 200);

                return "small right nose";
            },

            function(ctx) {
                ctx.moveTo(200, 150);
                ctx.lineTo(220, 200);
                ctx.lineTo(200, 150);
                ctx.lineTo(180, 200);
                ctx.lineTo(220, 200);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                ctx.closePath();
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                ctx.closePath();
                return "small triangle nose";
            },

            function(ctx) {
                ctx.moveTo(200, 200);
                ctx.lineTo(200, 150 + line_width / 2);
                ctx.moveTo(200 + line_width / 2, 200);
                ctx.lineTo(180, 200);
                return "small left nose";
            },
        ];

        const fns1 = [
            function(ctx) {
                const leftp = [194.5, 192];
                const rightp = [207.5, 192];
                ctx.moveTo(200, 150);
                ctx.lineTo(220, 200);
                ctx.lineTo(200, 150);
                ctx.lineTo(180, 200);
                ctx.lineTo(220, 200);
                ctx.fillStyle = getRandomBackground();
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
                return "small 3D triangle nose";
            }
        ]
        var d3 = Math.floor(Math.random() * 25 + 1);
        if (d3 == 1) {
            return call(fns1, ctx)
        } else {
            return call(fns, ctx);
        }
    }

    function brow_left(ctx) {
        const fns = [
            function(ctx) {
                ctx.moveTo(140, 125);
                ctx.lineTo(160, 125);

                return "normal left eyebrow";
            },
            function(ctx) {
                ctx.moveTo(160, 105);
                ctx.lineTo(180, 125);

                return "mad left eyebrow";
            },

            function(ctx) {
                ctx.moveTo(140, 105);
                ctx.lineTo(160, 105);

                return "suprised left eyebrow";
            },
        ];
        return call(fns, ctx);
    }

    function brow_right(ctx) {
        const fns = [
            function(ctx) {
                ctx.moveTo(240, 125);
                ctx.lineTo(260, 125);

                return "normal right eyebrow";
            },
            function(ctx) {
                ctx.moveTo(220, 125);
                ctx.lineTo(240, 105);

                return "mad right eyebrow";
            },
            function(ctx) {
                ctx.moveTo(240, 105);
                ctx.lineTo(260, 105);

                return "suprised right eyebrow";
            },
        ];
        return call(fns, ctx);
    }

    function face(ctx) {
        const fns1 = [
            function(ctx) {
                ctx.fillStyle = getRandomBackground();
                ctx.arc(200, 200, 115, 0, 2 * Math.PI);
                ctx.fill();
                return "Small Face";
            }
        ];
        const fns6 = [
            function(ctx) {
                ctx.fillStyle = getRandomHairColor();
                ctx.rect(50, 30, 300, 260);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();


                ctx.stroke();
                ctx.fillStyle = getRandomBackground();
                ctx.arc(200, 200, 115, 0, 2 * Math.PI);
                ctx.fill();
                return "Small Female Face";

            }
        ];
        const fns2 = [
            function(ctx) {
                ctx.arc(200, 200, 140, 0, 2 * Math.PI);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();

                return "Medium Face";
            },
        ];

        const fns7 = [
            function(ctx) {

                ctx.fillStyle = getRandomHairColor();
                ctx.rect(25, 20, 350, 285);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.stroke();

                ctx.arc(200, 200, 140, 0, 2 * Math.PI);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();

                return "Medium Female Face";
            },
        ];
        const fns3 = [
            function(ctx) {
                ctx.arc(200, 200, 165, 0, 2 * Math.PI);
                //ctx.fillStyle = getRandomBackground();
                getCrazyRandomBackground();
                ctx.fill();

                return "Large Face";
            },
        ];
        const fns4 = [
            function(ctx) {
                ctx.moveTo(5, 25);
                ctx.lineTo(395, 25);
                ctx.lineTo(200, 400);
                ctx.lineTo(5, 25);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                ctx.closePath();
                getCrazyRandomBackground();
                ctx.fill();

                //ctx.triangle(45,45,375,45,210,365);
                return "Pizza Face";
            },
        ];
        const fns5 = [
            function(ctx) {
                ctx.moveTo(25, 25);
                ctx.rect(25, 25, 350, 350);
                // ctx.lineTo(375,25);
                // ctx.lineTo(200,400);
                // ctx.lineTo(25,25);
                //ctx.fillStyle = getRandomBackground();
                //ctx.drawImage(galaxy_image, 0, 0);
                getCrazyRandomBackground();
                ctx.fill();

                //ctx.triangle(45,45,375,45,210,365);
                return "Square Face";
            },
        ];
        if (pickface == 1) {
            return call(fns1, ctx);
        } else if (pickface == 2) {
            return call(fns2, ctx);
        } else if (pickface == 3) {
            return call(fns3, ctx);
        } else if (pickface == 4) {
            return call(fns4, ctx);
        } else if (pickface == 5) {
            return call(fns5, ctx);
        } else if (pickface == 6) {
            return call(fns6, ctx);
        } else {
            return call(fns7, ctx);
        }

    }

    function hat(ctx) {
        const fns = [
            function(ctx) {
                ctx.fillStyle = getRandomBackground();

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
                ctx.stroke();
                ctx.fill();

                return "top hat";
            },

            function(ctx) {
                ctx.fillStyle = getRandomBackground();

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
                ctx.stroke();
                ctx.fill();

                return "fedora";
            },

            function(ctx) {
                ctx.fillStyle = "white";

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

                return "chef's hat";
            },

            function(ctx) {
                return "no hat";
            },
        ];
        const fns1 = [
            function(ctx) {
                // Hair 1.1
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 85 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 85, 20, 0.4 * Math.PI, Math.PI);
                return "single hair";
            },
            function(ctx) {
                //Hair 2.1
                ctx.moveTo(200, 85);
                ctx.lineTo(200, 105);
                ctx.moveTo(210, 105);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.cos(angle - 19);
                    y = (1 + angle) * Math.sin(angle - 19);
                    ctx.lineTo(210.5 + x, 105 + y);
                }
                return "right squigle";
            },
            function(ctx) {
                //Hair 3.1
                ctx.moveTo(200, 85);
                ctx.lineTo(200, 105);
                ctx.moveTo(190, 105);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.75);
                    y = (1 + angle) * Math.cos(angle - 20.75);
                    ctx.lineTo(189 + x, 105 + y);
                }
                return "left squigle";
            },
        ];
        const fns2 = [
            function(ctx) {
                //Hair 1.2
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 60 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 60, 20, 0.4 * Math.PI, Math.PI);
                return "single hair";
            },
            function(ctx) {
                //Hair 2.2
                ctx.moveTo(200, 60);
                ctx.lineTo(200, 80);
                ctx.moveTo(210, 80);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.cos(angle - 19);
                    y = (1 + angle) * Math.sin(angle - 19);
                    ctx.lineTo(210.5 + x, 80 + y);
                }
                return "right squigle";
            },
            function(ctx) {
                //Hair 3.2
                ctx.moveTo(200, 60);
                ctx.lineTo(200, 80);
                ctx.moveTo(190, 80);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.75);
                    y = (1 + angle) * Math.cos(angle - 20.75);
                    ctx.lineTo(189 + x, 80 + y);
                }
                return "left squigle";
            },
        ];
        const fns3 = [
            function(ctx) {
                // Hair 1.3
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 35 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 35, 20, 0.4 * Math.PI, Math.PI);
                return "single hair";
            },
            function(ctx) {
                //Hair 2.3
                ctx.moveTo(200, 35);
                ctx.lineTo(200, 55);
                ctx.moveTo(210, 55);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.cos(angle - 19);
                    y = (1 + angle) * Math.sin(angle - 19);
                    ctx.lineTo(210.5 + x, 55 + y);
                }
                return "right squigle";
            },
            function(ctx) {
                // //Hair 3.3
                ctx.moveTo(200, 35);
                ctx.lineTo(200, 55);
                ctx.moveTo(190, 55);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.75);
                    y = (1 + angle) * Math.cos(angle - 20.75);
                    ctx.lineTo(189 + x, 55 + y);
                }
                return "left squigle";
            },
        ];
        const fns4 = [
            function(ctx) {
                //Hair 1.4
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 25 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 25, 20, 0.4 * Math.PI, Math.PI);
                return "single hair";
            },
            function(ctx) {
                // Hair 2.4
                ctx.moveTo(200, 25);
                ctx.lineTo(200, 45);
                ctx.moveTo(210, 45);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.cos(angle - 19);
                    y = (1 + angle) * Math.sin(angle - 19);
                    ctx.lineTo(210.5 + x, 45 + y);
                }
                return "right squigle";
            },
            function(ctx) {
                //Hair 3.4
                ctx.moveTo(200, 25);
                ctx.lineTo(200, 45);
                ctx.moveTo(190, 45);
                for (i = 0; i < 100; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.75);
                    y = (1 + angle) * Math.cos(angle - 20.75);
                    ctx.lineTo(189 + x, 45 + y);
                }
                return "left squigle";
            },
        ];

        const fns5 = [
            function(ctx) {
                return "Female Hair";
            }
        ];
        if (pickface == 6 || pickface == 7) {
            return call(fns5, ctx);
        }

        if (hat_or_hair == 1) {
            if (pickface == 1) {
                return call(fns1, ctx);
            }
            if (pickface == 2) {
                return call(fns2, ctx);
            }

            if (pickface == 3) {
                return call(fns3, ctx);
            } else {
                return call(fns4, ctx);
            }
        } else {
            return call(fns, ctx);
        }
    }

    function mouth(ctx) {
        const fns = [
            function(ctx) {
                ctx.arc(190, 275, 50, 10, 2 * Math.PI);
                ctx.moveTo(190 + ((50 + line_width / 2) * Math.cos(10)), 275 + ((50 + line_width / 2) * Math.sin(10)));
                ctx.lineTo(240 + line_width / 2 - .5, 275 + line_width / 2 - .5);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return " Left Side Sad Mouth";
            },

            function(ctx) {
                ctx.arc(210, 235, 50, 2 * Math.PI, 2.5658958);
                ctx.moveTo(210 + ((50 + line_width / 2) * Math.cos(2.5658958)), 235 + ((50 + line_width / 2) * Math.sin(2.5658958)));
                ctx.lineTo(260 + line_width / 2, 235 + line_width / 2 - .5);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Left Side Happy Mouth";
            },

            function(ctx) {
                ctx.arc(200, 295, 50, 1 * Math.PI, 2 * Math.PI, 0 * Math.PI);
                ctx.moveTo(150 - line_width / 2, 295);
                ctx.lineTo(250 + line_width / 2, 295)
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Center Sad Mouth";
            },

            function(ctx) {
                ctx.arc(200, 255, 50, Math.PI, 2 * Math.PI, 1 * Math.PI);
                ctx.moveTo(150 - line_width / 2, 255);
                ctx.lineTo(250 + line_width / 2, 255);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Center Happy Mouth";
            },

            function(ctx) {
                ctx.arc(200, 255, 10, Math.PI, 2 * Math.PI);
                ctx.moveTo(190 - line_width / 2, 255);
                ctx.lineTo(210 + line_width / 2, 255);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "small sad mouth";
            },

            function(ctx) {
                ctx.arc(200, 255, 10, 2 * Math.PI, Math.PI);
                ctx.moveTo(190 - line_width / 2, 255);
                ctx.lineTo(210 + line_width / 2, 255);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "small happy mouth";
            },

            function(ctx) {
                ctx.arc(200, 255, 10, 0, 2 * Math.PI);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Suprised Mouth";
            },
        ];
        return call(fns, ctx);
    }

    function mustashe(ctx) {
        const fns = [
            function(ctx) {
                ctx.moveTo(125, 215);
                ctx.lineTo(275, 215);
                ctx.rect(115, 205, 10, 10);
                ctx.rect(275, 205, 10, 10);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "small stash";
            },

            function(ctx) {
                for (i = 0; i < 145; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.cos(angle);
                    y = (1 + angle) * Math.sin(angle);
                    ctx.lineTo(275 + x, 200 + y);
                }
                ctx.moveTo(125, 200);
                for (i = 0; i < 145; i += 1) {
                    angle = 0.1 * i;
                    x = (1 + angle) * Math.sin(angle - 20.5);
                    y = (1 + angle) * Math.cos(angle - 20.5);
                    ctx.lineTo(125 + x, 200 + y);
                }

                ctx.moveTo(125, 215);
                ctx.lineTo(275, 215);
                return "spiral stash";
            },
            // 	function(ctx){
            // 				for (i=0; i< 145; i+=20) {
            // 					angle = 0.1 * i;
            // 					x=(1+angle)*Math.cos(angle+1.24);
            // 					y=(1+angle)*Math.sin(angle+1.24);
            // 					ctx.lineTo(287+x, 207.8+y);
            // }
            // 		ctx.moveTo(113,207.8);
            // 				for (i=0; i< 145; i+=20) {
            // 					angle = 0.1 * i;
            // 					x=(1+angle)*Math.sin(angle-.35);
            // 					y=(1+angle)*Math.cos(angle-.35);
            // 					ctx.lineTo(113+x, 207.8+y);
            // 	}

            // 		ctx.moveTo(125, 215);
            //     	ctx.lineTo(275, 215);
            // 		return 'triangle stash';
            // 	},
            // function(ctx){
            // 	ctx.moveTo(125, 215);
            // 	ctx.lineTo(275, 215);

            // 	return 'basic stash';
            // },

            function(ctx) {
                return "no stash";
            },
        ];

        const fns1 = [
            function(ctx) {
                return "no stash";
            },
        ];
        if (pickface => 6) {
            return call(fns1, ctx);
        } else {
            return call(fns, ctx);
        }
    }

    // Now draw!
    ctx.fillStyle = getRandomBackground();
    ctx.fillRect(0, 0, c.width, c.height);

    const features = {
        face: face(ctx),
        left_eye: left_eyes(ctx),
        nose: nose(ctx),
        mouth: mouth(ctx),
        mustashe: mustashe(ctx),
        brow_left: brow_left(ctx),
        brow_right: brow_right(ctx),
        hat: hat(ctx)
    };

    if (window.location.protocol != 'file:') { // will throw error because of hosted images
        var canvasImage = new Image()
        canvasImage.src = c.toDataURL('image/png');
        content.appendChild(canvasImage);
    } else {
        content.appendChild(c);
    }

    //var pre = document.createElement("pre"); pre.innerHTML = JSON.stringify(features,undefined,2); content.appendChild(pre);

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
                for (var i = 0; i < 1; i++) {
                    generate();
                }
            });
        });
    });
});
