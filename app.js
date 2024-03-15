let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let tagCounts = {};
for( let tag of tags) {
    if (tagCounts[tag]) {
        tagCounts[tag] ++
    } else {
        tagCounts[tag] = 1;
    }
}
console.log(tagCounts);



const firstArray = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
const secondArray = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

function findCommonElements(arr1, arr2) {
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }
    return commonElements;
}

const commonElementsArray = findCommonElements(firstArray, secondArray);
console.log("Общие элементы:", commonElementsArray);



function averageOfPositiveNumbers(arr) {
    let sum = 0
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
            count++
        }
    }

    if (count === 0) {
        return "Нет";
    }
    return sum / count;
}
const numbers = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8];
console.log(averageOfPositiveNumbers(numbers));


function filterWordsWithTA(arr) {
    var filteredArray = [];

    for (var i = 0; i < arr.length; i++) {
        var word = arr[i].toLowerCase();

        if (word.includes('t') && word.includes('a')) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

var words = ['text', 'frontend', 'apple', 'banana', 'cat', 'Dog'];
var filteredWords = filterWordsWithTA(words);
console.log(filteredWords); // Вывод: ['text', 'frontend', 'cat']

//fff
