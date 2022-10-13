let form = document.querySelector('.subscribe-form');
let emailInputForm = form.querySelector('input');
let errorMessageForm = form.querySelector('.form__error-message');
let notification = document.querySelector('#notification');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkValidateEmailInput()) {
        setTimeout(
            () => {
                notification.classList.add('open');
            },
            200
        );
        setTimeout(
            () => {
                notification.classList.remove('open');
            }, 2500);
    }
});

function checkValidateEmailInput() {
    if (emailInputForm.value.length === 0) {
        emailInputForm.classList.add('error');
        errorMessageForm.textContent = 'Field are required';
        return false;
    } else if (!EMAIL_REGEXP.test(emailInputForm.value)) {
        emailInputForm.classList.add('error');
        errorMessageForm.textContent = 'Field is filled incorrectly';
        return false;
    }
    else {
        emailInputForm.value = '';
        emailInputForm.classList.remove('error');
        errorMessageForm.textContent = '';
        return true;
    }
}