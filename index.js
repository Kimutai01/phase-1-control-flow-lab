function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 2500) {
    return "No can do.";
  } else if (ride > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city) {
  const getCity = city === "NYC" ? "Ok, sounds good." : "No go.";
  return getCity;
}

function switchOnCharmFromTip(msg) {
  switch (msg) {
    case (msg = "generous"):
      return "Thank you so much.";
      break;
    case (msg = "not as generous"):
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
