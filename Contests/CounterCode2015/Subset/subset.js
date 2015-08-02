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
  var q = [];
  for( var i = 0; i < number; i++){
    var cmd = _readLine().split(' ');
    switch(cmd[0]){
      case 'add':
        q.push(cmd[1]);
        break;
      case 'cnt':
        var qLen = q.length;
        var count = 0;
        for( var j = 0; j < qLen; j++){
          if((q[j]&cmd[1]) == q[j]){
            count++;
          }
        }
        console.log(count);
        break;
      case 'del':
        var index = q.indexOf(cmd[1]);
        if(index >= 0) q.splice(index,1);
        break;
    }
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
