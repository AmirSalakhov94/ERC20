import { task } from "hardhat/config";

task("transferFrom", "Transfer from")
		.addParam("token", "Token address")
		.addParam("sender", "Sender")
        .addParam("recipient", "Recipient")
        .addParam("amount", "Amount token")
        .setAction(async(taskArgs, { ethers }) => {
			console.log("Started")
			const Token = await ethers.getContractFactory("ERC20")
			const tokenContract = Token.attach(taskArgs.token)
			let [deployer] = await ethers.getSigners();

			console.log(await tokenContract.balanceOf(taskArgs.sender))
			console.log(await tokenContract.balanceOf(taskArgs.recipient))
			console.log(await tokenContract.allowance(deployer.address,taskArgs.sender))
			const accountSender = await ethers.getSigner(taskArgs.sender)
			await tokenContract.connect(accountSender).transferFrom(deployer.address, taskArgs.recipient, taskArgs.amount)
			await tokenContract.transferFrom(taskArgs.sender, taskArgs.recipient, taskArgs.amount)
			console.log(await tokenContract.balanceOf(taskArgs.sender))
			console.log(await tokenContract.balanceOf(taskArgs.recipient))
		
			console.log("Finished")
})
