function onOpen() {
    menuConatainer.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
}

function onClose() {
    menuConatainer.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
}

let generatedUsernName = document.getElementById('user-name');

let userName;

// function modifyUserName() {

// }

function getUserName() {
    let userName = prompt('Input our username:');
    // modify username
    let firstLetterOfUserName = userName.slice(0, 1);
    let remainingLetterOfUserName = userName.slice(1, userName.length);
    firstLetterOfUserName = firstLetterOfUserName.toUpperCase();
    remainingLetterOfUserName = remainingLetterOfUserName.toLowerCase();
    userName = firstLetterOfUserName + remainingLetterOfUserName;
    // welcome to user
    alert('Welcome ' + userName);
    generatedUsernName.textContent = userName;
}

getUserName();

// if (userName === 1) {
//     alert('Please enter a valid username')
//     getUserName();
// }

const closeBtn = document.querySelector('#close-menu-btn');
const openBtn = document.querySelector('#open-menu-btn');
const menuConatainer = document.querySelector('.nav__menu');
const navMenuIndividual = document.querySelector('#nav-menu-individual');

closeBtn.addEventListener('click', onClose);
openBtn.addEventListener('click', onOpen);
navMenuIndividual.addEventListener('click', onClose());