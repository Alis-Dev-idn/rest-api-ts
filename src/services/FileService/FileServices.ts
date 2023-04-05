import fs from "fs";
import {Exit} from "../../utils/Utils";

interface IConfig {
    server: {
        port: number;
    },
    mongodb: {
        host: string;
        port: number;
        user: string;
        password: string;
        data_db: string;
    }
}
class FileServices{
    public static async begin(): Promise<IConfig | null> {
        if(!fs.existsSync("./config")) {
            await fs.mkdirSync("./config");
            const data: IConfig = {
                server: {
                    port: 8181,
                },
                mongodb: {
                    host: "127.0.0.1",
                    port: 27017,
                    user: "",
                    password: "",
                    data_db: ""
                }
            }
            await fs.writeFileSync("./config/env.js", JSON.stringify(data, null, 5));
            console.log("Please insert setup server in ./config/env.js, and run again the program");
            await Exit();
            return null;
        }
        const env = fs.readFileSync("./config/env.js");
        const objEnv = JSON.parse(env.toString());
        return objEnv as IConfig;
    }
}

export default FileServices;