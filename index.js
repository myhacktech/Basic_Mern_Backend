const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
dbConnect();
const userRoutes = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 4000;


var cors = require("cors");
// app.use(express.static("public"));
// CORS Configuration

app.use(
  cors({
    origin: "*",
    credentials:true
  })
);
// Middleware 
app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

app.get("/",(req,res)=>{
  res.send("backend is running")
})


