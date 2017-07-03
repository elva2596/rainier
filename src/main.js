
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
abdomen.addTo(app).then(abdomen=>{
	mouseModule.track(abdomen)
	abdomen.on('click',()=>{
		alert(123)
	})
})
console.log(mouseModule.mouse)

app.start()
