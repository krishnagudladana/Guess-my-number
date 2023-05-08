'use strict';

/*console.log(document.querySelector('.message').textContent );//This selector helps to select the element message in the HTML and its content through textContent method.

document.querySelector('.message').textContent = 'Correct Number 🎉'; //Here, wee used querySelector to select the element from the HTML and used textContent to change the text in the message element in HTML.

// Previously, we used same but we just logged the result in the console. But, now we changed the text in the element by assigning new string to it.

console.log(document.querySelector('.message').textContent );

//As we can see the content in the message element has changed with the help of DOM manipulation.

document.querySelector('.number').textContent = 12;

document.querySelector('.score').textContent = 14;

console.log(document.querySelector('.guess').value);

//to get the value we use value property not textContent. If we want to get the value from the input field, we actually have to use the value property.

document.querySelector('.guess').value = 23;

//We can also manipulate the data of the values with the help of value property as shown in the above line.

console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //In the above line, we are selecting a button and we are listening for any click on the button by using the addEventListener method. As we are listening for a click, we pass it as argument in addEventListener method.

    // As soon as the event listener method get a click response, it has to react the click. So we are writing a function in the even listener method. This is called as event handler. 

    //In the above code, we selected the check button using querySelector and we used addEventListener method on the element to attach event handler which is the function which is used to retrieve data from the guess element using the value method. We passed to arguments in the event  handler function. First one is a click and second one is the function to retrieve the value from the guess element.

    // When there is not input
    if(!guess) {
        displayMessage('Please guess a number');
    }//When the player guess the correct number
    else if(guess === secretNumber){
        displayMessage(' Correct Number');//This shows the text as correct number if guess is equal to secret number 
        document.querySelector('body').style.backgroundColor = '#60b347';//this changes the background of the page if guess is equal to secret number
        document.querySelector('.number').style.width = '30rem';//this increases the width of the secret number if guess is equal to secret number
        document.querySelector('.number').textContent = secretNumber;//this shows the secret number if guess is equal to secret number
        //we are updating the highscore when ever the scare is greater than highscore
        if(score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = score;
        }
    }//When player guess the high wrong number
    /*else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = ' Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        
    }//wheen player guess the low wring number
    else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = ' Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }*///When guess is wrong and we are using ternary operator to simplify the code
    else if(guess !== secretNumber){
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

//We are resetting everything by using click function on the again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});