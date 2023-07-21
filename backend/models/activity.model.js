const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activity: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
}, {
    timestamps: true,
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;