import NextLink from "next/link";

import { Card } from "./_Card";
import { Text, Link } from "../elements";

export const AboutCardHome = () => {
  return (
    <Card type="home" headerTitle="About">
      <Text py="2">
        ¡Hola! Soy Jordy Vega. Llevo desarrollando web desde hace{" "}
        {new Date().getFullYear() - 2020} años.
      </Text>
      <Text py="2">
        Trabajo actualmente en el area de QA Claro Centro América.
      </Text>
      <Text py="2">
        Próximamente sere GDE (Google Developer Expert) en Tecnologías Web y Auth0.
      </Text>
      <NextLink href="/p/sobre-mi">
        <Link py={4} color="brand.900">
          Más sobre mí →
        </Link>
      </NextLink>
    </Card>
  );
};
