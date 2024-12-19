//inserting element into a arrry.
const insert = (arr, newel, postion) => {
    let len = arr.length;
    for (i = len - 1; i >= 0; i--) {
        if (i >= postion) {
            arr[i + 1] = arr[i];
            console.log(arr[i + 1] = arr[i]);
            if (i == postion) {
                arr[i] = newel
            }
        }
    }
    return arr;
}

let arr = [10,20,30,40,50];
let newel = 600;
let postion = 2;
console.log(insert(arr, newel, postion));


const byFunction =(arr,newel,postion)=>{
    arr.splice(postion,0,newel);
    return arr;
}

//console.log(byFunction(arr,newel,postion));

//console.log(arr);
