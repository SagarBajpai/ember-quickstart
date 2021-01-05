import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import emailValidate from '../helpers/emailValidate';

export default class SignupController extends Controller {
  @tracked formData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    experience: '',
    companyName: '',
    designation: '',
    github: '',
    linkedIn: '',
    twitter: '',
  };

  @tracked formErrors = {
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    phoneNumber: false,
    experience: false,
    companyName: false,
    designation: false,
    github: false,
    linkedIn: false,
    twitter: false,
  };

  @tracked isSubmitDisable = true;

  @action
  updateFormDataField(name, value, validation) {
    // setting for value
    set(this.formData, name, value);

    // Checking to enable Submit button or not
    if (
      Object.values(this.formData).filter(Boolean).length ===
        Object.keys(this.formData).length &&
      !this.formErrors.email
    ) {
      this.isSubmitDisable = false;
    } else {
      this.isSubmitDisable = true;
    }

    // If value is coming empty means user has cleared the input field, fields cannot be empty
    if (!value) {
      return set(this.formErrors, name, true);
    }

    //If there's no extra validation for the coming then just simply turned off the error of that input field
    if (!validation) set(this.formErrors, name, false);
  }

  @action
  validateEmail(value) {
    if (emailValidate(value)) {
      return set(this.formErrors, 'email', false);
    }
    set(this.formErrors, 'email', true);
  }

  @action
  handleFormSubmit() {}
}
