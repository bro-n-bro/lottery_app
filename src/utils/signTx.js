import { useGlobalStore } from '@/store'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { sha256 } from '@cosmjs/crypto'


// Sign Tx
export const signTx = async (msg, memo = '') => {
    let store = useGlobalStore()

    // Simulate gas
    let gasUsed = await store.StargateClient.simulate(store.user.address, msg, memo)

    // Fee
    let fee = {
        amount: [{
            denom: store.currentNetwork.denom,
            amount: '0'
        }],
        gas: gasUsed.toString()
    }

    // Sign
    let txRaw = await store.StargateClient.sign(store.currentAddress, msg, fee, memo)

    // Encode TxRaw
    let txBytes = TxRaw.encode(txRaw).finish()

    // Hash transaction bytes
    let txHash = sha256(txBytes)

    // Convert hash bytes to hex string
    store.currentTxHash = Buffer.from(txHash).toString('hex')

    return txBytes
}


export default signTx