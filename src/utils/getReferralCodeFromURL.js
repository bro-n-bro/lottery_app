// Get referral code from URL
export const getReferralCodeFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search),
        ref = urlParams.get('ref') || ''

    return ref
}


export default getReferralCodeFromURL