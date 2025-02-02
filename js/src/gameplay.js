

// houses first version of levels before refactoring
// reduced js lines from 400+ to 200ish



// Creates instance of player, with values, adds avatars depending on gender
document.querySelector("#letsGo").onclick = () => {
  let name = document.querySelector("#name").value 
  let age = document.querySelector("#age").value
  let gender = document.querySelector("#gender").value
  let illness = document.querySelector("#illness").value

  let player1 = new player(name, gender, age, illness)
  document.getElementById("init").setAttribute("style", "display:none")
  document.querySelector("main").setAttribute("style", "display:flex")



  avatars(player1);
  levels(scenes, player1, yes);

}
// Player class
class player {
  constructor(name, gender, age, illness) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.illness = illness
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

function randomSpoons() {
  let spoonValues = [6,7,8,9,10,11,12]
  let random = Math.floor(Math.random() * spoonValues.length)

  return spoonValues[random]
}

//
  let gameBoard = document.getElementById("gameBoard")
  let prompt = document.getElementById("prompt")
  let buttons = document.querySelector(".buttons")
  let gameScore = document.getElementById("gameHead")
  let scene = 0;

  let yesButton = document.getElementById("yes");
  let noButton = document.getElementById("no");



function levels(scenarios, player1, value) {
  document.getElementById("response").setAttribute("style", "opacity: 0")
  // for weekdays
  if (player1.day <= 5) {

    let currentScene = scenes[scene]
    document.getElementById("response").setAttribute("style", "opacity: 0")

    if (scene === 0) {
      document.getElementById("avatar").setAttribute("style", `background: center / contain no-repeat url(${player1.happy}`)
      gameScore.innerHTML = `<p>Welcome to the Game of spoons ${player1.name}.</p>`
      gameBoard.setAttribute("style", `background: center / contain no-repeat url(${currentScene.background})`)
      prompt.innerHTML = `<p>Your goal is to make it through the week with ${player1.illness}. Think of spoons as your energy, take care of them, good luck.
      Are you ready?</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        scene += 1
        levels(scenes, player1, yes);

      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, no)
        }, 1000)
      }
    
    }
    else if (scene === 1) {
      let rando = randomSpoons()
      player1.spoons += rando
      player1.day = 1

      document.getElementById("response").innerHTML = `+${rando} <i class="fa fa-utensil-spoon"></i>`
      document.getElementById("response").setAttribute("style", "opacity: 1")
      setTimeout(function() {
        document.getElementById("response").setAttribute("style", "opacity: 0")
      }, 1000)


      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
        setAvi(player1);
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000)
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
        setAvi(player1);
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000)
      }
    
    }
    else if (scene < scenarios.length) {
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
        setAvi(player1);
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000)
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
        setAvi(player1);
        document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, no)
        }, 1000);
      }

    }
    else if (scene === scenarios.length && player1.day === 5) {
      scene = 1;
      let currentScene = weekend[scene]
      player1.day += 1

      let rando = randomSpoons()
      player1.spoons += rando

      document.getElementById("response").innerHTML = `+${rando} <i class="fa fa-utensil-spoon"></i>`
      document.getElementById("response").setAttribute("style", "opacity: 1")
      setTimeout(function() {
        document.getElementById("response").setAttribute("style", "opacity: 0")
      }, 1000)

      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        setAvi(player1);
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000)
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
        setAvi(player1);
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, no)
        }, 1000)
      }
    }
    else if (scene === scenarios.length) {
      scene = 1;
      let currentScene = scenes[scene]
      player1.day += 1

      let rando = randomSpoons()
      player1.spoons += rando

      document.getElementById("response").innerHTML = `+${rando} <i class="fa fa-utensil-spoon"></i>`
      document.getElementById("response").setAttribute("style", "opacity: 1")
      setTimeout(function() {
        document.getElementById("response").setAttribute("style", "opacity: 0")
      }, 1000)

      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        setAvi(player1);
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000)
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
        setAvi(player1);
        document.getElementById("response").setAttribute("style", "opacity: 1")
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, no)
        }, 1000)
      }
    }
  }

    // for weekends
    else if (player1.day === 6 || player1.day === 7) {

      let currentScene = weekend[scene]
      document.getElementById("response").setAttribute("style", "opacity: 0")
      
      if (scene === 1) {
      player1.day += 1

      let rando = randomSpoons()
      player1.spoons += rando

      document.getElementById("response").innerHTML = `+${rando} <i class="fa fa-utensil-spoon"></i>`
      document.getElementById("response").setAttribute("style", "opacity: 1")
      setTimeout(function() {
        document.getElementById("response").setAttribute("style", "opacity: 0")
      }, 1000)

      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        setAvi(player1);
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        setAvi(player1);
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, no)
        }, 1000);
      }
    
    }
    else if (scene < scenarios.length) {
      let currentScene = weekend[scene]
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        setAvi(player1);
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        setAvi(player1);
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, no)
        }, 1000);
      }

    }
    else if (scene === scenarios.length && player1.day < 7) {
      scene = 1;
      let currentScene = weekend[scene]
      player1.day += 1

    let rando = randomSpoons()
    player1.spoons += rando

    document.getElementById("response").innerHTML = `+${rando} <i class="fa fa-utensil-spoon"></i>`
    document.getElementById("response").setAttribute("style", "opacity: 1")
    setTimeout(function() {
      document.getElementById("response").setAttribute("style", "opacity: 0")
    }, 1000)
    
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        document.getElementById("response").innerHTML = `-${currentScene.yes} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        setAvi(player1);
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, yes)
        }, 1000);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        document.getElementById("response").innerHTML = `-${currentScene.no} <i class="fa fa-utensil-spoon"></i>`
        document.getElementById("response").setAttribute("style", "opacity: 1")
        setAvi(player1);
        scene += 1
        setTimeout(function() {
          levels(scenes, player1, no)
        }, 1000);
      }
      }

      else if (scene === weekend.length && player1.day === 7) {
        if (player1.spoons > 0) alert("you made it through another week.")
        else alert("you suffered a flare up, got a cold and were out of work for a week")
      }
    }

}

function setAvi(player) {
  if (player.spoons > 1) {
    document.getElementById("avatar").setAttribute("style", `background: center / contain no-repeat url(${player.happy}`)
  }
  else if (player.spoons === 0 || player.spoons === 1) {
    document.getElementById("avatar").setAttribute("style", `background: center / contain no-repeat url(${player.dizzy}`)
  }
  else document.getElementById("avatar").setAttribute("style", `background: center / contain no-repeat url(${player.puke}`)
}
