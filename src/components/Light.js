
const ambientlight = new WHS.AmbientLight({
  color:0xffffff,
  intensity:0.2
})

const pointLight = new WHS.PointLight( {
  color: 0xffffff,
  intensity: 2,
  distance: 300,

  position: [0,100,0]
})
export {ambientlight,pointLight}
