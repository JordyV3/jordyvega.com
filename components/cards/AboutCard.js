import { Fragment } from "react";

import { Card } from "./_Card";
import { Box, Flex, Text, Img } from "../elements";

export const AboutCard = () => {
  return (
    <Card
      type="aside"
      bgColor="secondary.900"
      headerColor="brand.900"
      headerTitle="Sobre Mí"
    >
      <Fragment>
        <Flex justify="center" py="4">
          <Img
              boxSize="96px"
              borderRadius="full"
               src="/assets/about1.png"
              alt="Jordy Vega"
          />
        </Flex>
        <Box color="white" py="4">
          <Text py="2">
            Soy Jordy Vega. Desarrollador web desde hace{" "}
            {new Date().getFullYear() - 2020} años.
          </Text>
          <Text py="2">
            He trabajado en Google, IBM y Eventbrite. Soy GDE (Google Developer
            Expert) en Tecnologías Web.
          </Text>
          <Text py="2">
            Llevo {new Date().getFullYear() - 2022} años documentando en éste
            blog todo lo que aprendo y hago en mi vida como estudiante y desarrollador todo con el fin de compartirlo con el resto.
          </Text>
        </Box>
      </Fragment>
    </Card>
  );
};
