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
  levels(morningScenarios, player1, yes);


  document.getElementById("yes").onclick = () => {
    levels(morningScenarios, player1, yes);
    let lastScene = scene - 1

    player1.spoons -= morningScenarios[lastScene].yes
  }
  document.getElementById("no").onclick = () => {
    levels(morningScenarios, player1, no);
    let lastScene = scene - 1

    player1.spoons -= morningScenarios[lastScene].no
  }

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

const morningScenarios = [
  {
    text: `Your alarm goes off, it’s 7:20 am, your job is expecting you to arrive by 8am. You crack your eyes open, you’re tired, you didn’t sleep well last night. `,
    yes: 0,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bedroom.svg",
    buttonYes: "Wake up and face the day.",
    buttonNo: "Snooze it.",
  },
  {
    text: `It’s been a couple days, you kind of stink. Do you take a shower?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bathroom.svg",
    buttonYes: "Of course.",
    buttonNo: "Eh, I'm too tired",
  },
  {
    text: `Now that’s out of the way, it’s time to take your medication, do you make breakfast or take them with coffee?`,
    yes: 1,
    no: 2,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg",
    buttonYes: "I make breakfast.",
    buttonNo: "Coffee, I'm going to be late.",
  },
  {
    text: `It’s 7:50, you’re going to be late, it’s time to get ready. Do you take your time or throw something on?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bedroom.svg",
    buttonYes: "Take my time. Gotta look good to feel good.",
    buttonNo: "I'll just throw something on.",
  },
  {
    text: `It’s time to get to work, do you drive or take the train?`,
    yes: 1,
    no: 2,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/home.svg",
    buttonYes: "Driving.",
    buttonNo: "I'll take the train.",
  },
  {
    text: `You’ve arrived at work. It’s 8:30 am and you’re 30 minutes late. Do you jump right into working?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "I've got to make up for lost time.",
    buttonNo: "I'll take my time getting situated.",
  },
  {
    text: `It’s lunch time and your coworkers are heading off to lunch. You’re thinking about putting off lunch so you can catch up on work because you were late this morning. Do you eat lunch or do you skip it to catch up?`,
    yes: 0,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "I've got to eat lunch.",
    buttonNo: "I'll skip it today.",
  },
  {
    text: `You’ve been working all day on your project for work, it seems like you’ve been at your computer all day, your body is getting stiff. Do you take a break, get up and stretch?`,
    yes: 0,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "Take a break.",
    buttonNo: "I'll push through.",
  },
  {
    text: `You’ve got a meeting. You go and participate, however afterwards you are asked some questions about your project. Do you stay?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "Of course, is there even a choice?",
    buttonNo: "No, I'll have it rescheduled.",
  },
  {
    text: `You’re trying to grow your network and you’ve been invited to an event. If you go means that your evening routine will be thrown off and most likely you will get less sleep than normal. Do you go?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "It'll be worth it in the long run.",
    buttonNo: "There will always be another event.",
  },
  {
    text: `It’s been a long day, you’re hungry and tired. You look in the pantry and try to figure out what you can make for dinner. The thought of cooking and then having to clean up makes you feel even more tired. Do you cook yourself something to eat?`,
    yes: 2,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg",
    buttonYes: "I'll make myself something healthy.",
    buttonNo: "It's a Ramen night.",
  },
  {
    text: `You’ve had your dinner, and now you’re ready to relax a bit. Do you take some time to relax and watch tv?`,
    yes: 0,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/livingroom.svg",
    buttonYes: "I'll relax.",
    buttonNo: "No, I think I'll go to bed.",
  },
  {
    text: `You realize that you still have work left to do on your project for work. You look at the clock and you realize that it’s much later than you had thought. Do you push yourself to work on your project?`,
    yes: 1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/work.svg",
    buttonYes: "It's got to get done.",
    buttonNo: "It can wait.",
  },
  {
    text: `You’ve looked around and decided that it’s time to start your night time routine. You really should brush your teeth, wash your face and change into something for bed. Do you take care of your basic hygiene?`,
    yes: 0,
    no: 1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bathroom.svg",
    buttonYes: "Of course?",
    buttonNo: "Eh, I'm too tired.",
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
  let currentScene = morningScenarios[scene]


  if (scene === 0) {
    player1.spoons += randomSpoons()
    player1.day = 1
    gameBoard.setAttribute("style", `background: url(${currentScene.background})`)
    gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
    prompt.innerHTML = `<p>${currentScene.text}</p>`
    yesButton.innerHTML = currentScene.buttonYes
    noButton.innerHTML = currentScene.buttonNo
    setAvi(player1);
    scene += 1
  }
  else if (scene < scenarios.length) {
    gameBoard.setAttribute("style", `background: url(${currentScene.background})`)
    gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
    prompt.innerHTML = `<p>${currentScene.text}</p>`
    yesButton.innerHTML = currentScene.buttonYes
    noButton.innerHTML = currentScene.buttonNo
    setAvi(player1);
    scene += 1
  }
  else if (scene === scenarios.length && player1.day < 7) {
    scene = 0;
    let currentScene = morningScenarios[scene]
    player1.day += 1
    player1.spoons += randomSpoons();
    gameBoard.setAttribute("style", `background: url(${currentScene.background})`)
    gameScore.innerHTML = `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
    prompt.innerHTML = `<p>${currentScene.text}</p>`
    yesButton.innerHTML = currentScene.buttonYes
    noButton.innerHTML = currentScene.buttonNo
    setAvi(player1);
    scene += 1
  }
  else if (scene === scenarios.length && player1.day === 7) {
    if (player1.spoons > 0) alert("you made it through another week.")
    else alert("you suffered a flare up, got a cold and were out of work for a week")
  }
}



function setAvi(player) {
  if (player.spoons > 1) {
    document.getElementById("avatar").innerHTML = `<img src=${player.happy}>`
    console.log("WTF")
  }
  else if (player.spoons === 0 || player.spoons === 1) {
    document.getElementById("avatar").innerHTML = `<img src=${player.dizzy}>`
    console.log("WTF")
  }
  else document.getElementById("avatar").innerHTML = `<img src=${player.puke}>`
  console.log("WTF")
}