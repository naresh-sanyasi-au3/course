let shoppingCart = [
    { productTitle: "Functional Programming", type: "books", amount: 10 },
    { productTitle: "Kindle", type: "eletronics", amount: 30 },
    { productTitle: "Shoes", type: "fashion", amount: 20 },
    { productTitle: "Clean Code", type: "books", amount: 60 }
   ];

   const bybooks = order => order.type == "books";
   const getamount = order => order.amount;
   const sumamount = (acc, amount) => acc + amount;

   const totalamount = cart => {
       return cart.filter(bybooks).map(getamount).reduce(sumamount)
   };

   console.log(totalamount(shoppingCart));