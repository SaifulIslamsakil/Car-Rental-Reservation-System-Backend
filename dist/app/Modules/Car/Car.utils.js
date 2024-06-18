"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convartTimeTohours = void 0;
const convartTimeTohours = (time) => {
    const [hours, minuts] = time.split(":");
    return Number(hours) + Number(minuts) / 60;
};
exports.convartTimeTohours = convartTimeTohours;
