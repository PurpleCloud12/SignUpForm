let pass = document.querySelector('#password');
let confirmPass = document.querySelector('#confirmPassword');
let messageSpan = document.querySelector('.messageSpan');

console.log('Hello World');

confirmPass.addEventListener("input", () => {
    if(pass.value !== confirmPass.value){
        messageSpan.classList.add('warningStyle');
        messageSpan.textContent = 'Passwords do not match';
    }else{
        messageSpan.classList.remove('warningStyle');
        messageSpan.textContent = '';
    }
})