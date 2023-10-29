import Vue from 'vue';
import InputHelp from './InputHelp.vue';
import Select from './Select.vue';
import TextInput from './TextInput.vue';
import NumericInput from './NumericInput.vue';
import Form from './Form.vue';
import FormGroup from './FormGroup.vue';
import Option from './Option.vue';
import DatePicker from './DatePicker.vue';

Vue.component('Form', Form);
Vue.component('FormGroup', FormGroup);
Vue.component('InputHelp', InputHelp);
Vue.component('Select', Select);
Vue.component('TextInput', TextInput);
Vue.component('NumericInput', NumericInput);
Vue.component('Option', Option);
Vue.component('DatePicker', DatePicker);

export default {
  Form,
  FormGroup,
  InputHelp,
  Select,
  TextInput,
  NumericInput,
  Option,
  DatePicker
}
