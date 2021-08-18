
function build_traits(seed){
  const data = {}
  Math.seedrandom(seed);
  data['Gender'] = build_gender()
  if(data['Gender'] == "Female"){
    data['Head'] = "Big Hair"
    data['Face'] = build_female_face()
  }else{
    data['Head'] = build_male_hair()
    data['Face'] = build_male_face()
  }
  data['Eye'] = build_eye()
  data['Mouth'] = build_mouth()
  data['Nose'] = build_nose(data)


  data['Eye Color'] = getRandomEyeColor()
  data['Mouth Color'] = getRandomBackground()
  data['Face Color'] = getRandomBackground()
  if(data['Nose'] == 'Triangle' || data['Nose'] == "3D Triangle"){
    data['Nose Color'] = getRandomBackground()
  }
  data['Background Color'] = getCrazyRandomBackground()
  return data
}

function getCrazyRandomBackground() {
    var backgroundpicker = Math.floor(Math.random() * 25 + 1);

    let colors = ["white", "white", "white", "#0528F2", "#4CB1F7", "#FFC700", "#6B1CEB", "#E01B32", "#01EA05"];

    if (backgroundpicker == 1) {
      return "Galaxy"
    } else if (backgroundpicker == 2) {
      return "Pizza"
    } else if (backgroundpicker == 3) {
      return "Rainbow"
    } else {
        return colors[Math.floor(Math.random() * colors.length)];
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

    return colors[Math.floor(Math.random() * colors.length)];
}


function build_nose(data){
  if(data['Face'] == "Triangle"){
    const randnum = Math.random();
    if(randnum < 0.06){
      return "3D Triangle"
    }
  }
  return build_nose_normal()
}

function build_nose_normal(data){
  const randnum = Math.random();
  if(randnum < 0.06){
    return "Triangle";
  }else if(randnum >= 0.06 && randnum < 0.53){
    return "Left Pointing"
  }else if(randnum >= 0.53 ){
    return "Right Pointing"
  }
}

function build_female_face(){
  const randnum = Math.random();
  if(randnum < 0.20){
    return "Small Circle"
  }else{
    return "Medium Circle"
  }
}

function build_male_face(){
  const randnum = Math.random();
  if(randnum < 0.45){
    return "Medium Circle"
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
  const randnum = Math.random();
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
  const randnum = Math.random();
  if(randnum < 0.5){
    return "Circle"
  }else{
    return "Square"
  }
}

function build_gender(){
  const randnum = Math.random();
  if(randnum < 0.25){
    return "Female"
  }else{
    return "Male"
  }
}

function build_male_hair(){
  const randnum = Math.random();
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
