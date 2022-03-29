const nav = document.querySelector('.navbar');

function printMsg(type, styles) {
  return function mensaje(str) {
    console.log(`%c ${type}: ${str} `, styles)
  }
}

const errorMsg = printMsg('Error', 'background: red; color:white; padding: 2px;');
const warningMsg = printMsg('Warning', 'background: orange; color:white; padding: 2px;');
const successMsg = printMsg('Success', 'background: green; color:white; padding: 2px;');
const infoMsg = printMsg('Success', 'background: blue; color:white; padding: 2px;');

document.querySelector('.burguer-btn').addEventListener('click', () => {
  nav.classList.toggle('openMenu')
});
