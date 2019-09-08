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
  constructor(name, gender, age, illness) {
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
      if (player1.spoons > 0) alert("you made it through another week.")
      else alert("you suffered a flare up, got a cold and were out of work for a week")
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
  player1.spoons -= currentScene.yes
  document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
  document.getElementById("response").setAttribute("style", "opacity: 1")
  gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
  setAvi(player1);
   scene += 1
   setTimeout(function(){levels(scenarios, player1)}, 1000)
}
//handles everything that happens on button no click
function handleNo(scenarios, player1, currentScene) {
  player1.spoons -= currentScene.no
  document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
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