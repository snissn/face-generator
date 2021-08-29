
    let color_probabilities ={ "BSOD" :  1,
        "Melon" :  1,
        "RGB" :  1,
        "Apple" :  1,
        "Blue and Gold" :  1,
        "Dark" :  1,
        "Emerald" : 1,
        "Gold" :  1,
        "Light" :  1,
        "Monochrome" :  1,
        "Neon": 1,
        "Purp" :  1,
        "Ruby" :  1,
        "Sunshine" :  1,
        "Tokenhost" : 1 ,
        "Alien" :  1,
        "Zombie" :  1,
        "Ape" :  1,
        "Pizza" :  1
    }
let colors_palletes = {
  "Tokenhost" : [  "#FFFFFF", "#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"],
  "Alien": ["#c7fbfa", "#9be0e0", "#75bdbd"],
  "Zombie": ["#7da269","#5e7153"], // zombie
  "Ape": ['#a88c6b','#6a563f','#846f56'],//ape
  "Pizza": ['#feeab6','#c84e31','#fe9650','#ffb508'],//pizza
  "BSOD":[  "#0511F2", "#030BA6", "#0424D9", "#03178C", "#021373"],
  "Melon": [  "#A34747", "#FFA1A1", "#F08080", "#36A355", "#80F0A0"],
  "RGB":[  "#0554F2", "#076DF2", "#7ED93D", "#F21905"],
  "Apple": [  "5EBD3E", "FFB900", "F78200", "E23838", "973999", "009CDF"],
  "Blue and Gold": [  "#023AA8", "#0056FF", "#001D57", "#FFB000", "#FFD16B"],
  "Dark":[  "#FF6600", "#363E40", "#5E6D70", "#424E4F", "#1B1D1E"],
  "Emerald": [  "#04D94F", "#02590F", "#99F280", "#6CBF45", "#F2F2F2"],
  "Gold":[  "#F2CE1B", "#D9A91A", "#BF8211", "#D9B36C", "#A6600A"],
  "Light":[  "#FCFCFC", "#E6E6E6", "#BFBFBF", "#EAEDEF", "#321070"],
  "Monochrome":[  "#595956", "#8C8C88", "#F2F2F2", "#D9D8D7", "#A3A3A3"],
  "Neon": ["#4deeea", "#74ee15", '#fcfc35',"#f000ff", '#009fff','#0eff06','#40feff'],
  "Purp": [  "#A75CF2", "#C4A2F2", "#280673", "#4B1DF2", "#2C0AA6"],
  "Ruby": [  "#F21B2D", "#BF414C", "#F20C0C", "#8C0707", "#F2F2F2"],
  "Sunshine":[  "#F2CB05", "#F2B705", "#F2D680", "#F29F05", "#F28705"]
}

let r;
let colors
function build_traits(seed){
  const data = {}
  if(seed != "random"){
    r = new RND(parseInt(seed.slice(0, 16), 16))
  }

  data['Color Palette'] = getColorPalette()
  colors = colors_palletes[data['Color Palette']]

  data['Gender'] = build_gender()
  if(data['Gender'] == "Female"){
    data['Head'] = "Big Hair"
    data['Face'] = build_female_face()
    data['Hair Color'] = getRandomEyeColor()

  }else{
    data['Head'] = build_male_hair()
    if(data['Head'] == "Fedora" || data['Head'] == "Top Hat"){
      data['Hat Color'] = getRandomBackground()
    }
    data['Face'] = build_male_face()
  }
  data['Eye'] = build_eye()
  if (data["Face"] == "Polygon"){
    data['Polygon Face Sides'] = build_face_polygon();
   }


  
  if (data['Eye'] == "Polygon"){
    data['Polygon Eyes Sides'] = build_face_polygon();
    }
  

  data['Mouth'] = build_mouth()
  data['Nose'] = build_nose(data)
  data['Left Eyebrow'] = build_left_eyebrow()
  data['Right Eyebrow'] = build_right_eyebrow(data['Left Eyebrow'])
 
 

  data['Eye Color'] = getRandomEyeColor()
  data['Mouth Color'] = getRandomBackground()
  data['Face Color'] = getRandomBackground()
  if(data['Nose'] == 'Triangle' || data['Nose'] == "3D Triangle"){
    data['Nose Color'] = getRandomBackground()
  }
  data['Background Color'] = getCrazyRandomBackground()
  if(data['Background Color'] == "Ripple"){
    data['Ripple Color'] = getRandomBackground();
  }
  return data
  
}

function random(){
  if(r === undefined){
    return Math.random()
  }
  return r.rb(0, 1);
}

function  build_face_polygon(){
  const randnum = random();
  if (randnum < (1/8)){
    return 5;
  }else if (randnum < (2/8) && randnum > (1/8)){
    return 6;
  } else if (randnum < (3/8) && randnum > (2/8)){
    return 7;
  }else if (randnum < (4/8) && randnum > (3/8)){
    return 8;
  }else if (randnum < (5/8) && randnum > (4/8)){
    return 9;
  }else if (randnum < (6/8) && randnum > (5/8)){
    return 10;
  }else if (randnum < (7/8) && randnum > (6/8)){
    return 11;
  }else {
    return 12;
  }

}

function build_left_eyebrow(){
  const randnum = random();
  if(randnum<0.6667){
    return "Normal"
  }else if(randnum< 0.833){
    return "Angry"
  }else{
    return "Suprised"
  }
}
function build_right_eyebrow(left){
  const randnum = random();
  if(randnum<0.6667){
    return left;
  }else if(randnum< 0.833){
    if(left == "Normal"){
      return "Angry";
    }
    if(left == "Angry"){
      return "Suprised"
    }
    if(left == "Suprised"){
      return "Normal"
    }

  }else{
    if(left == "Normal"){
      return "Suprised";
    }
    if(left == "Angry"){
      return "Normal"
    }
    if(left == "Suprised"){
      return "Angry"
    }
  }
}


