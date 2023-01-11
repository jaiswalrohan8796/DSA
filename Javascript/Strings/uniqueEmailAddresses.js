//https://leetcode.com/problems/unique-email-addresses/description/

var numUniqueEmails = function(emails) {
    let myset = new Set()
    for(let email of emails) {
        [uname, domain] = email.split("@")
        let actual_uname = ""
        for(let i = 0; i < uname.length; i++) {
            if(uname[i] == ".") {
                continue
            }
            if(uname[i] == "+") {
                break
            }
            else {
                actual_uname += uname[i]
            }
        }
        myset.add(actual_uname + "@" + domain)
    }
    return myset.size
};
