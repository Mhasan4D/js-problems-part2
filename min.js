

const prices=[20000,12000,33000,100000,50000,9000]



function getMin(numbers){
      let min=numbers[0];
    for(const num of numbers){

        if(num<min){

            min = num;
        }
    }
    
   return min;
}


  const min=getMin(prices);
  console.log(min);