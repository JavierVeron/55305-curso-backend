import config from "../config/config.js";
import mongoose from "mongoose";
let Contacts;

switch(config.persistence) {
    case "MONGO":
        const connection = mongoose.connect("mongodb+srv://CoderJavier:Javier123!@codercluster.rnwzt3p.mongodb.net/test?retryWrites=true&w=majority");
        const {default:ContactsMongo} = await import("./mongo/contacts.mongo.js");
        Contacts = ContactsMongo;
        break;
    case "MEMORY":
        const {default:ContactsMemory} = await import("./memory/contacts.memory.js");
        Contacts = ContactsMemory;
        break;
}

export default Contacts;