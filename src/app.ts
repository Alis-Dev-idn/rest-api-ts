import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import Routes from "./routes/Routes";

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
server.listen(1181, () => {
   console.log("server is running in http://localhost:1181");
});