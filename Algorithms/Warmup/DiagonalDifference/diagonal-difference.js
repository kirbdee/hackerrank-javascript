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
  var N = parseInt(_readLine());

  var diagA,
      diagB;

  diagA = diagB = 0;

  for( var i = 0; i < N; i++ ) {
    var temp = _parseIntArray(_readLine());
    diagA += temp[i];
    diagB += temp[N-i-1];
  }

  console.log(Math.abs(diagA-diagB));
};

var _parseIntArray = function(arr){
  var arr = arr.split(' ');
  var length = arr.length;
  for(var i = 0; i < length; i++){
    arr[i] = parseInt(arr[i]);
  }
  return arr;
};