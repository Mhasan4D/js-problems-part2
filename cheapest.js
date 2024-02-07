
const phones=[
   { name:'samsung',price:30000,cemera:'12mp',color:'black'}, 
   { name:'apple',price:120000,cemera:'12mp',color:'black'}, 
   { name:'oppo',price:23000,cemera:'12mp',color:'black'}, 
   { name:'blackbary',price:80000,cemera:'12mp',color:'black'}, 
   { name:'walton',price:32000,cemera:'12mp',color:'black'}, 
       
]

 function getCheapestPhone(phones){
       let min=phones[0];
      for(const phone of phones){

         if(phone.price<min.price){

            min=phone;
         }
      }
      return min;
 }


//   const cheap=getCheapestPhone(phones);
//     console.log('cheapest phone is',cheap);



 function getHeightestPhone(phones){
       let max=phones[0];
      for(const phone of phones){

         if(phone.price>max.price){

            max=phone;
         }
      }
      return max;
 }


  const max=getHeightestPhone(phones);
    console.log('heightest phone is',max);