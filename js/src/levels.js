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

const scenes = [
  {
    text: `Hello, welcome to the game of spoons.`,
    yes: 0,
    no: 0,
    background: "../../assets/backgrounds/gos.svg",
    buttonYes: "Yes",
    buttonNo: "Maybe"
  },
  {
    text: `Your alarm goes off, it’s 7:20 am, your job is expecting you to arrive by 8am. You crack your eyes open, you’re tired, you didn’t sleep well last night. `,
    yes: 0,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bedroom.svg",
    buttonYes: "Wake up and face the day.",
    buttonNo: "Snooze it.",
    animate: "alarm",
    sound: null
  },
  {
    text: `It’s been a couple days, you kind of stink. Do you take a shower?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bathroom.svg",
    buttonYes: "Of course.",
    buttonNo: "Eh, I'm too tired",
    animate: null,
    sound: null
  },
  {
    text: `Now that’s out of the way, it’s time to take your medication, do you make breakfast or take them with coffee?`,
    yes: 1,
    no: 2,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg",
    buttonYes: "I make breakfast.",
    buttonNo: "Coffee, I'm going to be late.",
    animate: "coffee pot",
    sound: null
  },
  {
    text: `It’s 7:50, you’re going to be late, it’s time to get ready. Do you take your time or throw something on?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bedroom.svg",
    buttonYes: "Take my time. Gotta look good to feel good.",
    buttonNo: "I'll just throw something on.",
    animate: "clothes pile",
    sound: null
  },
  {
    text: `It’s time to get to work, do you drive or take the train?`,
    yes: 1,
    no: 2,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/home.svg",
    buttonYes: "Driving.",
    buttonNo: "I'll take the train.",
    animate: null,
    sound: null
  },
  {
    text: `You’ve arrived at work. It’s 8:30 am and you’re 30 minutes late. Do you jump right into working?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "I've got to make up for lost time.",
    buttonNo: "I'll take my time getting situated.",
    animate: "paper pile",
    sound: null
  },
  {
    text: `It’s lunch time and your coworkers are heading off to lunch. You’re thinking about putting off lunch so you can catch up on work because you were late this morning. Do you eat lunch or do you skip it to catch up?`,
    yes: 0,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "I've got to eat lunch.",
    buttonNo: "I'll skip it today.",
    animate: "paper pile",
    sound: null
  },
  {
    text: `You’ve been working all day on your project for work, it seems like you’ve been at your computer all day, your body is getting stiff. Do you take a break, get up and stretch?`,
    yes: 0,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "Take a break.",
    buttonNo: "I'll push through.",
    animate: null,
    sound: null
  },
  {
    text: `You’ve got a meeting. You go and participate, however afterwards you are asked some questions about your project. Do you stay?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "Of course, is there even a choice?",
    buttonNo: "No, I'll have it rescheduled.",
    animate: "paper pile",
    sound: null
  },
  {
    text: `You’re trying to grow your network and you’ve been invited to an event. If you go means that your evening routine will be thrown off and most likely you will get less sleep than normal. Do you go?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "It'll be worth it in the long run.",
    buttonNo: "There will always be another event.",
    animate: "phone",
    sound: null
  },
  {
    text: `It’s been a long day, you’re hungry and tired. You look in the pantry and try to figure out what you can make for dinner. The thought of cooking and then having to clean up makes you feel even more tired. Do you cook yourself something to eat?`,
    yes: 2,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg",
    buttonYes: "I'll make myself something healthy.",
    buttonNo: "It's a Ramen night.",
    animate: "dishes",
    sound: null
  },
  {
    text: `You’ve had your dinner, and now you’re ready to relax a bit. Do you take some time to relax and watch tv?`,
    yes: 0,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/livingroom.svg",
    buttonYes: "I'll relax.",
    buttonNo: "No, I think I'll go to bed.",
    animate: null,
    sound: null
  },
  {
    text: `You realize that you still have work left to do on your project for work. You look at the clock and you realize that it’s much later than you had thought. Do you push yourself to work on your project?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "It's got to get done.",
    buttonNo: "It can wait.",
    animate: "paper pile",
    sound: null
  },
  {
    text: `You’ve looked around and decided that it’s time to start your night time routine. You really should brush your teeth, wash your face and change into something for bed. Do you take care of your basic hygiene?`,
    yes: 0,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bathroom.svg",
    buttonYes: "Of course?",
    buttonNo: "Eh, I'm too tired.",
    animate: null,
    sound: null
  },
]




