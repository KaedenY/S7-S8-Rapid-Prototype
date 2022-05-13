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
        //this.background = this.add.tileSprite(0, 0, 1136, 640).setOrigin(0,0)


        //this.slug1 = new slug(stuff);
        //this.slug2 = new slug(stuff);
        
        //this.snail1 = new snail(stuff);
        //this.snail2 = new snail(stuff);


        //define keys
        //tap = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.m1);
        //space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.spacebar);

    }

    update() {}
}