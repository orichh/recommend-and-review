import { config } from "dotenv";
import express, { Request, Response, Application } from "express";
import Joi from "joi";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import fs from "fs";
import pinoHttp from "pino-http";
import path from "path";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import { placeholder } from "./helpers/index";
import { router } from "./routes";
import cookieParser from "cookie-parser";

// initialize server
const app: Application = express();

// Create server logging stream to access log file
// prettier-ignore
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });
const logger = pinoHttp(
  {
    customLogLevel: (res: any, err: any) =>
      res.statusCode >= 500 ? "error" : "info",
  },
  accessLogStream
);

// express middleware
// prettier-ignore
config(); // dotenv process
let secret: string;
if (process.env.SECRET_KEY) {
  secret = process.env.SECRET_KEY;
} else {
  throw new Error("secret environment variable is not set");
}

app.use(express.json()); // parse JSON payloads
app.use(helmet()); // set security-related HTTP response headers
const expressRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 60 seconds
  max: 1000, // Limit each IP to 1000 requests per `window` (here, per 1 minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(expressRateLimiter); // limits amount of requests to the server
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cookieParser(secret));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

const addPointsSchema = Joi.object({
  payer: Joi.string()
    .pattern(/^[A-Z *]+$/, "capital letters")
    .required(), // check payer and for A-Z chars
  points: Joi.number().integer().required(), // check points and if integer
  timestamp: Joi.string().isoDate().required(), // check timestamp is isoDate
});

// root, sends back available endpoints
// app.get("/", (req: Request, res: Response) => {
//   res.send("Go to the endpoint localhost:5000/api-docs for more information");
//   logger(req, res);
//   req.log.info("/");
// });

app.use("/", router);

export const server = app.listen(process.env.PORT || 5000, () => {
  console.log("App listening at http://localhost:5000");
});
