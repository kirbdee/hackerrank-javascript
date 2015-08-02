/**
 * Created by kirbdee on 8/1/15.
 */
var N = 100000;
var Pi = 1000000000;
var res = [];
for( var i = 1; i <= N/2; i++){
  res.push(Math.floor((Math.random()*Pi)+1));
}
console.log(N);
console.log(res.join(' '));
