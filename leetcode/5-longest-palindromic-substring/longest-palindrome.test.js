const longestPalindrome = require('./longest-palindrome');
describe('longestPalindrome function', () => {
    test('Should return "aba" or "bab" for input "babad"', () => {
        const result = longestPalindrome("babad");
        expect(["aba", "bab"]).toContain(result);
    });

    test('Should return "bb" for input "cbbd"', () => {
        const result = longestPalindrome("cbbd");
        expect(result).toEqual('bb');
    });

    test('Should return "a" or "c" for input "ac"', () => {
        const result = longestPalindrome('ac');
        expect(["a", "c"]).toContain(result)
    });

    test('Should return "cccccccc" for input "cccccccc"', () => {
        const result = longestPalindrome('cccccccc');
        expect(result).toEqual('cccccccc');
    });

    test('Should return "cccccc" for input "abccccccdf"', () => {
        const result = longestPalindrome('abccccccdf');
        expect(result).toEqual('cccccc');
    });

    test('Should return "aca" for input "aacabdkacaa"', () => {
        const result = longestPalindrome('aacabdkacaa');
        expect(result).toEqual('aca');
    });

    test('Should return "xaabacxcabaax" for input "xaabacxcabaaxcabaax"', () => {
        const result = longestPalindrome('xaabacxcabaaxcabaax');
        expect(result).toEqual('xaabacxcabaax');
    });

    test('Should return a defined value for large input string', () => {
        const result = longestPalindrome("twbiqwtafgjbtolwprpdnymaatlbuacrmzzwhkpvuwdtyfjsbsqxrlxxtqkjlpkvpxmlajdmnyepsmczmmfdtjfbyybotpoebilayqzvqztqgddpcgpelwmriwmoeeilpetbxoyktizwcqeeivzgxacuotnlzutdowiudwuqnghjgoeyojikjhlmcsrctvnahnoapmkcrqmwixpbtirkasbyajenknuccojooxfwdeflmxoueasvuovcayisflogtpxtbvcxfmydjupwihnxlpuxxcclbhvutvvshcaikuedhyuksbwwjsnssizoedjkbybwndxpkwcdxaexagazztuiuxphxcedqstahmevkwlayktrubjypzpaiwexkwbxcrqhkpqevhxbyipkmlqmmmogrnexsztsbkvebjgybrolttvnidnntpgvsawgaobycfaaviljsvyuaanguhohsepbthgjyqkicyaxkytshqmtxhilcjxdpcbmvnpippdrpggyohwyswuydyrhczlxyyzregpvxyfwpzvmjuukswcgpenygmnfwdlryobeginxwqjhxtmbpnccwdaylhvtkgjpeyydkxcqarkwvrmwbxeetmhyoudfuuwxcviabkqyhrvxbjmqcqgjjepmalyppymatylhdrazxytixtwwqqqlrcusxyxzymrnryyernrxbgrphsioxrxhmxwzsytmhnosnrpwtphaunprdtbpwapgjjqcnykgspjsxslxztfsuflijbeebwyyowjzpsbjcdabxmxhtweppffglvhfloprfavduzbgkw");
        expect(result).toBeDefined();
    });
});