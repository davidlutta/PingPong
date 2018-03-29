//
// //Back-End :
.function(number){
  var numberPingPong = [];
  for(var index = 0; index <= number; index += 1){
    if (index % 15 === 0) {
      numberPingPong.push("PingPong");
    } else if ( index % 5 === 0) {
      numberPingPong.push("Pong");
    } else if(index %3 === 0 ) {
      numberPingPong.push("ping");
    } else {
      return number;
    }
  }
}












// var three  = function() {
// var user3 = parseInt(prompt("Give me another !"));
//   if (user3 % 3 ===0){
//   alert("ping");
//   } else {
//   alert("false")
//   }
// }
// three();
//
// var five  = function() {
// var user2 = parseInt(prompt("Give me another !"));
//   if (user2 % 5 ===0){
//   alert("pong");
//   } else {
//   alert("false")
//   }
// }
// five();
//
// var fifteen = function() {
// var user = parseInt(prompt("give me a number !"));
//   if ((user % 3 === 0) && (user % 5 === 0) ){
//     alert("pingpong");
//     } else {
//     alert("false");
//     }
// }
// fifteen();
//
// //Front-End:
