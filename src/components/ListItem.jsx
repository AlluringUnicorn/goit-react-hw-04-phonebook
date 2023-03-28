import PropTypes from 'prop-types';
import css from './App.module.css';

export const ListItem = ({ contacts, handleDelete }) => {
  return contacts.map(user => (
    <li key={user.id} className={css.list_item}>
      {user.name}: {user.number}
      <button className={css.delete_btn} type="button" onClick={handleDelete} data-id={user.id}>
        Delete
      </button>
    </li>
  ));
};

ListItem.propTypes = {
  contacts: PropTypes.array.isRequired,
};
