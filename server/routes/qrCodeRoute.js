const { createQRCode } = require("../controllers/qrCodeController");

const router = require("express").Router();

router.post("/qrcode", createQRCode);

module.exports = router;
