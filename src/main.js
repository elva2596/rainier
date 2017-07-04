
import {
	sceneModule,
	cameraModule,
	renderModule,
	controlsModule,
	mouseModule
} from './modules/BaseModules';

import {
	abdomen,
	ironPlate,
	ambientlight,
	pointLight
} from './components';

const app = new WHS.App([
	new WHS.ElementModule(),
	sceneModule,
	cameraModule,
	renderModule,
	new WHS.ResizeModule(),
	controlsModule,
	mouseModule
]);
ironPlate.addTo(app)
ambientlight.addTo(app)
pointLight.addTo(app)
abdomen.addTo(app)
mouseModule.track(abdomen)
abdomen.on('mousedown',(n,e,l)=>{
	controlsModule.controls.enabled = false
	console.log("mousedown")
})
abdomen.on('mousemove',function (){
	console.log(abdomen.position)
	console.log("mousemove")
})
abdomen.on("mouseup",()=>{
	controlsModule.controls.enabled = true;
	console.log("mouseup")
})
app.start()
