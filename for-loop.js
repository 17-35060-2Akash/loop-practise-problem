/* for (var i = 0; i <= 10; i += 2) {
    console.log(i);
} */

/* let number = [10, 20, 31, 40, 50];
for (let i = 0; i < number.length; i++) {
    console.log((i + 1) + '. There is ' + number[i] + ' at index' + i);
} */


let number = [10, 20, 31, 40, 50];
for (let i = 0; i < number.length; i++) {
    if (i == 2) {
        break;
    }
    console.log((i + 1) + '. There is ' + number[i] + ' at index' + i);
}