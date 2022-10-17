//https://leetcode.com/problems/reorganize-string/submissions/

//Intuition
//use Heap to get most freq characters.
//pop two characaters at a time & reduce the count if ( > 0) push again to heap
//If one char is remianing check its freq count if > 1 return "", else return ans string.

var reorganizeString = function(s) {
    let map = new Map()
    for(let char of s) {
        if(!map.has(char)) {
            map.set(char, 1)
        }
        else {
            map.set(char, map.get(char) + 1)
        }
    }
    let hp = new MaxHeap()
    for(let [k, v] of map) {
        hp.add(k, v)
    }
    // hp.print()
    let ans = ""
    while(hp.size() > 1) {
        let f = hp.remove()
        let s = hp.remove()
        ans += f.val
        ans += s.val
        f.key -= 1
        s.key -= 1
        if(f.key > 0) {
            hp.add(f.val, f.key)
        }
        if(s.key > 0) {
            hp.add(s.val, s.key)
        }
    }
    if(hp.size() != 0) {
        let last = hp.remove()
        ans += last.val
        if(last.key > 1) return ""
    }
    return ans
    
};


class Data {
    constructor(val, key) {
        this.val = val;
        this.key = key;
    }
}

class MaxHeap {
    constructor() {
        this.arr = [];
    }
    print() {
        let ans = "";
        for (let data of this.arr) {
            ans += `${data.val}-${data.key} -> `;
        }
        console.log(ans);
    }
    
    peek() {
        return this.arr[0]
    }
    size() {
        return this.arr.length;
    }
    swap(i, j) {
        let tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }

    add(val, key) {
        let data = new Data(val, key);
        this.arr.push(data);
        this.heapifyUp(this.size() - 1);
    }
    remove() {
        this.swap(0, this.size() - 1);
        let max = this.arr.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyUp(i) {
        let curr = i;
        let parent = ~~((i - 1) / 2);
        if (parent >= 0 && this.arr[parent].key < this.arr[curr].key) {
            curr = parent;
        }

        if (i != curr) {
            this.swap(i, curr);
            this.heapifyUp(curr);
        }
    }

    heapifyDown(i) {
        let curr = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < this.size() && this.arr[left].key > this.arr[curr].key) {
            curr = left;
        }
        if (right < this.size() && this.arr[right].key >= this.arr[curr].key) {
            curr = right;
        }
        if (i != curr) {
            this.swap(i, curr);
            this.heapifyDown(curr);
        }
    }
}



