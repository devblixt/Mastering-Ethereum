var hack = artifacts.require("HackKing");
require('dotenv').config();
const flipAddr = process.env.ADDRESS;
module.exports = function(deployer) {
    deployer.deploy(hack, flipAddr);
}