/*
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log("row " + i + ": " + matrix[i][j]);
    }
  }
*/

  const today = new Date(); // Get today's date
  const dayOfMonth = today.getDate(); // Get the day of the month
  console.log(dayOfMonth); // This will output 19 (or the current day of the month)

  const sampleMonth = new Date("January 21, 25");
  console.log("Current Month in # : " + (sampleMonth.getMonth() + 1));
  console.log("The date is: " + sampleMonth.getDate());
  console.log("Weekday number is: " + sampleMonth.getDay());
  // try to use arrays to match and print them on your calenar????