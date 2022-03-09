const { Network } = require('@injectivelabs/networks')
const {
  IS_TESTNET,
  IS_MAINNET_STAGING,
  NETWORK
} = require('./app/utils/constants')

const mainnetSpot = [
  'inj-usdt',
  'huahua-usdt',
  'atom-usdt',
  'weth-usdt',
  'link-usdt',
  'ust-usdt',
  'luna-ust',
  'gf-usdt'
]
const testnetSpot = [...mainnetSpot]
const mainnetStagingSpot = [...mainnetSpot]
const spot = IS_TESTNET
  ? testnetSpot
  : IS_MAINNET_STAGING
  ? mainnetStagingSpot
  : mainnetSpot

const mainnetDerivatives = [
  'btc-usdt-perp',
  'inj-usdt-perp',
  'eth-usdt-perp',
  'luna-ust-perp',
  'bnb-usdt-perp',
  'atom-usdt-perp',
  'osmo-usdt-perp'
]
const testnetDerivatives = [...mainnetDerivatives]
const mainnetStagingDerivatives = [...mainnetDerivatives]
const derivatives = IS_TESTNET
  ? testnetDerivatives
  : IS_MAINNET_STAGING
  ? mainnetStagingDerivatives
  : mainnetDerivatives

if (NETWORK === Network.Devnet) {
  derivatives.push('bayc-weth-perp')
}

module.exports = [
  '/',
  '/dmm',
  '/faq',
  '/fee-discounts',
  '/history',
  '/portfolio',
  '/register',
  '/trade-and-earn',
  '/wallet',
  ...spot.map((s) => `/spot/${s}`),
  ...derivatives.map((d) => `/derivatives/${d}`)
]

module.exports.spot = spot
module.exports.derivatives = derivatives
