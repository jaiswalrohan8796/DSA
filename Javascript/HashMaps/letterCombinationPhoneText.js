//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(D) {
    const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
    let len = D.length, ans = []
    if (!len) return []
    const dfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            let letters = L[D[pos]]
            for (let i = 0; i < letters.length; i++)
                dfs(pos+1,str+letters[i])
        }
    }
    dfs(0,"")
    return ans
};



//Intuition 
//Use DFS + Backtracking (ans=[])
