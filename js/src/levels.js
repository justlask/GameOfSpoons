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
  console.log(player1)
  levels(morningScenarios, player1);
  console.log(player1)
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
    player.happy = "../assets/getavataaars/f-happy.svg";
    player.cry = "../assets/getavataaars/f-cry.svg";
    player.dizzy = "../assets/getavataaars/f-dizzy.svg";
    player.puke = "../assets/getavataaars/f-puke.svg"
  }
  else if (player.gender === "male") {
    player.happy = "../assets/getavataaars/m-happy.svg";
    player.cry = "../assets/getavataaars/m-cry.svg";
    player.dizzy = "../assets/getavataaars/f-dizzy.svg";
    player.puke = "../assets/getavataaars/m-puke.svg"
  }
  else {
    player.happy = "../assets/getavataaars/nb-happy.svg";
    player.cry = "../assets/getavataaars/nb-cry.svg";
    player.dizzy = "../assets/getavataaars/nb-dizzy.svg";
    player.puke = "../assets/getavataaars/nb-puke.svg"
  }
}

const spoonValues = [6,7,8,9,10,11,12]
const random = Math.floor(Math.random() * spoonValues.length)




const morningScenarios = [
  {
    text: `Your alarm goes off, it’s 7:20 am, your job is expecting you to arrive by 8am. You crack your eyes open, you’re tired, you didn’t sleep well last night. `,
    spoons: spoonValues[random],
    background: "../../assets/backgrounds/bedroom.svg",
    buttons: 1,
  },
  {
    text: `It’s been a couple days, you kind of stink. Do you take a shower?`,
    yes: -1,
    no: 0,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bathroom.svg",
    buttons: 2
  },
  {
    text: `Now that’s out of the way, it’s time to take your medication, do you make breakfast or take them with coffee?`,
    yes: -1,
    no: -2,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/kitchen.svg"
  },
  {
    text: `It’s 7:50, you’re going to be late, it’s time to get ready. Do you take your time or throw something on?`,
    yes: -2,
    no: -1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/bedroom.svg"
  },
  {
    text: `It’s time to get to work, do you drive or take the train?`,
    yes: 0,
    no: -1,
    response: `default placeholder response`,
    background: "../../assets/backgrounds/home.svg"
  }
]

  //“Your alarm goes off, it’s 7:20 am, your job is expecting you to arrive by 8am.
  // You crack your eyes open, you’re tired, you didn’t sleep well last night.”
  let scene = 0;
  let gameBoard = document.getElementById("gameBoard")

function levels(scenarios, player1) {
  let currentScene = morningScenarios[scene]
  if (scene === 0) {
    player1.spoons += morningScenarios[scene].spoons
    player1.day = 1

    gameBoard.setAttribute("style", `background: url(${currentScene.background})`)
    document.getElementById("gameHead").innerHTML += `<p>Spoons: ${player1.spoons}</p><p>Day: ${player1.day}</p>`
    scene += 1
  }


}


