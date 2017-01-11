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
  outputObject = {};

  for (var i = 0; i < salesData.length; i++) {
    currentEntry = salesData[i];
    currentCompany = currentEntry["name"];
    currentProvince = currentEntry["province"];
    currentTotalSales = sumSales(currentEntry["sales"]);

    if (outputObject[currentCompany]) {
      outputObject[currentCompany]["totalSales"] += currentTotalSales;
      outputObject[currentCompany]["totalTaxes"] += calculateTax(currentTotalSales, taxRates[currentProvince]);
    } else {
      outputObject[currentCompany] = {};
      outputObject[currentCompany]["totalSales"] = currentTotalSales;
      outputObject[currentCompany]["totalTaxes"] = calculateTax(currentTotalSales, taxRates[currentProvince]);
    }
  }

  return outputObject;
}

function sumSales(salesArray) {
  var sum = 0;
  for (var i = 0; i < salesArray.length; i++) {
    sum += salesArray[i];
  }
  return sum;
}

function calculateTax(dollarAmount, taxRate) {
  return dollarAmount*taxRate;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);