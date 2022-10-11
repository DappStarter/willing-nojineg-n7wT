require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note rifle unhappy harvest industry flush gaze'; 
let testAccounts = [
"0x126747b15aa49966d33ed13d1545740b91ef46e84092cdefe9fc15c36dc1d920",
"0xc77a5b562da83e4942f92d054e2be49f8f1445ad31b9d9b95a3c1b7219408e1c",
"0x21d6ed6d59ccc25238311f3ed7081fcf1630c5ebbf5c00ca80c21d5972a61c8c",
"0xd65d8bf4ee28b8b7aaa6e9b191daa9716ab470a121aa1f692ffca99c4efb5af6",
"0xbe0f404adf1d3de398e5b6484a9ddf6be68d206b5629b7b0707f2043eb8776ec",
"0x1acf1b2b13537b5e35014e1452abb20c487af30ae26cf7e32fcdb628c129deb5",
"0xdd31d0e308297b2232686fc49f71ce7eae7521d89affdcbae3021ccc91422ce1",
"0x8f4523e3f54fb3b01093c1aee73a70dd6d05c504b4338ccc160be09f9acfb19c",
"0x0015f56503179c89d08b6c768c425386ba388ebc87fcb17201b29b2d7f22a29b",
"0x6aeb81f1c70bb90ced79096e5beab2f2d7b0281615a7caf8c175cd1577d032eb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

