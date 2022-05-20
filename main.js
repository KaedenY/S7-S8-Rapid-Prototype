let config = {
    type: Phaser.CANVAS,
    width: 1136,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    autoCenter: true,
    scene: [Title, Play],
};

let tap, spacebar;

let game = new Phaser.Game(config);
game.settings = {
    gravity: 500,
    jumpPower: 300
}
