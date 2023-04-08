import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts"


const PokemonPage = ({ pokemon }) => {

  return (
    <Layout title='Algun pokémon'>
        <h1> { pokemon.name } </h1>
    </Layout>
  )
}


export default PokemonPage;

export async function getStaticPaths() {

  const pokemons151 = [...Array(151)].map((value, index) => `${ index + 1 }`);
  console.log(pokemons151);

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false , // can also be true or 'blocking'
  }
}

export const getStaticProps = async({params} ) => {

  const { id } = params;

  const { data } = await pokeApi.get(`pokemon/${ id }`);
 
  return {
    props: {
      pokemon: data
    }
  }
}