import { Box, Flex, HStack, Link } from "./elements";
import { IconTwitch, IconYoutube, IconGithub } from "./icons";
import { Logo } from "./Logo";
import { SectionLinks } from "./SectionLinks";

export const Header = () => {
  return (
    <Box as="header" py="10" px={[0, 0, 0, 8]}>
      <Flex
        as="header"
        fontWeight="bold"
        direction={["column", "column", "column", "row"]}
        justify="space-between"
        align="center"
      >
        <h1 title="Desarrollo JavaScript Fullstack - Jordy Vega">
          <Logo />
        </h1>
        <SectionLinks />
        <HStack spacing="40px">
          <Link href="https://github.com/JordyV3" isExternal>
            <IconGithub size="40px" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCaxgyGB1VUKn6esKaQzc8bg"
            isExternal
          >
            <IconYoutube size="40px" />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};
