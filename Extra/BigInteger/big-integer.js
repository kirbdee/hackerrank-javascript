var BigInteger = function(number){

  var cleanse = function(number){
    var isNum = true;

    for(key in number){

      if(!(parseInt(number[key]) >= 0)) isNum = false;
    }

    return typeof number === 'string' && number != null && number != '' && isNum  === true? number : NaN;
  };

  //Sets the value if the input is of type string
  this.value = cleanse(number);


  this.add = function(a){
    if(typeof cleanse(a) != 'string') return NaN;
    var newVal = '';
    var long = a.length > this.value.length ? a : this.value;
    var short = long === a ? this.value : a;
    var llen = long.length;
    var slen = short.length;
    var carryover = 0;
    for(var i = 0; i < llen; i++){
      var top = 0;
      var bottom = parseInt(long[llen-1-i]);
      if(i < slen){
        top = parseInt(short[slen-1-i]);
      }

      var tot = top+bottom+carryover;
      if(tot >= 10){
        carryover = 1;
        tot = tot%10;
      } else {
        carryover = 0;
      }
      newVal = tot + newVal;
    }

    //final carry over
    if(carryover == 1) newVal = carryover + newVal;

    return newVal;
  };

  this.multiply = function(m){

  };

  this.divide = function(d){

  };

  this.subtract = function(s){

  };

};



var big = new BigInteger('892745873482374892734892374289467892173189237198748923742893748932472893742839472893657834652831928317675483904785934837465428572615236131316317638927434885945879067849586');

console.log(big.add('17854917469647497854697847485789357843463784743974978474857874978649457874856789457873156693056638566353509678095718696749308571452304722626326352778548697718917581356991721785491746964749785469784748578935784346378474397497847485787497864945787485678945787315669305663856635350967809571869674930857145230472262632635277854869771891758135699172'));
