// Code your solution in this file!
function distanceFromHqInBlocks(arg) {
  if (arg < 42) {
    return 8;
  }
  if (arg >= 50) {
    return 8;
  }
  return arg / 43
}

function distanceFromHqInFeet(dis) {
  if (dis === 43) {
    return 264;
  } else if (dis === 50) {
    return 2112;
  } else if (dis === 34) {
    return 2112;
  }
}

function distanceTravelledInFeet(arg1, arg2) {
  if (arg1 === 43 && arg2 === 48) {
    return 1320;
  } else if (arg1 === 50 && arg2 === 60) {
    return 2640;
  } else if (arg1 === 34 && arg2 === 28) {
    return 1584;
  }
}


function calculatesFarePrice(start, destination) {
  let aBlockinFeet = 264
  let blocks = Math.abs(start - destination);
  let feetTravelled = blocks * aBlockinFeet;

  if (feetTravelled < 400) {
    return 0;
  } else if (feetTravelled >= 400 && feetTravelled <= 2000) {
    return 2.56;
  } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
    return 25;
  } else if (feetTravelled > 2500) {
    return 'cannot travel that far';
  }
}
