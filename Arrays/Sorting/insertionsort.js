let arr = [5, 4, 3, 2, 1];

for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j >0 ; j--) {
        if(arr[j-1]>arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j]
            arr[j]= temp
        }
        else{
            break;
        }
    } 
}

console.log(arr)
