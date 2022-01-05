// contract address in Ropsten network:
const contractAddress = '0x52d8B4B5571922d9F7FB4474F8Fb0A2Eb4648d70';

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
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
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
        "name": "_totalAmountRequired",
        "type": "uint256"
      },
      {
        "internalType": "int16",
        "name": "_score",
        "type": "int16"
      },
      {
        "internalType": "address",
        "name": "_campaignCreator",
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
    "name": "transferCampaignEthers",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]

let mmDetected = document.getElementById('mm-detected');

window.addEventListener('load', function () {

  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask !== true) {
      mmDetected = document.getElementById('mm-detected');
      mmDetected.innerHTML += 'MetaMask is not Available!'
    }
  } else {
    console.log('window.ethereum is not found')
    mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>MetaMask Not Available!. Please install it<p>'
  }

});

var divInitialOptions = document.getElementById('idInitialOptions');
// Button to connect to metamask   
const mmEnable = document.getElementById('button-mm-connect');

mmEnable.onclick = async () => {

  if (window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  }
}
const addCampaignButton = document.getElementById('idAddCampaignButton');

//user can add a Campaign to the app clicking this button
addCampaignButton.onclick = async () => {

  if (!document.getElementById('divWithForm')) {
    if (document.getElementById('idCampaigns')) {
      hideCampaigns();
    }

    const divSq = document.createElement("div");
    divSq.setAttribute('id', 'divWithForm');
    divSq.className = "container border border-4 border-primary rounded mt-5 p-3";

    const imagespinnerForm = document.createElement("img");
    imagespinnerForm.setAttribute('src', 'images/loading.gif');
    imagespinnerForm.setAttribute('id', 'idSpinnerForm');
    imagespinnerForm.setAttribute('style', 'display:none');
    divSq.appendChild(imagespinnerForm);

    const para = document.createElement("p");
    const node = document.createTextNode("Project name");
    para.appendChild(node);
    divSq.appendChild(para);
    var inputName = document.createElement("input");
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'ss-input-box-name');
    divSq.appendChild(inputName);

    const descrP = document.createElement("p");
    const descrPtext = document.createTextNode("Project Description");
    descrP.appendChild(descrPtext);
    divSq.appendChild(descrP);

    var textAreaDescr = document.createElement("textarea");
    textAreaDescr.setAttribute('maxlength', '300');
    textAreaDescr.setAttribute('id', 'ss-input-box-desc');
    textAreaDescr.setAttribute('rows', '4');
    textAreaDescr.setAttribute('placeholder', 'Project description Max 300 characters');
    textAreaDescr.className = "w-100";
    divSq.appendChild(textAreaDescr);
    const space = document.createElement("br");
    divSq.appendChild(space);

    const titleAmount = document.createElement("p");
    const titleAmountDescr = document.createTextNode("Amount required (in ethers)");
    titleAmount.appendChild(titleAmountDescr);
    divSq.appendChild(titleAmount);
    var inputAmount = document.createElement("input");
    inputAmount.setAttribute('id', 'ss-input-box-amount');
    divSq.appendChild(inputAmount);
    var spaceAm = document.createElement("br");
    divSq.appendChild(spaceAm);

    const buttonCreate = document.createElement("button");
    buttonCreate.innerHTML = "Create Campaign";
    buttonCreate.className = "btn btn-success mt-3";
    buttonCreate.onclick = async () => {

      let valuesValid = true;
      // get ethers requested value from input
      var ssInputAmountValue = document.getElementById('ss-input-box-amount').value;
      // get name value from input
      const ssInputNameValue = document.getElementById('ss-input-box-name').value;
      if (ssInputNameValue === "") {
        valuesValid = false;
        alert("Please enter a Campaign name");
      }
      // get description value from input
      const ssInputDescValue = document.getElementById('ss-input-box-desc').value;
      if (ssInputDescValue === "") {
        valuesValid = false;
        alert("Please enter a description");
      }
      // check that value is a number
      const regex = "^-?[0-9.]+";
      if (!ssInputAmountValue.match(regex)) {
        valuesValid = false;
        alert("Please enter a valid number");
      }
      //if previous validations are correct contract method is called
      if (valuesValid) {
        var web3 = new Web3(window.ethereum)
        const addresSelected = ethereum.selectedAddress;
        const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress)
        noProfitAssoc.setProvider(window.ethereum);
        const amountRequired = web3.utils.toWei(ssInputAmountValue, 'ether');
        imagespinnerForm.removeAttribute('style', 'display:none');
        buttonCreate.classList.add('disabled');
        //call to contract method to add a Campaign	
        await noProfitAssoc.methods.createCampaign(ssInputNameValue, ssInputDescValue, amountRequired, addresSelected).send({ from: ethereum.selectedAddress }).then(getCampaignsList).catch((error) => {
          imagespinnerForm.setAttribute('style', 'display:none');
          alert("An error has occurred while creating the Campaign");
          buttonCreate.classList.remove('disabled');
        });
      }
    }
    divSq.appendChild(buttonCreate);
    divInitialOptions.append(divSq);
  }
}

