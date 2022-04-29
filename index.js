function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork (workActivity = "go to the office") {
    return `This Monday, I will ${workActivity}.`;
}

function wrapAdjective(highlight='*') {
    return function (name='special') {
        return `You are ${highlight}${name}${highlight}!`
    }
}