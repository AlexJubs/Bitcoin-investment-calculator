var bitcoinCalculator = angular.module('bitcoinCalculator', ['nvd3ChartDirectives']);

  bitcoinCalculator.controller('bitcoinController', function($scope, $http){

    // calling the api, grabbing the value for all the currencies, appending it to the DOM
    // We save all the currency values in uniqie variables
    $http.get("https://bitpay.com/api/rates")
    .success(function(data){
      $scope.rates = data;
      for(var i=0;i<data.length;i++){
        if (data[i].code == "USD"){
          $scope.currRate_USD = data[i].rate;
        }
        if (data[i].code == "EUR"){
          $scope.currRate_EUR = data[i].rate;
        }
        if (data[i].code == "GBP"){
          $scope.currRate_GBP = data[i].rate;
        }
        if (data[i].code == "JPY"){
          $scope.currRate_JPY = data[i].rate;
        }
        if (data[i].code == "CAD"){
          $scope.currRate_CAD = data[i].rate;
        }
      }

      $scope.currRate = function(currency){
          if (currency == "USD ($)"){
            return $scope.currRate_USD;
          }
          if (currency == "EUR (€)"){
            return $scope.currRate_EUR;
          }
          if (currency == "CAD ($)"){
            return $scope.currRate_CAD;
          }
          if (currency == "GPB (£)"){
            return $scope.currRate_GBP;
          }
          if (currency == "JPY (¥)"){
            return $scope.currRate_JPY;
          }
        }
        
      $scope.currency_symbol = function(currency){
        if (currency == "USD ($)"){
          return "$";
        }
        if (currency == "EUR (€)"){
          return "€";
        }
        if (currency == "CAD ($)"){
          return "$";
        }
        if (currency == "GPB (£)"){
          return "£";
        }
        if (currency == "JPY (¥)"){
          return "¥";
        }
      }
    });

    $scope.exampleData = [{
    "key": "Quantity",
    "bar": true,
    "values": [
      [10, 20],
      [20, 40],
      [30, 60],
      [40, 80],
      [50, 100]
    ]
  }];
  
});
