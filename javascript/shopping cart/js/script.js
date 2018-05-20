// A. // 1 Create a function that copies all of the items (not prices) to a new array
// 2 Then re-order the array alphabetically
// 3 Try to make the function use an argument that references the array name

// B. // 1 Create another function that takes all of the prices (not items) and assigns
// them to a new myArray
// 2. Re-order the new array numerically from lowest to highest
// 3 Try to make the function use an argument that references the array name
(function() {

  var shoppingCart = [
    {item: `soap`, price: 4.99},
    {item: `hammer`, price: 19.60},
    {item: `tissues`, price: 2.95},
    {item: `chocolates`, price: 5.95},
    {item: `fruit`, price: 27.60},
    {item: `oil`, price: 80.95},
    {item: `tv`, price: 220.00},
    {item: `phone`, price: 100.60},
    {item: `meat`, price: 12.95}
  ];

  //Create an EMPTY array, an EMPTY array looks like the one directly below
  var cartItems = [];
  var cartPrices = [];

  function getItems(){
    for (var i = 0, length = shoppingCart.length; i < length; i++) {
      cartItems.push(shoppingCart[i].item);
    }
    cartItems.sort();
  }
  //Invoking a function
  getItems()





  console.log(items); // [4.99, 19.60, 2.95]

  // // for (var i = 0, length = shoppingCart.length; i < length; i++) {
  // //   items.push(shoppingCart[i].item);
  // }



}());
