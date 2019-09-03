

document.querySelector("#letsGo").onclick = () => {
  let name = document.querySelector("#name").value 
  let age = document.querySelector("#age").value
  let gender = document.querySelector("#gender").value
  let illness = document.querySelector("#illness").value

  let player1 = new player(name, gender, age, illness)
  console.log(player1)
  document.getElementById("init").setAttribute("style", "display:none")
  avatars(player1);
  initGame(player1);
  console.log(player1)
}




const spoonValues = [6,7,8,9,10,11,12]
const random = Math.floor(Math.random() * spoonValues.length)


// initialize player
// start day 1
// initialize spoons

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

function initGame(player1) {
  let height = window.innerHeight-200;
  let width = window.innerWidth-200;

  document.getElementById("gameBoard").innerHTML += `<canvas id="game" height="${height}" width="${width}">`

  let canvas = document.getElementById("game")
  let ctx = canvas.getContext("2d");
  
  ctx.fillStyle="white";
  ctx.fillRect(0, 0, width, height);

  let img = new Image();
  img.onload = function () {
      ctx.drawImage(img, (width-200)/2, 50);
  }
  img.src = player1.happy;

  ctx.fillStyle="black"
  ctx.font = "20px Georgia";
  ctx.fillText(`Welcome to the game of spoons ${player1.name}.`, 10, height-90);
  ctx.fillText(`You will be challenged with living 7 days (levels) with ${player1.illness}.`, 10, height-70);
  ctx.fillText(`Each day you will recieve a random number of spoons (energy) to spend.`, 10, height-50);
  ctx.fillText(`Take care of your spoons, and choose wisely.`, 10, height-30);
  //
  ctx.fillText(`Day: ${player1.day}`, width-100, 20)
  ctx.fillText(`Spoons: ${player1.spoons}`, width-100, 40)

}



const morningScenarios = [
  {
    text: `Your alarm goes off, it’s 7:20 am, your job is expecting you to arrive by 8am. You crack your eyes open, you’re tired, you didn’t sleep well last night.`,
    spoons: spoonValues[random]
  },
  {
    text: `It’s been a couple days, you kind of stink. Do you take a shower?`,
    yes: -1,
    no: 0,
    response: `default placeholder response`
  },
  {
    text: `Now that’s out of the way, it’s time to take your medication, do you make breakfast or take them with coffee?`,
    yes: -1,
    no: -2,
    response: `default placeholder response`
  },
  {
    text: `It’s 7:50, you’re going to be late, it’s time to get ready. Do you take your time or throw something on?`,
    yes: -2,
    no: -1,
    response: `default placeholder response`
  },
  {
    text: `It’s time to get to work, do you drive or take the train?`,
    yes: 0,
    no: -1,
    response: `default placeholder response`
  }
]

const afternoonScenarios = [
  {},
  {},
  {},
  {},
  {}
]

const eveningScenarios = [
  {},
  {},
  {},
  {},
  {}
]

const bonusScenarios = [
  {},
  {},
  {},
  {},
  {}
]