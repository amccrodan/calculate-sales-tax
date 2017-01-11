var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // iterate through salesData, check company name
  // if it doesn't exist, create new property in output object
  // if it already exists, calculate tax in province and add to property
  // return object
  for (var i = 0; i < salesData.length; i++) {
    currentEntry = salesData[i];
    console.log(currentEntry);
  }
}

function sumSales(salesArray) {
  var sum = 0;
  for (var i = 0; i < salesArray.length; i++) {
    sum += salesArray[i];
  }
  return sum;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);