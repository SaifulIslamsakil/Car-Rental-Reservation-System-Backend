"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["available", "not available"],
        required: true,
        default: "available"
    },
    features: {
        type: [String],
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
CarSchema.pre("find", function () {
    this.find({ isDeleted: { $ne: true } });
});
CarSchema.pre("findOne", function () {
    this.find({ isDeleted: { $ne: true } });
});
exports.CarModel = (0, mongoose_1.model)("Car", CarSchema);
