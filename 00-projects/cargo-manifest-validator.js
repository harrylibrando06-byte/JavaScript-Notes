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
  if (
    manifest.containerId <= 0 ||
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId)
  ) {
    problem.containerId = "Invalid";
  }
  if (manifest.containerId === undefined || manifest.containerId === null) {
    problem.containerId = "Missing";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "destination")) {
    problem.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    problem.destination = "Invalid";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "weight")) {
    problem.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    problem.weight = "Invalid";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "unit")) {
    problem.unit = "Missing";
  } else if (
    typeof manifest.unit !== "string" ||
    (manifest.unit !== "lb" && manifest.unit !== "kg")
  ) {
    problem.unit = "Invalid";
  } else {
    problem;
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    problem.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean" || manifest.hazmat === null) {
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

console.log(
  validateManifest({
    containerId: 0,
    destination: 405,
    weight: -84,
    unit: "pounds",
    hazmat: "no",
  }),
);
console.log(
  validateManifest({
    destination: "  ",
  }),
);

function processManifest(manifest) {
  let result = {};

  const validate = validateManifest(manifest);
  const normalized = normalizeUnits(manifest);

  if (Object.keys(validate) === 0) {
    result = {
      message: `Validation success: ${manifest.containerId}`,
      weightInfo: `Total weight: ${normalized.weight} kg`,
    };
  } else {
    result = {
      message: "Validation error",
      errors: "error",
    };
  }

  return result;
}

console.log(
  processManifest({
    containerId: 55,
    destination: "Carmel",
    weight: 400,
    unit: "lb",
    hazmat: false,
  }),
);
