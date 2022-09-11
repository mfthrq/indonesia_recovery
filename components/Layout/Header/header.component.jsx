import Head from "next/head";
import Navbar from "../Navbar/navbar.component"

const Header = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
        </>

      
    );
};

export default Header;