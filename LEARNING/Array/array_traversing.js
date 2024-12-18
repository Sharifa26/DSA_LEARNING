let data = [4, 7, 9, 11, 3, 5, 23, 57, 90, 67];

// for(let i=0;i<data.length;i++){
//     console.log(`Array index ${i} is ${data[i]}`);
// }


// validations
const getElement = (x) => {

    if (x < data.length && x >= 0 && typeof x === 'number') {
        return `Array index of ${x} is ${data[x]}`;
    }
    else if (x < 0){
        return 'Invalid index , index should be in postive number';
    }
    else if (x >= data.length){
        return `Invalid index , index should be in the range of ${data.length -1 }`;
    }
    else if (typeof x !=='number'){
        return 'Invalid index , index should be number';
    }
    else {
        return 'Invalid index , index should not be in symbols';
    }
}

let x = 6
console.log(getElement(x));
 