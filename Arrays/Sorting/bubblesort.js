let arr = [1, 1, 2, 0, 1, 1, 1, 2];

// Let take a count varibale that holds the value of length of an arr which will be decresed after each loop 
let count = arr.length - 1
let swapped; //if this flag is false then it means that arr is sorted already and we can break the loop 

// run the loop till count is greater then 0
while (count > 0) {
    swapped = false
    // inner loop which check adjacent elemts till count number
    for (let i = 0; i < count; i++) { 
        // swap if arr[i] is greater then arr[i+1]
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
            swapped = true // this will make sure to do another loop to check if we still need to sort or no
        } 

    }
    // if it's false it means array is sorted no need to run anoher loop
    if(!swapped){
        break;
    }
    // after every loop count - 1 as we know the last element gonna be the largest on so no need to check that agian 
    count--

}

console.log(arr);