//reference to button to get campaigns list
const viewCampaignsButton = document.getElementById('idViewCampaigns');
viewCampaignsButton.onclick = async () => {
  getCampaignsList();
}

//function to get all current campaigns in the dapp
async function getCampaignsList() {
  hideFormDiv();
  if (document.getElementById('idCampaigns')) {
    hideCampaigns();
  }
  var web3 = new Web3(window.ethereum);

  const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress)
  noProfitAssoc.setProvider(window.ethereum);
  const imagespinnerList = document.createElement("img");
  imagespinnerList.setAttribute('src', 'images/loading.gif');
  imagespinnerList.setAttribute('id', 'idSpinnerList');
  document.getElementById('idViewCampaigns').appendChild(imagespinnerList);
  var arraysN = await noProfitAssoc.methods.getCampaignsList().call()
    .catch((error) => {
      imagespinnerList.setAttribute('style', 'display:none');
      alert("An error ocurred getting the list of campaigns");
    });

  if (arraysN !== undefined && arraysN.length !== 0) {
    imagespinnerList.setAttribute('style', 'display:none');
    var listCampaigns = document.createElement('div');
    listCampaigns.setAttribute('id', 'idCampaigns');
    divInitialOptions.appendChild(listCampaigns);

    arraysN.forEach(element => {
      showCampaign(element);
    });
  } else {
    imagespinnerList.setAttribute('style', 'display:none');
  }

}

