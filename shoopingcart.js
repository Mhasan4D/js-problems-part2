const  products=[
     
    {name:'shampu',price:300,quantity:5 },
    {name:'soap',price:300,quantity:3 },
    {name:'shirt',price:400,quantity:2 },
    {name:'show',price:1200,quantity:1 },
    {name:'pent',price:900,quantity:2 },
    
   



  ]


   function  cartTotal(products){
       let total=0;
      for(const product of products){

         const thisProductCost=product.price * product.quantity;
          total=total+thisProductCost;
      }
 
     return total;
   }


   const totalShoopingCost=cartTotal(products);
     console.log(totalShoopingCost);