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
  } else if (config.fault === true) {
    console.log("Faulted phase!");
    return;
  } else if (phases.duration <= 0) {
    console.log("Invalid phase detected");
  }
  for (let c = 0; c < cycles; c++) {
    for (const phases of config.phases) {
      console.log(`Switching to ${phases.color} for ${phases.duration} s`);
    }
  }
};

runSequence(config1, 1);
