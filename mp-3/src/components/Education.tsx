import {styled} from 'styled-components';

const EducationList = styled.ul`
    list-style: none;
    padding: 0.88vh 0;
    margin: 0;
    width: 100%;
`;

const EducationItem = styled.li`
    max-width: 100%;
    border-radius: 15px;
    padding: 1vh 1vw;
    margin: 1vh 0.5vw;
`;

const StyledImage = styled.img`
    width: 15vw;
    margin: 0;
`;

const StyledH3 = styled.h3`
    color: #22223b;
    text-decoration: none;
    font-family: "Cochin", Cambria, Georgia, Times, serif;
    font-weight: bold;
    padding: 0.25vh;
`;

const StyledH4 = styled.h4`
    color: #22223b;
    text-decoration: none;
    font-family: "Cochin", Cambria, Georgia, Times, serif;
    font-weight: bold;
    padding: 0.25vh;
`;

const StyledParagraph = styled.p`
    display: flex;
    font-family: "Cochin", Cambria, Georgia, Times, serif;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100%;
    padding: 0.5vh 0 0 1vw;
`;

const InnerList = styled.ul`
    list-style: square;
    padding: 0 0 0 0.5vw;
`;

const InnerListItem = styled.li`
    padding: 0;
    margin: 0;
`;

export default function Education() {
    return (
        <EducationList>
            <EducationItem>
                <StyledH3>College</StyledH3>
                <StyledH4>Boston University | Sept 2021 to Present</StyledH4>
                <StyledImage src="src/boston-university-logo.png" alt="boston university logo" />
                <StyledParagraph>
                    Pursuing a Bachelor of Science in Computer Science.
                    <br />
                    <strong>Key Coursework:</strong> Data Structures and Algorithms, Software Engineering, Web
                    Development, Machine Learning.
                </StyledParagraph>
                <br />
                <StyledH3>
                    <strong>Notable Achievements:</strong>
                </StyledH3>
                <InnerList>
                    <InnerListItem>
                        Developed <strong>PYCO</strong>, a social media platform where users organize clothing, request
                        outfit suggestions, and engage with a fashion-focused community.
                    </InnerListItem>
                    <InnerListItem>
                        Created a collaborative <strong>Notes App</strong> that allows users to share, like, and bookmark
                        study notes, with features for organization and social interaction.
                    </InnerListItem>
                    <InnerListItem>
                        Built a <strong>Battleship Game</strong>, a multiplayer strategic board game implementation, as part
                        of a group project emphasizing problem-solving and game logic.
                    </InnerListItem>
                    <InnerListItem>
                        Active e-board member of the <strong>Circle K International</strong> club focused on volunteering.
                    </InnerListItem>
                </InnerList>
            </EducationItem>

            <EducationItem>
                <StyledH3>High School</StyledH3>
                <StyledH4>East Side High School | Sept 2017 to June 2021</StyledH4>
                <StyledImage src="src/eastside-highschool-logo.png" alt="east side high school logo" />
                <StyledParagraph>
                    High School Diploma with Honors.
                    <br />
                    <strong>Key Coursework:</strong> Advanced Placement Computer Science, Calculus AB/BC, Physics.
                </StyledParagraph>
                <br />
                <StyledH3>
                    <strong>Notable Achievements:</strong>
                </StyledH3>
                <InnerList>
                    <InnerListItem>Graduated in the top 1% of the class.</InnerListItem>
                    <InnerListItem>President of the Student Council.</InnerListItem>
                    <InnerListItem>Participated in Junior Varsity Ice Hockey and Varsity Golf.</InnerListItem>
                </InnerList>
            </EducationItem>
        </EducationList>
    );
}