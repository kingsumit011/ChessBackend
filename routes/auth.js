var express = require("express");
const AuthController = require("../controllers/Auth/AuthController");

var router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
// router.post("/verify-otp", AuthController.verifyConfirm);
// router.post("/resend-verify-otp", AuthController.resendConfirmOtp);
router.get("/test", function(req, res) {
	res.status(200).json("data");
});
module.exports = router;
