var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function chainsaw(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
    }

    chainsaw(400, 500);
    chainsaw(600, 500);
    chainsaw(800, 500);

    function enemies(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      enemy.velocityX = -1;
      enemy.rotationalVelocity = 10;

      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      };

      game.addGameItem(enemy);
    }

    enemies(500, 530);
    enemies(1000, 530);
    enemies(1500, 530);
    enemies(950, 530);
    enemies(2000, 530);
    enemies(1750, 530);
    enemies(2200, 530);

      function createReward(x, y) {
        var reward = game.createGameItem("reward", 25);
        var rewardImage = draw.bitmap("img/gem.png");
        rewardImage.x = -25;
        rewardImage.y = -25;
        reward.addChild(rewardImage);

        reward.x = x;
        reward.y = y;
        reward.velocityX = -1;
        reward.rotationalVelocity = 5;

        // When HalleBot collides: try to heal, otherwise give score, then disappear
        reward.onPlayerCollision = function () {
        if (typeof game.changeIntegrity === "function") {
          game.changeIntegrity(1);
        } else {
          game.increaseScore(100);
        }
        reward.fadeOut();
        };

        // When shot: disappear and give score
        reward.onProjectileCollision = function () {
        game.increaseScore(100);
        reward.fadeOut();
        };

        game.addGameItem(reward);
      }

      // place a few rewards in the level
      createReward(1300, 500);
      createReward(2100, 500);
      createReward(2600, 500);

      // End-of-level marker
      function createMarker(x, y) {
        // large hit zone so HalleBot can't miss it
        var marker = game.createGameItem("marker", 80);
        var markerImage = draw.bitmap("img/door.png");
        markerImage.x = -40;
        markerImage.y = -40;
        marker.addChild(markerImage);

        marker.x = x;
        marker.y = y;
        // move left like other items so it comes into view at the end
        marker.velocityX = -1;

        // When HalleBot collides: move to next level
        marker.onPlayerCollision = function () {
        marker.fadeOut();
        startLevel();
        };

        // When shot: also move to next level
        marker.onProjectileCollision = function () {
        marker.fadeOut();
        startLevel();
        };

        game.addGameItem(marker);
      }

      // place a single end-of-level marker beyond all other items so nothing else
      // will be on screen when it's reached/shot
      createMarker(3200, groundY - 40);
    enemies(1200, 530);

    function startLevel() {
      // TODO 13 goes below here

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
