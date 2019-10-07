var m = require("mithril")

module.exports = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "You are in the Matrix"),
            m("button", "A button"),
        ])
    }
}