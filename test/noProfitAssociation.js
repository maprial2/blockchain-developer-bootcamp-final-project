const NoProfitAssociation = artifacts.require("NoProfitAssociation");

contract("NoProfitAssociation", function (accounts) {
  var smartContInstance;

  beforeEach(async () => {
    smartContInstance = await NoProfitAssociation.new();
  });

  it("should set owner at first account in contract deploy according OpenZeppelin Ownable", async () => {
    assert.strictEqual(await smartContInstance.owner(), accounts[0]);
  });
  //check that at beginning when create the first Campaign it is added to the list of Campaigns and identifier is 0
  it("Initial identifier of Campaigns is zero", async () => {
    //another no contract owner would create the campaign
    const campaignCreator = accounts[1];
    var numberCampaigns;
    try {
      await smartContInstance.createCampaign("campaign name", "campaign description", 2, campaignCreator);
    } catch (err) {
      console.log(err);
    }

    try {
      numberCampaigns = await smartContInstance.getCampaignsList();
    } catch (err) {
      console.log(err);
    }
    //there is only a campaign and identifier should be zero
    assert.equal(numberCampaigns.length, 1);
    assert.equal(numberCampaigns[0], 0,);
  });


  it("When another campaign is added after first campaign is added to the list with correct id", async () => {

    const campaignCreator1 = accounts[1];
    const campaignCreator2 = accounts[2];
    var numberCampaigns;

    try {
      await smartContInstance.createCampaign("campaign name", "campaign description", 2, campaignCreator1);
    } catch (err) {
      console.log(err);
    }
    try {
      await smartContInstance.createCampaign("campaign name2", "campaign description2", 3, campaignCreator2);
    } catch (err) {
      console.log(err);
    }

    try {
      numberCampaigns = await smartContInstance.getCampaignsList();
    } catch (err) {
      console.log(err);
    }
    //there are two campaigns and the second should have identifier 1
    assert.equal(numberCampaigns.length, 2);
    assert.equal(numberCampaigns[1], 1);
  });

  it("Campaign can be deleted by contract Owner", async () => {

    const campaignCreator1 = accounts[1];
    const campaignCreator2 = accounts[2];
    var numberCampaigns;
    //a campaign will be created by two different users
    try {
      await smartContInstance.createCampaign("campaign name", "campaign description", 2, campaignCreator1);
    } catch (err) {
      console.log(err);
    }
    try {
      await smartContInstance.createCampaign("campaign name2", "campaign description2", 3, campaignCreator2);
    } catch (err) {
      console.log(err);
    }
    //by default accounts[0] is chosen to deploy the contract. It is the
    //contract owner. So can delete a campaign
    try {
      await smartContInstance.removeCampaign("1");
    } catch (err) {
      console.log(err);
    }

    try {
      numberCampaigns = await smartContInstance.getCampaignsList();
    } catch (err) {
      console.log(err);
    }

    //a campaign should have been deleted. So there is only one campaign available
    //Remaining campaign has the correct identifier
    assert.equal(numberCampaigns.length, 1);
    assert.equal(numberCampaigns[0], 0);
  });

  it("When method to get campaign info is called the result is correct", async () => {
    const campaignCreator = accounts[1];
    try {
      //create campaign
      await smartContInstance.createCampaign("campaign name", "campaign description", 2, campaignCreator);
    } catch (err) {
      console.log(err);
    }
    //call to method to get campaign info
    var campaign = await smartContInstance.getCampaign(0);

    //Checking that information is the same that data used to create the campaign
    //campaign name correct
    assert.equal(Object.values(campaign)[1], "campaign name");
    //campaign description correct
    assert.equal(Object.values(campaign)[2], "campaign description");
    //amount required correct
    assert.equal(Object.values(campaign)[3], 2);
    //score correct (when it is created is zero)
    assert.equal(Object.values(campaign)[4], 0);
    //campaign creator correct
    assert.equal(Object.values(campaign)[5], accounts[1]);
    //current campaign funds correct (when it is created is zero)
    assert.equal(Object.values(campaign)[6], 0);
  });

  it("When user likes a campaign the score is increased", async () => {
    const campaignCreator = accounts[1];

    try {
      //create campaign
      await smartContInstance.createCampaign("campaign name", "campaign description", 2, campaignCreator);
    } catch (err) {
      console.log(err);
    }
    try {
      //call to method to support a campaign. It is done by accounts[0]. Not the campaign creator
      await smartContInstance.likeCampaign(0);
    } catch (err) {
      console.log(err);
    }
    //get campaign info
    var campaign = await smartContInstance.getCampaign(0);
    //score is updated.
    assert.equal(Object.values(campaign)[4], 1);
  });

  it("When user likes a campaign the score is decreased", async () => {
    const campaignCreator = accounts[1];

    try {
      //create campaign
      await smartContInstance.createCampaign("campaign name", "campaign description", 2, campaignCreator);
    } catch (err) {
      console.log(err);
    }
    try {
      //call to method to dislike a campaign
      await smartContInstance.dislikeCampaign(0);
    } catch (err) {
      console.log(err);
    }
    //get campaign info
    var campaign = await smartContInstance.getCampaign(0);
    //score is updated
    assert.equal(Object.values(campaign)[4], -1);
  });

  it("When user send ethers to a campaign updates the current campaign funds", async () => {
    const campaignCreator = accounts[1];

    try {
      //create campaign
      await smartContInstance.createCampaign("campaign name", "campaign description", 2, campaignCreator);
    } catch (err) {
      console.log(err);
    }
    try {
      //by default it is accounts[0]. It is not the campaign creator
      await smartContInstance.addMoneyToCampaign(0, 1);
    } catch (err) {
      console.log(err);
    }
    //get campaign info
    var campaign = await smartContInstance.getCampaign(0);
    //funds are updated
    assert.equal(Object.values(campaign)[6], 1);
  });

});