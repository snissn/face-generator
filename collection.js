
window.addEventListener('load', function() {
  collection()
});


function display_shapes(shapes){
  let template=''
  shapes.assets.forEach( (shape) => {
    template += ` <iframe src="${shape.animation_url}" width=420 height=500></iframe> `
  });
  return template
}

async function get_shapes(address){
  const url = `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=0x8323dcbf8e1e460f8cb5822cb4bf562b44653ded&order_direction=desc&offset=0&limit=20`
  const call = await fetch(url)
  const ret = await call.json()
  console.log(ret)
  return display_shapes(ret)
}


async function collection(){
  await window.ethereum.enable()
  const address=window.ethereum.selectedAddress
  document.getElementById("share_button").href=`https://shapefaces.com/share.html?address=${address}`
  window.ethereum.on('accountsChanged', async function (accounts) {
    await collection()
  })

  const template = await get_shapes(address)

  document.getElementById("collection").innerHTML=template
  return


  const provider = new ethers.providers.InfuraProvider(null,'6851b8e47b8b40e8bc174d3dae71a9a2')
  const contract = get_contract()
  const contractsigner = contract.connect(provider)
  const x=  await contractsigner.getMintCount();
  document.getElementById("sales").innerHTML=977-x.toString()

}
