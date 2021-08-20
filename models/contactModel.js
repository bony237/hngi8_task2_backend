const mongoose = require("mongoose");
const contactShema = new mongoose.Schema(
  {
    name: {
      desc: "Name of the visitor",
      trim: true,
      type: String,
      // unique: true,
      required: true,
    },
    email: {
      desc: "Email of the visitor",
      trim: true,
      type: String,
      required: true,
    },
    message: {
      desc: "Message of the visitor",
      type: String,
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const Contact = mongoose.model("Contact", contactShema);
module.exports = Contact;
