import styles from "@/app/styles/navbar.module.css";
import Nav from "@/app/components/Nav/Nav";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <Image
              alt="my logo"
              src="/logo.png"
              width={150}
              height={40}
            />
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
