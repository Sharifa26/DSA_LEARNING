/**
  print the below pattern

  1
  2 2
  hello 3
  4 4 4 4
  5 5 5 5 5
  hello 6
  7 7 7 7 7 7 7
  8 8 8 8 8 8 8 8
  hello 9
  10 10 10 10 10 10 10 10 10 10
 */

let n=6;

for(let i=1;i<=n;i++){
    if (i % 3 === 0) {
      console.log(`Hello  ${i}`);
    } else {
      for (let j = 1; j<=i; j++) {
        process.stdout.write(i + " ");
      }
      process.stdout.write("\n")
    }
}