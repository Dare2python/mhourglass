var m = require("mithril")

function Square(initialVnode) {
    return {
    view: (vnode) =>
        m("button.square",
            {
            style: `background-color: ${
                vnode.attrs.v[1] === 1?"lightcyan;":"white;"
                }`
            },
            vnode.attrs.v[0]
        )
    }
}

exports.Square = Square;
// module.exports = {
//     view: (vnode) =>
//         m("button",
//             {class: "square",
//             style: `background-color: ${
//                 vnode.attrs.v[1] === 1?"lightcyan;":"white;"
//                 }`
//             },
//             vnode.attrs.v[0]
//         )
// }