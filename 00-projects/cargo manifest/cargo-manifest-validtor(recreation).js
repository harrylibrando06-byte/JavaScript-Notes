const normalizeUnits = (manifest) => {
  let copiedManifest = { ...manifest };

  if (copiedManifest.unit === "lb") {
    copiedManifest.weight = copiedManifest.weight * 0.45;
    copiedManifest.unit = "kg";
  }

  return copiedManifest;
};

const validateManifest = (manifest) => {
  let problems = {};

  if (!Object.hasOwn(manifest, "containerId")) {
    problems.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    problems.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    problems.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    problems.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    problems.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    problems.weight = "Invalid";
  }

  if (!Object.hasOwn(manifest, "unit")) {
    problems.unit = "Missing";
  } else if (
    typeof manifest.unit !== "string" ||
    (manifest.unit !== "kg" && manifest.unit !== "lb")
  ) {
    problems.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    problems.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    problems.hazmat = "Invalid";
  }

  return problems;
};
