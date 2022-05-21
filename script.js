const firstButton = document.querySelector('.first-button');
const secondButton = document.querySelector('.second-button');



function waitForButtonToBeClicked(clickedButton) {
    return new Promise((resolve, reject) => {
        if(firstButton) {
            resolve();
        }
        else if(secondButton) {
            reject();
        }
    });
}

waitForButtonToBeClicked()
    .then((clickedButton) => {
        console.log('Button was clicked!', clickedButton);
    })
    .catch(() => {
        console.log('One of the provided buttons does not exist');
    })



firstButton.addEventListener('click', () =>{
   waitForButtonToBeClicked(firstButton);
});

secondButton.addEventListener('click', () =>{
    waitForButtonToBeClicked(secondButton);
});