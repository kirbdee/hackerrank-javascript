  /*
 *  Reading from stdin
 */
process.stdin.resume();

process.stdin.setEncoding('ascii');
var _input = "";

process.stdin.on("data", function (input) {
  _input = cleanseInput(input);
});

function cleanseInput(input) {
  var input = input.split('\n');

  return input.filter(function (value) {
    return value != '';
  });
}

var _readLine = (function () {
  var lineCount = 0;

  return function () {
    return _input[lineCount++];
  };

})();

process.stdin.on("end", function () {

  /*
   *  Call main()
   */
  main();

});

/*
 *  Main function for logic
 *  Do all work here
 */
var main = function() {
  var N = parseInt(_readLine());

  for( var i = 0; i < N; i++ ){
    var num = parseInt( _readLine() );
    console.log( multipleSum(num) );

  }

};

/*
 * Check and add all multiples of 3 or 5
 */
var multipleSum = function(number){
  number = number - 1;
  //3s + 5s - 3x5s
  var lowest5 = 0;
  var highest5 = 0;
  var lowest3 = 0;
  var highest3 = 0;
  var lowest15 = 0;
  var highest15 = 0;

  if(number > 3) {
    lowest3 = 3;
    highest3 = number - (number % 3);
  }

  if(number > 15) {
    lowest15 = 15;
    highest15 = number - (number % 15);
  }

  if(number > 5) {
    lowest5 = 5;
    highest5 = number - (number % 5);
  }

  var sum3 = ((highest3+lowest3)*highest3/lowest3)/2;
  var sum15 = number > 15 ? ((highest15+lowest15)*highest15/lowest15)/2 : 0;
  var sum5 = ((highest5+lowest5)*highest5/lowest5)/2;
  return (sum3+sum5-sum15);
}

/*
 *  Helper Functions
 */
var _parseIntArray = function (arr) {
  var arr = arr.split(' ');
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  return arr;
};