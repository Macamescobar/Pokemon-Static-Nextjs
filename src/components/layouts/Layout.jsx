
import Head from "next/head"
import { Navbar } from "../ui"

export const Layout = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> { title } </title>
            <meta name="author" content="Macarena Muñoz"/>
            <meta name="description" content={`Info about pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
        </Head>
       
       <Navbar/>

       <main style={{
          padding:'0px 20px'
       }}>
          { children }
       </main>
    </>
  )
}
