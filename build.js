var pizza_image = new Image();
var galaxy_image = new Image();
var rainbow_image = new Image();
const line_width = 4;



function generate(seed) {
    var seed = seed;
    var gender;
    var theFace;
    var eyes;
    var nose;
    var mouth;
    var head;
    var color;


    var c = document.createElement("canvas");
    c.height = 400;
    c.width = 400;
    var ctx = c.getContext("2d");

    function getGender(seed) {
        if (seed > .25) {
            //Female
            gender = 0;
        } else {
            //Male
            gender = 1;
        }
    }

    function getFace(seed) {
        if (gender = 0) {
            if (seed < .23) {
                //Small Cirlce
                theFace = f
            } else {
                //Medium Cirlce
                theFace = g
            }
        } else {
            if (seed < .45) {
                //Medium Cirlce
                theFace = a
            } else if (seed < .80 && seed > .45) {
                //Big Cirlce
                theFace = b
            } else if (seed > .80 && seed < .91) {
                //Small Cirlce
                theFace = c
            } else if (seed > .91 && seed < .97) {
                // Triangle
                theFace = d
            } else {
                //Square
                theFace = e
            }
        }
    }

    function getEyes(seed) {
        if (gender = 0) {
            // Big Eyes Female
            if (seed > .5) {
                eyes = a;
            } else {
                eyes = b;
            }
        } else {
            if (seed > .5) {
                eyes = c;
            } else {
                eyes = d;
            }
        }
    }

    function getNose(seed) {
        if (theFace == 4) {
            if (seed < .166) {
                // 3D Triangle
                nose = 4;
            }
        } else {
            if (seed < .05) {
                //Triangle
                nose = 1;
            }
            if (seed < .52 && seed > .05) {
                //Left Pointing
                nose = 2;
            } else {
                //Right Pointing
                nose = 3;
            }
        }
    }

    function getMouth(seed) {
        if (seed < .02) {
            //Small Sad
            mouth = a;
        } else if (seed < .12 && seed > .02) {
            //Big Sad
            mouth = b;
        } else if (seed < .17 && seed > .12) {
            //Left Sad
            mouth = c;
        } else if (seed < .37 && seed > .17) {
            //Small Happy
            mouth = d;
        } else if (seed < .82 && seed > .37) {
            //Big  Happy
            mouth = e;
        } else if (seed < .97 && seed > .82) {
            //Right Happy
            mouth = f;
        } else {
            //Suprised
            mouth = g;
        }
    }

    function getHead(seed) {

        if (seed < .25) {
            //Left Swoop
            if (theFace == a) {
                head = a;
            } else if (theFace == c) {
                head = b;
            } else if (theFace == b) {
                head = c
            } else {
                head = n
            }

        } else if (seed < .455 && seed > .25) {
            //Left Swirl
            if (theFace == a) {
                head = d;
            } else if (theFace == c) {
                head = e;
            } else if (theFace == b) {
                head = f
            } else {
                head = o;
            }

        } else if (seed < .705 && seed > .455) {
            //Right Swoop
            if (theFace == a) {
                head = a;
            } else if (theFace == c) {
                head = b;
            } else if (theFace == b) {
                head = c
            } else {
                head = n
            }
        } else if (seed < .91 && seed > .705) {
            //Right Swirl
            if (theFace == a) {
                head = g;
            } else if (theFace == c) {
                head = h;
            } else if (theFace == b) {
                head = i
            } else {
                head = p
            }
        } else if (seed < .96 && seed > .91) {
            //Fedora
            head = j;
        } else if (seed < .97 && seed > .96) {
            //Cheifs
            head = k;
        } else if (seed < .98 && seed > .97) {
            //Top Hat
            head = l;
        } else
            head = m;

    }

    function colors(seed) {

    }

    
    getGender(seed);
    theFace(seed);
    getEyes(seed);
    getNose(seed);
    getMouth(seed);
    getHead(seed);


    var hat_or_hair = Math.floor(Math.random() * 2);
    var pickeyes = Math.floor(Math.random() * 6 + 1);
    ctx.lineWidth = line_width;
    ctx.strokeStyle = "#001131";

    function getRandom() {
        var array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] / 2 ** 32;
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
        let colors = ["white", "white", "white", "#0528F2", "#4CB1F7", "#FFC700", "#E01B32", "#E01B32", "#01EA05"];

        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getCrazyRandomBackground() {
        var backgroundpicker = Math.floor(Math.random() * 25 + 1);

        let colors = ["white", "white", "white", "#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"];

        if (seed < .01) {
            ctx.drawImage(galaxy_image, 0, 0);
        } else if (seed > .01 && seed < .02) {
            ctx.drawImage(pizza_image, 0, 0);
        } else if (seed > .02 && seed < .07) {
            ctx.drawImage(rainbow_image, 0, 0);
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

        const a = [
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
        ];
        const b = [
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
            }
        ];

        const c = [
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
        ]
        const d = [
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
        return call(eyes, ctx);
    }

    function nose(ctx) {
        const c = [
            function(ctx) {
                ctx.moveTo(200, 200);
                ctx.lineTo(200, 150 + line_width / 2);
                ctx.moveTo(200 - line_width / 2, 200);
                ctx.lineTo(220, 200);

                return "small right nose";
            },
        ]
        const a = [
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
        ]
        const b = [
            function(ctx) {
                ctx.moveTo(200, 200);
                ctx.lineTo(200, 150 + line_width / 2);
                ctx.moveTo(200 + line_width / 2, 200);
                ctx.lineTo(180, 200);
                return "small left nose";
            },
        ]


        const d = [
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
        return call(nose, ctx);
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
        const c = [
            function(ctx) {
                ctx.fillStyle = getRandomBackground();
                ctx.arc(200, 200, 115, 0, 2 * Math.PI);
                ctx.fill();
                return "Small Face";
            }
        ];
        const g = [
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
        const a = [
            function(ctx) {
                ctx.arc(200, 200, 140, 0, 2 * Math.PI);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();

                return "Medium Face";
            },
        ];

        const f = [
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
        const b = [
            function(ctx) {
                ctx.arc(200, 200, 165, 0, 2 * Math.PI);
                //ctx.fillStyle = getRandomBackground();
                getCrazyRandomBackground();
                ctx.fill();

                return "Large Face";
            },
        ];
        const d = [
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
        const e = [
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
        return call(theFace, ctx);

    }

    function headItem(ctx) {
        const l = [
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
        ]
        const j = [
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
        ]
        const k = [
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
        ]
        const m = [

            function(ctx) {
                return "no hat";
            },
        ];
        const i = [
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
        ]
        const f = [
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
        const c = [
            function(ctx) {
                // Hair 1.1
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 85 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 85, 20, 0.4 * Math.PI, Math.PI);
                return "swoop hair";
            },
        ]

        const g = [
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
        ]
        const d = [
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
        const a = [
            function(ctx) {
                //Hair 1.2
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 60 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 60, 20, 0.4 * Math.PI, Math.PI);
                return "swoop hair";
            },
        ]
        const h = [
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
        ]
        const e = [
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
        const b = [
            function(ctx) {
                // Hair 1.3
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 35 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 35, 20, 0.4 * Math.PI, Math.PI);
                return "swoop hair";
            },
        ]
        const p = [
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
        ]
        const o = [
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
        ]
        const n = [
            function(ctx) {
                //Hair 1.4
                ctx.moveTo(215 + 20 * Math.cos(0.4 * Math.PI), 25 + 20 * Math.sin(0.4 * Math.PI));
                ctx.arc(215, 25, 20, 0.4 * Math.PI, Math.PI);
                return "single hair";
            },
        ]
        return call(head, ctx);
    }


    function mouth(ctx) {
        const c = [
            function(ctx) {
                ctx.arc(190, 275, 50, 10, 2 * Math.PI);
                ctx.moveTo(190 + ((50 + line_width / 2) * Math.cos(10)), 275 + ((50 + line_width / 2) * Math.sin(10)));
                ctx.lineTo(240 + line_width / 2 - .5, 275 + line_width / 2 - .5);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return " Left Side Sad Mouth";
            }
        ]

        const f = [
            function(ctx) {
                ctx.arc(210, 235, 50, 2 * Math.PI, 2.5658958);
                ctx.moveTo(210 + ((50 + line_width / 2) * Math.cos(2.5658958)), 235 + ((50 + line_width / 2) * Math.sin(2.5658958)));
                ctx.lineTo(260 + line_width / 2, 235 + line_width / 2 - .5);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Right Side Happy Mouth";
            },
        ]
        const b = [
            function(ctx) {
                ctx.arc(200, 295, 50, 1 * Math.PI, 2 * Math.PI, 0 * Math.PI);
                ctx.moveTo(150 - line_width / 2, 295);
                ctx.lineTo(250 + line_width / 2, 295)
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Center Sad Mouth";
            },
        ]
        const e = [
            function(ctx) {
                ctx.arc(200, 255, 50, Math.PI, 2 * Math.PI, 1 * Math.PI);
                ctx.moveTo(150 - line_width / 2, 255);
                ctx.lineTo(250 + line_width / 2, 255);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Center Happy Mouth";
            },
        ]
        const a = [
            function(ctx) {
                ctx.arc(200, 255, 10, Math.PI, 2 * Math.PI);
                ctx.moveTo(190 - line_width / 2, 255);
                ctx.lineTo(210 + line_width / 2, 255);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "small sad mouth";
            },
        ]
        const d = [
            function(ctx) {
                ctx.arc(200, 255, 10, 2 * Math.PI, Math.PI);
                ctx.moveTo(190 - line_width / 2, 255);
                ctx.lineTo(210 + line_width / 2, 255);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "small happy mouth";
            },
        ]
        const g = [
            function(ctx) {
                ctx.arc(200, 255, 10, 0, 2 * Math.PI);
                ctx.fillStyle = getRandomBackground();
                ctx.fill();
                return "Suprised Mouth";
            },
        ];
        return call(mouth, ctx);
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
ctx.fillStyle = getCrazyRandomBackground();
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

}

if (window.location.protocol != 'file:') { // will throw error because of hosted images
    var canvasImage = new Image()
    canvasImage.src = c.toDataURL('image/png');
    content.appendChild(canvasImage);
} else {
    content.appendChild(c);
}

//var pre = document.createElement("pre"); pre.innerHTML = JSON.stringify(features,undefined,2); content.appendChild(pre);



window.addEventListener("load", function() {
    rainbow_image.src = "./rainbow.png";
    rainbow_image.addEventListener("load", (e) => {
        galaxy_image.src = "./galaxy.png";
        galaxy_image.addEventListener("load", (e) => {
            pizza_image.src = "./pizza.jpeg";
            pizza_image.addEventListener("load", (e) => {
                // for (var i = 0; i < 1; i++) {
                var userSeed = window.prompt("What would you like the seed to be (0<n<1): ");
                generate(userSeed);
                // }
            });
        });
    });
});
