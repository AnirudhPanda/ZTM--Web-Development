// double the array values
// data is mutated here a new array born
const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) =>{
    double.push(num*2);
})
console.log(double)

// map
// map transforms the array while forEach does the actions
const mapArray = array.map((num) =>{
    return num*2;
})
// It expects the operation to return the element
// no side effects

// filter
//  If true goes into the array, if not then wont
const filterArray = array.filter(num => {
    return num > 5
});
console.log(filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num)=>{
    return accumulator + num
    // the 5 adds up to the total of the array
}, 5);

console.log('Reduce', reduceArray);


// Q1-
