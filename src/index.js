// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  //alert("Calculate Prices clicked!");
  //... your code goes here

  // ne marche pas avec  = product.querySelector ???
  const price = product.querySelector(".price");
  //console.log(price);
  const quantity = product.querySelector(".quantity");

  //const value = price.querySelector('.price span')

  const valueOfPrice = price.querySelector(".price span");
  const valueOfQuantity = quantity.querySelector("input").value;

  let subtotal = 0;

  subtotal = Number(valueOfPrice.textContent * valueOfQuantity);
  let showSubtotal = product.querySelector(".subtotal > span");
  //console.log(showSubtotal);
  return (showSubtotal.textContent = subtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProduct = document.querySelectorAll(".product");
  //console.log(allProduct)
  allProduct.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  let priceTotal = document.querySelector("#total-value span");
  //console.log(priceTotal);

  let counter = 0;
  allProduct.forEach((product) => {
    counter += updateSubtotal(product);
  });
  // console.log(counter)

  priceTotal.textContent = counter;
}

// ITERATION 4

// let removeBtn = document.querySelectorAll(".btn-remove");

// removeBtn.forEach((removeBtn) => {
//   removeBtn.addEventListener("click", removeProduct);
// });

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest("tr").remove();
  //console.log(target.closest('tr'));

  calculateAll();

  //  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createProduct = document.getElementById("create");
  console.log(createProduct);
  createProduct.addEventListener("click", (createProduct) => {});
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  let removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);

    //   let removeBtn1 = document.querySelector('.btn-remove');
    //   removeBtn1.addEventListener("click",removeProduct);
  });
  createProduct();
});
