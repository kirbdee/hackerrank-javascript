/*
 *  Reading from stdin
 */
process.stdin.resume();

process.stdin.setEncoding('ascii');
var _input = "";

process.stdin.on("data", function (input) {
  _input = cleanseInput(input);
});

function cleanseInput(input){
  var input = input.split('\n');

  return input.filter(function(value){
    return value != '';
  });
}

var _readLine = (function(){
  var lineCount = 0;

  return function(){
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
var main = function(){
  var line = _readLine();

  while(line){
    console.log(line);
    line = _readLine();
  }

};