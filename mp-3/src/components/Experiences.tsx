import styled from "styled-components";

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0.88vh 0;
  margin: 0;
  width: 100%;
`;

const ExperienceItem = styled.li`
  max-width: 100%;
  border-radius: 15px;
  padding: 1vh 1vw;
  margin: 1vh 0.5vw;
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

const SubList = styled.ul`
  list-style: square;
  padding: 0 0 0 0.5vw;
`;

const SubListItem = styled.li`
  padding: 0;
  margin: 0;
`;

export default function Experiences() {
    return (
        <ExperienceList>
            <ExperienceItem>
                <StyledH3>Real Time Solutions, Inc. | Mentee</StyledH3>
                <StyledH4>June 2022 - Aug 2022 | Albuquerque, NM</StyledH4>
                <SubList>
                    <SubListItem>
                        Performed Functional Testing on custom applications.
                    </SubListItem>
                    <SubListItem>
                        Attended and observed weekly huddles led by the COO.
                    </SubListItem>
                    <SubListItem>
                        Designed and developed a personal website.
                    </SubListItem>
                    <SubListItem>
                        Developed, coded, and documented a small game using Python.
                    </SubListItem>
                    <SubListItem>
                        Identified pathways for personal growth and development in the Computer Science field.
                    </SubListItem>
                </SubList>
            </ExperienceItem>

            <ExperienceItem>
                <StyledH3>Boston University Hack4Impact | Member</StyledH3>
                <StyledH4>Sept 2022 - Present | Boston, MA</StyledH4>
                <SubList>
                    <SubListItem>
                        Acquired experience in project management, technical development, and impact assessment.
                    </SubListItem>
                    <SubListItem>
                        Expanded technical skills through hands-on experience and exploration of new technologies taught in weekly meetings.
                    </SubListItem>
                </SubList>
            </ExperienceItem>

            <ExperienceItem>
                <StyledH3>Boston University SPARK | Member</StyledH3>
                <StyledH4>Sept 2022 - Present | Boston, MA</StyledH4>
                <SubList>
                    <SubListItem>
                        Actively participated in various hackathons, strengthening teamwork and collaboration skills.
                    </SubListItem>
                    <SubListItem>
                        Expanded knowledge of computer science through diverse topics explored in bi-weekly workshops.
                    </SubListItem>
                    <SubListItem>
                        Gained valuable exposure to the computer science industry beyond the classroom setting.
                    </SubListItem>
                </SubList>
            </ExperienceItem>

            <ExperienceItem>
                <StyledH3>Boston University West Dining Hall | Student Manager</StyledH3>
                <StyledH4>Sept 2023 – May 2024 | Boston, MA</StyledH4>
                <SubList>
                    <SubListItem>
                        Led late-night operations, ensuring a clean, orderly, and welcoming environment for all patrons.
                    </SubListItem>
                    <SubListItem>
                        Managed and supervised a team of student employees, providing training and support to maintain high standards of customer service.
                    </SubListItem>
                    <SubListItem>
                        Ensured strict adherence to health and safety regulations, maintaining a sanitary and safe dining environment.
                    </SubListItem>
                    <SubListItem>
                        Efficiently addressed customer concerns, contributing to a positive dining experience.
                    </SubListItem>
                    <SubListItem>
                        Demonstrated reliability and strong organizational skills, consistently meeting operational goals.
                    </SubListItem>
                </SubList>
            </ExperienceItem>
        </ExperienceList>
    );
}