//function called to hide the form to create a new campaign
function hideFormDiv() {
  if (document.getElementById('divWithForm')) {
    var hideDiv = document.getElementById('divWithForm');
    divInitialOptions.removeChild(hideDiv);
  }
}
//function called to show an campaign information
// it is called for every Campaign available
async function showCampaign(id) {

  var web3 = new Web3(window.ethereum)
  const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress)
  noProfitAssoc.setProvider(window.ethereum)
  var campaign = await noProfitAssoc.methods.getCampaign(id).call();
  console.log(campaign);
  var divList = document.getElementById('idCampaigns');

  const divCampaign = document.createElement("div");
  divCampaign.setAttribute('id', id);
  divCampaign.className = "container border border-3 border-primary mt-5 p-3";

  const imagelod = document.createElement("img");
  imagelod.setAttribute('src', 'images/loading.gif');
  var imgid = "im" + id;
  imagelod.setAttribute('id', imgid);
  imagelod.setAttribute('style', 'display:none');
  divCampaign.appendChild(imagelod);

  const titleCampaign = document.createElement("p");
  titleCampaign.innerText = "Campaign: " + Object.values(campaign)[1];
  divCampaign.appendChild(titleCampaign);

  const titleCampaignText = document.createElement("p");
  titleCampaignText.innerText = "Campaign description: " + Object.values(campaign)[2];
  divCampaign.appendChild(titleCampaignText);

  const amountText = document.createElement("p");
  amountText.innerText = "Amount required: " + web3.utils.fromWei(Object.values(campaign)[3], 'ether');
  divCampaign.appendChild(amountText);

  const scoreText = document.createElement("p");
  scoreText.innerText = "Score: " + Object.values(campaign)[4];
  divCampaign.appendChild(scoreText);

  const currentAmountText = document.createElement("p");
  currentAmountText.innerText = "Current funds (ether): " + web3.utils.fromWei(Object.values(campaign)[6]);
  currentAmountText.setAttribute('id', 'currentEthers' + id);
  divCampaign.appendChild(currentAmountText);

  const divDonate = document.createElement('div');
  const donateButton = document.createElement("button");
  donateButton.setAttribute('id', 'donateButtonId' + id);
  donateButton.className = "btn btn-primary btn-md";
  donateButton.innerHTML = "Donate";
  divDonate.appendChild(donateButton);

  var spaceDiv = document.createElement("br");

  const donationAmount = document.createElement('input');
  donationAmount.setAttribute('id', 'idDonationAmount' + id);
  donationAmount.className = "m-3";
  divDonate.appendChild(donationAmount);

  donateButton.onclick = () => {
    addResources(id);
  }
  divCampaign.appendChild(divDonate);
  divCampaign.appendChild(spaceDiv);

  const likeButton = document.createElement("button");
  likeButton.className = "btn btn-success btn-md";
  likeButton.setAttribute('id', 'likeButtonId' + id);
  likeButton.append("Like");

  divCampaign.appendChild(likeButton);

  likeButton.onclick = () => {
    supportCampaign(id);
  }
  const dislikeButton = document.createElement("button");
  dislikeButton.innerHTML = "Dislike";
  dislikeButton.className = "btn btn-warning btn-md m-3";
  dislikeButton.setAttribute('id', 'dislikeButtonId' + id);
  divCampaign.appendChild(dislikeButton);

  dislikeButton.onclick = () => {
    dislikeCampaign(id);
  }

  const divRemoveCampaign = document.createElement("div");
  divCampaign.appendChild(divRemoveCampaign);

  const removeCampaignButton = document.createElement("button");
  removeCampaignButton.innerHTML = "Remove Campaign (Administrator)";
  removeCampaignButton.className = "btn btn-danger mt-3";
  removeCampaignButton.setAttribute('id', 'removeCampaignButtonId' + id);
  removeCampaignButton.onclick = () => {
    removeCampaign(id);
  }
  divRemoveCampaign.appendChild(removeCampaignButton);
  divCampaign.appendChild(divRemoveCampaign);
  divCampaign.appendChild(spaceDiv);

  const transferCampaignEthButton = document.createElement("button");
  transferCampaignEthButton.innerHTML = "Transfer Ethers (Administrator)";
  transferCampaignEthButton.setAttribute('id', 'transferCampaignEthButtonId' + id);
  transferCampaignEthButton.className = "btn btn-primary mt-3";
  divCampaign.appendChild(transferCampaignEthButton);

  transferCampaignEthButton.onclick = () => {
    transferEtherCampaignCreator(id);
  }
  divList.append(divCampaign);
}


async function addResources(idCamp) {
  const amountDonated = document.getElementById('idDonationAmount' + idCamp).value;
  //check that amount is a number
  var regex = "^-?[0-9.]+";
  if (!amountDonated.match(regex)) {
    valuesValid = false;
    alert("Please enter a valid number");
  } else {
    var web3 = new Web3(window.ethereum);
    const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress);
    noProfitAssoc.setProvider(window.ethereum);
    var idImDonate = "im" + idCamp;
    var spinnerDonate = document.getElementById(idImDonate);
    spinnerDonate.removeAttribute("style", "display:none");
    disableAllCampaignButtons(idCamp);
    // call to contract method to add funds to a campaign (funds are transfered to contract)
    await noProfitAssoc.methods.addMoneyToCampaign(idCamp, web3.utils.toWei(amountDonated, 'ether')).send({ from: ethereum.selectedAddress, value: web3.utils.toWei(amountDonated, 'ether') })
      .then(getCampaignsList).catch((error) => {
        spinnerDonate.setAttribute("style", "display:none");
        enableAllCampaignButtons(idCamp);
        alert("An error has occurred while transfering funds to a Campaign")
      });
  }
}

//function called when user click in like button
async function supportCampaign(idCamp) {
  var web3 = new Web3(window.ethereum);
  const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress);
  noProfitAssoc.setProvider(window.ethereum);
  var valueid = "im" + idCamp;
  var spinner = document.getElementById(valueid);
  spinner.removeAttribute("style", "display:none");
  disableAllCampaignButtons(idCamp);

  await noProfitAssoc.methods.likeCampaign(idCamp).send({ from: ethereum.selectedAddress }).then(getCampaignsList).catch((error) => {
    spinner.setAttribute("style", "display:none");
    enableAllCampaignButtons(idCamp);
    alert("An error has occurred. Please note that the creator of a campaign cannot support it")
  });

}

