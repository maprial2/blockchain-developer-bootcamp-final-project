
struct Campaign {
    uint idCampaign;
    string campaignName;
    string campaignDescription;
    uint totalAmountRequired;
    uint likes;
    uint dislikes;
    address payable campaignCreator;
    address [] campaignSupporters;
}

//list of campaigns. Use a simple array to store campaign ids and not the whole Campaign Struct
uint [] public idCampaigns;

mapping (uint => Campaign) public campaigns;

function createCampaign (Campaign _campaign) public payable{
    //a new campaign created by a user
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

function getAllCampaigns () public view returns(Campaign[])

modifier minimumAmountRequired() {
    //minimum amount a user cand send to campaign
}
modifier isCampaignCreator(uint _idCampaign) {
    //check that user is the creator of a campaign
}
modifier isCampaignSupporter(uint _idCampaign) {
    //check that user sent money to the campaign
}

