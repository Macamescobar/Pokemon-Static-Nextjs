import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { localFavorites } from "@/utils";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { useState } from "react";

const PokemonPage = ({ pokemon }) => {

  const [ isInFavorites, setIsInFavorites ] = useState(localFavorites.existInFavorites(pokemon.id));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites( !isInFavorites );
  }

  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px'}}>
            <Card.Body>
              <Card.Image 
                src={ pokemon.sprites.other?.dream_world.front_default || 'no-image' }
                alt={ pokemon.name }
                width='100%'
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize"> { pokemon.name } </Text>
              <Button 
                color="gradient"
                ghost = { !isInFavorites }
                onPress={onToggleFavorite}
              > 
                { isInFavorites ? 'In favorites' : 'Add to favorites'} 
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}> Sprites: </Text>
              <Container display="flex" direction="row">
                <Image 
                  src={ pokemon.sprites.front_default}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_default}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default PokemonPage;

export async function getStaticPaths() {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const { data } = await pokeApi.get(`pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};
