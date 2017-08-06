const button = document.getElementById("clickme");
const cardPrice = document.getElementById("card-price");
const finalPriceElement = document.getElementById("final-price");

let CF_array  =[];
let sum = 0;
let count = 1;

button.addEventListener("click", (event) => {
  ["Year1", "Year2", "Year3","Year4", "Year5"].forEach (function(cashFlow){
    CF_array.push(parseInt(document.getElementById(cashFlow).value));
  });
  const dsctrt = parseInt(document.getElementById("Discountrate").value)/100;
  const grthrt = parseInt(document.getElementById("Growthrate").value)/100;
  const prct = parseInt(document.getElementById("percentage").value)/100;

  CF_array.forEach(function(entry) {
    sum += entry/Math.pow(1 + dsctrt, count);
    count += 1;
    console.log("entry is " + entry);
    console.log("add is" + add);
    console.log("sum is" + sum);
});

  sum += CF_array[4]*(1+grthrt)/(dsctrt - grthrt); //message d'erreur si 0
  sum = Math.round(sum);
     console.log("sum with terminal value rounded is" + sum);
  cardPrice.innerHTML = sum;
  finalPriceElement.innerHTML = Math.round(sum * prct);
});




// const button = document.getElementById("clickme");
// let cardPrice = document.getElementById("card-price");
// // const cardPriceValue = cardPriceElement.innerHTML;
// const finalPriceElement = document.getElementById("final-price");
// const percentage = document.getElementById("percentage").value;
// const Year1El = document.getElementById("Year1");
// const Year2El = document.getElementById("Year2");
// const Year3El = document.getElementById("Year3");
// const Year4El = document.getElementById("Year4");
// const Year5El = document.getElementById("Year5");


// button.addEventListener("click", (event) => {
//   const Year1Val = parseInt(Year1El.value);
//   const Year2Val = parseInt(Year2El.value);
//   const Year3Val = parseInt(Year3El.value);
//   const Year4Val = parseInt(Year4El.value);
//   const Year5Val = parseInt(Year5El.value);
//   const sum = Year1Val + Year2Val + Year3Val + Year4Val + Year5Val;
//   cardPrice.innerHTML = sum;
//   finalPriceElement.innerHTML = sum;
// });
