function normalizeUnits(manifest) {
  // Created a shallow copy of manifest
  let copiedInput = { ...manifest };

  // If unit is in lb "pounds" multiply the weight to 0.45 then change the unit to 'kg'
  if (copiedInput.unit === "lb") {
    copiedInput.weight = copiedInput.weight * 0.45;
    copiedInput.unit = "kg";
  }
  return copiedInput;
}

//manifest is empty so it return an empty object
console.log(normalizeUnits());

function validateManifest(manifest) {
  // Create an empty object
  let problem = {};

  // This if clause checks if the manifest has an own container id, if it don't have that property it'll be "Missing else it's invalid"
  if (!Object.hasOwn(manifest, "containerId")) {
    problem.containerId = "Missing";
  }

  // A if statement where it checks if containerId is less than or equal to 0 or if the type of it is not a number, or if the value is not an whole number. If something is triggered in the if clause the empty problem object will have a containerId property and it's value to Invalid.
  else if (
    manifest.containerId <= 0 ||
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId)
  ) {
    problem.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    problem.destination = "Missing";
  } else if (
    // This else if check if value of destination is not a string or the destination value is a empty string after trimming
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    problem.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    problem.weight = "Missing";
  } else if (
    // Checks if the weight is not a number or if it's less than or equal to 0 and if it's Not a Number
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    problem.weight = "Invalid";
  }

  if (!Object.hasOwn(manifest, "unit")) {
    problem.unit = "Missing";
  } else if (
    // Checks if the unit is not a string or if the unit is pounds or Kilogram
    typeof manifest.unit !== "string" ||
    (manifest.unit !== "lb" && manifest.unit !== "kg")
  ) {
    problem.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    problem.hazmat = "Missing";
  } else if (
    // Checks if the hazmat value is not a boolean or if it's a null then if it is either of two it's invalid
    typeof manifest.hazmat !== "boolean" ||
    manifest.hazmat === null
  ) {
    problem.hazmat = "Invalid";
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
    containerId: null,
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
  const validate = validateManifest(manifest);
  const normalized = normalizeUnits(manifest);

  // conver the object to arrays so you can use .length to see if the length is 0
  if (Object.keys(validate).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validate);
  }
}

processManifest({
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false,
});
