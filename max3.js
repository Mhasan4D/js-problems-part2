
const jim =89;
const tim= 79;
const kim= 99;


  if(jim>tim && jim >kim){

    console.log('jim is ultimate boss');

  } else if(tim >jim && tim>kim ){

    console.log('tim is the boss');
}

  else {

     console.log('kim is supper boss')
  }





  function maxOfthree(num1,num2,num3){

   if(num1> num2 && num1>num3){

      return num1;
   }
   else if(num2>num1 && num2>num3){

       return num2;
   }

   else {

      return num3;
   }
  }

//    const max=maxOfthree(69,89,93);
//    console.log(max);



   const max =Math.max(33,45,66,76,87,99);

       console.log(max);