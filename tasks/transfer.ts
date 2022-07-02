import { task } from "hardhat/config";

task("transfer", "Transfer amount of tokens to address")
		.addParam("token", "Token address")
        .addParam("to", "The account address transfer token to")
        .addParam("amount", "Amount token")
        .setAction(async(taskArgs, { ethers }) => {
			console.log("Started")
			const Token = await ethers.getContractFactory("ERC20")
			const tokenContract = Token.attach(taskArgs.token)
			
			console.log(await tokenContract.totalSupply())
			tokenContract.mint(150)
			console.log(await tokenContract.totalSupply())

			await tokenContract.transfer(taskArgs.to, taskArgs.amount)
			console.log(await tokenContract.balanceOf(taskArgs.to))
			console.log("Finished")
})
