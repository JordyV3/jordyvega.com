import NextLink from "next/link";
import styled from "@emotion/styled";

import { Logo } from "./Logo";
import {
  IconYoutube,
  IconInstagram,
  IconGithub,
} from "./icons";
import {
  Container,
  Flex,
  Text,
  Spacer,
  Link,
  UnorderedList,
  ListItem,
  Heading,
} from "./elements";

const StyledFooter = styled.footer`
  background-color: var(--chakra-colors-secondary-900);
  color: var(--chakra-colors-white);
  position: relative;
  overflow: visible;
  z-index: 2;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container maxW="container.2xl">
        <Flex
          px={{md: 16}}
          py={8}
          w="100%"
          direction={["column", "column", "column", "row"]}
          justify="space-between"
          textAlign={["center", "center", "center", "left"]}
          align={["center", "center", "center", "flex-start"]}
        >
          <Flex
            w={["60%", "60%", "60%", "25%"]}
            justify={["center", "center", "center", "flex-start"]}
            align={["center", "center", "center", "flex-start"]}
            direction="column"
            textAlign={["center", "center", "center", "left"]}
            marginBottom={[6, 6,]}
          >
            <NextLink href="/">
              <a>
                <Flex
                  align="center"
                  justify={["center", "center", "center", "flex-start"]}
                  my={4}
                  ml={8}
                >
                  <Logo size="40px" />
                  <Text
                    fontFamily="heading"
                    fontSize={["sm", "sm", "lg", "xl"]}
                    fontWeight="bold"
                    px="2"
                  >
                    Jordy Vega
                  </Text>
                </Flex>
              </a>
            </NextLink>
            <Flex
              justify="space-around"
              direction="row"
              w={["100%", "100%", "60%", "100%"]}
            >
              <Link href="https://www.youtube.com/channel/UCaxgyGB1VUKn6esKaQzc8bg">
                <IconYoutube size="20px" />
              </Link>
              <Spacer />
              <Link href="https://www.instagram.com/jordy_vega3/">
                <IconInstagram size="20px" />
              </Link>
              <Spacer />
              <Link href="https://github.com/JordyV3">
                <IconGithub size="20px" />
              </Link>
              <Spacer />
            </Flex>
          </Flex>

          <section>
            <Heading as="h4" size="sm" p="4">
              Páginas
            </Heading>
            <UnorderedList styleType="none" ml={[0, 0, 0, 4]}>
              <ListItem>
                {/* <NextLink href="/rss.xml">
                  <Link>RSS</Link>
                </NextLink> */}
              </ListItem>
              <ListItem>
                <NextLink href="/">
                  <Link>Home</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/p/mentoria">
                  <Link>Mentoría</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/p/sobre-mi">
                  <Link>Sobre mí</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/blog">
                  <Link>Blog</Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </section>

          <section>
            <Heading as="h4" size="sm" p="4">
              Recursos
            </Heading>
            <UnorderedList styleType="none" ml={[0, 0, 0, 4]}>
              <ListItem>
                <NextLink href="/cursos/">
                  <Link>Curso de React y Firebase</Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </section>

          <section>
            <Heading as="h4" size="sm" p="4">
              Legal
            </Heading>
            <UnorderedList styleType="none" ml={[0, 0, 0, 4]}>
              <ListItem>
                <Link href="/privacidad">
                  <a>Política de Privacidad</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/cookies">
                  <a>Política de Cookies</a>
                </Link>
              </ListItem>
            </UnorderedList>
          </section>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
