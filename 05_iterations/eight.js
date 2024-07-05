  const myNums = [1, 2, 3]

//   const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
//   }, 0)

  const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0);

 // console.log(myTotal);

  const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "react course",
        price: 1999
    },
    {
        itemName: "backend course",
        price: 3999
    },
    {
        itemName: "fullstack course",
        price: 5999
    }
  ]

   const priceToPay =  shoppingCart.reduce( (acc, item) => acc + item.price,0)

   console.log(`Thanks for subscribe our course and your total payment is: ${priceToPay}`);