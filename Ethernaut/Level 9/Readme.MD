# How?

This one was a bit of a pain. 

Basically, to make sure that no one regains kingship, we avoid a fallback/receive function in our contract. 

So, our contract is basically the attacker, and it sends a value to the attacked contract. 

We do have to send appropriate gas as well. I got an error first because of gas not being enough. 

I have another approach to this, which I might try (reminder!)