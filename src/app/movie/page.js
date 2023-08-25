import { getAllData } from "@/app/utils/service/apis";
import ProductCard from "../components/Card/ProductCard";

const Movie = async () => {
  const products = await getAllData();
  await new Promise(resolve => setTimeout(resolve, 2000)); 

  return (
    <>
    <div className="products my-5">
      <div className="container">
         <h1 className="text-center my-5">Products</h1>
        <div className="row">
         {
          products?.map((content , index) =>{
            return (
              <ProductCard key={index} {...content} />
            )
          })
         }
        </div>
      </div>
    </div>
    </>
  );
};

export default Movie;
