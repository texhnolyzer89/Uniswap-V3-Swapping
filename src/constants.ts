// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's
require('dotenv').config();

import { ChainId, Token } from '@uniswap/sdk-core'

// Addresses (Test & Mainnet)

export const TSWAP_ROUTER02_ADDRESS = "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E"
export const SWAP_ROUTER02_ADDRESS = "0x2626664c2603336E57B271c5C0b26F421741e481"

// WALLET

export const WALLET_ADDRESS = process.env.WALLET_ADDRESS ?? ""
export const WALLET_MNEMONIC = process.env.WALLET_MNEMONIC ?? ""

// Currencies and Tokens

/* BASE MAINNET TOKENS */
export const WETH_TOKEN = new Token(
  ChainId.BASE,
  '0x4200000000000000000000000000000000000006',
  18,
  'WETH',
  'Wrapped Ether'
)

export const USDC_TOKEN = new Token(
  ChainId.BASE,
  '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  6,
  'USDC',
  'USDC Token'
)

/* SEPOLIA TESTNET TOKENS */
export const TWETH_TOKEN = new Token(
  ChainId.SEPOLIA,
  '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
  18,
  'WETH',
  'Wrapped Ether'
)

export const TUSDC_TOKEN = new Token(
  ChainId.SEPOLIA,
  '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
  6,
  'USDC',
  'USDC Token'
)

// Transactions

export const MAX_FEE_PER_GAS = 100000000000
export const MAX_PRIORITY_FEE_PER_GAS = 100000000000
export const TOKEN_AMOUNT_TO_APPROVE_FOR_TRANSFER = 2000
// VALUE TO BIGINT
export const GAS_LIMIT = 250000
export const AMOUNT_OF_ETH_TO_SWAP = 0.0000001
