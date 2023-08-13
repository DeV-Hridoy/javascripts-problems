function cubeNumber(number) {
    if (typeof number !== "number") {
      return "Please Input A Number";
    }
      return Math.pow(number,3);
  }
  


  function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "Please Input A String";
    } else {
      if (string1.includes(string2)) {
        return true;
      } else {
        return false;
      }
    }
  }

  function sortMaker(arr) {
    const firstElement = arr[0];
    const secondElement = arr[1];
  if (!Array.isArray(arr)) {
    return "Please Provide An Array."
    
  }else{

      if (firstElement > 0 && secondElement > 0) {
        if (firstElement === secondElement) {
          return "equal";
        }else{
          return [Math.max(firstElement, secondElement), Math.min(firstElement, secondElement)];
        }
      } else {
       
        return "Invalid input"; 
      }
    }
  }


  function findAddress(obj) {
    if (typeof obj !== "object") {
      return "please Provide Me An Object";
    } else {
      const street = obj.street || "__";
      const house = obj.house || "__";
      const society = obj.society || "__";
  
      return "" + street + "," + house + "," + society + "";
    }
  }

  
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