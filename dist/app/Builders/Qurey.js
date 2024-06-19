"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        var _a;
        const carId = (_a = this.query) === null || _a === void 0 ? void 0 : _a.carId;
        if (carId) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: carId, $options: "i" }
                }))
            });
        }
        return this;
    }
}
exports.default = QueryBuilder;
