'use strict';

let arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

let arr2 = [3, 6, 8, 9, 4, 5, 7];

function partition(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end-1, j);
  return j;
  // let middleIndex = Math.floor((start+end)/2);
  // let pivot = arr[middleIndex];
  // let j = end-1;
  // for (let i=start; i < end -1; i++) {
  //   if (arr[i] >= pivot && arr[j] <= pivot)  {
  //     swap(arr, i, j);
  //     j++;
  //   }
  // }
  // swap(arr, end);
  // return j;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, start=0, end=arr.length) {
  start = start;
  end = end;
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = quickSort(arr, start, middle);
  arr = quickSort(arr, middle + 1, end);
  return arr;
  //pivot is the value you compare with; middle
  //base 
  // start = start;
  // end = end;
  // if (start >= end) {
  //   return arr;
  // }
  // const middle = partition(arr, start, end);
  // arr = qSort(arr, start, middle);
  // arr = qSort(arr, middle+1, end);
  // return arr;

}

console.log(quickSort(arr2));