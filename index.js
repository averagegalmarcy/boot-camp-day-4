function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;

    var guess = elements.guess.value; 
    console.log('guess', guess);

    var result = document.getElementById('result');
    //result.textContent= 'You made a guess of ' + guess; 

    var correct = 2; 
    if (guess == correct) {
        result.textContent='You are correct!'; 
    }
    else if (guess > 2) {
        result.textContent= 'Too high!';
    }
    else {
        result.textContent= 'Too low!';
    }
    //if equal -> correct! 
    //else if less than -> too low! 
}
