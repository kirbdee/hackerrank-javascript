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
  console.log(main());

});

/*
 *  Main function for logic
 *  Do all work here
 */
var main = function () {
  var actual = _readLine();
  var expected = _readLine();
  actual = _parseIntArray(actual);
  expected = _parseIntArray(expected);

  if(actual[2] > expected[2]){
    return 10000;
  }
  if(actual[1] > expected[1] && actual[2] == expected[2]){
    return (actual[1] - expected[1]) * 500;
  }
  if(actual[0] > expected[0] && actual[1] == expected[1] && actual[2] == expected[2]){
    return (actual[0] - expected[0]) * 15;
  }

  return 0;

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