class enemy extends Phaser.gameobjects.Sprite{
    constructor() {
        super();
    }

    update() {
        this.x -= this.moveSpeed;
    }
}