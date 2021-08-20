const port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const contactRouter = require("./routers/contactRouter");
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => )
app.use(contactRouter);

app.listen(port, () => console.log("Server running at port 3000"));
