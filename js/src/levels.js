// Creates instance of player, with values, adds avatars depending on gender
document.querySelector("#letsGo").onclick = () => {
  let name = document.querySelector("#name").value 
  let gender = document.querySelector("#gender").value

  let player1 = new player(name, gender)
  document.getElementById("init").setAttribute("style", "display:none")
  document.querySelector("main").setAttribute("style", "display:flex")

  avatars(player1);
  levels(weekday, player1);
}
// Player class
class player {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  spoons = 0;
  day = 0;
}
// Creates Avatars to add to player object instance.
function avatars(player) {
  if (player.gender === "female") {
    player.happy = "../../assets/getavataaars/f-happy.svg";
    player.cry = "../../assets/getavataaars/f-cry.svg";
    player.dizzy = "../../assets/getavataaars/f-dizzy.svg";
    player.puke = "../../assets/getavataaars/f-puke.svg"
  }
  else if (player.gender === "male") {
    player.happy = "../../assets/getavataaars/m-happy.svg";
    player.cry = "../../assets/getavataaars/m-cry.svg";
    player.dizzy = "../../assets/getavataaars/m-dizzy.svg";
    player.puke = "../../assets/getavataaars/m-puke.svg"
  }
  else {
    player.happy = "../../assets/getavataaars/nb-happy.svg";
    player.cry = "../../assets/getavataaars/nb-cry.svg";
    player.dizzy = "../../assets/getavataaars/nb-dizzy.svg";
    player.puke = "../../assets/getavataaars/nb-puke.svg"
  }
}
// picks a random number of spoons values 6-12
function randomSpoons() {
  let spoonValues = [6,7,8,9,10,11,12]
  let random = Math.floor(Math.random() * spoonValues.length)

  return spoonValues[random]
}
//changes the avatar depending on # of spoons
function setAvi(player) {
  if (player.spoons > 1) {
    document.getElementById("avatar").setAttribute("style", `background: center / contain no-repeat url(${player.happy}`)
  }
  else if (player.spoons === 0 || player.spoons === 1) {
    document.getElementById("avatar").setAttribute("style", `background: center / contain no-repeat url(${player.dizzy}`)
  }
  else document.getElementById("avatar").setAttribute("style", `background: center / contain no-repeat url(${player.puke}`)
}

// sets up variables to reference in gameplay
let gameBoard = document.getElementById("gameBoard")
let prompt = document.getElementById("prompt")
let gameScore = document.getElementById("gameHead")
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");

