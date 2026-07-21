/**
 * Problem:
 * Move all zeros to the end of the array while maintaining
 * the relative order of the non-zero elements.
 *
 * Approach:
 * - Use two pointers: `left` and `right`.
 * - `left` traverses every element.
 * - `right` tracks the position where the next non-zero element should be placed.
 * - Whenever a non-zero element is found, swap it with the element at `right`
 *   and increment `right`.
 * - By the end, all non-zero elements are at the front and all zeros are moved
 *   to the end.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Description:
 * This solution modifies the original array in-place using the
 * two-pointer technique, requiring no extra array.
 */


function moveZero(arr){
    let left = 0
    let right = 0
    
    while(left < arr.length ){
          if(arr[left] !== 0 ){
            [arr[left],arr[right]] = [arr[right],arr[left]]
            right++
        }
            left++
    }
    return arr
}