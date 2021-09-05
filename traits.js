    let animation_probabilities ={ 
     "Escalator" :  2,
     "None" :  86,
      "Pac Man":6,
     "Screen Saver" :  4,
     "Elevator" :  2,
    }

    let color_probabilities ={ 
     "BSOD" :  4,
       "Melon" :  15,
       "RGB" :  15,
       "Apple" :  10,
       "Blue and Gold" :  4,
       "Dark" :  2,
        "Emerald" : 6,
       "Gold" :  2,
       "Light" :  8,
       "Monochrome" :  10,
        "Neon": 15,
        "Purp" :  6,
       "Ruby" :  2,
       "Sunshine" :  6,
       "Tokenhost" : 4 ,
       "Alien" :  0.5,
       "Zombie" :  2,
       "Ape" :  1,
        "Pizza" :  5
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
  "Apple": [  "#5EBD3E", "#FFB900", "#F78200", "#E23838", "#973999", "#009CDF"],
  "Blue and Gold": [  "#023AA8", "#0056FF", "#001D57", "#FFB000", "#FFD16B"],
  "Dark":[  "#FF6600", "#363E40", "#5E6D70", "#424E4F", "#1B1D1E"],
  "Emerald": [  "#04D94F", "#02590F", "#99F280", "#6CBF45", "#F2F2F2"],
  "Gold":[  "#F2CE1B", "#D9A91A", "#BF8211", "#D9B36C", "#A6600A"],
  "Light":[  "#FCFCFC", "#E6E6E6", "#BFBFBF", "#EAEDEF", "#9F6EFA"],
  "Monochrome":[  "#595956", "#8C8C88", "#F2F2F2", "#D9D8D7", "#A3A3A3"],
  "Neon": ["#4deeea", "#74ee15", '#fcfc35',"#f000ff", '#009fff','#0eff06','#40feff'],
  "Purp": [  "#A75CF2", "#C4A2F2", "#280673", "#4B1DF2", "#2C0AA6"],
  "Ruby": [  "#F21B2D", "#BF414C", "#F20C0C", "#8C0707", "#F2F2F2"],
  "Sunshine":[  "#F2CB05", "#F2B705", "#F2D680", "#F29F05", "#F28705"]
}

let r;
var colors
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
 
 

  if( data['Color Palette'] == "Zombie" ){
    data['Eye Color'] = "#FF0000";
  }else{
    data['Eye Color'] = getRandomEyeColor()
  }
  data['Mouth Color'] = getRandomBackground()
  data['Face Color'] = getRandomBackground()
  if(data['Nose'] == 'Triangle' || data['Nose'] == "3D Triangle"){
    data['Nose Color'] = getRandomBackground()
  }
  data['Background'] = get_probabilities(backgrounds)
  const three_backgrounds = get3RandomBackgrounds()
  data['background_color_1'] = three_backgrounds[0]
  data['background_color_2'] = three_backgrounds[1]
  data['background_color_3'] = three_backgrounds[2]
  data['background_rand_1'] = random()
  data['background_rand_2'] = random()
  data['background_rand_3'] = random()
  data['background_rand_4'] = random()
  data['background_rand_5'] = random()
  data['background_rand_6'] = random()
  data['background_rand_7'] = random()
  
  const animation =  get_probabilities(animation_probabilities);
  data['Animation'] =animation;
  if(animation != "None"){
    if(animation == "Screen Saver"){
      data[ 'x_speed'] = get_speed()
      data[ 'y_speed'] = get_speed()
    }else if(animation == "Elevator"){
      data[ 'x_speed'] = 0;
      data[ 'y_speed'] = get_speed()
    }else if( animation == "Pac Man"){
      data[ 'y_speed'] = 0;
      data[ 'x_speed'] = get_speed()
    }else if (animation == "Escalator"){
      data[ 'y_speed'] = get_speed()
      data[ 'x_speed'] = Math.abs( data[ 'y_speed'] )
    }
  }
  return data
  
}

function get_speed(){
  let speed= (random() - 0.5) * 5
  if(speed > 0 && speed < 1){
    return 1+random()/10;
  }
  if(speed < 0 && speed > -1){
    return -1+random()/10;
  }
  return speed;
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


function get_probabilities(probabilities){
  const total = sum_probabilities(probabilities)
  const randnum = random(); 
  let probability_index = 0
  for(var key in probabilities){
    probability_index += probabilities[key] / total
    if(randnum < probability_index){
      return key;
    }
  }
}

function getColorPalette() {
  return get_probabilities(color_probabilities);
}

const backgrounds = {
  "Worm Hole" : 0.1,
  "Money":0.25,
  "Saturn":0.25,
  "Moon Landing":0.25,
  "Cryptos":0.5,
  "Matrix":0.5,
  "Space Lambo":0.5,
  "Railway":0.5,
  "Bitcoin":0.75,
  "American Flag":0.75,
  "Mount Rushmore":0.75,
  "Manhattan Bridge" : 1.0,
  "Bokeh":1.0,
  "Rainbow":3,
  "Galaxy":3,
  "Pizza":3,
  "Ripple":3,
  "Graph Paper":5,
  "Rhombus":5,
  "Circles":10,
  "Triangles":10,
  "Circles And Triangles":10,
  "Normal":5
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
    return "Brooklyn Bridge"
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

function shuffle(arr) { // randomly rearanges the items in an array
  const result = [];
  for (let i = arr.length-1; i >= 0; i--) {
    // picks an integer between 0 and i:
    const r = Math.floor(random()*(i+1));   // NOTE: use a better RNG if cryptographic security is needed
    // inserts the arr[i] element in the r-th free space in the shuffled array:
    for(let j = 0, k = 0; j <= arr.length-1; j++) {
      if(result[j] === undefined) {
        if(k === r) {
          result[j] = arr[i];    // NOTE: if array contains objects, this doesn't clone them! Use a better clone function instead, if that is needed.
          break;
        }
        k++;
      }
    }
  }
  return result;
}

function get3RandomBackgrounds() {
  const shuffled = shuffle(colors);
  console.log(shuffled);
  return shuffled.slice(0, 3);
}
function getRandomBackground() {
    return colors[Math.floor(random() * colors.length)];
}



let nose_probabilities = {
  "Triangle":6,
  "Left Pointing":20,
  "Right Pointing":20,
  "Left Pointing Angle":15,
  "Right Pointing Angle":15
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
  return get_probabilities(nose_probabilities);
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
    var side = Math.floor(random() * 2);
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

