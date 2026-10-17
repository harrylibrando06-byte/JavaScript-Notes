/*Implement the Chunky Monkey Algorithm
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array. */



const chunkArrayInGroups = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i += num) {
    let slice = arr.slice(i, i + num);
    result.push(slice)
  };
  return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 

/* User Story: The Cookie Packer
As a baker, I want to pack cookies into boxes so that each box holds the same number of cookies.

Given a tray of cookies (an array) and a box capacity (a number), When I pack them, Then I get back a list of boxes, where each box is a list of cookies.

Cookies are packed in tray order. The last box may be partly filled if the tray runs out. Each cookie appears in exactly one box — no overlapping, no skipping, no empty boxes.

Acceptance criteria (check yourself against these when you're done):

tray	capacity	expected boxes
["a","b","c","d"]	2	[["a","b"],["c","d"]]
[0,1,2,3,4,5]	4	[[0,1,2,3],[4,5]]
[0,1,2,3,4,5,6]	3	[[0,1,2],[3,4,5],[6]]
["x","y","z"]	5	[["x","y","z"]] */