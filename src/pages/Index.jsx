import { Box, Container, Heading, IconButton, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Assuming volume range is 0-100

  return (
    <Container maxW="container.md" centerContent>
      <VStack spacing={4} marginY={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcwODgwNTE1OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Album Cover" />
        <Heading as="h2" size="xl">
          Album Title
        </Heading>
        <Text fontSize="md">Artist Name</Text>

        {/* Music Player Controls */}
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton aria-label="previous song" icon={<FaBackward />} marginRight={4} onClick={() => console.log("Previous song")} />
          <IconButton aria-label={isPlaying ? "pause" : "play"} icon={isPlaying ? <FaPause /> : <FaPlay />} fontSize="2xl" onClick={() => setIsPlaying(!isPlaying)} />
          <IconButton aria-label="next song" icon={<FaForward />} marginLeft={4} onClick={() => console.log("Next song")} />
        </Box>

        {/* Volume Slider */}
        <Slider aria-label="volume-slider" defaultValue={50} min={0} max={100} value={volume} onChange={(val) => setVolume(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="blue.500" as={FaPlay} />
          </SliderThumb>
        </Slider>
      </VStack>
    </Container>
  );
};

export default Index;
