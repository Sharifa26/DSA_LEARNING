const merge =()=>{
    let arr1=[1,2,6,8,9,0];
    let arr2=[10,40,3,100];
    let arr3=[];
    for(i=0;i<arr1.length;i++){
        arr3[i]= arr1[i];
    }
    for(i=0;i<arr2.length;i++){
        arr3[arr1.length+i]=arr2[i];
    }
    return arr3;
}

const conect=()=>{
    let arr1=[1,2,6,8,9,0];
    let arr2=[10,40,3,100];
    let arr3=[...arr1,...arr2];
    return arr3;
}
//console.log(merge());
console.log(conect());
