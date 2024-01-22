// function sum(a,b){
//     return a+b;
// }

// sum(10, 20);
// sum(30, 20);
// sum(-10, 20);
// sum(20, 20);

// function increaseBy2(arr, n){
//     for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i]+n;
//     }
//     return arr;
// }

// function multiplyBy (arr, n,){
//     for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i]*n;
//     }
//     return arr;
// }

function map (arr, fn){
    for(let i=0; i<arr.length; i++){
        arr[i] = fn(arr[i]); // Trả về 1 giá trị tương ứng tưng phần tử có trong mảng
        // Đã được apply 1 công thức nào đó
    }
    return arr;
}

let result = map([1, 2, 3, 4], function(e) {
    return e+2;
});

let result1 = map([1, 2, 3, 4], function(e) {
    return e**2;
});

let result2 = map([1, 2, 3, 4], function(e) {
    return e-10;
});

let result3 = map([1, 2, 3, 4], function(e) {
    return e*5;
});

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// console.log(increaseBy2([1, 2, 3, 4], 10));