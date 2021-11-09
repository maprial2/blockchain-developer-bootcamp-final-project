// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract NoProfitAssociation {
    
struct Campaign {
    uint256 idCampaign;
    string campaignName;
    string campaignDescription;
    uint256 totalAmountRequired;
    uint256 score;
    address campaignCreator;
    uint256 currentEthers;
}

//list of campaigns. Use a simple array to store campaign ids and not the whole Campaign Struct
uint256[]  idCampaignsArray;

uint256 campaignId;

mapping (uint256 => Campaign)  private campaigns;

//function createCampaign (Campaign memory _campaign) public payable{
    //a new campaign created by a user
//}

constructor()   public {   
      campaignId = 0;
  }
function createCampaign (string memory _campaignName, string memory _campaignDescription, uint _totalAmountRequired,
address _campaignCreator) public payable {
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
function addMoneyToCampaign(uint _idCampaign) public payable minimumAmountRequired{
    uint256 currentMoney = campaigns[_idCampaign].currentEthers;
    uint256 ethersUpdated = currentMoney + msg.value;
     campaigns[_idCampaign].currentEthers = ethersUpdated;
}

function removeCampaign(uint256 _idCampaign) isCampaignCreator (_idCampaign) public {
    //delete a campaign (only the campaign creator can do it) 
    //iterate in the array to locate the id and delete it
    uint256[] memory elements = idCampaignsArray
;
    for (uint256 index = 0; index < elements.length; index++) {
        if(elements[index] == _idCampaign) {
            delete idCampaignsArray[index];
        }
    }
}

function likeCampaign(uint _idCampaign) public isCampaignSupporter(_idCampaign){
    //give a like (increase campaign puntuation). The user must be a supporter
     uint256 currentScore = campaigns[_idCampaign].score;
     uint256 finalScore = currentScore++;
    campaigns[_idCampaign].score = finalScore;

}

function dislikeCampaign(uint _idCampaign) public isCampaignSupporter(_idCampaign){
    //give a dislike (decrease campaign score). The user must be a supporter
     uint256 currentScore = campaigns[_idCampaign].score;
     uint256 finalScore = currentScore--;
    campaigns[_idCampaign].score = finalScore;
}

function getCampaign (uint256 _idCampaign) public view returns(uint256 _id, string memory _campaignName, string memory _campaignDescription,
 uint256 totalAmountRequired,uint256 score, address campaignCreator, uint256 _currentEthers) {
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

function getCampaignsList() public view returns (uint256[] memory){
    return idCampaignsArray;
}
modifier minimumAmountRequired () {
    //minimum amount a user cand send to campaign
    _;
}
modifier isCampaignCreator(uint _idCampaign) {
    //check that user is the creator of a campaign
    _;
}
modifier isCampaignSupporter(uint _idCampaign) {
    //check that user sent money to the campaign
    _;
}

}

