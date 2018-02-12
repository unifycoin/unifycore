var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
    name: 'livenet',
    magic: hex('fbc0b6db'),
    addressVersion: 55,
    privKeyVersion: 189,
    P2SHVersion: 5,
    hkeyPublicVersion: 0x0488b21e,
    hkeyPrivateVersion: 0x0488ade4,
    genesisBlock: {
        hash: hex('943dc625657143761f0f01dbf08c45a02260fc4089a27b20de3e42ae8a49154f'),
        merkle_root: hex('214037fe78c284b2ee501e0c68d629126d394a4fa04f23f88699af72ceedcccd'),
        height: 0,
        nonce: 848210,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1497449710,
        bits: 3165306666666630
    },
    dnsSeeds: [
        'node1.unifycoin.ovh',
        'node2.unifycoin.ovh',
        'node3.unifycoin.ovh',
        'node1.unifycoin.pl',
        'node2.unifycoin.pl',
        'node3.unifycoin.pl'
    ],
    defaultClientPort: 4200,
    lastPoWBlock: 974999
};


exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
