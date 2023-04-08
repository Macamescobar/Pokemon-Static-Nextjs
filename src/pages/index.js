import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { Grid } from "@nextui-org/react";


export default function Home({ pokemons }) {

  return (
    <>
      <Layout title="Listado de pokemons">
        <Grid.Container gap={ 2 } justify="flex-start">
          {
            pokemons.map( ({ id, name, img}) => (
              <PokemonCard key={id} id={ id } name={ name } img={ img }/>
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async() => {

  const { data } = await pokeApi.get('/pokemon?limit=151');
  
  const pokemons = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1}.svg`
  }))

  return {
    props:{
      pokemons
    }
  }
}