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
      return ["BLT","tUSDT",token1Amount, token2Amount]

    case "FlowSwapPair" :
      let pool = FlowSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      return ["FLOW","tUSDT",token1Amount, token2Amount]
      
    case "FusdUsdtSwapPair" :
      let pool = FusdUsdtSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      return ["FUSD","tUSDT",token1Amount, token2Amount]
      
    case "RevvFlowSwapPair" :
      let pool = RevvFlowSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      return ["REVV","FLOW",token1Amount, token2Amount]
       
    case "UsdcUsdtSwapPair" :
      let pool = UsdcUsdtSwapPair.getPoolAmounts()
      let token1Amount  = pool.token1Amount
      let token2Amount  = pool.token2Amount
      return ["USDC","tUSDT",token1Amount, token2Amount]
      
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