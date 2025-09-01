const asyncHandler = require("../utils/asyncHandler.js");
const donation = require("../models/donation.model.js");

const donationFailed = asyncHandler(async (req, res) => {
    const tran_id = req.params.tranId;

    if (!tran_id) {
        return res.status(400).json({ message: "Transaction ID is required." });
    }

    const deletedItem = await donation.findOneAndDelete({ transection_id: tran_id });

    if (deletedItem) {
        res.redirect("http://localhost:3000/donation/fail"); // Redirect to the correct failure page
    } else {
        res.status(404).json({ message: "Transaction not found or deletion failed." });
    }
});

module.exports = donationFailed;
