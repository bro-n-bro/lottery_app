import { useGlobalStore } from '@/store'
import { getPriceByDenom } from './getPriceByDenom'


// Calc token cost in current cucrrency
export const calcTokenCost = (amount) => {
    let store = useGlobalStore()

    return (amount * getPriceByDenom(store.currentNetwork.symbol)).toFixed(2)
}


export default calcTokenCost