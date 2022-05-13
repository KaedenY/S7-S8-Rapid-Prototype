let config = {
    type: Phaser.CANVAS,
    width: 1136,
    height: 640,
    autoCenter: true,
    scene: [Title, Play],
};

let tap, spacebar;

let game = new Phaser.Game(config);
