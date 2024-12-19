const search =(item)=>{
    let arr = [3,10,4,9,44,24,60,7,3];
    let empty =[];
    let index = undefined
    for(i=0;i<arr.length;i++){
        if(arr[i]===item){
            empty.push(i);
        }
    }
    return empty;
}

let item = 3;
console.log(search(item));
