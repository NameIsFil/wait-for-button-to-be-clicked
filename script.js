const firstButton = document.querySelector('.first-button');
const secondButton = document.querySelector('.second-button');
const array = [firstButton, secondButton]

function waitForButtonsToBeClicked(array) {
    return new Promise((resolve, reject) => {
        let clickedButton = undefined;
        for (let i = 0; i < array.length; i++) {
                if(array[i] !== firstButton && array[i] !== secondButton) {
                    reject();
                }
                firstButton.addEventListener('click', () =>{
                    setTimeout(() => {
                        clickedButton = firstButton;
                        resolve();
                    }, array[i]);
                });
                secondButton.addEventListener('click', () =>{
                    setTimeout(() => {
                        clickedButton = secondButton;
                        resolve();
                    }, array[i]);
                });

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