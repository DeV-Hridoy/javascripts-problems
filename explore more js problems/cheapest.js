const phones = [
    {name :'Samsung',camera:12,storage:'64mp',price:36000, color:"Silver"} ,
    {name :'Walton',camera:10,storage:'54',price:32000,color:"Black"}, 
    {name :'Iphone',camera:12,storage:'44',price:132000,color:"Black"}, 
    {name :'Nokia',camera:10,storage:'54',price:52000,color:"Black"} ,
    {name :'Mi',camera:10,storage:'54',price:22000,color:"Black"},
    {name :'HTC',camera:10,storage:'54',price:42000,color:"Black"} 
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];

        if (phone.price < cheapest.price) {
            cheapest=phone
            
        }

        // console.log(phone);
        
    }
    return cheapest;
    
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);