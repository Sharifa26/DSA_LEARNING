/**
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/stock-buy-and-sell2615
 The cost of stock on each day is given in an array price[]. Each day you may decide to either buy or sell the stock i at price[i], you can even buy and sell the stock on the same day. Find the maximum profit that you can get.

Note: A stock can only be sold if it has been bought previously and multiple stocks cannot be held on any given day.

Examples:

Price
  ^
  |                                * Sell (695)
  |                               /
700|                              *
  |                             /
600|                            * 
  |                           /
500|                * Sell (310)
  |               /          \
400|              *            \
  |                         * Buy (40)
300|             /
  |            *
200|          /
  |         *
100|  * Buy (100)
  +---------------------------------------------------> Day
     0    1    2    3    4    5    6

Profit calculation:
1. Buy at 100, Sell at 310 -> Profit = 310 - 100 = 210
2. Buy at 40, Sell at 695 -> Profit = 695 - 40 = 655
Total Profit = 210 + 655 = 865


Input: prices[] = [100, 180, 260, 310, 40, 535, 695]
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210. Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655. Maximum Profit = 210 + 655 = 865.


Input: prices[] = [4, 2, 2, 2, 4]
Output: 2
Explanation: Buy the stock on day 3 and sell it on day 4 => 4 – 2 = 2. Maximum Profit = 2.
 */

const stock=(prices)=>{

    // this apporach takes too many time to run and it is a O(n);
    // let n=prices.length;
    // let localMin =prices[0];
    // let localMax = prices[0];
    // let res=0;

    // let i=0;
    // //checking the i>n
    // while(i<n-1){
    //     //local minimum
    //     while(i<n-1 && prices[i]>= prices[i+1]){
    //         i +=1;
    //     }
    //     localMin = prices[i];
    //     // local maximum
    //     while(i<n-1 && prices[i+1]<=prices[i]){
    //         i +=1;
    //     }
    //     localMax =prices[i];

    //     //Adding profit
    //     res += localMax - localMin;
    // }
    // return res;

    //this apporach is much faster than the previous one and it is a O(n);
    let res =0;
    for(let i=0;i<prices.length;i++){
        if(prices[i] < prices[i+1]){
            res += prices[i+1] - prices[i];
        }
    }
    return res;
}

let prices = [100, 180, 260, 310, 40, 535, 695]
console.log(stock(prices));
