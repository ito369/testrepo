const getTotalPrice = (price, quantity) => {
    return `合計金額は${price * quantity}円です`;
};

const addTax = total => Math.floor(total * 1.1);

    const totalText = getTotalPrice(1000, 2); // → 2000

const total = Number(
    totalText.replace("合計金額は", "").replace("円です", "")
);

console.log(`税抜金額は${total}円です`);

const taxedTotal = addTax(total);     // → 2200

console.log(`税込金額は${taxedTotal}円です`);