let scene = 1;
//handles progression through scenes
function levels(scenarios, player1) {
  let currentScene = scenarios[scene]

  document.getElementById("response").setAttribute("style", "opacity: 0")

  // for weekdays
  if (player1.day <= 5) {
    if (scene === 1) {
      newDay(weekday, player1, currentScene)

      yesButton.onclick = () => {
        handleYes(weekday, player1, currentScene)
      }
      noButton.onclick = () => {
        handleNo(weekday, player1, currentScene);
      }
    }
    //during the day
    else if (scene < scenarios.length) {
      newScene(weekday, player1, currentScene);

      yesButton.onclick = () => {
        handleYes(weekday, player1, currentScene)
      }
      noButton.onclick = () => {
        handleNo(weekday, player1, currentScene);
      }
    }
    //last scene of the last weekday
    else if (scene === scenarios.length && player1.day === 5) {
      scene = 1;
      let currentScene = weekend[scene]

      newDay(weekend, player1, currentScene);

      yesButton.onclick = () => {
        handleYes(weekend, player1, currentScene)
      }
      noButton.onclick = () => {
        handleNo(weekend, player1, currentScene);
      }

    }
    //last scene of the day
    else if (scene === scenarios.length) {
      scene = 1
      let currentScene = weekday[scene]
      newDay(weekday, player1, currentScene)

      yesButton.onclick = () => {
        handleYes(weekday, player1, currentScene)
      }
      noButton.onclick = () => {
        handleNo(weekday, player1, currentScene);
      }
    }
  }
  //for weekends//
  else if (player1.day === 6 || player1.day === 7) {
    let currentScene = weekend[scene]
    document.getElementById("response").setAttribute("style", "opacity: 0")
    //first day of the week
    if (scene === 1) {
      scene = 1
      let currentScene = weekday[scene]
      newDay(weekend, player1, currentScene);

      yesButton.onclick = () => {
        handleYes(weekend, player1, currentScene)
      }
      noButton.onclick = () => {
        handleNo(weekend, player1, currentScene);
      }
    }
    //during the day
    else if (scene < scenarios.length) {
      newScene(weekend,player1, currentScene);

      yesButton.onclick = () => {
        handleYes(weekend, player1, currentScene)
      }
      noButton.onclick = () => {
        handleNo(weekend, player1, currentScene);
      }
    }
    else if (scene === scenarios.length && player1.day < 7) {
      scene = 1
      let currentScene = weekend[scene]
      newDay(weekend, player1, currentScene);

      yesButton.onclick = () => {
        handleYes(weekend, player1, currentScene)
      }
      noButton.onclick = () => {
        handleNo(weekend, player1, currentScene);
      }
    }
    // final scene of final day
    else if (scene === weekend.length && player1.day === 7) {
      endResult(player1)
    }
  }
}
//handles going from day to day
function newDay(scenarios, player1, currentScene){
  let newSpoons = randomSpoons();
  player1.spoons += newSpoons
  player1.day += 1
  setAvi(player1);

  document.getElementById("response").innerHTML = `+${newSpoons} <i class="fa fa-utensil-spoon"></i>`
  document.getElementById("response").setAttribute("style", "opacity: 1")
  setTimeout(function() {
    document.getElementById("response").setAttribute("style", "opacity: 0")
  }, 1000)

  gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
  gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
  prompt.innerHTML = `<p>${currentScene.text}</p>`
  yesButton.innerHTML = currentScene.buttonYes
  noButton.innerHTML = currentScene.buttonNo
}
//handles everything that happens on button yes click
function handleYes(scenarios, player1, currentScene) {
  player1.spoons += currentScene.yes
  document.getElementById("response").innerHTML = `${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
  document.getElementById("response").setAttribute("style", "opacity: 1")
  gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
  setAvi(player1);
   scene += 1
   setTimeout(function(){levels(scenarios, player1)}, 1000)
}
//handles everything that happens on button no click
function handleNo(scenarios, player1, currentScene) {
  player1.spoons += currentScene.no
  document.getElementById("response").innerHTML = `${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
  document.getElementById("response").setAttribute("style", "opacity: 1")
  gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
  setAvi(player1);
  scene += 1
  setTimeout(function(){levels(scenarios, player1)}, 1000)
}
//flips through to the next scene of the day
function newScene(scenarios, player1, currentScene) {
  gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
  gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
  prompt.innerHTML = `<p>${currentScene.text}</p>`
  yesButton.innerHTML = currentScene.buttonYes
  noButton.innerHTML = currentScene.buttonNo
  setAvi(player1);
}

function endResult(player1) {
  //win
  if (player1.spoons > 0) {
    document.getElementById("final").innerHTML = `You made it through another week.<br> Your final spoon count was ${player1.spoons}.<br><br>
    If this game helped you understand what it's like to live with chronic illness better, please <style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#000000 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 17px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/justlask"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>`
    document.getElementById("final").setAttribute("style", "display: block")
  }
  // "lose"
  else {
    document.getElementById("final").innerHTML = `You were not careful with your spoons and over exerted yourself. <br>Doing this could cause you to have a flare up.<br> Your final spoon count was ${player1.spoons}.<br><br>
    If this game helped you understand what it's like to live with chronic illness better, please <style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#000000 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 17px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/justlask"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>`
    document.getElementById("final").setAttribute("style", "display: block")
  }
}