//function called when user click in dislike button
async function dislikeCampaign(idCamp) {
  var web3 = new Web3(window.ethereum);
  const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress);
  noProfitAssoc.setProvider(window.ethereum);
  //show spinner to user that app will do something
  var valueid = "im" + idCamp;
  var spinner = document.getElementById(valueid);
  spinner.removeAttribute("style", "display:none");
  disableAllCampaignButtons(idCamp);
  noProfitAssoc.methods.dislikeCampaign(idCamp).send({ from: ethereum.selectedAddress }).then(getCampaignsList).catch((error) => {
    console.error(error);
    spinner.setAttribute("style", "display:none");
    enableAllCampaignButtons(idCamp);
    alert("An error has occurred")
  });
}

async function removeCampaign(idCamp) {
  var web3 = new Web3(window.ethereum);
  const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress);
  noProfitAssoc.setProvider(window.ethereum);
  var idDivCampaign = "im" + idCamp;
  var spinnerRemoveCamp = document.getElementById(idDivCampaign);
  spinnerRemoveCamp.removeAttribute("style", "display:none");
  disableAllCampaignButtons(idCamp);
  //call to contract to remove a campaign (only the contract Owner can do it)
  await noProfitAssoc.methods.removeCampaign(idCamp).send({ from: ethereum.selectedAddress }).then(getCampaignsList).catch((error) => {
    spinnerRemoveCamp.setAttribute("style", "display:none");
    enableAllCampaignButtons(idCamp);
    alert("An error has occurred. Note that only the administrator can do this")
  });
}
//method to hide the list of campaigns information
function hideCampaigns() {
  const listCampaigns = document.getElementById('idCampaigns');
  divInitialOptions.removeChild(listCampaigns);
}
//Administrator can transfer a campaign funds to the campaign creator
async function transferEtherCampaignCreator(idCamp) {


  if (document.getElementById('currentEthers' + idCamp).innerHTML === "Current funds (ether): 0") {
    alert("No funds in this campaign to transfer");
  } else {
    var web3 = new Web3(window.ethereum);
    const noProfitAssoc = new web3.eth.Contract(ssABI, contractAddress);
    noProfitAssoc.setProvider(window.ethereum);

    var idImTransfer = "im" + idCamp;
    var spinnerTransfer = document.getElementById(idImTransfer);
    spinnerTransfer.removeAttribute("style", "display:none");
    disableAllCampaignButtons(idCamp);
    //call to contract to send current campaign funds to campaign creator address (only by contract Owner)
    await noProfitAssoc.methods.transferCampaignEthers(idCamp).send({ from: ethereum.selectedAddress })
      .then(getCampaignsList).catch((error) => {
        spinnerTransfer.setAttribute("style", "display:none");
        enableAllCampaignButtons(idCamp);
        alert("An error has occurred. Note that only the administrator can do this")
      });
  }
}

//disable all buttons of a Campaign information when user do an action in the Campaign
function disableAllCampaignButtons(id) {
  let likeButtonId = document.getElementById('likeButtonId' + id);
  let dislikeButtonId = document.getElementById('dislikeButtonId' + id);
  let removeCampButtonId = document.getElementById('removeCampaignButtonId' + id);
  let transferButtonId = document.getElementById('transferCampaignEthButtonId' + id);
  let donateButtonId = document.getElementById('donateButtonId' + id);

  likeButtonId.classList.add('disabled');
  dislikeButtonId.classList.add('disabled');
  removeCampButtonId.classList.add('disabled');
  transferButtonId.classList.add('disabled');
  donateButtonId.classList.add('disabled');
}
//enable all buttons of a Campaign information
function enableAllCampaignButtons(id) {
  let likeButtonId = document.getElementById('likeButtonId' + id);
  let dislikeButtonId = document.getElementById('dislikeButtonId' + id);
  let removeCampButtonId = document.getElementById('removeCampaignButtonId' + id);
  let transferButtonId = document.getElementById('transferCampaignEthButtonId' + id);
  let donateButtonId = document.getElementById('donateButtonId' + id);

  likeButtonId.classList.remove('disabled');
  dislikeButtonId.classList.remove('disabled');
  removeCampButtonId.classList.remove('disabled');
  transferButtonId.classList.remove('disabled');
  donateButtonId.classList.remove('disabled');
}

