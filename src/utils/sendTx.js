import { useGlobalStore } from '@/store'


// Send Tx
export const sendTx = async txBytes => {
    let store = useGlobalStore()

    // Broadcast
    await store.StargateClient.broadcastTx(txBytes, store.StargateClient.broadcastTimeoutMs, store.StargateClient.broadcastPollIntervalMs)
}


export default sendTx