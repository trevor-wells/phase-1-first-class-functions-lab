const returnFirstTwoDrivers = names => [names[0] , names[1]];

const returnLastTwoDrivers = names => [names[names.length - 2] , names[names.length - 1]];

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return fare => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names , selection) {
    return selection(names);
}
