import ContactDTO from "../dao/DTOs/contact.dto.js";

class ContactsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getContacts = async () => {
        return await this.dao.get();
    }

    createContact = async (contact) => {
        let newContact = new ContactDTO(contact);
        return await this.dao.insert(newContact);
    }
}

export default ContactsRepository;