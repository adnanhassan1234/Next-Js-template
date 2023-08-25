import { getSingleData } from "@/app/utils/service/apis";

const page = async ({ params }) => {
  const id = params.id;
  const singleProduct = await getSingleData(id);
  
  return (
    <>
       <div className="single_product my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="details">
              <img src={singleProduct.image} width={400} className="my-2 m-auto d-block" alt="img" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="details mt-5">
                <h2>Title: {singleProduct.title}</h2>
                <p className="description my-4"><b>Description:</b> {singleProduct.description}</p>
                <h2 className="category">Category: {singleProduct.category}</h2>
                <h2 className="price">Price: {singleProduct.price}</h2>
                <h3 className="rating">Rating: {singleProduct.rating.rate}</h3>
                <button type="button" className="btn btn-dark my-4">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  );
};

export default page;
