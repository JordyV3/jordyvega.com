import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { Text, Box } from "./elements";
import { ButtonCTA } from "./ButtonCTA";

export const Hero = () => {
  return (
    <Fragment>
      <Text
        fontFamily="heading"
        fontWeight="normal"
        fontSize={["4xl", "5xl"]}
        lineHeight={1.1}
        textAlign={["center", "center", "center", "left"]}
      >
        Hola 👋🏼, soy
      </Text>{" "}
      <Text
        as="h2"
        fontFamily="heading"
        fontSize={["4xl", "5xl"]}
        fontWeight="black"
        lineHeight={1.1}
        textAlign={["center", "center", "center", "left"]}
      >
        Jordy Vega
      </Text>
      <Text
        as="h3"
        fontFamily="heading"
        fontWeight="normal"
        fontSize={["sm", "md"]}
        textAlign={["center", "center", "center", "left"]}
        my={4}
      >
        Desarrollador Web <strong>Full Stack</strong> con 1+ años de experiencia.
        Actualmente desarrollador de tecnologías web.
        <br />
        <br />
        Próximamente reconocido por Google como <strong>Developer Expert (GDE)</strong> en
        Web, y <strong>Auth0 Ambassador</strong>.
      </Text>
      <Link href="/cursos/">
        <a><ButtonCTA>¡Quiero aprender Desarrollo Web!</ButtonCTA></a>
      </Link>
      <Box mx={"auto"}>
        <Image
          width={400}
          height={150}
          src="/assets/company-logos.png"
          alt="Google, IBM, Eventbrite. Chefly"
        />
      </Box>
    </Fragment>
  );
};
