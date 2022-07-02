import { task } from "hardhat/config";

task("approve", "Allows _spender to withdraw from your account multiple times, up to the _value amount")
        .addParam("token", "Token address")
        .addParam("spender", "Spender address")
        .addParam("amount", "Amount token")
        .setAction(async(taskArgs, { ethers }) => {
                console.log("Started")

                const [deployer] = await ethers.getSigners();

                const Token = await ethers.getContractFactory("ERC20")
                const tokenContract = Token.attach(taskArgs.token)

                await tokenContract.approve(taskArgs.spender, taskArgs.amount)
                console.log(await tokenContract.allowance(deployer.address, taskArgs.spender))

                console.log("Finished")
})
