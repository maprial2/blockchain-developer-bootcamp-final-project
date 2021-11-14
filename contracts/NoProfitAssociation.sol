// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
contract NoProfitAssociation is Ownable{
    
struct Campaign {
    uint256 idCampaign;
    string campaignName;
    string campaignDescription;
    uint256 totalAmountRequired;
    uint256 score;
    address payable campaignCreator;
    uint256 currentEthers;
}

//list of campaigns. Use a simple array to store campaign ids and not the whole Campaign Struct
uint256[]  idCampaignsArray;

uint256 campaignId;

mapping (uint256 => Campaign)  private campaigns;

//function createCampaign (Campaign memory _campaign) public payable{
    //a new campaign created by a user
//}

constructor()  {   
      campaignId = 0;
  }
function createCampaign (string memory _campaignName, string memory _campaignDescription, uint _totalAmountRequired,
address payable _campaignCreator) public {
    //a new campaign created by a user
    campaigns[campaignId].idCampaign= campaignId;
    campaigns[campaignId].campaignName = _campaignName;
    campaigns[campaignId].campaignDescription = _campaignDescription;
    campaigns[campaignId].totalAmountRequired = _totalAmountRequired;
    campaigns[campaignId].score = 0;
    campaigns[campaignId].campaignCreator = _campaignCreator;
    campaigns[campaignId].currentEthers = 0;

    idCampaignsArray.push(campaignId);
    campaignId = campaignId + 1; 
    
}
//amount that user  send to a Campaign
function addMoneyToCampaign(uint _idCampaign, address payable sender) public payable {
    uint256 currentMoney = campaigns[_idCampaign].currentEthers;
    uint256 ethersUpdated = currentMoney + msg.value;
    if(ethersUpdated > campaigns[_idCampaign].totalAmountRequired){
        uint ethersToRefund = msg.value - (campaigns[_idCampaign].totalAmountRequired - currentMoney);
        campaigns[_idCampaign].currentEthers = campaigns[_idCampaign].totalAmountRequired;
        sender.transfer(ethersToRefund);
    }
}

function removeCampaign(uint256 _idCampaign) isCampaignCreator (_idCampaign) public {
    //delete a campaign (only the campaign creator can do it) 
    //iterate in the array to locate the id and delete it

   for(uint i = 0; i < idCampaignsArray.length; i++)  {
    if(idCampaignsArray[i] == _idCampaign) {
    idCampaignsArray[i] = idCampaignsArray[idCampaignsArray.length - 1];
    idCampaignsArray.pop();
    break;
    }
}
}

function likeCampaign(uint _idCampaign) public{
    //give a like (increase campaign puntuation). The user must be a supporter
     uint256 currentScore = campaigns[_idCampaign].score;
     uint256 finalScore = ++currentScore;
    campaigns[_idCampaign].score = finalScore;

}

function dislikeCampaign(uint _idCampaign) public {
    //give a dislike (decrease campaign score). The user must be a supporter
     uint256 currentScore = campaigns[_idCampaign].score;
     uint256 finalScore = --currentScore;
    campaigns[_idCampaign].score = finalScore;
}

function getCampaign (uint256 _idCampaign) public view returns(uint256 _id, string memory _campaignName, string memory _campaignDescription,
 uint256 totalAmountRequired,uint256 score, address campaignCreator, uint256 _currentEthers) {
     if(campaigns[_idCampaign].idCampaign !=0){
    return (
    campaigns[_idCampaign].idCampaign,
    campaigns[_idCampaign].campaignName,
    campaigns[_idCampaign].campaignDescription,
    campaigns[_idCampaign].totalAmountRequired,
    campaigns[_idCampaign].score,
    campaigns[_idCampaign].campaignCreator,
    campaigns[_idCampaign].currentEthers
    );
     }
}

function getCampaignsList() public view returns (uint256[] memory){
    return idCampaignsArray;
}

modifier isCampaignCreator(uint _idCampaign) {
    //check that user is the creator of a campaign
    require(campaigns[_idCampaign].campaignCreator == msg.sender,"Campaign can be deleted only bt the creator");
    _;
}

}

