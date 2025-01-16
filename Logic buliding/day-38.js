/**
You are given a two array of Unique integers and u have to find the common Elements in the both Array.
but You have to do in (O)n

Input : arr1 = [3,7,1,5,9,15,21]
        arr2 = [9,10,16,5,3,27]

Output : [3,5,9]
*/

const common =(arr1,arr2)=>{
    let set = new Set(arr1);
    let ans = new Array;
    for(let i=0;i<arr2.length;i++){
        if(set.has(arr2[i])) ans.push(arr2[i]);
    }
    ans.sort((a,b)=> a-b);
    return ans;
}

let arr1 = [3,7,1,5,9,15,21];
let arr2 = [9,10,16,5,3,27];
console.log(common(arr1,arr2));