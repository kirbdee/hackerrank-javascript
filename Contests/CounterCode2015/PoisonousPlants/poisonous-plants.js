/*
 *  Reading from stdin
 */
process.stdin.resume();

process.stdin.setEncoding('ascii');
var _input = "";

process.stdin.on("data", function (input) {
  _input += input;
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
  _input = cleanseInput(_input);
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

  //console.log("Num", number);
  //console.log("Arr", arr);

  //Create Key Val Map
  var garden = [];

  for(var i = 0; i < number; i++){
    garden.push(arr[i]);
  }
  var day = 0;
  var hadKilling = false;

  do {
    hadKilling = false;
    garden = garden.filter(killCheck);
    if( hadKilling ) day++;
  } while(hadKilling);

  function killCheck(val, index, arr){
    if( index > 0 && index < arr.length) {
      if (arr[index - 1] < arr[index]) {
        hadKilling = true;
      } else {
        return val;
      }
    } else {
      return val;
    }
  }

  console.log(day);
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
