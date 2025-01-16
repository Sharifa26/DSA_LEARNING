/**
 Your are given an integer N and you have to print the pattern.

 Input : N=10
 Output : 
        0 0 0 0 0 0 0 0 0 10
        0 0 0 0 0 0 0 0 9
        0 0 0 0 0 0 0 8
        0 0 0 0 0 0 7
        0 0 0 0 0 6
        0 0 0 0 5
        0 0 0 4
        0 0 3
        0 2
        1
 */

const pattern =(N)=>{
    for(let i=0;i<N;i++){
        for(let j=0;j<N-i-1;j++){
            process.stdout.write(0 + ' ');
        }
        process.stdout.write(N-i + "\n");
    }
}

console.log(pattern(10));
