import { useGlobalStore } from '@/store'


// Address confirmation
export const addressConfirmation = async () => {
    let store = useGlobalStore()

    try {
        // Sign arbitrary request
        store.user.signDoc = await window.keplr.signArbitrary(store.currentNetwork.chain_id, store.user.address, store.addressConfirmationString)
    } catch (error) {
        throw error
    }
}


export default addressConfirmation