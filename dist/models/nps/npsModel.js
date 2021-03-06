"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/models/crmModel.ts
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.NPSSchema = new Schema({
    rate: {
        type: Number,
        required: 'Send an evaluation'
    },
    versionSO: {
        type: String,
        required: 'Send SO Version'
    },
    versionApp: {
        type: Number,
        required: 'Send App Version'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: String,
        required: 'UserID Required'
    }
});
//# sourceMappingURL=npsModel.js.map