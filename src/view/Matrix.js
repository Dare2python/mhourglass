const m = require("mithril");

const Square = require("./Square");
const l = require("../model/Logic");

module.exports = {
    view: () =>
        m(".matrix", [
            m("h1.title", "the hourglass"),
            m(".rows", l.arr.map((row,r) =>
                m(".row", {r: r}, row.map((sq,c) =>
                    m(Square, {
                        v:sq, r: r, c: c,
                        handleHover: l.handleHover
                    })
                ))
            )),
            m("h4", `Hourglass Sum = ${l.hsum}`)
        ])
};

