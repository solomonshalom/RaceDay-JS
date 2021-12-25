let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegisterEarly = true;
let runnerAge = 16;

if (runnerAge === 18 && runnerRegisterEarly === true) {
  raceNumber += 1000
}

if (runnerAge > 18 && runnerRegisterEarly === true) {
  console.log(`Your race will begain at 9.30 AM and your race number is ${raceNumber}`);
}

else if (runnerAge > 18 && runnerRegisterEarly === false) {
  console.log(`Your race will begain at 9.30 AM and your race number is ${raceNumber}`);
}

else if (runnerAge < 18) {
  console.log(`Your race will begain at 12.30 PM and your race number is ${raceNumber}`);
}

else {
  console.log(`Report to registartion Desk`);
}

