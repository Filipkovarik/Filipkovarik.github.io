var PhysMotor;

(function(){

class PhysMotor {
	constructor(){
		
	}
}

PhysMotor.$ = Object.create(null);

class PhysMotor.$.$Vector extends Array {
	constructor(){
		if(arguments[0][Symbol.iterator])
		    for (let a of ‎arguments[0])
		        this.push(a)
		else for (let a of arguments) this.push(a)
	}
    
	static ofLength(l,i){
		let v = new this;
		while (l--) v.push(i||0);
		return v;
	}
	
	static add (v1,v2) {
		if(v1.length!=v2.length) throw TypeError("Cannot perform PhysMotor.$.$Vector.add on $Vector[" + v1.length + "] and $Vector[" + v2.length + "]")
	}
}

class PhysMotor.$.Entity {
	constructor(){
		
	}
	tick(){
		
	}
}

class PhysMotor.$.EntityBodyStatic extends PhysMotor.$.Entity {
	
}

class PhysMotor.$.EntityBody extends PhysMotor.$.EntityBodyStatic {
	constructor(){
		
	}
}

class PhysMotor.$.EntityBodyDynamic extends PhysMotor.$.EntityBody {
	
}



}


})()