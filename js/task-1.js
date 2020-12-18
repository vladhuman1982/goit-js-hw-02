const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logIteams = function (arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i += 1) {
    let item = i + 1 + '-' + arr[i];
    arr[i] = item;
  }
};
logIteams(friends);
logIteams(numbers);
