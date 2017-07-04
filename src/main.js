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

let held = false; // this is what I mean should be controlled by a whs module
// you don't want those flag all over your code.
// so that you can do things like abdomen.isHeld()
abdomen.on('mousedown', (n,e,l)=>{
	held = true;
	controlsModule.controls.enabled = false
	// console.log("mousedown")
})

console.log(mouseModule)
abdomen.on('mousemove',() => {
	if(held) { // abdomen.isHeld() would be cleaner, right?
		abdomen.position.copy(abdomen.position.add(mouseModule.project().sub(abdomen.position)))
		// abdomen.position.x = abdomen.position.x + mouseModule.project().sub(abdomen.position).x
		// abdomen.position.y = abdomen.position.y + mouseModule.project().sub(abdomen.position).y
		// TODO - figure out how to support Z movement. it will be interesting..
		console.log("mousemove")
	}
})

abdomen.on("mouseup",() => {
	held = false; // abdomen.setHeld(false)
	controlsModule.controls.enabled = true; // here too, with a drag module you could let the module disable
	// the orbit control module, because whs module can access other modules defined in the app :)
	console.log("mouseup")
})

// abdomen.on("mouseout",() => {
// 	held = false;
// 	controlsModule.controls.enabled = true;
// 	console.log("mouseout")
// })
app.start()
