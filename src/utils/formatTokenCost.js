// Format token cost
export const formatTokenCost = (cost) => {
    // Rounding
    return cost > 0.01 || cost === 0 ? cost.toLocaleString('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).replace(',', '.') : '<0.01'
}


export default formatTokenCost