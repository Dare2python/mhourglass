var m = require("mithril")

module.exports = {
    view: (vnode) =>
        m("button",
            {class: "square",
            style: `background-color: ${
                vnode.attrs.v[1] === 1?"lightcyan;":"white;"
                }`
            },
            vnode.attrs.v[0]
        )
}

// console.log(module)