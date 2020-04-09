require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note mean pulp hunt perfect flip gate'; 
let testAccounts = [
"0xb9d732d80bbe692a905792dfa1cf582f504e5bfedb23fabff1841a3804331cc6",
"0xe335380dc46f16aee1042ecee7ed784baada0478f19358946a224f3b9d3a9930",
"0x8259d5e94471a3db90f6dd453c5a33e9e60164567f33ba9a27b52d65e641e3e7",
"0x626a6aaa1a23c6a58721e021cb2b75d987448267068fbf4bbdb8632c4c0e71bd",
"0xbc47e82a65cbe8a3390ed37465af3e5ca81954b896daa2d0440bbc95f62489d2",
"0x6c4e97de2eceab511b978194a2569d98fd301f34e02dbb1c25a6a8060730845c",
"0x8bf901086b206c7fba8ded5bf93282b2159f826b233f022608ffb59a472a8e44",
"0x21ea7a27f71c8fd18895e909b0ea797e0e4d4c3561eebd1333c84831706b9b3b",
"0x23267e71f8c8df3d978cd776c51b652c0a1cf1931ab6024fe276b5b8b1dcc854",
"0x0e01cf1cab3a5fb0e6983fd9e6c931aeba11fb83650f703a9f2bcb111f0400f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
