/*
* Problem : Merge interval from array
* Approach:
* sorting + Greedy
* Time Complexity: O(n log n)
* Space Complexity: O(n)
* Description:
* Merge two intervals if arr[i][1] >= arr[i + 1][0]
*/

function mergeIntervals(arr) {
   arr.sort((a,b)=>{
       return a[0] - b[0]
   })
   let result = [arr[0]]
   for(let i = 1; i < arr.length; i++){
       let last = result[result.length - 1]
      
       if(last[1] >= arr[i][0]){
           last[1] = Math.max(last[1],arr[i][1])
       } else {
           result.push(arr[i])
       }
   }
    return result;
}
