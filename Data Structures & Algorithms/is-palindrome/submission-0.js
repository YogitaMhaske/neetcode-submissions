class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char){
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(s) {
        let rev = '';
        for(let c of s){
            if(this.isAlphanumeric(c)) {
                rev += c.toLowerCase();
            }
        }
        return rev === rev.split('').reverse().join('');
    }
}
