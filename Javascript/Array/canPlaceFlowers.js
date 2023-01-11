//https://leetcode.com/problems/can-place-flowers/description/

var canPlaceFlowers = function(flowerbed, n) {
    let count = 0
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] == 0) {
            let prev = (i-1) < 0 ? 0 : flowerbed[i-1]
            let next = (i+1) >= flowerbed.length ? 0 : flowerbed[i+1]
            if(prev == 0 && next == 0) {
                flowerbed[i] = 1
                count += 1
            }
        }
    }
    return count >= n
};
