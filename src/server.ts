import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("DATABASE URL:", process.env.DATABASE_URL)
  console.log(`Server is listening on port ${PORT}.`);
});