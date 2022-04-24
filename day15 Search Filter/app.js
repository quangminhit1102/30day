var products = document.querySelector(".products");
var search = document.querySelector("#filter");
var listItems = [];
search.addEventListener("input", (e) => {
  var filter = listItems.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
  bindingItem(filter);
});
async function loading() {
  const res = await fetch("https://fakestoreapi.com/products");
  const result = await res.json();
  result.forEach((product) => {
    listItems.push(product);
  });
  bindingItem(listItems);
}
function bindingItem(list) {
  products.innerHTML = "";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.setAttribute("class", "product");
    div.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="product-detail">
            <h4>${product.title}</h4>
            <p>$${product.price}</p>
        </div>
    `;
    products.appendChild(div);
  });
}
loading();
