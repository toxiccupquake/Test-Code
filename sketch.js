



let snd1,snd2
let mgr;
let carrotBtn;
let fowlBtn;
let brontiBtn;
let bg;


function preload() {
  snd1 = loadSound("assets/jurassic_park_theme.mp3");
  snd2 = loadSound("assets/dino_roar.mp3");

  bg = loadImage("assets/jurassic_bg.jpg");
}//-------------------------END OF PRELOAD--------------------------------


function setup() {
  createCanvas(800,800);
  
  //SCENE MANAGER
  mgr = new SceneManager();

  //SCENES
  mgr.addScene(TH_Intro);
  mgr.addScene(TH_Main);
  mgr.addScene(TH_Help);

  //SCENE SHOWN
  mgr.showScene(TH_Intro);

  //CARROT BUTTON
  createGui();
    carrotBtn = createButton("", 60,100,180,180);
        carrotBtn.setStyle({
            fillBg: color(0,0),
            fillBgHover: color(0,0),
            fillBgActive: color(0,0),

            strokeBg: color(0,0),
            strokeBgHover: color(0,0),
            strokeBgActive: color(0,0),

            fillLabel: color(0,0),
            fillLabelHover: color(0,0),
            fillLabelActive: color(0,0)
        });


    //FOWL BUTTON
    createGui();
        fowlBtn = createButton("", 570,180,180,180);
            fowlBtn.setStyle({
                fillBg: color(0,0),
                fillBgHover: color(0,0),
                fillBgActive: color(0,0),

                strokeBg: color(0,0),
                strokeBgHover: color(0,0),
                strokeBgActive: color(0,0),

                fillLabel: color(0,0),
                fillLabelHover: color(0,0),
                fillLabelActive: color(0,0)
        });


    //BRONTI BUTTON
    createGui();
        brontiBtn = createButton("", 340,50,420,370);
            brontiBtn.setStyle({
                fillBg: color(0,0),
                fillBgHover: color(0,0),
                fillBgActive: color(0,0),

                strokeBg: color(0,0),
                strokeBgHover: color(0,0),
                strokeBgActive: color(0,0),

                fillLabel: color(0,0),
                fillLabelHover: color(0,0),
                fillLabelActive: color(0,0)
        });
}//------------------------------END OF SETUP------------------------------


function draw() {
    background(220);
    
    mgr.draw(); //SCENE MANAGER
    drawGui(); //P5.TOUCHGUI
}//-----------------------------END OF DRAW------------------------------


function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}//------------------------END OF MOUSEPRESSED-----------------------------------


function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( TH_Intro );
            break;
        case '2':
            mgr.showScene( TH_Main );
            break;
        case '3':
            mgr.showScene( TH_Help );
            break;
        case 'h':
            mgr.showScene( TH_Help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}//----------------------------END OF KEYPRESSED-------------------------------
