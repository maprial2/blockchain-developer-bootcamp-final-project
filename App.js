// contract address on Ropsten:
const ssAddress = '0xb55B3F28d0d2Fe63b199B336fFA52f934c67DE64';

const ssABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "Liked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCampaign",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_donation",
				"type": "uint256"
			}
		],
		"name": "addMoneyToCampaign",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "campaigns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "idCampaign",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "campaignName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "campaignDescription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalAmountRequired",
				"type": "uint256"
			},
			{
				"internalType": "int16",
				"name": "score",
				"type": "int16"
			},
			{
				"internalType": "address payable",
				"name": "campaignCreator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "currentEthers",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_campaignName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_campaignDescription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalAmountRequired",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_campaignCreator",
				"type": "address"
			}
		],
		"name": "createCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCampaign",
				"type": "uint256"
			}
		],
		"name": "dislikeCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCampaign",
				"type": "uint256"
			}
		],
		"name": "getCampaign",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_campaignName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_campaignDescription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalAmountRequired",
				"type": "uint256"
			},
			{
				"internalType": "int16",
				"name": "score",
				"type": "int16"
			},
			{
				"internalType": "address",
				"name": "campaignCreator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_currentEthers",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCampaignsList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCampaign",
				"type": "uint256"
			}
		],
		"name": "likeCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCampaign",
				"type": "uint256"
			}
		],
		"name": "removeCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idCampaign",
				"type": "uint256"
			}
		],
		"name": "transferCampaignEthers",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



