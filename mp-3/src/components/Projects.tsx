import { styled } from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: .88vh 0;
    margin: 0;
    width: 100%;
`

const Item = styled.li`
    max-width: 100%;
    border-radius: 15px;
    padding: 1vh 1vw;
    margin: 1vh 0.5vw;
`

const SubList = styled.ul`
    list-style: square;
    padding: 0 0 0 0.5vw;
`

const SubItem = styled.li`
    padding: 0;
    margin: 0;
`

const StyledHeading = styled.h3`
    color: #22223b;
    text-decoration: underline;
    font-family: Cochin, Cambria, Georgia, Times, serif;
    font-weight: bold;
    padding: 0.25vh;
`

const StyledSubHeading = styled.h4`
    color: #22223b;
    text-decoration: none;
    font-family: Cochin, Cambria, Georgia, Times, serif;
    font-weight: bold;
    padding: 0.25vh;
`

const StyledLink = styled.a`
    font-family: Cochin, Cambria, Georgia, Times, serif;
    font-weight: lighter;
    padding: 0.25vh;
    color: #22223b;
`

const StyledSubLink = styled.a`
    font-family: Cochin, Cambria, Georgia, Times, serif;
    font-weight: lighter;
    padding: 0.25vh;
    color: #22223b;
`

const StyledParagraph = styled.p`
    display: flex;
    font-family: cochin, Cambria, Georgia, Times, serif;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100%;
    padding: 0.5vh 0 0 1vw;
`

const VideoWrapper = styled.div`
    max-width: 100%;
    aspect-ratio: 16/9;
    border-radius: 15px;
    border: .1vh #f2e9e4 solid;
`

const Frame = styled.iframe`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

const ListCalculator = styled.li`
    display: flex;
    flex-direction: row;
`

const Pane = styled.div`
    width: 50%;
`

