var m = require("mithril")

var Row = require("./Row")

const INITIAL_ARR = [
    [[1,0], [1,0], [1,0], [0,0], [0,0], [0,0]],
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
    view: () =>
        m("main", [
            m("h1", {class: "title"}, "the hourglass"),
            m(Row),
            m("h4", `Hourglass Sum = ${state.hsum}`),
        ])
}
