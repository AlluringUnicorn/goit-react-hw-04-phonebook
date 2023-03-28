import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={onChange} value={value} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
