const asyncHandler = require("../utils/asyncHandler.js");
const collectedFee = require("../models/collectedFee.model.js");

const paySuccess = asyncHandler(async (req, res) => {
    const tran_id = req.params.tranId;

    if (!tran_id) {
        return res.status(400).json({ message: "Transaction ID is required." });
    }

    const updatedItem = await collectedFee.findOneAndUpdate(
        { transection_id: tran_id },
        { paymentStatus: true },
        { new: true } // Return the updated document
    );

    if (updatedItem) {
        res.redirect("http://localhost:3000/payment/success");
    } else {
        res.status(404).json({ message: "Transaction not found or update failed." });
    }
});

module.exports = paySuccess;
