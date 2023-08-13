function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
        
    }

    else if (ticketQuantity <= 200) {
        const first100price = 100 * first100Rate;
        const restTicketQuanatity= ticketQuantity - 100;
        const restTicketPrice = restTicketQuanatity * second100Rate;
        const totalprice = first100price + restTicketPrice;
        return totalprice;

    }

    else{
        const first100price = 100 * first100Rate;
        const second100price =100 * second100Rate;
        const restTicketQuanatity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuanatity* restTicketRate;
        const totalCost = first100price + second100price + restTicketPrice;
        return totalCost;
    
}
}

const price = ticketPrice(220);
console.log("price", price);