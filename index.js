// code your solution here
function saturdayFun(activity = "roller-skate"){

return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {

    return `This Monday, I will ${activity}.`;
 
  };
 
function wrapAdjective(flair = ""){
return function(type = "special") {
return `You are ${flair} ${type}${flair}`;
};

}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}


// Example Usage:
const starWrapper = wrapAdjective("*");
console.log(starWrapper("a hard worker!")); // "You are *a hard worker*!"

const pipeWrapper = wrapAdjective("||");
console.log(pipeWrapper("a dedicated programmer!")); // "You are ||a dedicated programmer||!"
