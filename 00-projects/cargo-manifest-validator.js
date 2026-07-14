function normalizeUnits(manifest) {
  let copiedInput = { ...manifest };
  if (copiedInput.unit === "lb") {
    copiedInput.weight = copiedInput.weight * 0.45;
    copiedInput.unit = "kg";
  }
  return copiedInput;
}

console.log(normalizeUnits());

const validateManifest = (manifest) => {
  let problem = {};

  if (!Object.hasOwn(manifest, "containerId")) {
    problem.containerId = "Missing";
  } else {
    problem.containerId = "Invalid";
  }
  //repeat this for the other property
};
