const remove =(postion)=>{
    let data = [10,20,30,40,50,60,70];
    for(i=postion;i<data.length-1;i++){
        data[i] = data[i+1];
    }
    data.length= data.length-1;
    return data;
}
let postion = 5
//console.log(remove(postion));

const el=(postion)=>{
    let data = [10,20,30,40,50,60,70];
    data.splice(postion,1);
    return data
}

console.log(el(postion));