function sum_probabilities(weights){
  var sum = 0;
  for(var i in weights){
    sum+=weights[i]
  }
  return sum
}

function getColorPalette() {
  const total = sum_probabilities(color_probabilities)
  const randnum = random(); 
  let probability_index = 0
  for(var key in color_probabilities){
    probability_index += color_probabilities[key] / total
    if(randnum < probability_index){
      return key;
    }
  }
}


function getCrazyRandomBackground() {
  const randnum = random(); 
  if(randnum < 0.001){
    return "Worm Hole"
  }else if( randnum < 0.0035){
    return "Money"
  }else if( randnum < 0.006){
    return "Saturn"
  }else if( randnum < 0.0085){
    return "Moon Landing"
  }else if( randnum < 0.0135){
    return "Cryptos"
  }else if( randnum < 0.0185){
    return "Space Lambo"
  }else if( randnum < 0.0235){
    return "Railway"
  }else if( randnum < 0.031){
    return "Bitcoin"
  }else if( randnum < 0.0385){
    return "American Flag"
  }else if( randnum < 0.046){
    return "Mount Rushmore"
  }else if( randnum < 0.056){
    return "George Washington Bridge"
  }else if( randnum < 0.066){
    return "Bokeh"
  }else if( randnum < 0.076){
    return "Rainbow"
  }else if( randnum < 0.106){
    return "Galaxy"
  }else if( randnum < 0.136){
    return "Pizza"
  }else if( randnum < 0.166){
    return "Ripple"
  }else if ( randnum < 0.171){ // half a percent
    return "Matrix"
  }else {
    //return "Normal"
    return getRandomBackground();
  }
}

function getRandomEyeColor() {
    let ret = getRandomBackground()
    if (ret == "#FFFFFF") {
        return "#001131";
    }
    return ret;
}

function getRandomBackground() {
    return colors[Math.floor(random() * colors.length)];
}


function build_nose(data){
  if(data['Face'] == "Triangle"){
    const randnum = random();
    if(randnum < 0.06){
      return "3D Triangle"
    }
  }
  return build_nose_normal()
}

function build_nose_normal(data){
  const randnum = random();
  if(randnum < 0.06){
    return "Triangle";
  }else if(randnum >= 0.06 && randnum < 0.53){
    return "Left Pointing"
  }else if(randnum >= 0.53 ){
    return "Right Pointing"
  }
}

function build_female_face(){
  const randnum = random();
  if(randnum < 0.20){
    return "Small Circle"
  }else{
    return "Medium Circle"
  }
}

function build_male_face(){
  const randnum = random();
if(randnum < 0.35){
    return "Medium Circle"
  } else if(randnum >= .33 && randnum < .35){
    var side = Math.floor(Math.random() * 2);
    if (side == 1){
      return "Trapezoid"
    }else {
     return "Trapezoid Opp"
  }
  }else if (randnum >= .35 && randnum <.45){
    return "Polygon"
  }else if(randnum >= 0.45 && randnum < 0.79){
    return "Big Circle"
  }else if(randnum >= 0.79 && randnum < 0.80){
    return "No Face"
  }else if(randnum >= 0.80 && randnum < 0.91){
    return "Small Circle"
  }else if(randnum >= 0.91 && randnum < 0.97){
    return "Triangle"
  }else{
    return "Square"
  }
}


function build_mouth(){
  const randnum = random();
  if(randnum < 0.42){
    return "Big Happy"
  }else if (randnum >=.42 && randnum <.45){
      return "Trapezoid"
  }else if(randnum >= 0.45 && randnum < 0.65){
    return "Small Happy"
  }else if(randnum >= 0.65 && randnum < 0.80){
    return "Right Happy"
  }else if(randnum >= 0.80 && randnum < 0.90){
    return "Big Sad"
  }else if(randnum >= 0.90 && randnum < 0.95){
    return "Left Sad"
  }else if(randnum >= 0.95 && randnum < 0.98){
    return "Suprised"
  }else{
    return "Small Sad"
  }
}

function build_eye(){
  const randnum = random();
   if(randnum < 0.5){
    return "Circle"
  }else if (randnum >=.5 && randnum < .52){
    return "Hexagon"
  }else if (randnum >=.52 && randnum < .54){
    return "Hearts"
  }else if (randnum >=.54 && randnum < .75){
      return "Polygon"
  }else{
    return "Square"
  }
}

function build_gender(){
  const randnum = random();
  if(randnum < 0.25){
    return "Female"
  }else{
    return "Male"
  }
}

function build_male_hair(){
  const randnum = random();
  if(randnum < 0.25){
    return "Left Swoop"
  }else if(randnum >= 0.25 && randnum < 0.5){
    return "Right Swoop"
  }else if(randnum >= 0.5 && randnum < 0.705){
    return "Left Swirl"
  }else if(randnum >= 0.705 && randnum < 0.91){
    return "Right Swirl"
  }else if(randnum >= 0.91 && randnum < 0.96){
    return "Fedora"
  }else if(randnum >= 0.96 && randnum < 0.97){
    return "Chefs Hat"
  }else if(randnum >= 0.97 && randnum < 0.98){
    return "Top Hat"
  }else if(randnum >= 0.98 ){
    return "Bald"
  }
}
class RND {
     constructor(seed) {
          this.seed = seed
     }
     rd() {
          this.seed ^= this.seed << 13
          this.seed ^= this.seed >> 17
          this.seed ^= this.seed << 5
          return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000
     }
     rb(a, b) {
          return a + (b - a) * this.rd()
     }
}

