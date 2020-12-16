
const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logIteams = function (array) {
console.log(array);
    for (let i = 0; i < array.length; i += 1) {
        let item = i + 1 + '-';
        item = item.concat(array[i]);
        array[i] = item;
    }
}
logIteams(friends);
logIteams(numbers);