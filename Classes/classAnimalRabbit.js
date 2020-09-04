class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} can run with ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} can stop`);
    }
}

class Rabbit extends Animal{
    constructor(name) {
        super(name);
    }

    hide() {
        console.log(`${this.name} hide`);
    }

    stop() {
        super.stop();
        this.hide();
    }
}

const redRabbit = new Rabbit('Red Vasia');
redRabbit.hide();
redRabbit.stop();
