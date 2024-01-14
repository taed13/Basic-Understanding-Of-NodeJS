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
