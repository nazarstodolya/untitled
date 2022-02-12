
//створити функцію яка приймає три числа та виводить найменше.
// (Без Math.min!)
function minimum (one, two, three) {
    if (one < two && one < three) {
        console.log(one)
    } else if (two < one && two < three) {
        console.log(two);
    } else {
        console.log(three)
    }
}
minimum(101, 202, 303);
// створити функцію яка приймає три числа та виводить найбільше.
function maximum (hundred, thousand, million) {
    if (hundred > thousand && hundred > million) {
        console.log(hundred);
    } else if (thousand > hundred && thousand > million) {
        console.log(thousand);
    } else {
        console.log(million);
    }
}
maximum(100, 1000, 1000000);

// створити функцію яка повертає найбільше число з масиву
let masyv = [2, 4, 8, 16, 32, 64, 128, 256, 512]
function maxMasyv (max) {
    let mx = max[0];
    for (const num of max) {
        if (num > mx) {
            mx = num;
        }
    }
    return mx;
}
console.log(maxMasyv(masyv));

// створити функцію яка повертає найменьше число з масиву
let masiv = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
function minMasiv (min) {
    let mn = min [0];
    for (const num of min) {
        if (num < mn) {
            mn = num;
        }
    }
    return mn;
}
console.log(minMasiv(masiv))

//створити функцію яка приймає масив чисел, сумує значення елементів
//масиву та повертає його. Приклад [1,2,10]->13