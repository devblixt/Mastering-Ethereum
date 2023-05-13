var hack = artifacts.require("DelegateHack");
require('dotenv').config();
const delegation = process.env.ADDRESS;
module.exports = function(deployer) {
    deployer.deploy(hack, delegation);
}