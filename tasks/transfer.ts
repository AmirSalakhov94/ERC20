import { task } from "hardhat/config";

task("transfer", "Transfer amount of tokens to address")
	.addParam("token", "Token address")
        .addParam("addressto", "The account address transfer token to")
        .addParam("amount", "Amount token")
        .setAction(async(taskArgs, { ethers }) => {
		const Token = await ethers.getContractFactory("ERC20")
		const tokenContract = Token.attach(taskArgs.token)
				
		await tokenContract.transfer(taskArgs.addressTo, taskArgs.amount)
})
