class Play extends Phaser.Scene {
    constructor() {
        super("Play");
    }

    preload() {
        this.preload.image("placeholder_black", 'assets/placeholder_black.png');
        this.preload.image('placeholder_grey', 'assets/placeholder_grey');
        this.preload.image('placeholder_blue', 'assets/placeholder_blue.png');
    }

    create() {
        //this.background = 
    }

    update() {}
}