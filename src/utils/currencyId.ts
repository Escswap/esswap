// import { BSC, Currency, BSC, Token } from 'sb1swap-sdk'
import { BSC, Currency, Token } from 'sb1swap-sdk'

export function currencyId(currency: Currency): string {
  // if (currency === BSC) return 'BNB'
  if (currency === BSC) return 'BNB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
