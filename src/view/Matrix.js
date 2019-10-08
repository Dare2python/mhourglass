var m = require("mithril")

var Square = require("./Square")

const INITIAL_ARR = [
    [[1,1], [1,0], [1,0], [0,0], [0,0], [0,0]],
    [[0,0], [1,0], [0,0], [0,0], [0,0], [0,0]],
    [[1,0], [1,0], [1,0], [0,0], [0,0], [0,0]],
    [[0,0], [0,0], [2,0], [4,0], [4,0], [0,0]],
    [[0,0], [0,0], [0,0], [2,0], [0,0], [0,0]],
    [[0,0], [0,0], [1,0], [2,0], [4,0], [0,0]]
];

const state = {
    arr: JSON.parse(JSON.stringify(INITIAL_ARR)),
    hsum: 0
};

module.exports = {
    // state: {
    //     arr: JSON.parse(JSON.stringify(INITIAL_ARR)),
    //     hsum: 0
    // },
    view: () =>
        m(".matrix", [
            m("h1", {class: "title"}, "the hourglass"),
            m(".rows", state.arr.map(row => 
                m(".row", row.map(sq => 
                    m(Square.Square, {v:sq})
                ))
            )),
            m("h4", `Hourglass Sum = ${state.hsum}`)
        ])
}
