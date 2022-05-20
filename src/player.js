class player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.setOrigin(0);
        scene.physics.add.existing(this);
        this.body.gravity.y = game.settings.gravity;
        tap = scene.input.activePointer;
    }
    
    update() {
        if(tap.isDown){
            this.setVelocityY(-game.settings.jumpPower);
        }
        if(spacebar.isDown){
            this.setVelocityY(-game.settings.jumpPower);
        }
    }
}