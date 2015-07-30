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
  var number = parseInt(_readLine());
  var arr = _readLine().split('');
  var shift = parseInt(_readLine());

  for(var i = 0; i < number; i++){
    char = arr[i];
    var charCode = char.charCodeAt(0);
    if(charCode >= 65 && charCode <=90){
      var newCode = charCode+shift;
      if(newCode > 90){
        newCode = 64 + (newCode % 90);
      }
      char = String.fromCharCode(newCode);

    } else if(charCode >= 97 && charCode <=122){
      var newCode = charCode+shift;
      if(newCode > 122){
        newCode = 96 + (newCode % 122);
      }
      char = String.fromCharCode(newCode);
    }
    arr[i] = char;
  }

  console.log(arr.join(''));
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