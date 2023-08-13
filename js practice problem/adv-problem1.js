function isValidPhotoName(photoName,imageExtention) {
    if (typeof photoName !=="string" || !Array.isArray(imageExtention)) {
        return "please provide valid input ";
    }else{
        for(let item of imageExtention){
            if (photoName.toLowerCase().endsWith(item.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
    
}

const photo = "imgage.jpg";
const extention = [".jpg","JPEG", "png", ".gif", ".ico"];

console.log(isValidPhotoName(photo, extention));