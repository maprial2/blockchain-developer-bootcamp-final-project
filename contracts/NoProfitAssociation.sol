// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

///@notice Contract to manage a non-profit association projects
contract NoProfitAssociation is Ownable {
    
struct Campaign {
    uint256 idCampaign;
    string campaignName;
    string campaignDescription;
    uint256 totalAmountRequired;
    int16 score;
    address payable campaignCreator;
    uint256 currentEthers;
}

//list of campaigns. Use a simple array to store campaign ids and not the whole Campaign Struct
uint256[]  idCampaignsArray;

uint256 campaignId;

mapping (uint256 => Campaign)  public campaigns;

modifier isNotCampaignCreator(uint _idCampaign) {
    require(campaigns[_idCampaign].campaignCreator != msg.sender,"Campaign creator cannot do this");
    _;
}

modifier campaignsNumbersAllowedExceeded() {
    require (idCampaignsArray.length <= 20, "Campaigns number exceeded");
    _;
}

constructor()  {   
      campaignId = 0;
  }
 
///@notice function to create a campaign and be included into the App
///@param _campaignName  Campaign name given by user
///@param _campaignDescription  Campaign description given by user
///@param _totalAmountRequired  Amount (in ethers) that user asf for the Campaign
///@param _campaignCreator Ethereum address of user who created the Campaign(funds will be transfered to this address)
function createCampaign (string memory _campaignName, string memory _campaignDescription, uint256 _totalAmountRequired,
address payable _campaignCreator) campaignsNumbersAllowedExceeded () public {

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
///@notice Funds that are added to a specific Campaign
///@param _idCampaign Campaign identifier
///@param _donation Amount donated to the Campaign
///@dev No limit to the amount donated
function addMoneyToCampaign(uint _idCampaign, uint _donation) isNotCampaignCreator(_idCampaign) public payable {
  
    campaigns[_idCampaign].currentEthers += _donation;
}
///@notice Method to remove a Campaign frm the Campaigns´list by the App administrator
///@param _idCampaign Campaign identifier
///@dev According OpenZeppelin contract only contract owner can call this function
///@dev Identifier is deleted from the identifiers list (idCampaignsArray)
function removeCampaign(uint256 _idCampaign)  public onlyOwner {

   for(uint i = 0; i < idCampaignsArray.length; i++)  {
    if(idCampaignsArray[i] == _idCampaign) {
    idCampaignsArray[i] = idCampaignsArray[idCampaignsArray.length - 1];
    idCampaignsArray.pop();
    break;
    }
}
}
///@notice Method to support a Campaign (give a like). Increasing the score.
///@param _idCampaign Campaign identifier
function likeCampaign(uint _idCampaign) isNotCampaignCreator(_idCampaign) public{
   
     int16 currentScore = campaigns[_idCampaign].score;
     campaigns[_idCampaign].score = ++currentScore;
}
///@notice Method to give a negative opinion to a Campaign.Decreasing the score 
///@param _idCampaign Campaign identifier
function dislikeCampaign(uint _idCampaign) public { 
     int16 currentScore = campaigns[_idCampaign].score;
    campaigns[_idCampaign].score = --currentScore;
}

///@notice Give the information about a Campaign 
///@param _idCampaign Campaign identifier
///@return _id  identifier
///@return _campaignName Campaign title
///@return _campaignDescription Campaign description
///@return _totalAmountRequired funds required for Campaign
///@return _score Campaign score according users
///@return _campaignCreator address of Campaign creator
///@return _currentEthers ethers donated to the Campaign by users
function getCampaign (uint256 _idCampaign) public view returns(uint256 _id, string memory _campaignName, string memory _campaignDescription,
 uint256 _totalAmountRequired,int16 _score, address _campaignCreator, uint256 _currentEthers) {
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
///@notice Get the list of Campaigns proposed
///@return idCampaignsArray list of Campaign´s identifiers
function getCampaignsList() public view returns (uint256[] memory){
    return idCampaignsArray;
}
///@notice Transfer Campaign´s funds to the Campaign creator
///@param _idCampaign Campaign identifier
///@dev According OpenZeppelin contract only contract owner can call this function
function transferCampaignEthers (uint _idCampaign) public payable onlyOwner{

campaigns[_idCampaign].campaignCreator.transfer(campaigns[_idCampaign].currentEthers);
campaigns[_idCampaign].currentEthers=0;
}

}

