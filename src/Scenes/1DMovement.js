//Behnood Fereydouni ID#1913257
class Movement extends Phaser.Scene {
    constructor() {
        super("movementScene");
        this.my = {sprite: {}}; //create object to hold sprite bindings

        this.player_X = 200;    //set starting player sprite x position
        this.player_Y = 550;    //set starting player sprite y position

        this.flash_X = this.player_X;  //set starting x position of "Muzzle flash" the same as player sprite's
        this.flash_Y = this.player_Y - 50; //set starting y position of "Muzzle flash" linked to player sprite

        this.bubble_X = this.player_X; //set starting x positing of bubble bullet linked to player's
        this.bubble_Y = this.player_Y -100; //set starting y positing of bubble bullet linked to player's

        this.aKey = null;   //key polling for 'a' key (will move player sprite left)
        this.leftArrow = null;  //key polling for '<-' key (will move player sprite left)
        this.dKey = null;   //key polling for 'd' key (will move player sprite right)
        this.rightArrow = null; //key polling for '->' key (will move player sprite right)
        this.bKey = null;   //key polling for 'b' key (will shoot bubbles)

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        
        this.load.setPath("./assets");  //connect assets files content
        this.load.atlasXML("fishSprites", "fishSpritesheet.png", "fishSpritesheet.xml");    //load and link the xml and png from our kenny asset file
        //load text giving direction for controls
        document.getElementById('description').innerHTML = '<h2>1DMovement Lecture Assignment<br>A or Left Arrow - move left // D or Right Arrow - move right<br>B - Shoot Bubble</h2>'
    }

    

    create() {
        let my = this.my;   // create an alias to this.my for readability
        
        my.sprite.player = this.add.sprite(this.player_X, this.player_Y, "fishSprites", "fishTile_077.png");    //add blue fish as player sprite
        my.sprite.player.rotation = Math.PI / -2; //rotate player sprite 90 degrees counter clockwise
        my.sprite.flash = this.add.sprite(this.flash_X, this.flash_Y, "fishSprites", "fishTile_046.png");   //add 'muzzle flash' sprite
        my.sprite.flash.visible = false;    //flash starts invisible

        //use phaser keyboard for key polling
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);    // 'a' key   
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    // 'd' key
        this.leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT); //left arrow key
        this.rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);  //right arrow key
        this.bKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);    //'b' key
    }

    update() {
        let my = this.my;

        if(this.aKey.isDown || this.leftArrow.isDown || this.aKey.JustDown || this.leftArrow.JustDown) {
                
                //if player is near left wall when 'a' or left arrow key pressed, dont move player sprite
                if(my.sprite.player.x < 10) {
                    my.sprite.player.x += 0;
                    my.sprite.flash.x += 0;
                }else {
                    my.sprite.player.x -= 5;
                    my.sprite.flash.x -= 5;
                }



        }

        if(this.dKey.isDown || this.rightArrow.isDown || this.dKey.JustDown || this.rightArrow.JustDown) {
                
                //if player is near left wall when 'a' or left arrow key pressed, dont move player sprite
                if(my.sprite.player.x > 790) {
                    my.sprite.player.x += 0;
                    my.sprite.flash.x += 0;
                }else {
                    my.sprite.player.x += 5;
                    my.sprite.flash.x += 5;
                }
        }
    }
}