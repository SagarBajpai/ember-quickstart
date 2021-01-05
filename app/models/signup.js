import Model from '@ember-data/model';

export default class SignupModel extends Model {
  @attr('string', { defaulValue: '' }) fName;

  get firstName() {
    return this.fName;
  }
}
