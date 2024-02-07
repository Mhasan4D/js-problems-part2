

function multiply(num1,num2){
    if( typeof num1 !== 'number' || typeof  num2 !== 'number'){

        return 'please provide number'
    }
    const mult=num1*num2;
    return mult;
}

//   const result=multiply(6,'seven');
//    console.log(result);



    function fullName(first,last){
      
        if(typeof first !== 'string'){
         return 'first Name  should a string'

        }
         else if(typeof last !== 'string'){
          return 'last Name should a string'

         }
          const full=first+ ' ' +last;
          return full;
    }

     const full=fullName('Mahmudul','Hasan');
     console.log(full);




     function getPrice(product){

          if( typeof product  !== 'object'){

            return 'please provide an object'
          }

         const price= product.price;
         return price;

     }

     const price=getPrice({name:'chulkanir dandi',price:35,color:'black'})
    //  const price=getPrice(5);
     console.log(price);



     function getSecond(numbers){
         if(Array.isArray(numbers)===false){

            return 'please provide an array'
         }
        const second= numbers[1];
        return second;

     }


       const second=getSecond([33,4,4,5,5,]);

       console.log(second);