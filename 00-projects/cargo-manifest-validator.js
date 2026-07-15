function normalizeUnits(manifest) {
  let copiedInput = { ...manifest };
  if (copiedInput.unit === "lb") {
    copiedInput.weight = copiedInput.weight * 0.45;
    copiedInput.unit = "kg";
  }
  return copiedInput;
}

console.log(normalizeUnits());

function validateManifest(manifest) {
  let problem = {};

  if (!Object.hasOwn(manifest, "containerId")) {
    problem.containerId = "Missing";
  } else if (
    manifest.containerId <= 0 ||
    !Number(manifest.container) ||
    manifest.containerId === null
  ) {
    problem.containerId = "Invalid";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "destination")) {
    problem.destination = "Missing";
  } else if (
    !typeof manifest.destination === "string" ||
    manifest.destination === null
  ) {
    problem.destination = "Invalid";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "weight")) {
    problem.weight = "Missing";
  } else if (
    !typeof manifest.weight === "number" ||
    manifest.weight === null ||
    manifest.weight <= 0
  ) {
    problem.weight = "Invalid";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "unit")) {
    problem.unit = "Missing";
  } else if (!typeof manifest.unit === "string" || manifest.unit === null) {
    problem.unit = "Invalid";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    problem.hazmat = "Missing";
  } else if (manifest.hazmat === null) {
    problem.hazmat = "Invalid";
  } else {
    problem;
  }

  return problem;
}

console.log(
  validateManifest({
    containerId: 1,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false,
  }),
);
