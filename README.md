# Final project


## Deployed version url:
<https://maprial2.github.io/blockchain-developer-bootcamp-final-project/>

## Public Ethereum wallet for certification as an NFT:
0xC431648b15B5c9C75938a4861efB9e1225885d03

## Screencast link:
<https://youtu.be/nIL4JDGSX8c>

## Project description.-

The objective is to create an application to manage various non-profit projects.
It would be intended to be the final step of a series of previous discussions for example in various forums or Discord servers. For example, a DAO involved in non-profit projects.

One of them will be those that propose projects that have a social impact, for example, in your neighborhood. They will be able to create projects for which they apply for funding, they will target an amount to be raised. They will introduce the funds they require as well as a brief description of the project (it is assumed that they have already been discussed previously and would also reduce the necessary gas because that information will be stored on the blockchain).

On the other hand there are users who can support the projects presented by providing funds, if the limit is exceeded, they can make contributions yet, as well as giving their opinion regarding the projects with likes or dislikes. Obviously project creators cannot support or transfer funds to their own projects.

The initial maximum number of campaigns would be 20. No more can be created without deleting another.

Initially there will be an administrator of this application who will be in charge of transferring the funds to the applicants of the projects. Also before possible abuses or various actions may cancel a project submitted. The administrator will be the one who deploys the contract.

As improvements in the future in the project the figure of the administrator would be eliminated or at least its functions  limited. The number of campaigns would be increased.


## How to run project locally.-

### Prerequisites

- Truffle v5.4.10 (core: 5.4.10)
- Node v12.16.1
- Ganache CLI v6.12.2
- Clone repository: git clone https://github.com/maprial2/blockchain-developer-bootcamp-final-project.git
- Visual Studio Code

### Run Project
- In file truffle-config file is required in development section to put:
development: {
host: "127.0.0.1", 
port: 8545, 
network_id: "*", 
},
- In terminal run window ganache-cli
- Open a new terminal (with ganache running in the other window) and run truffle deploy
- Paste in contractAddress constant in app.js file the contract address (it is shown in terminal after truffle deploy)
- Paste in ssABI constant in app.js file the abi value (it is in ./build/contracts/NoProfitAssociation.json)
- Visual Studio Code with plugin Live Server
- Click on Go Live or select index.html and choose Open with Live Server. Dapp will be opened in browser window 
- In Metamask choose localhost network and import account to use in the app (select a private key in the ganache terminal window)

### Run project tests.-

In file truffle-config file is required in development section to put:
development: {
host: "127.0.0.1", 
port: 8545, 
network_id: "*", 
},

To run the tests:

- Run ganache-cli in terminal where is the project
- In another terminal run  truffle test

## Deploy contracts in public network

- Clone repository: git clone https://github.com/maprial2/blockchain-developer-bootcamp-final-project.git
- Create a .env file to include a Infura key (Infura account is required) and the mnemonic words of Ethereum wallet
- In .env write two lines. In the first: MNEMONIC="mnemonic words of Ethereum wallet"
INFURAID="Infura Id"
- In terminal run truffle migrate --network ropsten  (or another network). If it is not deployed try run truffle migrate --reset --network ropsten

## Directory structure

- contracts: folder with contract code
- test: folder with test files
- src: folder with dapp javascript logic
- images: folder with gif file used by the dapp
- migrations: folder with tryffle migration logic
- truffle-config.js: file with logic to deploy contract in different networks
- index.html: file with dapp html code


