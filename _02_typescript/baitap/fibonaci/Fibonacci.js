function isFibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    else {
        return isFibonacci(number - 1) + isFibonacci(number - 2);
    }
}
var sum = 0;
console.log("Day so fibonacci la : ");
for (var i = 0; i < 10; i++) {
    console.log(isFibonacci(i));
    sum += isFibonacci(i);
}
console.log("Tong fibonacci la :" + sum);
