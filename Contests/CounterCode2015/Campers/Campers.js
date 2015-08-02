/*
 *  Reading from stdin
 */
process.stdin.resume();

process.stdin.setEncoding('ascii');
var _input = "";

process.stdin.on("data", function (input) {
  _input += input;
  //_input = cleanseInput(input);
  //console.log("numbers",_input[0]);
  //console.log("ids",_input[1]);
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

  /*
  DATA SETUP
   */
  _input = cleanseInput(_input);
  var arr,players,snipers,sniperIds;
  arr = _parseIntArray(_input[0]);
  players = arr[0];
  snipers = arr[1];
  sniperIds = _parseIntArray(_input[1]);
  //console.log(arr);
  //console.log("players", players);
  //console.log("snipers", snipers);
  //console.log("ids", sniperIds);
  //Create Hash of ineligible players
  var ineligible = {};

  //Result
  var result = 0;

  function addIneligible( player ){
    ineligible[player] = player;
  };

  function pickable( player ){
    if(!ineligible.hasOwnProperty(player)){
      result++;
      //AKA PICKED
      addIneligible(player);
      if(player > 1){
        addIneligible(player-1);
      }
      if(player < players){
        addIneligible(player+1);
      }
    }
  }

  //Adding snipers first
  for(var s = 0; s < snipers; s++){
    pickable(sniperIds[s]);
  }
  //console.log(result,ineligible);

  //Add rest
  for(var p = 1; p <= players; p++){
    pickable(p);
  }

  console.log(result);

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
