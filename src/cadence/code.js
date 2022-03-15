export const masterScript = `
import BltUsdtSwapPair from 0xfcb06a5ae5b21a2d
// Token1: BloctoToken
// Token2: TeleportedTetherToken

import FlowSwapPair from 0xc6c77b9f5c7a378f
// Flow
// tUSDT

import FusdUsdtSwapPair from 0x87f3f233f34b0733
// Token1: FUSD
// Token2: TeleportedTetherToken

import RevvFlowSwapPair from 0x5e284fb7cff23a3f
// Token1: REVV
// Token2: FlowToken

import UsdcUsdtSwapPair from 0x9c6f94adf47904b5
// Token1: FiatToken (USDC)
// Token2: TeleportedTetherToken (USDT)

pub fun main(Addr: String) : [AnyStruct] {
  switch Addr{
    case "BltUsdtSwapPair" :
      let pool = BltUsdtSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      let token1Price = BltUsdtSwapPair.quoteSwapExactToken1ForToken2(amount: 1.0)
      let token2Price = BltUsdtSwapPair.quoteSwapExactToken2ForToken1(amount: 1.0)
      return ["BLT","tUSDT",token1Amount, token2Amount, token1Price, token2Price]

    case "FlowSwapPair" :
      let pool = FlowSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      let token1Price = FlowSwapPair.quoteSwapExactToken1ForToken2(amount: 1.0)
      let token2Price = FlowSwapPair.quoteSwapExactToken2ForToken1(amount: 1.0)
      return ["FLOW","tUSDT",token1Amount, token2Amount, token1Price, token2Price]
      
    case "FusdUsdtSwapPair" :
      let pool = FusdUsdtSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      let token1Price = FusdUsdtSwapPair.quoteSwapExactToken1ForToken2(amount: 1.0)
      let token2Price = FusdUsdtSwapPair.quoteSwapExactToken2ForToken1(amount: 1.0)
      return ["FUSD","tUSDT",token1Amount, token2Amount, token1Price, token2Price]
      
    case "RevvFlowSwapPair" :
      let pool = RevvFlowSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      let token1Price = RevvFlowSwapPair.quoteSwapExactToken1ForToken2(amount: 1.0)
      let token2Price = RevvFlowSwapPair.quoteSwapExactToken2ForToken1(amount: 1.0)
      return ["REVV","FLOW",token1Amount, token2Amount, token1Price, token2Price]
       
    case "UsdcUsdtSwapPair" :
      let pool = UsdcUsdtSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      if token1Amount != 0.0 {
        let token1Price = UsdcUsdtSwapPair.quoteSwapExactToken1ForToken2(amount: 1.0)
        let token2Price = UsdcUsdtSwapPair.quoteSwapExactToken2ForToken1(amount: 1.0)
        return ["USDC","tUSDT",token1Amount, token2Amount, token1Price, token2Price]
      } else {
        let token1Price = 0
        let token2Price = 0
        return ["USDC","tUSDT",token1Amount, token2Amount, token1Price, token2Price]
      }

      //return ["USDC","tUSDT",token1Amount, token2Amount, 0, 0]
      
  }
    return []
    


}
`

export const BltUsdtSwapPairscript = `
import BltUsdtSwapPair from 0xfcb06a5ae5b21a2d
// Token1: BloctoToken
// Token2: TeleportedTetherToken

pub fun main() : [UFix64] {
  let pool = BltUsdtSwapPair.getPoolAmounts()
  let token1Amount  = pool.token1Amount
  let token2Amount  = pool.token2Amount
  return [token1Amount, token2Amount]
}
`

export const FlowSwapPairscript = `
import FlowSwapPair from 0xc6c77b9f5c7a378f
// Flow
// tUSDT

pub fun main() : [UFix64] {
  let pool = FlowSwapPair.getPoolAmounts()
  let token1Amount  = pool.token1Amount
  let token2Amount  = pool.token2Amount
  return [token1Amount, token2Amount]
}
`

export const FusdUsdtSwapPairscript = `
import FusdUsdtSwapPair from 0x87f3f233f34b0733
// Token1: FUSD
// Token2: TeleportedTetherToken

pub fun main() : [UFix64] {
  let pool = FusdUsdtSwapPair.getPoolAmounts()
  let token1Amount  = pool.token1Amount
  let token2Amount  = pool.token2Amount
  return [token1Amount, token2Amount]
}
`

export const RevvFlowSwapPairscript = `
import RevvFlowSwapPair from 0x5e284fb7cff23a3f
// Token1: REVV
// Token2: FlowToken

pub fun main() : [UFix64] {
  let pool = RevvFlowSwapPair.getPoolAmounts()
  let token1Amount  = pool.token1Amount
  let token2Amount  = pool.token2Amount
  return [token1Amount, token2Amount]
}
`

export const UsdcUsdtSwapPairscript = `
import UsdcUsdtSwapPair from 0x9c6f94adf47904b5
// Token1: FiatToken (USDC)
// Token2: TeleportedTetherToken (USDT)

pub fun main() : [UFix64] {
  let pool = UsdcUsdtSwapPair.getPoolAmounts()
  let token1Amount  = pool.token1Amount
  let token2Amount  = pool.token2Amount
  return [token1Amount, token2Amount]
}
`