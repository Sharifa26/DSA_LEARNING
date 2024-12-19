const merge=()=>{
    let arr1=[4,7,5,9,0,10];
    let arr2=[1,3,8,2]
    let arr3=[];
    let d1=0,d2=0,d3=0;
    while(d1<arr1.length && d2<arr2.length){
        if(arr1[d1]<arr2[d2]){
            arr3[d3]=arr1[d1];
            d1++;
        }else{
            arr3[d3]=arr2[d2];
            d2++;
        }
        d3++;
    }
    while(d1<arr1.length){
        arr3[d3]=arr1[d1];
        d1++;
        d3++;
        }
    return arr3
}

console.log(merge());
