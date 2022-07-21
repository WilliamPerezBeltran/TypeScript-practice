function getProduct(id) {
  try {
    return {
      id: id,
      name: `awesome gadget ${id}`,
      price: 99.5
    };
  } catch (error) {
    console.log(error);
  }
}

//const product = getProduct(1)
//console.log(`the product ${product.Name} costs $${product.price}`)

const showProduct = (name, price) => {
  console.log(`The product ${name} costs ${price}$.`);
};

const product = getProduct(1);
console.log(showProduct(product.price, product.name));
