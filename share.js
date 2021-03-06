window.addEventListener('load', function() {
  collection()
});


function display_traits(traits){
  var template = ''
  traits.forEach((data) =>{
    template += `
<div class="columns has-text-left	 p-0">


  <div class="column p-0">

      <span class="title is-5">
      ${data.trait_type}:
      </span>
  </div>
  <div class="column p-0">
      <span class="subtitle is-5">


      <span>${data.value}</span>
      <span>(${data.trait_count})</span>
      </span>
  </div>
     
      </div>`
  })
  return template

}
function display_shapes(shapes){
  let template=''
  shapes.forEach( (shape) => {
    const display_trait = display_traits(shape.traits)
    template += `

<div class="columns has-text-left	 p-0">
  <div class="column p-0">
      <iframe src="${shape.animation_url}" width=420 height=500></iframe> 
  </div>
  <div class="column p-0 pt-6" style="padding-top:150px !important;">
      ${display_trait}
      <a  href="https://opensea.io/assets/0x8323dcbf8e1e460f8cb5822cb4bf562b44653ded/${shape.token_id}"  target="_blank"  style="display:inherit;">
        <span style="color: var(--github); height:30px;">
          <img src="Logomark-Blue.png" style="height:30px;border:0;" />
        </span>
        </a>
  </div>
</div>

      `
  console.log('hi',shape)
  });
  return template
}

async function get_shapes(address){
  let nfts = []
  let page=0;
  const limit = 50
  while(nfts.length >= page){
    console.log("while")
    console.log(page)
    const url = `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=0x8323dcbf8e1e460f8cb5822cb4bf562b44653ded&order_direction=desc&offset=${page}&limit=${limit}`
    const call = await fetch(url)
    const ret = await call.json()
    nfts = nfts.concat(ret.assets)
    page+=limit
  }
  let template = display_shapes(nfts)
  document.getElementById("collection").innerHTML=template
}


async function collection(){
  const  params= decodeURI(window.location.search)
  .replace('?', '')
  .split('&')
  .map(param => param.split('='))
  .reduce((values, [ key, value ]) => {
    values[ key ] = value
    return values
  }, {})

  const address=params.address
  document.getElementById("address").innerHTML=address.slice(0,8)
  if(window.ethereum){
  window.ethereum.on('accountsChanged', async function (accounts) {
    await collection()
  })
  }

  const template = await get_shapes(address)

  return


  const provider = new ethers.providers.InfuraProvider(null,'6851b8e47b8b40e8bc174d3dae71a9a2')
  const contract = get_contract()
  const contractsigner = contract.connect(provider)
  const x=  await contractsigner.getMintCount();
  document.getElementById("sales").innerHTML=977-x.toString()

}

