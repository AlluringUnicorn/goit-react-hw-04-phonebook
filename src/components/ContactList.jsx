import { ListItem } from './ListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.length > 0 && (
        <ListItem contacts={contacts} handleDelete={handleDelete}></ListItem>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

