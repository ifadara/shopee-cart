// quais ações meu carrinho pode fazer

// -> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// -> calcular o total
async function calculateTotal(userCart){
    console.log("\nShopee Cart TOTAL is: ")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💰Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// -> remover um item pelo index
async function removeItem(userCart, item){
    // encontrar o indice do item
    const index = userCart.findIndex((p) => p.name === item.name);
    
    // caso não encontre o item
    if(index == -1){
        console.log("item não enconrado");
        return;
    }
      
    // item > 1 subtrair um item
    if(userCart[index].quantity > 1){
        userCart[index].quantity -= 1;
        return;
    }

    //caso o item == 1 deletar o item
    if(userCart[index].quantity == 1){
        userCart.splice(index, 1);
        return;
    }
}


// -> listar itens do carrinho
async function displayCart(userCart){
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal: R$${item.subtotal()}  `);
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}
