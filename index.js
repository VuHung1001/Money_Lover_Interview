// Cho dãy số tự nhiên A. Cài đặt chương trình sắp xếp dãy số A từ nhỏ đến lớn và loại bỏ số không phải là số nguyên tố.

console.log('Câu 1: ')

function sortPrimesNumberArray (array) {
    const resultArr = [];

    for (const num of array) {
        if (num > 1) {
            let isPrime = true;

            for (let i = 2; i <= Math.sqrt(num); i++ ) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime || num === 2) { // 2 is prime number
                resultArr.push(num)
            }
        }
    }

    return resultArr.sort((a, b) => a - b)
}

console.log(sortPrimesNumberArray([4, 7, 12, 2, 9, 5, 13, 8, 11])) // => [2, 5, 7, 11, 13]




// Cài đặt chương trình tìm số thứ N trong dãy Fibonacci.

console.log('Câu 2: ')

function findNthInFibonacci (n) {
    if (n === 0 || n === 1) {
        return n;
    }

    let firstNum = 1, secondNum = 1;
    let result = 1; // n = 2 => result = 1

    for (let i = 3; i <= n; i++) {
        result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
    }

    return result
}

console.log(findNthInFibonacci(10)) // => 55


// 2nd way
function findNthInFibonacciSecond (n) {
    if (n === 0 || n === 1) {
        return n;
    }

    const fibonacciArr = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonacciArr[i] = fibonacciArr[i-2] + fibonacciArr[i-1];
    }

    return fibonacciArr[n - 1]
}

console.log(findNthInFibonacciSecond(15)) // => 610




// Cho dãy số A. Có bao nhiêu cặp n số không trùng nhau, liệt kê các cặp số đó. 
//Ví dụ: A = 1,2,3. Khi n = 2 thì kết quả có 3 cặp số, danh sách: 1&2, 1&3, 2&3. Khi n = 3 thì kết quả có 1 cặp số là 1,2,3.

console.log("Câu 3: ")

function findUniquePairs (array, n) {
    const resultArr = [];

    array = Array.from(new Set(array)); // remove duplicate numbers

    function recursiveByN (currentIndex, uniqueNumbersPair) {
        for (let i = currentIndex; i < array.length; i++) {
            const currentNum = array[i];

            if (!uniqueNumbersPair.includes(currentNum)) {
                uniqueNumbersPair.push(currentNum);

                if (uniqueNumbersPair.length < n) {
                    recursiveByN(currentIndex + 1, uniqueNumbersPair)
                } 
                else if (uniqueNumbersPair.length === n) {
                    resultArr.push([...uniqueNumbersPair]);
                    uniqueNumbersPair.pop();
                }
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        recursiveByN(i + 1, [num])
    }

    return Array.from(
        new Set(
            resultArr.map(pair => pair.sort().join(' & '))
        )
    )
    .forEach(value => console.log(value));
}

findUniquePairs([1, 3, 2, 5, 6, 9, 2, 3, 5, 1], 3)

// => result:
"1 & 2 & 3" 
"1 & 3 & 5" 
"1 & 3 & 6" 
"1 & 3 & 9" 
"2 & 3 & 5" 
"2 & 3 & 6" 
"2 & 3 & 9" 
"2 & 5 & 6" 
"2 & 5 & 9" 
"5 & 6 & 9"