function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
      return "Please Input A Valid Array.";
    } else {
      let totalCost = 0;
      for (let i = 0; i < changeArray.length; i++) {
        totalCost += changeArray[i];
      }
  
      return totalCost >= totalDue;
    }
  }