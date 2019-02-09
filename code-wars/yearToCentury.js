function whatCentury(year){

  result = Math.floor(((year - 1) / 100) + 1);
  
  return result
  }
  
  // found on google => shorter hand
  // function whatCentury(year){
  //   return Math.ceil(year / 100)
  // }
  
  whatCentury(2001)