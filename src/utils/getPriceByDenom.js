import { useGlobalStore } from '@/store'


// Get price by denom
export const getPriceByDenom = symbol => {
    let store = useGlobalStore(),
        price = store.prices.find(el => el.symbol.toLowerCase() === symbol.toLowerCase())?.price || 0

    return price
}


export default getPriceByDenom