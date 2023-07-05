import PropTypes from 'prop-types';
export const ContactList = ({filtered, deleteContact}) => {
    return (
        <ul>
            {filtered.map(contact => (
                <li key={contact.id}>{contact.name} : {contact.number}
                <button
                type="button"
                onClick={()=>deleteContact(contact.id)}>
                    Delete
                </button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    filtered: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}