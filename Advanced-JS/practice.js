// objects
// references

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

// context vs scope
// now 'this' is the object for oject4
const object4 ={
    a: function(){
        console.log(this)
    }
}

// instantiation
class Player{
    constructor(name, type){
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log('Hi I am $(this.name), I am a $(this.type)');
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('Wizard', this);
    }
    play(){
        console.log('Wee I am a $(this.type)');
    }
}

const wizard1 = new Wizard('Anii', 'Killer');
const wizard2 = new Wizard('Kenny', 'Healer');

//  https://sdras.github.io/object-explorer/