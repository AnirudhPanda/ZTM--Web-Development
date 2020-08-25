// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answershould return [1,3]
([1, 2, 3], 4)

function sumToTarget(array, target) {

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            
            if ((array[i] + array[j] === target) &
                array[i] !== array[j]) {

                return [array[i], array[j]];

            }


        }
    }
}
sumToTarget([5,6,7,8], 13);