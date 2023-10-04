import {contactsModel} from "../../models/contacts.model.js";

class ContactsMongo {
    constructor(){};

    get = async () => {
        let contacts = await contactsModel.find();

        return contacts;
    }

    insert = async (name, email, phone) => {
        let contact = {name, email, phone};
        return await contactsModel.create(contact);
    }

    update = async (email, contact) => {
        return await contactsModel.updateOne({email:email}, {name:contact.name, email:contact.email, phone:contact.phone});
    }

    delete = async (email) => {
        await contactsModel.deleteOne({email:email});

        return await contactsModel.find();
    }
}

export default ContactsMongo;