const dbConnection = require("../db/dbConnection");
const Contact = require("../models/contactModel");
const contactRouter = require("express").Router();

contactRouter.post("/contact", async (req, res) => {
  try {
    await dbConnection();
    const newContact = new Contact(req.body);
    await newContact.save();
    console.log("A new contact has been saved : ", req.body);
    // res.status(200).json({ item: newContact });
    res.status(201).redirect("/");
  } catch (error) {
    console.log("An error occurred : ", error);
    res.status(400).json(error);
  }
  res.end();
});

module.exports = contactRouter;
