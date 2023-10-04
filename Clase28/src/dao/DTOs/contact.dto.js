export default class ContactDTO {
    constructor(contact) {
        this.first_name = contact.name;
        this.last_name = contact.lastname;
        this.email = contact.email;
        this.active = true;
        this.phone = contact.phone ? contact.phone.split("-").join("") : "";
    }
}