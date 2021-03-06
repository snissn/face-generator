var url2png = require('url2png')('P416DD2AFB6A2F9', 'S_6FB8C32653FF0');


const express = require('express');
const app = express();
const chain = require("./chain")

const traits = require("./traits")
const description = "Shape Faces is a generative blockchain based art project constructing backgrounds and beings using fundamental geometric building blocks. Mathematical objects are the fundamental building blocks of our physical reality, and geometric shapes make up the background and foreground of Shape Faces NFTs. Shape Faces builds and conjures exciting and personable backgrounds and characters from the mathematical void of empty space and geometry."

function getscreenshot(url){
  var options = {
    viewport : '410x410',
    thumbnail_max_width : 410,
    protocol: 'http',
    say_cheese:true
  }
  return url2png.buildURL(url, options);
}

app.get('/favicon.ico',  async (req, res) =>  {
  res.json({});
})

app.get('/:address/:tokenid',  async (req, res) =>  {
    const tokenID = req.params.tokenid;
    const address = req.params.address;
  const seed = await chain.getSeed(address,tokenID);
  const traits_array = []
  const traits_dict = traits.build_traits(seed);
  delete traits_dict['y_speed']
  delete traits_dict['x_speed']
  if(traits_dict['Polygon Eyes Sides']){
    traits_dict['Polygon Eyes Sides'] = traits_dict['Polygon Eyes Sides'].toString()
  }
  if(traits_dict['Polygon Face Sides']){
    traits_dict['Polygon Face Sides'] = traits_dict['Polygon Face Sides'].toString()
  }
  for(var key in traits_dict){
    const value = traits_dict[key]
    if(key.split("Eyebrow").length > 1 ||key.split("_").length > 1 ||  value.split("#").length > 1){
      continue;
    }
    traits_array.push({"trait_type":key,"value":value})
  }

  

  const data = {
    "name": "Shape Faces #"+tokenID,
    "description": description,
    "traits":traits_array,
    "tokenID":tokenID,
    "seed":seed,
    "animation_url":"https://shapefaces.com/build.html#"+seed,
    "image":getscreenshot("https://www.shapefaces.com/image.html?seed="+seed+"&version=sept-20-2021")
  }
  res.json(data);
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});

