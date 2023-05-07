import validator from "validator";

// form-upt

export default class UpdateValidator {
    constructor(form) {
        this.form = form;
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
        const el = e.target();
        const firstNameInput = el.querySelector('input[name="firstName"]');
        const lastNameInput = el.querySelector('input[name="lastName"]');
        const emailInput = el.querySelector('input[name="email"]');
        const phoneInput = el.querySelector('input[name="phone"]');
        let flag = false;

        if (!firstNameInput.value) {
            console.log('The field "first name" is required.');
            flag = true;
        };

        if (!emailInput.value && !phoneInput.value) {
            console.log('At least one field must be filled: "e-mail" or "phone".');
            flag = true;
        };

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            console.log('E-mail invalid.');
            flag = true;
        };

        if (!flag) {
            console.log('Form sent');
            el.submit();
        };
    };
};