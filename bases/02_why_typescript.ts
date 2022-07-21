let box;
console.log(typeof box);
box = 'hello';
console.log(typeof box);
box = 100;
console.log(typeof box);

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  };
}
const product = getProduct(1);
console.log(`the product ${product.name} cost $${product.price}`);

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} cost ${price}`);
};

showProduct(product.name, product.price);