export default function Projects() {
    return (
        <>
            <List>
                {/*-- PYCO --*/}
                <Item>
                    <StyledHeading><StyledLink href="https://github.com/akemisai/EdwardMarecos-AkemiSai-PYCO">Pyco</StyledLink>&#128279</StyledHeading>
                    <StyledParagraph>
                        A social media platform where users can organize their wardrobe, request outfit suggestions,
                        and engage with a community of fashion enthusiasts.
                        The app features a dynamic request system, public and private outfit sharing, and community
                        recognition through leaderboards and achievements.
                    </StyledParagraph>

                    <StyledSubHeading><strong>Technologies Used:</strong></StyledSubHeading>
                    <StyledParagraph>Kotlin, Firebase, Jetpack Compose.</StyledParagraph> <br/>

                    <StyledSubHeading><strong>Collaborator:</strong> <StyledSubLink href="https://www.linkedin.com/in/akemi-sai-238607237/">Akemi
                        Sai</StyledSubLink></StyledSubHeading><br/>

                    <StyledSubHeading><strong>Key Features:</strong></StyledSubHeading>
                    <SubList>
                        <SubItem>Request-based outfit creation system with social features like likes, comments, and
                            shares.
                        </SubItem>
                        <SubItem>Integrated Firebase for authentication and real-time database management.</SubItem>
                        <SubItem>Dynamic UI/UX design using Jetpack Compose.</SubItem>
                    </SubList>
                    <br/>
                    <hr/>
                </Item>

                {/*-- Notes App --*/}
                <Item>
                    <StyledHeading><StyledLink href="https://github.com/EdwardMarecos/cs412/tree/master/project">Collaborative Notes
                        App</StyledLink>&#128279</StyledHeading>
                    <StyledParagraph>
                        A platform designed to help users create, organize, and share study notes with a
                        collaborative and social twist. The app includes functionality for liking,
                        bookmarking, and copying notes into personal libraries.
                    </StyledParagraph>

                    <StyledSubHeading><strong>Technologies Used:</strong></StyledSubHeading>
                    <StyledParagraph>HTML, CSS, Django, JavaScript.</StyledParagraph> <br/>

                    <StyledSubHeading><strong>Key Features:</strong></StyledSubHeading>
                    <SubList>
                        <SubItem>User-friendly interface for uploading and organizing notes.</SubItem>
                        <SubItem>Social features like likes, bookmarks, and a feed for collaborative sharing.</SubItem>
                        <SubItem>Integration with Django to manage user authentication and database queries.</SubItem>
                    </SubList>
                    <br/>
                    {/*-- I chose to use the iframe to embed the video rather than save it to the files, since it was already uploaded; also I made a div video wrapper that keeps aspect ratio for the video--*/}
                    <VideoWrapper>
                        <Frame width="789" height="444" src="https://www.youtube.com/embed/s3t-FEGyKUE"
                               title="cs412_final_project_notesapp" frameBorder="0"
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               referrerPolicy="strict-origin-when-cross-origin"
                               allowFullScreen></Frame>
                    </VideoWrapper>
                    <br/>
                    <hr/>
                </Item>

                {/*-- Tetris --*/}
                <Item>
                    <StyledHeading><StyledLink href="https://github.com/EdwardMarecos/tetris">Tetris AI</StyledLink>&#128279</StyledHeading>
                    <StyledParagraph>
                        A neural network which excels at playing Tetris, learning from its prior mistakes and
                        recognizing patterns that lead to rewards.
                    </StyledParagraph>

                    <StyledSubHeading><strong>Technologies Used:</strong></StyledSubHeading>
                    <StyledParagraph>Java, Flask, Sepia.</StyledParagraph> <br/>

                    <StyledSubHeading><strong>Key Features:</strong></StyledSubHeading>
                    <SubList>
                        <SubItem>Designed and implemented a Tetris-playing AI using a neural network-based Q-learning
                            agent.
                        </SubItem>
                        <SubItem>Engineered a multi-layer neural network to predict optimal moves, utilizing features
                            like board configuration, column heights, and well depths to inform decision-making.
                        </SubItem>
                        <SubItem>Developed a custom reward function to enhance AI performance by incentivizing favorable
                            board states and penalizing risky configurations.
                        </SubItem>
                        <SubItem>Trained the AI to adapt its strategy dynamically, resulting in improved gameplay and
                            higher scores during testing phases.
                        </SubItem>
                    </SubList>
                    <br/>
                    <hr/>
                </Item>

                {/*-- Battleship --*/}
                <Item>
                    <StyledHeading><StyledLink href="https://github.com/EdwardMarecos/Battleship-AI">Battleship AI</StyledLink>&#128279</StyledHeading>
                    <StyledParagraph>
                        A multiplayer web-based implementation of the classic strategy game Battleship. The project
                        involved designing the game logic, user interaction, and game state management for competitive play.
                    </StyledParagraph>

                    <StyledSubHeading><strong>Technologies Used:</strong></StyledSubHeading>
                    <StyledParagraph>Java, Flask, Sepia.</StyledParagraph><br/>

                    <StyledSubHeading><strong>Key Features:</strong></StyledSubHeading>
                    <SubList>
                        <SubItem>Designed and implemented game logic and intelligent AI to provide a competitive gameplay
                            experience.
                        </SubItem>
                        <SubItem>Real-time multiplayer gameplay with a turn-based system.</SubItem>
                        <SubItem>Backend implementation using Flask to manage game states and interactions.</SubItem>
                    </SubList>
                    <br/>
                    <hr/>
                </Item>

                {/*-- JS Calc --*/}
                <ListCalculator>
                    <Pane>
                        <StyledSubHeading>JS Calculator</StyledSubHeading>
                        <StyledParagraph>
                            A javascript calculator made locally.
                        </StyledParagraph>

                        <StyledSubHeading><strong>Technologies Used:</strong></StyledSubHeading>
                        <StyledParagraph>HTML, CSS, JS.</StyledParagraph><br/>

                        <StyledSubHeading><strong>Key Features:</strong></StyledSubHeading>
                        <SubList>
                            <SubItem>Accessibility compliant</SubItem>
                            <SubItem>Can do basic arithmetic</SubItem>
                            <SubItem>Negative outputs are red</SubItem>
                        </SubList>
                    </Pane>
                    <Pane>
                        <label htmlFor="val1"> First Number </label><br/><input id="val1" name="val1"/><br/>
                        <label htmlFor="val2"> Second Number </label><br/><input id="val2" name="val2"/><br/>
                        {/*<button onClick="addition()">+</button>*/}
                        {/*<button onClick="subtract()">-</button>*/}
                        {/*<button onClick="multiply()">*</button>*/}
                        {/*<button onClick="divide()">/</button>*/}
                        {/*<button onClick="power()">**</button>*/}
                        {/*<button onClick="reset()">Reset</button>*/}
                        <h3 id="output-val"></h3>
                    </Pane>

                </ListCalculator>

            </List>
        </>
    )
}