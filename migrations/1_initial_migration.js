const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

const NoProfitAssociation = artifacts.require("NoProfitAssociation");

module.exports = function (deployer) {
  deployer.deploy(NoProfitAssociation);
};
