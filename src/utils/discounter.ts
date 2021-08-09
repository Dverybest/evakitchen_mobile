export const discounter = (amount: string, discount: number) => {
    if (!discount) return Number(amount);
    return Number(amount) - (Number(discount) / 100) * Number(amount);
};