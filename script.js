const firstButton = document.querySelector('.first-button');
const secondButton = document.querySelector('.second-button');
const array = [firstButton, secondButton]
let clickedButton = undefined;

function waitForButtonsToBeClicked(array) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < array.length; i++) {
                if(firstButton === clickedButton) {
                    resolve();
                }
                else if(secondButton === clickedButton) {
                    reject();
                }
        }
    })
};

waitForButtonsToBeClicked()
    .then((clickedButton) => {
        console.log('Button was clicked!', clickedButton);
    })
    .catch(() => {
        console.log('One of the provided buttons does not exist');
    });

firstButton.addEventListener('click', () =>{
    clickedButton = firstButton;
    waitForButtonsToBeClicked();
});

secondButton.addEventListener('click', () =>{
    clickedButton = secondButton;
    waitForButtonsToBeClicked();
});