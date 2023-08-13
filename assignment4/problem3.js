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

