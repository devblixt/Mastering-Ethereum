var hack = artifacts.require("ForceHack");
require('dotenv').config();
const teleAddress = process.env.ADDRESS;
module.exports = function(deployer) {
    deployer.deploy(hack, teleAddress);
}