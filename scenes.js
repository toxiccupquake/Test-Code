




let rexxiX = 0;
let speed = 4.5;
let flip = 1;


function TH_Intro() {
    //SOUND
    this.enter = function() {
        if (snd2.isPlaying()) {
            snd2.stop();
        }
    
        if (!snd1.isPlaying()) {
            snd1.loop();
        }
    }

    this.draw = function() {
    //BACKGROUND
    image(bg, 0,0, width, height);

    //TEXT
    textSize(40); 
    fill(255);
        text("Rexxi is very hungry", 240,60);
        text("Click the carrot to feed him", 210,120);
        TH_Rexxi(rexxiarr,rexxiX,330,0,0.6,flip);
            rexxiX += speed;

            //right
            if(rexxiX >= width) {
                rexxiX = width;
                speed *= -1;
                flip *= -1;
            }
            //left
            if(rexxiX <= 0) {
                rexxiX = 0;
                speed *= -1;
                flip *= -1;
            }
        //BUTTON
        TH_Carrot(carrotarr,30,120,0,0.45);


    }//------------------------END OF THIS.DRAW-------------------------

    //MOUSE PRESSED
    this.mousePressed = function() {
        if (carrotBtn.isPressed) {
            mgr.showScene(TH_Main);
        }
    }
}//-------------------END OF INTRO-----------------------------------


function TH_Main() {
    //SOUND
    this.enter = function() {
        if (snd1.isPlaying()) {
            snd1.stop();
        }

        if (!snd2.isPlaying()) {
            snd2.loop();
        }
    }

    this.draw = function() {
        background(0);

        //TEXT
        textSize(40);
        fill(255);
            text("Oh no...", 50,100);
            text("You must have fed him the wrong food.", 90,150);
            text("Click the fowl to get help", 120,210);

        //SHAKE 
        let shakeX = random(-6,6);
        let shakeY = random(-6,6);
            TH_Rexxi(rexxiarr,90 + shakeX,140 + shakeY,45,5);

        //BUTTON
        TH_Fowl(fowlarr, 570,180,0,0.45);

    }//--------------------END OF DRAW---------------------------------------
     
    //MOUSE PRESSED
    this.mousePressed = function() {
        if (fowlBtn.isPressed) {
            mgr.showScene(TH_Help);
        }
    }
}


function TH_Help() {
    //SOUND
    this.enter = function() {
        if (snd2.isPlaying()) {
            snd2.stop();
        }
    
        if (!snd1.isPlaying()) {
            snd1.loop();
        }
    }

    this.draw = function() {
        background(174,242,235);

        //TEXT
        textSize(40);
        fill(59,57,150);
            text("Press 1,2, or 3 to get to different scenes.", 10,450);
            text("Click on the carrot to feed the hungry Rexxi.", 10,515);
            text("Click on H for the help screen.", 10, 580);
        
        //TEXT 2
        textSize(25);
        fill(59,57,150);
            text("Click on Bronti to go back", 340,40);
            text("I used p5.touchgui as my third library to create the buttons.", 10, 790);

        //BUTTON
        TH_Bronti(brontiarr, 340,50,-10,0.8);
    }//------------------------------END OF DRAW

    //MOUSE PRESSED
    this.mousePressed = function() {
        if (brontiBtn.isPressed) {
            mgr.showScene(TH_Intro);
        }
    }
}