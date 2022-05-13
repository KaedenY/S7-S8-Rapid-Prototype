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
        this.Roald = new this.player(this, game.config.width/2, game.config.height/2, 'placeholder_blue');
    }


    update() {
        return;
    }
}