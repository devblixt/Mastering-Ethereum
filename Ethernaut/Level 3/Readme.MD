# How

We need to consecutively win coin flips 10 times, where the corresponding contract code is question.sol

An external contract is deployed which fetches block number by itself and 'hacks' the coinflip contract. 

Does a loop for 10 times work on cracking this? Nope. You need to wait till the block number changes. A good idea would be to set a timeout equal to block time of whatever network you are deploying to! 

I didn't think of this at the time, so for ease I deployed and verified the contract on goerli etherscan, and used the UI to write to the contract so as to call the hack() function. 