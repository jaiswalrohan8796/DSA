//https://leetcode.com/problems/asteroid-collision/


var asteroidCollision = function(asteroids) {
    let st = []
    let i = 0
    while(i < asteroids.length) {
        if(asteroids[i] >= 0 || !st.length || st.at(-1) < 0) {
            st.push(asteroids[i])
            i++
        }
        else if(asteroids[i] + st.at(-1) < 0) { //next element bigger (-)
            st.pop()
        }
        else if(asteroids[i] + st.at(-1) == 0) { // next element equal (-)
            st.pop()
            i++
        }
        else { //next element smalleer (-)
            i++
        }
    }
    return st
};


//WRONG

var asteroidCollision = function(asteroids) {
    if(asteroids.length <= 1) return asteroids
    let stack = []
    stack.push(asteroids[0])
    for(let i = 1; i < asteroids.length; i++) {
        let next = asteroids[i]
        if(next > 0 && stack.at(-1) > 0) {
            stack.push(next)
            continue
        }
        if(next < 0 && stack.at(-1) < 0) {
            stack.push(next)
            continue
        }
        else {
            stack.push(next)
            while(stack.length > 1 && (stack.at(-1) * stack.at(-2)) < 0) {
                let next = stack.pop()
                let prev = stack.pop()
                if(Math.abs(next) == Math.abs(prev)) {
                    continue
                }
                if(Math.abs(next) > Math.abs(prev)) {
                    stack.push(next)
                }
                else{
                    stack.push(prev)
                }
            }
        }
        
    }
    return stack
};
