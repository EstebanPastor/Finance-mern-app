import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import dbConnection from "./db/dbConnect.js";
import kpiRoutes from "./routes/kpiRoutes.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js"


// configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes)

// mongoose
dbConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
