class ContactsMemory {
    constructor() {
        this.contacts = [];
    }

    get() {
        return this.contacts;
    }

    insert(name, email, phone) {
        let contact = {name, email, phone};
        this.contacts.push(contact);

        return contact;
    }

    update(email, contact) {
        let contactDB = this.contacts.find(item => item.email === email);
        contactDB.name = contact.name;
        contactDB.email = contact.email;
        contactDB.phone = contact.phone;

        return contactDB;
    }

    delete(email) {
        this.contacts = this.contacts.filter(item => item.email !== email);

        return this.contacts;
    }
}

export default ContactsMemory;