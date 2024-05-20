import { Token } from '@uniswap/sdk-core'
import { TWETH_TOKEN, TUSDC_TOKEN, USDC_TOKEN, WETH_TOKEN, SWAP_ROUTER02_ADDRESS } from './constants'
require('dotenv').config();

export enum Environment {
  LOCAL,
  MAINNET,
  TESTNET,
}

export interface TraderConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
    testnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token,
    poolFee: number
  },
  swapRouter: {
    address: string
  }
}

export const CurrentConfig: TraderConfig = {
  env: Environment.MAINNET,
  rpc: {
    local: 'http://localhost:8545',
    mainnet: process.env.MAINNET_RPC_URL ?? "",
    testnet: process.env.TESTNET_RPC_URL ?? "",
  },
  tokens: {
    in: WETH_TOKEN,
    amountIn: 1,
    out: USDC_TOKEN,
    poolFee: 300,
  },
  swapRouter: {
    address: SWAP_ROUTER02_ADDRESS,
  }
}