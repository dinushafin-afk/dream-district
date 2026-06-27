import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {

    constructor() {
        super('BootScene');
    }

    create(): void {

        this.add.text(
            640,
            360,
            'Dream District\n\nVersion 0.1.0',
            {
                fontSize: '32px',
                color: '#ffffff',
                align: 'center'
            }
        ).setOrigin(0.5);

    }
}