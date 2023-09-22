import dotenv from "dotenv";
import {Command} from "commander";

const program = new Command();
program.option("--mode <mode>", "Ambiente", "test")
program.parse();

dotenv.config({
    path:program.opts().mode === "prod" ? "./.env.prod" : "./.env.test"
});

export default {
    port:process.env.PORT,
    mongoUrl:process.env.MONGO_URL,
    adminUser:process.env.ADMIN_NAME,
    adminPass:process.env.ADMIN_PASS
};