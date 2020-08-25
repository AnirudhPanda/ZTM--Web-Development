// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let cleanRoom = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]
// var sortRoom = cleanRoom.sort(function(a, b){
//     return a - b
// });
const compare = (a, b) => a - b;

const cleanTheRoom = array => {
    //Sorting correctly the given array
    array.sort(compare);
    let repVal = 0;
    let temp = array[0];
    const newArray = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === temp) repVal++;
        else {
            if (repVal > 0) {
                newArray.push(new Array(repVal + 1).fill(temp));
            } else {
                newArray.push(temp)
            }
            temp = array[i];
            repVal = 0;
        }
    }
    return newArray;
}
console.log(cleanTheRoom(cleanRoom));