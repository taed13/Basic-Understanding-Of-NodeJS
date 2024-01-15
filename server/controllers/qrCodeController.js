const qrCodeModel = require("../models/qrCodeModel");

module.exports.createQRCode = async (req, res) => {
  try {
    const qrCode = await qrCodeModel.create(req.body);
    res.status(201).json({
      success: true,
      data: qrCode,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.uploadCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }

    res.json({ secure_url: req.file.path });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getAllQRCodes = async (req, res) => {
  try {
    const qrCodes = await qrCodeModel.find();
    res.status(200).json({
      success: true,
      data: qrCodes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
