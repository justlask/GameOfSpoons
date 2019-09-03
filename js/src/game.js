document.body.onload = () => {
  // let height = window.innerHeight - 250;
  // let width = window.innerWidth - 100;  
  let height = 500;
  let width = 900;
  document.querySelector("#gameBoard").innerHTML += `<canvas id="gameCanvas" height="${height}" width="${width}">`

  const canvas = document.getElementById("gameCanvas")
  const ctx = canvas.getContext("2d");

  ctx.fillStyle="white";
  ctx.fillRect(0, 0, width, height)
}


const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d");

const spoonValues = [6,7,8,9,10,11,12]
const random = Math.floor(Math.random() * spoonValues.length)

let spoons = 0;


const morningScenarios = [
  {
    text: `Your alarm goes off, it’s 7:20 am, your job is expecting you to arrive by 8am. You crack your eyes open, you’re tired, you didn’t sleep well last night.`,
    spoons: spoons += spoonValues[random]
  },
  {
    text: `It’s been a couple days, you kind of stink. Do you take a shower?`,
    yes: spoons -= 1,
    no: spoons -= 0,
    response: `default placeholder response`
  },
  {
    text: `Now that’s out of the way, it’s time to take your medication, do you make breakfast or take them with coffee?`,
    yes: spoons -= 1,
    no: spoons -= 2,
    response: `default placeholder response`
  },
  {
    text: `It’s 7:50, you’re going to be late, it’s time to get ready. Do you take your time or throw something on?`,
    yes: spoons -=2,
    no: spoons -= 1,
    response: `default placeholder response`
  },
  {
    text: `It’s time to get to work, do you drive or take the train?`,
    yes: spoons -= 0,
    no: spoons -= 1,
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