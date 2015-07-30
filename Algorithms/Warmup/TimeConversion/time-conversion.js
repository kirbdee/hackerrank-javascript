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
  var date = _readLine();
  var apm = date.substr(8,2);
  date = date.substr(0,8);

  date = date.split(':');
  date[0] = parseInt(date[0]);
  if(apm === 'PM' && date[0] !== 12){
    date[0] = date[0]+12;
  } else if(apm === 'AM' && date[0] === 12){
    date[0] = 0;
  }

  if(date[0]<10){
    date[0] = '0'+date[0];
  }

  console.log(date.join(":"));
};

/*
 *  Helper Functions
 */
var _parseIntArray = function (arr) {
  var arr = arr.split(':');
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  return arr;
};