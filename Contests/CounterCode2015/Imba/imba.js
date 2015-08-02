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
  //console.log(_input);
  var number = _input.shift();
  arr = _input;

  //console.log("Num", number);
  //console.log("Arr", arr);

  for(var i = 0; i < number; i++){
    var left,right,res;
    res = '';
    left = Math.floor((arr[i]-1)/2)+1;
    right = Math.ceil((arr[i]-1)/2)+1;
    //console.log(arr[i],left,right);

    for(var j = left; j > 0; j--){
      if(left == right){
        res = res + left + ' ';
      } else {
        res = res + left +' ' + right + ' ';
      }
      left--;
      right++;
    }
    console.log(res);
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
