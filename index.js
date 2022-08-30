// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    let hQ =  42
    if (blocks > hQ) {
        return blocks - hQ;
    } else {
        return hQ - blocks
    } 
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}
distanceFromHqInFeet(43);


function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        let feet = destination - start;
        return feet * 264;
    } else {
        let feet = start - destination;
        return feet * 264;
    }
}
distanceTravelledInFeet(43, 48);

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400) {
        let farePrice = 0;
        return farePrice;
    } else if (feet < 2000) {
        let totalFeet = feet - 400;
        let price = totalFeet * .02;
        let farePrice = parseFloat(price.toFixed(2));
        return farePrice;
    } else if (feet > 2000 && feet < 2500) {
        let farePrice = 25;
        return farePrice;
    } else if (feet > 2500) {
        let farePrice = "cannot travel that far";
        return farePrice;
    }
}
calculatesFarePrice(34, 32);