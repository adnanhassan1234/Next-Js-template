import Link from "next/link";
import "./hero.scss";

const Herosection = ({title ,imageUrl}) => {
  return (
    <main className="main_hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero_content">
              <h2>{title}</h2>
              <p>
                
                From award-winning dramas to blockbuster action movies,
                we&apos;ve got you covered. Browse our selection of the latest
                and greatest movies, and find your new favorite today.
              </p>
              <Link href="/movie"><button type="button" className="btn btn-dark">
                Explore Movie
              </button></Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <img src={imageUrl} alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className={["custom-shape-divider-bottom-1681647578"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={["shape-fill"]}
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Herosection;
