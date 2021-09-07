import PropTypes from 'prop-types';
import { Input, LabelInput } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChange }) => (
  <label>
    <LabelInput>Find contact by name</LabelInput>
    <Input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
