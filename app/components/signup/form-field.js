import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  // @service signupModel;
  @action
  fieldUpdated(event) {
    const { validation, id, onChange } = this.args;
    const target = event.target;
    const val = target.value;
    if (validation) {
      validation(val);
    }
    onChange(id, val, validation);
  }
}
