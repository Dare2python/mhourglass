const INITIAL_ARR = [
    [[1,0], [1,0], [1,0], [0,0], [0,0], [0,0]],
    [[0,0], [1,0], [0,0], [0,0], [0,0], [0,0]],
    [[1,0], [1,0], [1,0], [0,0], [0,0], [0,0]],
    [[0,0], [0,0], [2,0], [4,0], [4,0], [0,0]],
    [[0,0], [0,0], [0,0], [2,0], [0,0], [0,0]],
    [[0,0], [0,0], [1,0], [2,0], [4,0], [0,0]]
];

Logic = {
    arr: JSON.parse(JSON.stringify(INITIAL_ARR)),
    hsum: 0,
    handleHover (r, c) {
        const a = JSON.parse(JSON.stringify(INITIAL_ARR));

        let s = a[r][c][0];
        a[r][c][1]=1;

        try {
            s += a[r-1][c-1][0];
            a[r-1][c-1][1]=1;
        }catch(e){}

        try {
            s += a[r-1][c][0];
            a[r-1][c][1]=1;
        }catch(e){}

        try {
            s += a[r-1][c+1][0];
            a[r-1][c+1][1]=1;
        }catch(e){}

        try {
            s += a[r+1][c-1][0];
            a[r+1][c-1][1]=1;
        }catch(e){}

        try {
            s += a[r+1][c][0];
            a[r+1][c][1]=1;
        }catch(e){}

        try {
            s += a[r+1][c+1][0];
            a[r+1][c+1][1]=1;
        }catch(e){}

        global.Logic.arr = a;
        global.Logic.hsum = s;
    }
};

module.exports = Logic;