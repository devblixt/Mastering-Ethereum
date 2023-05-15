var hack = artifacts.require("HackBuilding");
require('dotenv').config();
const flipAddr = process.env.ADDRESS;
module.exports = function(deployer) {
    deployer.deploy(hack, flipAddr);
}