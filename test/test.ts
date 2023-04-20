import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

describe("test", function () {
  async function deployFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    return { owner, otherAccount };
  }

  it("Deployment", function () {});
  it("working", function () {});
});
