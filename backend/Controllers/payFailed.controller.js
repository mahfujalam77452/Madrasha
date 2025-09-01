const asyncHandler = require("../utils/asyncHandler.js");
const collectedFee = require("../models/collectedFee.model.js");

const payFailed = asyncHandler(async (req, res) => {
    const tran_id = req.params.tranId;

    if (!tran_id) {
        return res.status(400).json({ message: "Transaction ID is required." });
    }

    const deletedItem = await collectedFee.findOneAndDelete({ transection_id: tran_id });

    if (deletedItem) {
        res.redirect("http://localhost:3000/payment/fail"); // Redirect to the correct failure page
    } else {
        res.status(404).json({ message: "Transaction not found or deletion failed." });
    }
});

module.exports = payFailed;
