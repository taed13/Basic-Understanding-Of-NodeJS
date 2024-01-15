const mongoose = require("mongoose");

const qrCodeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
    colorLight: {
      type: String,
      required: true,
    },
    colorDark: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("QRCode", qrCodeSchema);
