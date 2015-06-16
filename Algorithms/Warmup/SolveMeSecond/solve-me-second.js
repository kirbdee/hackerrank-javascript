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
  var T = parseInt(_readLine());

  while(T > 0){
    var numbers = _parseIntArray(_readLine());
    console.log( sum( numbers[0] , numbers[1] ) );
    T--;
  }

};

var _parseIntArray = function(arr){
  var arr = arr.split(' ');
  var length = arr.length;
  for(var i = 0; i < length; i++){
    arr[i] = parseInt(arr[i]);
  }
  return arr;
};

var sum = function(a,b){
  return a+b;
}