var args = process.argv;

function investInPopBottles(dollars){

  var fullBottles = Math.floor(dollars / 2);
  // console.log("You spent $", dollars, "to get", fullBottles, "full pop bottles.");
  bottleBreakdown.purchased = fullBottles;
  return fullBottles + redeem(fullBottles, 0 ,0);

}

function redeem(bottles, leftoverBottles, leftoverCaps){
  if (bottles === 0 ) return 0;

  var fromEmptyBottles = Math.floor(bottles / 2);
  var fromCaps = Math.floor(bottles / 4);
  leftoverBottles += (bottles % 2);
  leftoverCaps += (bottles % 4);

  fromEmptyBottles += Math.floor(leftoverBottles /2);
  fromCaps += Math.floor(leftoverCaps / 4);

  leftoverBottles = (leftoverBottles % 2);
  leftoverCaps = (leftoverCaps % 4);


  var redeemedBottles = fromCaps + fromEmptyBottles;

  // console.log(redeemedBottles, "+ redeem(" ,redeemedBottles, leftoverBottles, leftoverCaps,")");
  bottleBreakdown.fromEmpty += fromEmptyBottles;
  bottleBreakdown.fromCaps += fromCaps;
  bottleBreakdown.emptyLeft = leftoverBottles;
  bottleBreakdown.capsLeft = leftoverCaps;

  return redeemedBottles + redeem(redeemedBottles, leftoverBottles, leftoverCaps);
}

var bottleBreakdown = {
  purchased: 0,
  fromEmpty: 0,
  fromCaps: 0,
  emptyLeft: 0,
  capsLeft: 0
};

console.log("You spent $", args[2], "and got", investInPopBottles(args[2]), "full pop bottles total in return. Among those,");
console.log(bottleBreakdown.purchased.toString(), "were purchased,");
console.log(bottleBreakdown.fromEmpty.toString(), "were exchanged from empty bottles,")
console.log(bottleBreakdown.fromCaps.toString(), "were exchanged from bottle caps.")
console.log("You have", bottleBreakdown.emptyLeft, "empty bottles and", bottleBreakdown.capsLeft, "caps left.")