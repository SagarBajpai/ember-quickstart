export default class SignupServices extends Service {
  @service store;

  findFormField(key) {
    return this.store.peekRecord('fName', key);
  }

  saveFormField(key, value) {
    const record = this.findFormField(key);
    console.log('record : ', record);
    if (record) {
      this.store.re;
    }
  }
}
