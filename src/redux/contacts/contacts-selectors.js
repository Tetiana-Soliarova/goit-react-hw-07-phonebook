/*Form*/
export const getLoading = state => state.contacts.loading;
export const getContacts = state => state.contacts.items;

/*Filter*/
export const getValueFilter = state => state.contacts.filter;

/*ContactsList*/
export const getVisibleItems = state => {
    const contacts = getContacts(state);
    const filter = getValueFilter(state);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}