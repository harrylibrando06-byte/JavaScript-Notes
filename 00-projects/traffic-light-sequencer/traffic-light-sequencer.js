const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

const runSequence = (config, cycles) => {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  } else if (config.fault === true) {
    console.log("Faulted phase!");
    return;
  }
  for (let c = 0; c < cycles; c++) {
    for (const phases of config.phases) {
      if (phases.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phases.color} for ${phases.duration} s`);
      }
    }
  }
};

runSequence(config1, 1);

const generateTimeline = (config, cycles) => {
  let total = 0;
  let timestamps = [];

  for (let c = 0; c < cycles; c++) {
    for (const phases of config.phases) {
      total += phases.duration;
      timestamps.push(total);
    }
  }

  return timestamps;
};

console.log(generateTimeline(config1, 1));
