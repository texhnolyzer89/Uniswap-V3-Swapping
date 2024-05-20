
## Run Locally

Clone the project

```bash
  git@github.com:texhnolyzer89/Uniswap-V3-Swapping.git
```

Go to the project directory

```bash
  cd Uniswap-V3-Swapping
```

Install dependencies

```bash
  npm install
```

**Set the following keys in the .env file**

* WALLET_MNEMONIC: A 12 word mnemonic phrase (for Metamask)
* WALLET_ADDRESS: The public address of your wallet
* MAINNET_RPC_URL: Your mainnet RPC URL (Recommended: Alchemy)
* TESTNET_RPC_URL: Your testnet RPC URL (Recommended: Alchemy)

**Change the configurations in src/config.ts**

* Configure the environment, swap router address & tokens to use.  

Run the project

```bash
  npm run dev
```

And that's it, you're all set!

