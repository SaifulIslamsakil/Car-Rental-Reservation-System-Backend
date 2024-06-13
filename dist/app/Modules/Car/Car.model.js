"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
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
        required: true
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
exports.CarModel = (0, mongoose_1.model)("Car", CarSchema);
