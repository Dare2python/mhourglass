const m = require("mithril");

module.exports = {
    view: (vnode) =>
        m("button.square", {
                style: `background-color: ${
                    vnode.attrs.v[1] === 1 ? "lightcyan;" : "white;"
                }`,
                onmouseover: () =>
                    vnode.attrs.handleHover(vnode.attrs.r, vnode.attrs.c)
            },
            vnode.attrs.v[0]
        )
};
