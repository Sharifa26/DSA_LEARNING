/**
 Print the Following Pattern.

 Input : N =6

 Output : 

        1
        0 1
        0 1 0
        1 0 1 0
        1 0 1 0 1
        0 1 0 1 0 1

 */

const print =(N)=>{
    let ans = 1;
    for(let i=1;i<=N;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(ans+" ");
            ans = 1-ans;
        }
            process.stdout.write("\n");
    }
}

console.log(print(10));
