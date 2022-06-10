console.log('this is JavaScript');

// Iterators

function fruitsIterator(values){
    let nextIndex = 0;

    return {
        next: function() {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return{
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My  array is", myArray );

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);

