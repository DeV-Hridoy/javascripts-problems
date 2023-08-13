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

