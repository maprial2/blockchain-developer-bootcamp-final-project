const NoProfitAssociation = artifacts.require("NoProfitAssociation");

contract("NoProfitAssociation", function (accounts) {
  var smartContInstance;
  
  beforeEach(async () => {
    smartContInstance = await NoProfitAssociation.new();
  });

    it("should set owner at firts account in contract deploy according OpenZeppelin Ownable", async () => {
      assert.strictEqual(await smartContInstance.owner(), accounts[0]);
    });
    //check that at beginning when create the first Campaign it is added to the list of Campaigns and identifier is 0
    it("Initial identifier of Campaigns is zero", async () => {
      //another no contract owner would create the campaign
      const campaignCreator = accounts[1];
      var numberCampaigns;
      try {
      await smartContInstance.createCampaign("campaign name", "campaign description",2,campaignCreator);
      } catch (err) {
        console.log(err);
      }

      try {
        numberCampaigns = await smartContInstance.getCampaignsList();
      }  catch (err) {
        console.log(err);
      }
          assert.equal(numberCampaigns.length, 1);
          assert.equal(numberCampaigns[0], 0,);
    });


    it("When another campaign is added after first campaign is added to the list with correct id", async () => {
      
      const campaignCreator1 = accounts[1];
      const campaignCreator2 = accounts[2];
      var numberCampaigns;
     
      try {
      await smartContInstance.createCampaign("campaign name", "campaign description",2,campaignCreator1);
      } catch (err) {
        console.log(err);
      }
      try {
        await smartContInstance.createCampaign("campaign name2", "campaign description2",3,campaignCreator2);
        } catch (err) {
          console.log(err);
        }

      try {
        numberCampaigns = await smartContInstance.getCampaignsList();
      }  catch (err) {
        console.log(err);
      }
          assert.equal(numberCampaigns.length, 2);
          assert.equal(numberCampaigns[1], 1);
    });
    //check campaign score is increased when user like the campaign
    it("should increase score from a cmpaign", async () => {

      const campaigAddressToIncrease = accounts[1];
      
      try {
        await smartContInstance.createCampaign("campaign name", "campaign description",3,campaigAddressToIncrease);
        } catch (err) {
          console.log(err);
        }
 
      try {
        await smartContInstance.likeCampaign(0);
      }  catch (err) {
        console.log("error1"+err);
      }

      try {
  
        const campaign = await smartContInstance.getCampaign(0);
        
       const score = campaign.value[6];
       assert.equal(score,1,"off");
      }  catch (err) {
        console.log(err);
      }
      
    });

    //check that contract assets is increased when user donates to a campaign
    it("should check donation is transfered", async function () {
     // const campaignCreator = accounts[1];
     const campaign = accounts[1];
     try {
      await smartContInstance.createCampaign("campaign name", "campaign description",3,campaign);
      } catch (err) {
        console.log(err);
      }
      try {
        await smartContInstance.addMoneyToCampaign(0,web3.utils.toWei('0.2', 'ether'));
      
      } catch (err) {
          console.log(err);
        }
        var balance = await web3.eth.getBalance(smartContInstance.address);  
        
        assert.equal(balance, web3.utils.toWei('0.2', 'ether'));
    });

    it("Campaign can be deleted by contract Owner", async () => {
      
      const campaignCreator1 = accounts[1];
      const campaignCreator2 = accounts[2];
      var numberCampaigns;
  
      try {
      await smartContInstance.createCampaign("campaign name", "campaign description",2,campaignCreator1);
      } catch (err) {
        console.log(err);
      }
      try {
        await smartContInstance.createCampaign("campaign name2", "campaign description2",3,campaignCreator2);
        } catch (err) {
          console.log(err);
        }

        try {
          await smartContInstance.removeCampaign("1");
          } catch (err) {
            console.log(err);
          }

      try {
        numberCampaigns = await smartContInstance.getCampaignsList();
      }  catch (err) {
        console.log(err);
      }
          assert.equal(numberCampaigns.length, 1);
          assert.equal(numberCampaigns[0], 0);
    });
    
  });