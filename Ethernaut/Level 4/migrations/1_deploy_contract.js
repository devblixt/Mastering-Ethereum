var hack = artifacts.require("TelephoneHack");
require('dotenv').config();
const teleAddress = process.env.ADDRESS;
module.exports = function(deployer) {
    deployer.deploy(hack, teleAddress);
}