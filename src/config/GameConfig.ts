import Phaser from 'phaser';
import { BootScene } from '../scenes/BootScene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    backgroundColor: '#1d1d1d',

    parent: 'game',

    scene: [
        BootScene
    ]
};