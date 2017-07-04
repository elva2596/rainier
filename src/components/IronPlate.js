import {ironPlateTexture} from '../materials'
const ironPlate = new WHS.Importer({
  loader: new THREE.OBJLoader(),
  url:'/static/models/IronPlate/IronPlate.obj',
  parser(group){
    group.children[0].material.map =ironPlateTexture
    return group
  },
  position:[50,0,0]
})
export {ironPlate}
