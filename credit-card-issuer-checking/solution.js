function getIssuer(number) {
  number = number.toString();
  if(number.match(/^3[47]\w{13}\b/)) {return 'AMEX';}
  if(number.match(/^5[1-5]\w{14}\b/)) {return 'Mastercard';}
  if(number.match(/^6011\w{12}\b/)) {return 'Discover';}
  if(number.match(/^4\w{12}\b/) || number.match(/^4\w{15}\b/)){return 'VISA';}
  else {return 'Unknown';}
}