
const carapaceTexture = new WHS.TextureModule({
  url: `/static/models/ShuFu/Carapace_Diffuse.png`
}).textures[0][1];

const abdomenTexture = new WHS.TextureModule({
  url: `/static/models/ShuFu/Abdomen_Diffuse.png`
}).textures[0][1];

const tentacleTexture =  new WHS.TextureModule({
  url: `/static/models/ShuFu/Tentacle_Diffuse.png`
}).textures[0][1];

const footTexture = new WHS.TextureModule({
  url:`/static/models/ShuFu/Foot_Diffuse.png`
}).textures[0][1]

const ironPlateTexture = new WHS.TextureModule({
  url:`/static/models/IronPlate/PlateMaterial_Specular.png`
}).textures[0][1]
export {
  carapaceTexture,
  abdomenTexture,
  tentacleTexture,
  footTexture,
  ironPlateTexture
}
