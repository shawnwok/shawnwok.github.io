$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 150, 1150, 20);
    createPlatform(1450, 250, -1200, 10);
    createPlatform(1000, 150, 10, 495);
    createPlatform(1000, 150, 10, 495);
    createPlatform(900, 350, 10, 525);
    createPlatform(800, 350, 10, 525);
    createPlatform(700, 350, 10, 525);
    createPlatform(600, 350, 10, 525);
    createPlatform(500, 350, 10, 525);
    createPlatform(400, 350, 10, 525);
    createPlatform(300, 350, 10, 525);
    createPlatform(200, 350, 10, 525);
    createPlatform(100, 350, 10, 515);
    createPlatform(0, 150, 25, 515);
    createPlatform(-100, 150, 25, 515);
    createPlatform(901, 625, 15, .1);
    createPlatform(985, 485, 15, .1);




    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("diamond", 400, 170, 0.05, 0.7);
    createCollectable("diamond", 600, 170, 0.05, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("right", 180, 1000);
    //createCannon("left", 225, 2000);
   // createCannon("left", 400, 360);
    //createCannon("right", 500, 1996);
    //createCannon("right", 600, 360);
    createCannon("left", 625, 1998);
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
