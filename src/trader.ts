import { CurrentConfig, Environment } from "./config"
import { JsonRpcProvider, ethers } from "ethers"
import { AMOUNT_OF_ETH_TO_SWAP, GAS_LIMIT, WALLET_ADDRESS, WALLET_MNEMONIC } from "./constants"
import { FeeAmount } from "@uniswap/v3-sdk"

const SwapRouterABI = require('./abis/swaprouter02.json')
const ERC20ABI = require('./abis/erc20.json')

const provider = CurrentConfig.env === Environment.MAINNET ? new JsonRpcProvider(CurrentConfig.rpc.mainnet) : new JsonRpcProvider(CurrentConfig.rpc.testnet) 

async function swapEthToUsdc() {

  const wallet = ethers.Wallet.fromPhrase(WALLET_MNEMONIC)
  const connectedWallet = wallet.connect(provider)

  const swapRouterContract = new ethers.Contract(
    CurrentConfig.swapRouter.address,
    SwapRouterABI,
    provider
  )

  const inputAmount = AMOUNT_OF_ETH_TO_SWAP
  const amountIn = ethers.parseUnits(
    '1',
    CurrentConfig.tokens.in.decimals
  )
  
  const approvalAmount = (Number(amountIn) * 1000000).toString()

  const wethContract = new ethers.Contract(
    CurrentConfig.tokens.in.address,
    ERC20ABI,
    provider
  )

  /* @ts-ignore */
  const allowance = await wethContract.connect(connectedWallet).allowance(
    WALLET_ADDRESS,
    CurrentConfig.swapRouter.address
  )
  
  // Don't spend resources ;)
  if(allowance === BigInt(0)) {
    /* @ts-ignore */
    await wethContract.connect(connectedWallet).approve(
      CurrentConfig.swapRouter.address,
      approvalAmount
    )
  }

  const params = {
    tokenIn: CurrentConfig.tokens.in.address,
    tokenOut: CurrentConfig.tokens.out.address,
    fee: FeeAmount.MEDIUM,
    recipient: WALLET_ADDRESS,
    amountIn: Number(amountIn) * inputAmount,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  }
  
  /* @ts-ignore */
  swapRouterContract.connect(connectedWallet).exactInputSingle(
    params,
    {
      gasLimit: BigInt(GAS_LIMIT)
    }
  ).then((transaction: any) => {
    console.log(transaction)
  }).catch((error: any) => {
    console.log(error)
  })
}

swapEthToUsdc()
