let number = 0;
let count = 0;
while (number <= 20) {
    // console.log((number + 1));
    // console.log(number);
    if (number % 2 == 0 || number == 0) {
        console.log("Even Number: " + number);
        count++;
        number++;

    }
    else {
        number++;
    }
}
console.log("total Even Numbers: " + count);