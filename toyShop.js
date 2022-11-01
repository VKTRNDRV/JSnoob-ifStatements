function toyShop(input){
    let tripPrice = Number(input[0]);

    let puzzleQty = Number(input[1]);
    let dollQty = Number(input[2]);
    let bearQty = Number(input[3]);
    let minionQty = Number(input[4]);
    let truckQty = Number(input[5]);

    let totalQty = puzzleQty + dollQty + bearQty + minionQty + truckQty;

    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalPrice = puzzleQty*puzzlePrice + dollQty*dollPrice + bearQty*bearPrice + minionQty*minionPrice + truckQty*truckPrice;
    
    let revenue;

    let surplus;
    let surplusCheck = surplus*100;
    let surplusString;

    let shortage;
    let shortageCheck = shortage*100;
    let shortageString;

    if(totalQty >= 50){
        totalPrice = totalPrice*0.75;
    }

    revenue = totalPrice*0.9;

    if(tripPrice > revenue){
        shortage = tripPrice - revenue;

        shortage = shortage.toFixed(2);
        shortageString = shortage.toString();

        //if((shortage*100) % 10 == 0){
        //    shortageString = shortageString + "0"
        //}

        console.log("Not enough money! " + shortageString + " lv needed.");

    }else{
        surplus = revenue - tripPrice;
        
        surplus = surplus.toFixed(2);

        surplusString = surplus.toString();

        if((surplus*100) % 10 == 0){
            surplusString = surplusString + "0"
        }

        console.log("Yes! " + surplusString + " lv left.");
    }


}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])

;