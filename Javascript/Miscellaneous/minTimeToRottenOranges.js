var minTimeToRotten = function (mat) {
    let r = mat.length;
    let c = mat[0].length;
    let queue = [];
    let fresh = 0;
    let days = 0;
    let directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (mat[i][j] == 1) {
                fresh++;
            } else if (mat[i][j] == 2) {
                queue.push([i, j]);
            }
        }
    }
    while (queue.length != 0 && fresh > 0) {
        let size = q.length;
        for (let k = 0; k < size; k++) {
            let [i, j] = q.shift();
            for (let [dr, dc] of directions) {
                i = i + dr;
                j = dc + j;
                if (i >= 0 && i < r && j >= 0 && j < c && mat[i][j] == 1) {
                    mat[i][j] = 2;
                    fresh -= 1;
                    queue.push(i, j);
                }
            }
        }
        time += 1;
    }
    if (fresh < 1) return time;
    return -1;
};
// let row = 3;
// let col = 3;
// let matrice = new Array(row);
// for (let i = 0; i < row; i++) {
//     matrice[i] = new Array(3).fill(1);
// }
// console.log(matrice);
