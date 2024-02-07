
  const  products=[
     
    {name:'shampu',price:300 },
    {name:'shirt',price:500 },
    {name:'pent',price:900 },
    {name:'chiruni',price:100 },



  ]



  function getShoopingTotal(products){
     let total=0;
        for(const product of products){

          total=total+product.price;

        }

      return total;
  }



    const total=getShoopingTotal(products);
     console.log('total take is:',total);