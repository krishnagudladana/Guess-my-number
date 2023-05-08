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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    
if(!guess) {
    document.querySelector('.message').textContent = 'Please guess a number';
}else if(guess === secretNumber){
    document.querySelector('.message').textContent = ' Correct Number';
}else if(guess > secretNumber) {
    document.querySelector('.message').textContent = ' Too High';
}else if(guess < secretNumber) {
    document.querySelector('.message').textContent = ' Too Low';
}
});

//In the above line, we are selecting a button and we are listening for any click on the button by using the addEventListener method. As we are listening for a click, we pass it as argument in addEventListener method.

// As soon as the event listener method get a click response, it has to react the click. So we are writing a function in the even listener method. This is called as event handler. 

//In the above code, we selected the check button using querySelector and we used addEventListener method on the element to attach event handler which is the function which is used to retrieve data from the guess element using the value method. We passed to arguments in the event  handler function. First one is a click and second one is the function to retrieve the value from the guess element.
