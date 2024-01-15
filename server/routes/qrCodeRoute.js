const {
  createQRCode,
  uploadCloudinary,
  getAllQRCodes,
} = require("../controllers/qrCodeController");

const fileUploader = require("../config/cloudinary.config");

const router = require("express").Router();

router.post("/qrcode", createQRCode);
router.post(
  "/cloudinary-upload",
  fileUploader.single("file"),
  uploadCloudinary
);

router.get("/qrcodes", getAllQRCodes);

module.exports = router;
