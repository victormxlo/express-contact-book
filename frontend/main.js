import 'core-js/stable';
import 'regenerator-runtime/runtime';

import LoginValidator from './modules/LoginValidator';
import RegisterValidator from './modules/RegisterValidator';
import CreateValidator from './modules/CreateValidator';
import UpdateValidator from './modules/UpdateValidator';

console.log(Date.now);

const login = new LoginValidator('.form-lgn');
login.init();

const register = new RegisterValidator('.form-rtr');
register.init();

const create = new CreateValidator('.form-crt');
create.init();

const update = new UpdateValidator('.form-upt');
update.init();

//import './assets/css/styles.css';