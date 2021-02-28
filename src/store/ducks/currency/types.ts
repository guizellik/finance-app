export interface Currency {
  currency_code: string,
  name: string,
  symbol: string,
  country_code: string,
  central_bank?: string,
  country_name: string,
  using_countries?: string
}

export interface CurrencyReducerInitialState {
  selectedCurrency: string,
  currencyList: Currency[]
}