const weekend = [
  {},
  {
    text: `Your alarm goes off, it’s 7:20 am. You crack your eyes open, you’re tired, you didn’t sleep well last night. Thankfully, it’s the weekend. Do you sleep in or get up?`,
    yes: -1,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bedroom.svg",
    buttonYes: "Sleep in!",
    buttonNo: "Go ahead and get up.",
    animate: "alarm",
    sound: null
  },
  {
    text: `So you’ve woken up, do you decide to take a shower today?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bathroom.svg",
    buttonYes: "Of course.",
    buttonNo: "Eh, I'm too tired",
    animate: null,
    sound: null
  },
  {
    text: `Now that’s out of the way, it’s time to take your medication, do you make breakfast or take them with coffee?`,
    yes: 1,
    no: 2,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg",
    buttonYes: "Gotta eat.",
    buttonNo: "Give me the coffe.",
    animate: "coffee pot",
    sound: null
  },
  {
    text: `You’ve been eating poorly recently, you’ve been thinking about doing meal prepping. Do you take time to go shopping for healthier food and prepare some food to eat?`,
    yes: 2,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg",
    buttonYes: "Yes, self care.",
    buttonNo: "I really should, but not today.",
    animate: null,
    sound: null
  },
  {
    text: `Seriously, you’ve been putting off your laundry for too long, it’s starting to pile up. Either you do it today, or it’s going to be more of a mess later.`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bedroom.svg",
    buttonYes: "Yes, I'm running out of clothes.",
    buttonNo: "No, they're not that dirty.",
    animate: "clothes pile",
    sound: null
  },
  {
    text: `You look around and notice that you haven’t cleaned your place all week, do you pick up and clean?`,
    yes: 2,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/livingroom.svg",
    buttonYes: "Yes, it has to be done.",
    buttonNo: "I need to, but not today.",
    animate: "plates pile",
    sound: null
  },
  {
    text: `Your todo list is getting out of hand. Do you tackle it now?`,
    yes: 2,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/livingroom.svg",
    buttonYes: "*sigh* yes.",
    buttonNo: "I can't today.",
    animate: null,
    sound: null
  },
  {
    text: `It’s lunch time and you’re tired. Do you eat lunch or have a nap?`,
    yes: 1,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/livingroom.svg",
    buttonYes: "I need food!",
    buttonNo: "I need a nap!",
    animate: null,
    sound: null
  },
  {
    text: `You realize that you still have some projects to work on that are due on Monday, do you work on them?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "It has to get done.",
    buttonNo: "I'll ask for an extension.",
    animate: "paper pile",
    sound: null
  },
  {
    text: `Your phone buzzes, it’s your friends! They’re letting you know that they’re going out tonight, and are asking you what your plans are! It sounds like a good time, and you haven’t seen them in a while. Do you go?`,
    yes: 2,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/livingroom.svg",
    buttonYes: "I'm going!",
    buttonNo: "I just don't have the spoons.",
    animate: "cellphone",
    sound: null
  },
  {
    text: `It’s been a long day, you’re hungry and tired. You look in the pantry and try to figure out what you can make for dinner. The thought of cooking and then having to clean up makes you feel even more tired. Do you cook yourself something to eat?`,
    yes: 0,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg",
    buttonYes: "I meal prepped earlier.",
    buttonNo: "I should have meal prepped earlier.",
    animate: null,
    sound: null
  },
  {
    text: `You’ve looked around and decided that it’s time to start your night time routine. You really should brush your teeth, wash your face and change into something for bed. Do you take care of your basic hygiene?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bathroom.svg",
    buttonYes: "Of course?",
    buttonNo: "Eh, I'm too tired.",
    animate: null,
    sound: null
  },
]










  //“Your alarm goes off, it’s 7:20 am, your job is expecting you to arrive by 8am.
  // You crack your eyes open, you’re tired, you didn’t sleep well last night.”
  let gameBoard = document.getElementById("gameBoard")
  let prompt = document.getElementById("prompt")
  let buttons = document.querySelector(".buttons")
  let gameScore = document.getElementById("gameHead")
  let scene = 0;

  let yesButton = document.getElementById("yes");
  let noButton = document.getElementById("no");



function levels(scenarios, player1, value) {

  // for weekdays
  if (player1.day <= 5) {
    let currentScene = scenes[scene]
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
        scene += 1
        levels(scenes, player1, no);
      }
    
    }
    else if (scene === 1) {
      player1.spoons += randomSpoons()
      player1.day = 1
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        scene += 1
        levels(scenes, player1, yes);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        scene += 1
        levels(scenes, player1, no);
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
        scene += 1
        levels(scenes, player1, yes);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        scene += 1
        levels(scenes, player1, no);
      }

    }
    else if (scene === scenarios.length && player1.day === 5) {
      scene = 1;
      let currentScene = weekend[scene]
      player1.day += 1
      player1.spoons += randomSpoons();
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        scene += 1
        levels(scenes, player1, yes);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        scene += 1
        levels(scenes, player1, no);
      }
    }
    else if (scene === scenarios.length) {
      scene = 1;
      let currentScene = scenes[scene]
      player1.day += 1
      player1.spoons += randomSpoons();
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        scene += 1
        levels(scenes, player1, yes);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        scene += 1
        levels(scenes, player1, no);
      }
    }
  }

    // for weekends
    else if (player1.day === 6 || player1.day === 7) {
      let currentScene = weekend[scene]
      if (scene === 1) {
      player1.spoons += randomSpoons()
      player1.day = 1
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        scene += 1
        levels(weekend, player1, yes);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        scene += 1
        levels(weekend, player1, no);
      }
    
    }
    else if (scene < scenarios.length) {
      let currentScene = weekend[scene]
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        scene += 1
        levels(weekend, player1, yes);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        scene += 1
        levels(weekend, player1, no);
      }

    }
    else if (scene === scenarios.length && player1.day < 7) {
      scene = 1;
      let currentScene = weekend[scene]
      player1.day += 1
      player1.spoons += randomSpoons();
      gameBoard.setAttribute("style", `background: center / cover no-repeat url(${currentScene.background})`)
      gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
      prompt.innerHTML = `<p>${currentScene.text}</p>`
      yesButton.innerHTML = currentScene.buttonYes
      noButton.innerHTML = currentScene.buttonNo
      setAvi(player1);

      document.getElementById("yes").onclick = () => {
        player1.spoons -= currentScene.yes
        scene += 1
        levels(weekend, player1, yes);
      }
      document.getElementById("no").onclick = () => {
        player1.spoons -= currentScene.no
        scene += 1
        levels(weekend, player1, no);
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