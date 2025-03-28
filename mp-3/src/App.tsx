import { styled } from "styled-components";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Certifications from "./components/Certifications";
import References from "./components/References.tsx";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements.tsx";

const PageWrapper = styled.div`
    width: 80vw;
     margin: 0 auto;
`;

const HeaderWrapper = styled.div`
    background-color: #f2e9e4;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2vh 2vw;
    background-color: #22223b;
    color: #f2e9e4;
    border-radius: 0 0 15px 0;
    font-size: calc(2px + 2vw);
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #22223b;
`;

const Nav = styled.nav`
    background-color: #22223b;
    padding: 1vh 1vw;
    height: 100vh;
    width: 30%;
`

const Main = styled.main`
    padding: 1vh 2vw;
    display: flex;
    flex-direction: column;
    gap: calc(2px + 2vh);
    width: 100%;
    min-height: 100vh;
    background-color: #f2e9e4;
    color: #4a4e69;
    border-radius: 15px 0 0 15px;
    font-size: calc(2px + 1.4vw);
`;

const FooterWrapper = styled.div`
    background-color: #f2e9e4;
`;

const Footer = styled.footer`
    display: flex;
    background-color: #22223b;
    padding: 2vh 2vw;
    height: 100%;
    text-align: center;
    border-radius: 0 15px 0 0;
    font-size: calc(2px + 1.6vw);
    justify-content: center;
`;

const FooterP = styled.p`
    color: white;
    font-family: Cochin, Cambria, Georgia, Times, serif;
`

const FooterA = styled.a`
    color: white;
    font-family: Cochin, Cambria, Georgia, Times, serif;
    font-weight: bold;
`

function Root(){
    return(
        <>
            <Container>
                <Nav>
                    <Navigation />
                </Nav>
                <Main>
                    <Routes>
                        <Route
                            path="/*"
                            element={<Home/>}
                        />
                        <Route
                            path="/Education"
                            element={<Education/>}
                        />
                        <Route
                            path="/Experiences"
                            element={<Experiences/>}
                        />
                        <Route
                            path="/Certifications"
                            element={<Certifications/>}
                        />
                        <Route
                            path="/References"
                            element={<References/>}
                        />
                        <Route
                            path="/Achievements"
                            element={<Achievements/>}
                        />
                        <Route
                            path="/Projects"
                            element={<Projects/>}
                        />
                    </Routes>
                </Main>
            </Container>
        </>
    )
}

const router = createBrowserRouter([
    {path: "*", Component: Root},]
);

export default function App() {
    return (
        <>
            <PageWrapper>
                <HeaderWrapper>
                    <Header>
                        <h1>
                            Edward Marecos
                        </h1>
                        <p>
                            Fourth Year Computer Science Student at Boston University
                        </p>
                    </Header>
                </HeaderWrapper>
                <RouterProvider router={router} />
                <FooterWrapper>
                    <Footer>
                        <FooterP>All rights Reserved by Edward Marecos <FooterA href="../credits/credits.html">Credits</FooterA>&#169</FooterP>
                    </Footer>
                </FooterWrapper>
            </PageWrapper>
        </>
    );
}
