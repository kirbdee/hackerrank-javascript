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
var main = function () {
  var number = _readLine();
  var arr = _readLine();
  arr = _parseIntArray(arr);

  //console.log("Num",number);
  //console.log("Arr",arr);
  var positive = 0;
  var zero = 0;
  var negative = 0;
  for(key in arr){
    switch(true) {
      case (arr[key] === 0):
        zero++;
        break;
      case (arr[key] < 0):
        negative++;
        break;
      case (arr[key] > 0):
        positive++;
        break;
    }
  }

  console.log((positive/arr.length).toFixed(3));
  console.log((negative/arr.length).toFixed(3));
  console.log((zero/arr.length).toFixed(3));
};

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