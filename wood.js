

function  woodQuantity(chairQuantity,tableQuantity,bedQuantity)  {
 const perChairWood =  3;
 const perTableWood = 10;
 const perBedWood   = 50;

   const TotalChairWood=chairQuantity*perChairWood;
   const totalTableWood=tableQuantity*perTableWood;
   const totalBedWood =bedQuantity*perBedWood;

   const totalWood=TotalChairWood+totalTableWood+totalBedWood;

   return totalWood;

}

const wood=woodQuantity(4,3,5);
  console.log(wood);