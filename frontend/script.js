if(document.getElementById("createForm")){
    document.getElementById("createForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        const rating = document.getElementById("rating").value;
        const product = {name, price, description, rating};
        fetch("http://localhost:3001/api/products/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    });
}

if (document.getElementById("root")) {
   fetch("http://localhost:3001/api/products/").then(response => response.json()).then(data => {
    const list = document.getElementById('root');
    console.log(data);
    if (data.length === 0) {
      list.innerHTML = '<p>No products found.</p>';
      return;
    }
    data.products.forEach(product => {
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `<strong>${product.name}</strong>: $${product.price}`;
      list.appendChild(item);
    });
   }).catch(error => {
    document.getElementById('root').innerHTML='Error loading products';
    console.error(error);
   }) 
} 