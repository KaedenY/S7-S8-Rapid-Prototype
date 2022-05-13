class slug extends Phaser.GameObjects.Sprite{
    constructor(scene, x, texture) {
        super("slug");
        this.moveSpeed = 1;

    }

    update() {
        this.x -= this.moveSpeed;
    }
}