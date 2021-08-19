

let r;
function build_traits(seed){
  const data = {}
  if(seed != "random"){
    r = new RND(parseInt(seed.slice(0, 16), 16))
  }

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
  data['Mouth'] = build_mouth()
  data['Nose'] = build_nose(data)
  data['Left Eyebrow'] = build_left_eyebrow()
  data['Right Eyebrow'] = build_right_eyebrow(data['Left Eyebrow'])
  data['Polygon Sides'] = build_face_polygon();


  data['Eye Color'] = getRandomEyeColor()
  data['Mouth Color'] = getRandomBackground()
  data['Face Color'] = getRandomBackground()
  if(data['Nose'] == 'Triangle' || data['Nose'] == "3D Triangle"){
    data['Nose Color'] = getRandomBackground()
  }
  data['Background Color'] = getCrazyRandomBackground()
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

function getCrazyRandomBackground() {
    var backgroundpicker = Math.floor(random() * 25 + 1);

    let colors = ["white", "white", "white", "#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"];

    if (backgroundpicker == 1) {
      return "Galaxy"
    } else if (backgroundpicker == 2) {
      return "Pizza"
    } else if (backgroundpicker == 3) {
      return "Rainbow"
    } else {
        return colors[Math.floor(random() * colors.length)];
    }
}

function getRandomEyeColor() {
    let ret = getRandomBackground()
    if (ret == "white") {
        return "#001131";
    }
    return ret;
}

function getRandomBackground() {
    let colors = ["white", "white", "white", "#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"];

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
  } else if (randnum >= .35 && randnum <.45){
    return "Polygon"
  }else if(randnum >= 0.45 && randnum < 0.80){
    return "Big Circle"
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
  if(randnum < 0.45){
    return "Big Happy"
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
  }else if (randnum >=.5 && randnum < .75){
    return "Hexagon"
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

