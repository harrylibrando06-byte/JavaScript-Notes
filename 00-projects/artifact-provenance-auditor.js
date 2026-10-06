const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

// create an function that checks if an artifact is present in the collection object
const getArtifactTitle = (id) => {
  const artifact = collection[id];
  return artifact ? artifact.title : "Artifact not found";
};

console.log(getArtifactTitle(102));

const addTag = (id, tag) => {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
};

/* New research confirms the Golden Mask belonged to royalty. Add the tag "royal" to the artifact with an id of 101. Then, call console.log() with collection[101].tags to log that artifact's tags. */

addTag(101, "royal");
console.log(collection[101]);

/* Create a moveArtifact function with the parameters id, gallery, and year. Find the artifact using collection[id]. If it exists, push a new object with the gallery and year to its locations array. */

const moveArtifact = (id, gallery, year) => {
  let artifact = collection[id];

  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
};

moveArtifact(102, "Hall B", 2026);
console.log(collection[102].locations);

/* Create a toggleDisplayStatus function that takes an id parameter. Look up the artifact using collection[id]. If it exists, set its onDisplay property to the opposite of its current value. */

const toggleDisplayStatus = (id) => {
  let artifact = collection[id];

  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
};

console.log(collection[101].onDisplay);
toggleDisplayStatus(101);
console.log(collection[101].onDisplay);

console.log(collection[102].onDisplay);
toggleDisplayStatus(102);
console.log(collection[102].onDisplay);
