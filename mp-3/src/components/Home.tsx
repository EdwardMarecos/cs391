import styled from 'styled-components';

const Introduction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 23vw;
  margin: 3vh 3vh 0 0;
  border-radius: 15%;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const List = styled.ul`
`;

const ListItem = styled.li`
  margin: 1vh 0;
`;

const GitLink = styled.a`
    font-family: Cochin, Cambria, Georgia, Times, serif;
    font-weight: bold;
    padding: 0.25vh;
    color: #22223b;
`

export default function Home() {
    return (
        <>
            <Introduction>
                <ProfileImage src="./profile-img.jpeg" alt="profile picture" />
                <TextWrapper id="introduction-text">
                    <h3>About Me</h3>
                    <br />
                    <p>
                        Welcome to my website! My name is Edward Marecos, and I am a passionate fourth-year computer science student at Boston University. My academic journey has been centered around programming, software development, and problem-solving, with a keen interest in web development and exploring creative ways to express my ideas through code. Beyond the classroom, I actively engage in personal projects that challenge me to learn and grow, including building web applications, contributing to open-source software, and experimenting with new technologies like artificial intelligence and blockchain.
                    </p>
                </TextWrapper>
            </Introduction>
            <p>
                Here you will find my <em><strong>Educational</strong></em> and <em><strong>Employment</strong></em> history along with other information that may interest you.
                <br />
                Feel free to connect with me to discuss ideas, projects, or potential collaborations!
            </p>
            <h3>In my free time you'll most often find me:</h3>
            <List>
                <ListItem><strong>Bouldering</strong> Catch me on the FitRec climbing wall!</ListItem>
                <ListItem><strong>Snowboarding</strong> Although I would like to try ski one day.</ListItem>
                <ListItem><strong>Exploring New Technologies</strong> Whether it’s a new programming language or the machines at EPIC, I like learning how things work.</ListItem>
                <ListItem><strong>Volunteering</strong> Giving back to the community by mentoring, tutoring, or aid.</ListItem>
            </List>
            <p>Come see what else I'm building on <GitLink href="https://github.com/EdwardMarecos">Github</GitLink></p>
        </>
    );
}
