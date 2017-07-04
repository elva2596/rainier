export default class SimpleModule{
  a = 123
  constructor(params = {}){
    this.params = Object.assign({
      color:0xff0000
    },params)
  }

  bridge = {
    material(inputMaterial,self){
      const outputMaterial = inputMaterial.clone();
      outputMaterial.color.setHex(self.params.color);
      return outputMaterial;
    }
  }
  /*
    integrate用来改变this指向
  */
  integrate(self){
    this.alertRandom = function (){//selef 指向Module
      alert(self.a)
    }
  }
}
