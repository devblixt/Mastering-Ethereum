var hack = artifacts.require("HackReentrance");
require('dotenv').config();
const flipAddr = process.env.ADDRESS;
module.exports = function(deployer) {
    deployer.deploy(hack, flipAddr);
}