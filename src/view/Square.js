var m = require("mithril")

module.exports = {
    view: (vnode) =>
        m("button",
            {class: "square"},
            vnode.attrs.v[0]
        )
}