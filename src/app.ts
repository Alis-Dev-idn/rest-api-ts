import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import Routes from "./routes/Routes";
import FileServices from "./services/FileService/FileServices";
import {Exit} from "./utils/Utils";

const app = express();

app.use(cors({
    credentials: true
}));
app.use(morgan("dev"));
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json({limit: "5MB"}));

app.use("/", Routes());

const server = http.createServer(app);

FileServices.begin().then((file) => {
    if(!file) return;
    server.listen(file.server.port, () => {
        console.log(`server is running in http://localhost:${file.server.port}`);
    });
}).catch(async (error) => {
    console.log(error);
    await Exit();
})
