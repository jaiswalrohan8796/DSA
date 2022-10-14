//https://practice.geeksforgeeks.org/problems/heap-sort/

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function heapifyDown(arr, size, idx) {
  let largest = idx
  let leftI = 2*(idx) + 1
  let rightI = 2*(idx) + 2
  if(leftI < size && arr[leftI] > arr[largest]) {
    largest = leftI
  }
  if(rightI < size && arr[rightI] > arr[largest]) {
    largest = rightI
  }
  if(idx != largest) {
    swap(idx, largest)
    heapifyDown(arr, size, largest)
  }
}


function heapSort(arr, n) {
  //heapify the complete array to Max Heap
  for(let i = Math.floor((i-1)/2); i >= 0; i--) {
    heapifyDown(arr, n, i)
  }
  //shift elements one by one to end & heapify only reduced array
  for(let j = n-1; j > 0; j--) {
    swap(arr, 0, j)
    //heap size reduced at every iteration
    heapifyDown(arr, j, 0)
  }
}

