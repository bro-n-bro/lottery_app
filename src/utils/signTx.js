import { useGlobalStore } from '@/store'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { sha256 } from '@cosmjs/crypto'


// Sign Tx
export const signTx = async (msg, memo = '') => {
    const store = useGlobalStore()

    // Simulate gas
    const gasUsed = await store.StargateClient.simulate(store.user.address, msg, memo)

    // Fee
    const fee = {
        amount: [{
            denom: store.currentNetwork.denom,
            amount: '0'
        }],
        gas: Math.round(gasUsed * 1.6).toString()
    }

    // Sign
    const txRaw = await store.StargateClient.sign(store.user.address, msg, fee, memo)

    // Encode TxRaw
    const txBytes = TxRaw.encode(txRaw).finish()

    // Hash transaction bytes
    const txHash = sha256(txBytes)

    // Convert hash bytes to hex string
    store.currentTxHash = Buffer.from(txHash).toString('hex')

    return txBytes
}


export default signTx