import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icon app"
        width={70}
        height={70}
      />
      <Text color="black" h2> P </Text>
      <Text color="black" h3> okémon</Text>
      <Spacer css={{ flex: 1 }}/>
      <Text color="black">Favoritos</Text>
    </div>
  );
};
