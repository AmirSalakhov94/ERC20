npx hardhat compile - компиляция смартконтракта
npx hardhat test - запуск тестов смартконтракта
npx hardhat run scripts/deploy.ts - деплой смартконтракта в renkiby etherscan, пути прописаны в .env файле, process.env.DEPLOY_KEY_RINKEBY - infura url api, process.env.DEPLOY_ACC_RINKEBY - приватный ключ metamask, process.env.ETHERSCAN_API_KEY - api ключ от etherscan 
npx hardhat verify --network rinkeby 0x64b6795c872a63a9558c4878bb1ab27ba5f2a394 "0xdf20bf2e9f493da28cf54bfe51954a925f2ccd53" "t" "t" 4 - верификация контракта с аргумента конструктора(адрес владельца, name, symbol, decimals) - такие же как при деплои должны быть 
