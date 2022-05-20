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
         // adding bg images
         this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, "bg").setOrigin(0);
         this.add.tileSprite(0, 0, game.config.width, game.config.height, "sparkles").setOrigin(0);
         this.logs = this.add.tileSprite(0, 0, game.config.width, game.config.height, "logs").setOrigin(0);
         this.floor = this.add.tileSprite(0, 0, game.config.width, game.config.height, "floor").setOrigin(0);
         //this.floor1 = this.physics.add.sprite(0, 0, game.config.width, game.config.height, "floor").setOrigin(0);
         this.Roald = new player(this, game.config.width/2, 450, "rolypoly");
         this.slug1 = new slug(this, game.config.width*1.5, 450, 'slug').setOrigin(0,0);
         this.slug2 = new slug(this, game.config.width*2, 450, 'slug').setOrigin(0,0);
         //this.slug.moveSpeed = 2;
         //this.slug2 = new enemy(game.config.width*2, 526, 'slug').setOrigin(0,0);
         //this.slug2.moveSpeed = 2;
 
         this.SCROLL_SPEED = 2; // for parallaxe

         // camera fade
         this.cameras.main.fadeIn(350,100,100,100);
        
         //Game over flag
         //this.gameOver = false;
    }


    update() {
        // parallax
        this.bg.tilePositionX += this.SCROLL_SPEED;
        this.logs.tilePositionX += this.SCROLL_SPEED+1;
        this.floor.tilePosition1 += this.SCROLL_SPEED-1;
        this.slug1.update();
        this.slug2.update();
        this.Roald.update();
        /*
        if(!this.gameOver){
            this.slug1.update();
            this.player.update();
            this.slug2.update();
            //guh
        }
        */
    }
}