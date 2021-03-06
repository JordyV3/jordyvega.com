import { Fragment } from "react";
import PropTypes from "prop-types";

import {
  AspectRatio,
  Box,
  Heading,
  Flex,
  Spacer,
  Text,
  Link,
} from "./elements";
import { IconVideo } from "./icons";
import { YouTubeBtn } from "./YouTubeBtn";

const YouTubeVideo = ({ videoId }) => {
  return (
    <AspectRatio maxW="1080px" width="100%" ratio={16 / 9}>
      <iframe
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </AspectRatio>
  );
};

export const YouTube = ({
  size,
  title,
  videoId = "5ct-3tDiRUY",
  description,
}) => {
  const channelId = "UCaxgyGB1VUKn6esKaQzc8bg";

  return (
    <Box
      maxW="1080px"
      boxShadow="lg"
      rounded="lg"
      borderWidth="1px"
      bg={description ? "white" : "secondary.100"}
      mx="auto"
      my={[2, 8]}
      color="white"
    >
      {title && !description && (
        <Heading
          as="h3"
          p={6}
          fontSize={["md", "lg", "xl"]}
          color={description ? "black" : "white"}
        >
          <Flex align="center">
            <IconVideo />
            <Text ml={2}>{title}</Text>
          </Flex>
        </Heading>
      )}
      {description ? (
        <Flex direction={["column", "column", "column", "row"]}>
          <YouTubeVideo videoId={videoId} />
          <Box p={[2, 4]} width={["100%", "100%", "100%", "95%"]} color="black">
            <Heading
              as="h3"
              p={4}
              fontSize={["md", "lg", "xl"]}
              color={description ? "black" : "white"}
            >
              <Flex align="center">
                <IconVideo />
                <Text ml={2}>{title}</Text>
              </Flex>
            </Heading>
            <Text p={4}>{description}</Text>
            <Link
              px={4}
              color="brand.900"
              href="https://www.youtube.com/channel/UCaxgyGB1VUKn6esKaQzc8bg"
            >
              Suscr??bete al canal para ver m??s videos ???
            </Link>
          </Box>
        </Flex>
      ) : (
        <YouTubeVideo videoId={videoId} />
      )}

      {!description && (
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          p={size === "minimal" ? 2 : [2, 4, 6]}
          pl={size === "minimal" && 4}
        >
          {size === "minimal" ? (
            <Text fontSize={["md", "lg", "xl"]} fontFamily="heading">
              <Link
                fontSize={size === "minimal" ? "sm" : "md"}
                href={`https://youtube.com/channel/${channelId}?sub_confirmation=1`}
              >
                <strong>???? Suscr??bete al Canal</strong>
              </Link>
            </Text>
          ) : (
            <Fragment>
              <Text fontSize="sm" fontFamily="heading">
                <Link
                  href={`https://youtube.com/channel/${channelId}?sub_confirmation=1`}
                >
                  ???? Suscr??bete al Canal
                </Link>
              </Text>
              <Spacer />
              <YouTubeBtn type="embedded" channelId={channelId} />
            </Fragment>
          )}
        </Flex>
      )}
    </Box>
  );
};

YouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
};
