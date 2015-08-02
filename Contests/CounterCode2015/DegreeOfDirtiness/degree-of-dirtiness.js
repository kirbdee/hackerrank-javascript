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
  //Cleanse and split lines
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

  function degree(M,N){
    return Math.ceil(M/N)-1;
  };

  function position(M,N,D){
    var start = 1+(N*D);
    var end = N+(N*D);
    if(M%2 == 0){
      //even
      return N - Math.ceil((M - start + 1)/2) + 1;
    } else {
      //odd
      return ((Math.floor((M - start)/2) + 1));
    }
  };

  for( var i = 0; i < number; i++){
    var arr = _readLine();
    arr = _parseIntArray(arr);

    var N = arr[0];
    var M = arr[1];
    var D = degree(M,N);
    var P = position(M,N,D);
    console.log(P,D);
  }
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
