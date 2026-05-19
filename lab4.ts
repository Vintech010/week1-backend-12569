type Product = { id: number, title: string, price: number };

function calculateDiscount(p: Product): number {
return p.price * 0.9;
}

const item: Product = { id: 101, title: "Monitor", price: 5000 };
console.log(calculateDiscount(item)); // 4500