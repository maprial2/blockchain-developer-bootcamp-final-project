// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract NoProfitAssociation {
    
struct Campaign {
    uint idCampaign;
    string campaignName;
    string campaignDescription;
    uint totalAmountRequired;
    uint likes;
    uint dislikes;
    address campaignCreator;
    //address [] campaignSupporters;
}

//list of campaigns. Use a simple array to store campaign ids and not the whole Campaign Struct
uint[]  idCampaigns;


mapping (uint => Campaign)  private campaigns;

//function createCampaign (Campaign memory _campaign) public payable{
    //a new campaign created by a user
//}
function createCampaign (uint _id, string memory _campaignName, string memory _campaignDescription, uint _totalAmountRequired,
address _campaignCreator) public payable {
    //a new campaign created by a user
    campaigns[_id].idCampaign=_id;
    campaigns[_id].campaignName = _campaignName;
    campaigns[_id].campaignDescription = _campaignDescription;
    campaigns[_id].totalAmountRequired = _totalAmountRequired;
    campaigns[_id].likes = 0;
    campaigns[_id].dislikes = 0;
    campaigns[_id].campaignCreator = _campaignCreator;
}
function addMoneyToCampaign(uint _amount, uint _idCampaign) public payable minimumAmountRequired{
    //amount that user  send to a Campaign
}

function removeCampaign(uint _idCampaign) isCampaignCreator (_idCampaign) public {
    //delete a campaign (only the campaign creator can do it) 
}

function likeCampaign(uint _idCampaign) public isCampaignSupporter(_idCampaign){
    //give a like (increase campaign puntuation). The user must be a supporter
}

function dislikeCampaign(uint _idCampaign) public isCampaignSupporter(_idCampaign){
    //give a dislike (decrease campaign score). The user must be a supporter
}

function getCampaign (uint _idCampaign) public view returns(uint _id, string memory _campaignName, string memory _campaignDescription,
 uint totalAmountRequired,uint likes,uint dislikes, address campaignCreator) {
    return (
    campaigns[_idCampaign].idCampaign,
    campaigns[_idCampaign].campaignName,
    campaigns[_idCampaign].campaignDescription,
    campaigns[_idCampaign].totalAmountRequired,
    campaigns[_idCampaign].likes,
    campaigns[_idCampaign].dislikes,
    campaigns[_idCampaign].campaignCreator
    );
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

