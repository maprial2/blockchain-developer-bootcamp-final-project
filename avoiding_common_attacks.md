## Protection against attack vectors.-

**1 SWC-105.  Unprotected Ether Withdrawal**

There is only a function in contract, 'transferCampaignEthers' which allows ethers withdrawal. But it can be called only by the contract owner.


**2  SWC-103. Floating pragma**

Contract locks pragma to version '0.8.0'. This avoid that contract would be deployed using an outdated compiler that might introduce bugs. It is used 0.8.0 because is required by the Ownable OneZeppelin contract.


**3  Pull over push**

All functions that modify state are based on receiving calls rather than making contract calls.