// user input = answer1, 
// onclick = calculate1( )  
// output = demo1
// FIRST EXAMPLE PROBLEM
const myExample = ( ) => {
    return "To 'Simplify' a fraction, the number you choose must divide into the top AND bottom numbers. You are not allowed to divide the top and bottom by two different numbers. <br> If you do this, you will change the fraction's decimal value which is taking an answer you had correct initially, then turning it into the wrong answer in  the end.<br> You also must continue dividing out any numbers you can find until there are no more. When there are no more numbers you can find, you have the final answer. <br> It is recommended through experience, that locating these numbers is quite simple if you systematically start with the number 2, see if it divides in evenly to both numbers. If it doesn't, then next try the number 3.<br> Then the number 4. Then 5. And so on. This is quickest this way rather then just randomly picking numbers to try out. It could take you a lot longer to get the solution.";
}
const seeMore = ( ) => {
    document.getElementById("seemore").innerHTML = myExample( );
};
// BUTTON:    CLOSE THE EXTRA INFORMATION
const myCloseButton = ( ) => {
    return " ";
}
const seeLess = ( ) => {
    document.getElementById("seemore").innerHTML = myCloseButton( );
};

const answerOne = ( ) => {
    var answ1 = document.getElementById("answer1").value;
        if  (answ1 == "15/8" )  {
            return "Good Job!";
        } else
        if (answ1 !== "15/8") {
            return "Try Again";
        } else 
            return "Try Again";
}
const calculate1 = ( ) => {
    document.getElementById("demo1").innerHTML = answerOne( );
};
// SECOND EX PROBLEM
const answerTwo = ( ) => {
    var answ2 = document.getElementById("answer2").value;
        if  (answ2 == "14/12")  {
            return " Don't forget to Simplify";
        } else
        if (answ2 == "7/6") {
            return "Good Job!";
        } else 
            return "Try Again";
}
const calculate2 = ( ) => {
    document.getElementById("demo2").innerHTML = answerTwo( );
};
// THIRD EX PROBLEM
const answerThree = ( ) => {
    var answ3 = document.getElementById("answer3").value;
    if  (answ3 == "15/42")  {
        return " Don't forget to Simplify";
    } else
    if (answ3 == "5/14") {
        return "Good Job!";
    } else 
        return "Try Again";
}
const calculate3 = ( ) => {
    document.getElementById("demo3").innerHTML = answerThree( );
};
// FOURTH EX PROBLEM
const answerFour = ( ) => {
    var answ4 = document.getElementById("answer4").value;
    if  (answ4 == "8/60")  {
        return " Don't forget to Simplify";
    } else
    if (answ4 == "2/15") {
        return "Good Job!";
    } else 
        return "Try Again";
}
const calculate4 = ( ) => {
    document.getElementById("demo4").innerHTML = answerFour( );
};
