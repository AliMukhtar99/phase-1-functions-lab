// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}  

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, finish) {
    let blocks;
    if (finish > start) {
        blocks = finish - start;
    } else {
       blocks = start - finish;
    }
    return blocks * 264;
}

function calculatesFarePrice(start, finish){
    let blocks  = distanceTravelledInFeet(start, finish);
    let farePrice;
    if (blocks <= 400){
        return farePrice = 0;
    }
    else if (blocks  > 400 && blocks  < 2000){
        return farePrice = 2.56;
    }
    else if (blocks  > 2000 && blocks  < 2500) {
        return farePrice = 25;
    }
    else {
        return farePrice = 'cannot travel that far';
    }
}
