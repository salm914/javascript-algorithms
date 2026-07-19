/*
 * Problem:
 *
 * Example:
 * Input:
 * nums = [2,7,11,15]
 * target = 9
 *
 * Output:
 * [0,1]
 *
 * Pattern:
 * HashMap
 *
 * Approach:
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * Description:
 *
 * Edge Cases:
 * - Empty array
 * - No valid pair
 * - Duplicate numbers (e.g., [3,3])
 * - Negative numbers
 */

function twoSum(arr,n){
 const map = new Map();
 for(let i = 0; i < arr.length; i++){
     let needed = n - arr[i]
     
     if(map.has(needed)){
         return [map.get(needed),i]
     } 
     map.set(arr[i],i)
 }
 return []

}