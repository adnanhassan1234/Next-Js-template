// GET all products
export async function getAllData() {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 10 },
    });
    return await res.json();
  }
// GET single products
export async function getSingleData(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {});
    return await res.json();
  }