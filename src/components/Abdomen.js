import {
  carapaceTexture,
  abdomenTexture,
  tentacleTexture,
  footTexture
} from '../materials'
const abdomen = new WHS.Importer({
  loader: new THREE.OBJLoader(),
  url:'/static/models/ShuFu/ShuFu.obj',
  parser(group) {
    group.children.forEach((mesh)=>{
      switch(mesh.name){
        case "Carapace":
          mesh.material.map = carapaceTexture;
          break;
        case "Abdomen":
          mesh.material.map = abdomenTexture;
          break;
        case "Tentacle":
          mesh.material.map = tentacleTexture;
          break;
        case "Foot":
          mesh.material.map = footTexture
      }
    })
    return group;
  },

  position: [-50, 0, 0],
  scale:[20,20,20]
})

export {abdomen}
