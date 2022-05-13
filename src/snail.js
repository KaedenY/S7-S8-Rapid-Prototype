class snail extends Phaser.GameObjects.Sprite{
    constructor() {
        super("snail");
        this.moveSpeed = 2;
    }

    update() {
        this.x -= this.moveSpeed;
    }
}