class HashMap {
    constructor(size) {
        this.data = new Array(size)
        this.size = size
    }
    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key[i].charCodeAt(0) * i) % this.size
        }
        return hash
    }

    set(key, value) {
        let addr = this._hash(key)
        if(!this.data[addr]) {
            this.data[addr] = []
        }
        if(this.data[addr].length == 1 && this.data[addr][0][0] == key) {
            console.log(`${key} already present, updating the value to ${value}`)
            this.data[addr].pop()
            this.data[addr].push([key, value])
        }
        else {
            console.log(`${key} added in HashMap with value ${value}`)
            this.data[addr].push([key, value])
        }
    }
    get(key) {
        let addr = this._hash(key)
        if(!this.data[addr]) {
            console.log(`${key} not in HashMap`)
        }
        else {
            console.log(`${key} with value ${this.data[addr][0][1]} returned from HashMap`)
            return this.data[addr][0][1]
        }
    }
    has(key) {
        let addr = this._hash(key)
        if(!this.data[addr]) return false;
        if(this.data[addr][0][0] == key) return true;
        return false
    }
    clear() {
        this.data = new Array(this.size)
        console.log('HashMap cleared !!')
    }
    keys() {
        let ans = []
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                ans.push(this.data[i][0][0])
            }
        }
        return ans
    }
}

hm = new HashMap(100)
hm.set("rohanjaiswal",23)
hm.set("rohan",24)
console.log(hm.get("rohan"))
console.log(hm.has("rohan"))
console.log(hm.keys())
hm.clear()
console.log(hm.keys())
hm.get("rohan")
hm.set("rohan",24)
console.log(hm.keys())