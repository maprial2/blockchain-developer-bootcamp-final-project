const NoProfitAssociation = artifacts.require("NoProfitAssociation");

contract("NoProfitAssociation", function () {
    it("should assert true", async function () {
      await NoProfitAssociation.deployed();
      return assert.isTrue(true);
    });
  });