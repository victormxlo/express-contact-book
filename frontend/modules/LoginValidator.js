import validator from "validator";

// form-lgn

export default class LoginValidator {
    constructor(form) {
        this.form = document.querySelector(form);
    };

    init() {
        if (!this.form) {
            console.log('Form empty.');
            return;
        };
        
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    };

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let flag = false;

        if (!validator.isEmail(emailInput.value)) {
            console.log('E-mail invalid.');
            flag = true;
        };

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            console.log('Password invalid.');
            flag = true;
        };

        if (!flag) {
            console.log('Form sent.')
            el.submit();
        };
    };
};