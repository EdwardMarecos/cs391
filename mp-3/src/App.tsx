import { styled } from "styled-components";
import Projects from "./components/Projects.tsx";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

export default function App() {
    return (
        <>
            <PageWrapper>
                <p>"hello"</p>
            </PageWrapper>
        </>
    );
}

