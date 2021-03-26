
class Facade {
    create() {
        
    }

    delete() {

    }

    update() {
        
    }
}


function Model(target: any) {

    return function(this: any) {
        Object.assign(this, new target);
        Object.assign(this, new Facade)
        this.ad = 123;
    }
}

export default Model;