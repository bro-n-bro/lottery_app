import { useGlobalStore } from '@/store'
import { SigningStargateClient } from '@cosmjs/stargate'


// Create Keplr offline singer
export const createKeplrOfflineSinger = async chain_id => {
    let store = useGlobalStore()

    try {
        // Keplr network enable
        await window.keplr.enable(chain_id)

        // Get Offline Singer
        store.Keplr.offlineSinger = await window.getOfflineSignerAuto(chain_id)

        // Get Stargate Client
        store.StargateClient = await SigningStargateClient.connectWithSigner(store.currentNetwork.rpc_api, store.Keplr.offlineSinger)

        // Get Keplr account
        let accounts = await store.Keplr.offlineSinger.getAccounts()

        // Set user data
        store.user.address = accounts[0].address
    } catch (error) {
        throw error
    }
}


export default createKeplrOfflineSinger