window.addEventListener('load', function() {
  
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled')
      if (window.ethereum.isMetaMask === true) {
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Is Available!'
  
        // add in web3 here
        var web3 = new Web3(window.ethereum)
  
      } else {
        console.log('MetaMask is not available')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Not Available!'
      }
    } else {
      console.log('window.ethereum is not found')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += '<p>MetaMask Not Available!. Please install it<p>'
    }
  })
  
  
  var web3 = new Web3(window.ethereum);
  
  // Grabbing the button object,  
  
  const mmEnable = document.getElementById('button-mm-connect');
  
  // since MetaMask has been detected, we know
  // `ethereum` is an object, so we'll do the canonical
  // MM request to connect the account. 
  // 
  // typically we only request access to MetaMask when we
  // need the user to do something, but this is just for
  // an example
   
  mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts'})
    // grab mm-current-account
    // and populate it with the current address
    var mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
  }

  const divButtons = document.getElementById('idInitialOptions');
  const addCampaignButton = document.getElementById('idAddCampaignButton');

  addCampaignButton.onclick = async() => { 

if( !document.getElementById('divWithForm')) {
	if(document.getElementById('idCampaigns')){
		hideCampaigns();
	}
	const divButtons = document.getElementById('idInitialOptions');

	const divSq = document.createElement("div");
	divSq.setAttribute('id','divWithForm');
	const para = document.createElement("p");
const node = document.createTextNode("Fill Project name");
para.appendChild(node);
divSq.appendChild(para);
var inputName = document.createElement("input");
inputName.setAttribute('type', 'text');
inputName.setAttribute('id', 'ss-input-box-name');
divSq.appendChild(inputName);

const descrP = document.createElement("p");
const descrPtext = document.createTextNode("Fill Project Description");
descrP.appendChild(descrPtext);
divSq.appendChild(descrP);

var textAreaDescr = document.createElement("textarea");
textAreaDescr.setAttribute('maxlength', '30');
textAreaDescr.setAttribute('id', 'ss-input-box-desc');
textAreaDescr.setAttribute('rows', '4');
textAreaDescr.setAttribute('cols', '100');
textAreaDescr.setAttribute('placeholder', 'Project description');
divSq.appendChild(textAreaDescr);
var space = document.createElement("br");
divSq.appendChild(space);


const titleAmount = document.createElement("p");
const titleAmountDescr = document.createTextNode("Amount required (in ethers)");
titleAmount.appendChild(titleAmountDescr);
divSq.appendChild(titleAmount);
var inputAmount = document.createElement("input");
//.setAttribute('type', 'number');
inputAmount.setAttribute('id', 'ss-input-box-amount');
divSq.appendChild(inputAmount);
var spaceAm = document.createElement("br");
divSq.appendChild(spaceAm);


const buttonCreate = document.createElement("button");
buttonCreate.innerHTML="Create Campaign";
buttonCreate.onclick = async() => {

	
		// grab value from input
		
		const ssInputNameValue = document.getElementById('ss-input-box-name').value;
		console.log(ssInputNameValue)
	
		const ssInputDescValue = document.getElementById('ss-input-box-desc').value;
		console.log(ssInputDescValue)
		var ssInputAmountValue = document.getElementById('ss-input-box-amount').value;
		console.log(ssInputAmountValue) 
		var web3 = new Web3(window.ethereum)
	
		const addresSelected = ethereum.selectedAddress;
	
		console.log('addres' + addresSelected);
	  
		// instantiate smart contract instance
		
		const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress)
		noProfitAssoc.setProvider(window.ethereum)
		const amountDonated = web3.utils.toWei(ssInputAmountValue,'ether');
		
		await noProfitAssoc.methods.createCampaign(ssInputNameValue, ssInputDescValue,amountDonated, addresSelected).send({from: ethereum.selectedAddress}).then(getCampaignsList);
}
divSq.appendChild(buttonCreate);

divButtons.append(divSq);}
  }
  const viewCampaignsButton = document.getElementById('idViewCampaigns');
  
  viewCampaignsButton.onclick = async () => {
	
	getCampaignsList();
  }
 
  async function getCampaignsList() {
	hideFormDiv();
	if(document.getElementById('idCampaigns')){
		hideCampaigns();
	}
	var web3 = new Web3(window.ethereum);
  
    const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress)
    noProfitAssoc.setProvider(window.ethereum)
	var arraysN = await noProfitAssoc.methods.getCampaignsList().call();
	console.log(arraysN);
	if(arraysN.length !==0){
		var listCampaigns = document.createElement('div');
		listCampaigns.setAttribute('id','idCampaigns');
		divButtons.appendChild(listCampaigns);
	}

	arraysN.forEach(element => {
		showCampaign(element);
	});
  }

  function hideFormDiv() {
	  if(document.getElementById('divWithForm')) {
	  var hideDiv = document.getElementById('divWithForm');
	  var parentHideDiv = document.getElementById('idInitialOptions');
	  parentHideDiv.removeChild(hideDiv);
	  }
  }

  async function showCampaign(id) {
	 
	console.log('campaign is' + id+ ''); 
	var web3 = new Web3(window.ethereum)
    const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress)
    noProfitAssoc.setProvider(window.ethereum)
	var campaign = await noProfitAssoc.methods.getCampaign(id).call();
	console.log(campaign);
	var divList = document.getElementById('idCampaigns');
	
	const divCampaign = document.createElement("div");
	divCampaign.setAttribute('id',id);
	const titleCampaign = document.createElement("p");
	titleCampaign.innerText = "Campaign: "+Object.values(campaign)[1];
	divCampaign.appendChild(titleCampaign);

	const titleCampaignText = document.createElement("p");
	titleCampaignText.innerText = "Campaign: "+Object.values(campaign)[2];
	divCampaign.appendChild(titleCampaignText);

	const amountText = document.createElement("p");
	amountText.innerText = "Amount required: "+ web3.utils.fromWei(Object.values(campaign)[3],'ether');
	divCampaign.appendChild(amountText);

	const scoreText = document.createElement("p");
	scoreText.innerText = "Score: "+Object.values(campaign)[4];
	divCampaign.appendChild(scoreText);

	const currentAmountText = document.createElement("p");
	currentAmountText.innerText = "current ethers: "+ web3.utils.fromWei(Object.values(campaign)[6]);
	divCampaign.appendChild(currentAmountText);

	const donateButton = document.createElement("button");
	donateButton.innerHTML="Donate";
	divCampaign.appendChild(donateButton);

	const donationAmount = document.createElement('input');
	donationAmount.setAttribute('id','idDonationAmount'+id);
	divCampaign.appendChild(donationAmount);

	donateButton.onclick =  () => {
		addResources(id);
	}
	const likeButton = document.createElement("button");
	likeButton.innerHTML="Like";
	divCampaign.appendChild(likeButton);

	likeButton.onclick = () => {
		supportCampaign(id);
	}

	const dislikeButton = document.createElement("button");
	dislikeButton.innerHTML="Dislike";
	divCampaign.appendChild(dislikeButton);

	dislikeButton.onclick = () => {
		dislikeCampaign(id);
	}

	const removeCampaignButton = document.createElement("button");
	removeCampaignButton.innerHTML="Remove Campaign";
	divCampaign.appendChild(removeCampaignButton);

	removeCampaignButton.onclick = () => {
		removeCampaign(id);
	}

  const transferCampaignEthButton = document.createElement("button");
	transferCampaignEthButton.innerHTML="Transfer Ethers";
  transferCampaignEthButton.setAttribute('id','idtransferCampaignEthButton'+id);
	divCampaign.appendChild(transferCampaignEthButton);

	transferCampaignEthButton.onclick = () => {
		transferEtherCampaignCreator(id);
	}

	divList.append(divCampaign);
}
  

  async function addResources (idCamp) {
	var web3 = new Web3(window.ethereum);
    const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress);
    noProfitAssoc.setProvider(window.ethereum);
	const amountDonated = document.getElementById('idDonationAmount'+idCamp).value;
	console.log("amount donated "+amountDonated);
	
  await noProfitAssoc.methods.addMoneyToCampaign(idCamp,web3.utils.toWei(amountDonated,'ether')).send({from: ethereum.selectedAddress,value:web3.utils.toWei(amountDonated,'ether')}).then(getCampaignsList);
  }

  async function supportCampaign (idCamp) {
	var web3 = new Web3(window.ethereum);
    const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress);
    noProfitAssoc.setProvider(window.ethereum);
    await noProfitAssoc.methods.likeCampaign(idCamp).send({from: ethereum.selectedAddress}).then(getCampaignsList);
}

async function dislikeCampaign (idCamp) {
	var web3 = new Web3(window.ethereum);
    const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress);
    noProfitAssoc.setProvider(window.ethereum);
	 noProfitAssoc.methods.dislikeCampaign(idCamp).send({from: ethereum.selectedAddress}).then(getCampaignsList);
}

async function removeCampaign (idCamp) {
	var web3 = new Web3(window.ethereum);
    const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress);
    noProfitAssoc.setProvider(window.ethereum);
	await noProfitAssoc.methods.removeCampaign(idCamp).send({from: ethereum.selectedAddress}).then(getCampaignsList);
}

  function hideCampaigns(){

	var parentHideDiv = document.getElementById('idInitialOptions');
	  
	const listCampaigns = document.getElementById('idCampaigns');
	parentHideDiv.removeChild(listCampaigns);
  }

  async function transferEtherCampaignCreator(idCamp) {
    var web3 = new Web3(window.ethereum);
    const noProfitAssoc = new web3.eth.Contract(ssABI, ssAddress);
    noProfitAssoc.setProvider(window.ethereum);
    await noProfitAssoc.methods.transferCampaignEthers(idCamp).send({from: ethereum.selectedAddress}).then(getCampaignsList);
  }
