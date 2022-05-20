class Play extends Phaser.Scene {
    constructor() {
        super("Play");
    }

    preload() {
        this.load.image("bg", "./assets/bg.jpg");
        this.load.image("floor", "./assets/bg_floor.png");
        this.load.image("logs", "./assets/bg_logs.png");
        this.load.image("sparkles", "./assets/bg_sparkles.png");
    }

    create() {
        // this.Roald = new this.player(this, game.config.width/2, game.config.height/2, 'placeholder_blue');
         // adding bg images
         this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, "bg").setOrigin(0);
         this.add.tileSprite(0, 0, game.config.width, game.config.height, "sparkles").setOrigin(0);
         this.logs = this.add.tileSprite(0, 0, game.config.width, game.config.height, "logs").setOrigin(0);
         this.floor = this.add.tileSprite(0, 0, game.config.width, game.config.height, "floor").setOrigin(0);
 
         this.SCROLL_SPEED = 2; // for parallax

         // camera fade
         this.cameras.main.fadeIn(350,100,100,100);
        
    }


    update() {
        // parallax
        this.bg.tilePositionX += this.SCROLL_SPEED;
        this.logs.tilePositionX += this.SCROLL_SPEED+1;
        this.floor.tilePositionX += this.SCROLL_SPEED+1;
    }
}