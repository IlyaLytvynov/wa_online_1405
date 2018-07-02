/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var model = {
    fruites: [
        "apples",
        "banans",
        "oranges"
    ],
    setItem: function (fruite) {
        this.fruites.push(fruite);
    },
    getItem: function () {
        return this.fruites;
    },
    updateItem: function (index, data) {
        this.fruites.splice(index, 1, data);
    },
    deleteItem: function (index) {
        this.fruites.splice(index, 1);
    }
};

module.exports = model;

