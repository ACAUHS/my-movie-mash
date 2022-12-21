import Head from "next/head"
import NavBar from "./navbar"

/**
 * 
 * @returns The Header portion of the website
 */

export default function Header() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Movie List!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
        </div>
    )
}