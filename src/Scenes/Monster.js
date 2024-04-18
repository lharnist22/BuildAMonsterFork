class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.mouthvisible = true;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.arm1 = this.add.sprite(this.bodyX + 100, this.bodyY+50, "monsterParts", "arm_blueD.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX - 100, this.bodyY+50, "monsterParts", "arm_blueD.png");
        my.sprite.arm2.flipX = true;
        my.sprite.leg1 = this.add.sprite(this.bodyX + 45, this.bodyY+125, "monsterParts", "leg_blueD.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 45, this.bodyY+125, "monsterParts", "leg_blueD.png");
        my.sprite.leg2.flipX = true;
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-30, "monsterParts", "eye_blue.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+35, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthB = this.add.sprite(this.bodyX, this.bodyY+35, "monsterParts", "mouth_closed_fangs.png");
        //my.sprite.mouth = my.sprite.mouthA;
        my.sprite.largehorn1 = this.add.sprite(this.bodyX+40, this.bodyY-85, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.largehorn2 = this.add.sprite(this.bodyX-40, this.bodyY-85, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.largehorn2.flipX = true;
        my.sprite.mouthB.setVisible(false);


        this.input.keyboard.on("keydown", function(event){
            console.log(event.code);
            if (event.code === "KeyS"){
                my.sprite.mouth.setVisible(true);
                //this.mouthvisible = !this.mouthvisible;
                my.sprite.mouthB.setVisible(false);
            }
            if(event.code === "KeyF"){
                my.sprite.mouthB.setVisible(true);
                my.sprite.mouth.setVisible(false);
            }
        }
    )

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        this.input.keyboard.on("keydown", function(event){
            console.log(event.code);
            if (event.code === "KeyD"){
                //console.log(Object.keys(my.sprite));
                for(let key in my.sprite){
                    my.sprite[key].x += 0.01;
                }
            }
            if (event.code === "KeyA"){
               //console.log(Object.keys(my.sprite));
               for(let key in my.sprite){
                    my.sprite[key].x -= 0.01;
                }
            }
                //console.log(my.sprite.body.x);
                //var moveXbody = my.sprite.body.x + 0.01;
              
                
            }
            /*if(event.code === "KeyA"){
                my.sprite.mouthB.setVisible(true);
                my.sprite.mouth.setVisible(false);
            }*/
    )
       
    }

}