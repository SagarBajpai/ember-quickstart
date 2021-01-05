import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import emailValidate from '../helpers/emailValidate';

export default class SignupController extends Controller {
  @tracked formData = {
    firstName: '',
    lastName: '',
    email: '',
  };

  @tracked formErrors = {
    firstName: false,
    lastName: false,
    email: false,
  };

  @action
  updateFormDataField(name, value) {
    set(this.formData, name, value);
    if (!value) {
      return set(this.formErrors, name, true);
    }
    set(this.formErrors, name, false);
  }

  @action
  validateEmail(value) {
    if (emailValidate(value)) {
      return set(this.formErrors, 'email', false);
    }
    set(this.formErrors, 'email', true);
  }
}
