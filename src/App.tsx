import { Center, Container, VStack } from "styled-system/jsx";
import ColorSelect from "./components/ColorSelect";
import { Button } from "./components/ui/button";

export const App = () => {
    return (
        <Container py={{ base: "16", md: "24" }}>
            <VStack gap='4'>
                <ColorSelect />
                <Button>Click</Button>
            </VStack>
        </Container>
    );
};
