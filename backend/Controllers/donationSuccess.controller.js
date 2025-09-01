const asyncHandler = require("../utils/asyncHandler.js");
const donation = require("../models/donation.model.js");

const donationSuccess = asyncHandler(async (req, res) => {
    const tran_id = req.params.tranId;

    if (!tran_id) {
        return res.status(400).json({ message: "Transaction ID is required." });
    }

    const updatedItem = await donation.findOneAndUpdate(
        { transection_id: tran_id },
        { paymentStatus: true },
        { new: true } // Return the updated document
    );

    if (updatedItem) {
        res.redirect("http://localhost:3000/donation/success");
    } else {
        res.status(404).json({ message: "Transaction not found or update failed." });
    }
});

module.exports = donationSuccess;
