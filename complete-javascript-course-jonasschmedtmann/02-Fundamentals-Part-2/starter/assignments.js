'use strict';

//48 looping backwards and loops in loops

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//49 the While Loop

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  // const perc = percentageOfWorld1(populations[i]);
  // percentages2.push(perc);
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
