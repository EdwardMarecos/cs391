import styled from 'styled-components';

const CertificationList = styled.ul`
    list-style: none;
    padding: 0.88vh 0;
    margin: 0;
    width: 100%;
`;

const CertificationItem = styled.li`
    max-width: 100%;
    border-radius: 15px;
    padding: 1vh 1vw;
    margin: 1vh 0.5vw;
`;

const CertificationImage = styled.img`
    max-height: 10vh;
    margin: 0;
    border-radius: 15%;
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

export default function Certifications() {
    return (
        <CertificationList>
            <CertificationItem>
                <StyledH3>CISSP</StyledH3>
                <StyledH4>Issued: Jan 2025</StyledH4>
                <CertificationImage src="src/cissp-logo.png" alt="cissp logo" />
                <StyledParagraph>
                    Demonstrated expertise in IT security and governance, covering key areas like risk management,
                    access control, and network security.
                    Recognized for advanced skills in developing and managing security programs.
                </StyledParagraph>
            </CertificationItem>

            <CertificationItem>
                <StyledH3>CompTIA</StyledH3>
                <StyledH4>Issued: June 2024</StyledH4>
                <CertificationImage src="src/comptia-logo.png" alt="comptia logo" />
                <StyledParagraph>
                    Earned foundational cybersecurity certification with proficiency in threat analysis, network
                    security, and risk management.
                    Focused on securing hybrid environments, including cloud and mobile platforms.
                </StyledParagraph>
            </CertificationItem>

            <CertificationItem>
                <StyledH3>Amazon Web Services</StyledH3>
                <StyledH4>Issued: Feb 2024</StyledH4>
                <CertificationImage src="src/aws-logo.png" alt="aws logo" />
                <StyledParagraph>
                    Specialized in designing, deploying, and debugging cloud-based applications on AWS. Developed skills
                    in AWS core services such as Lambda, EC2, and S3.
                </StyledParagraph>
            </CertificationItem>

            <CertificationItem>
                <StyledH3>Epic Games Game Design Professional Certificate</StyledH3>
                <StyledH4>Issued: Jan 2024</StyledH4>
                <CertificationImage src="src/epicg-logo.png" alt="epic games logo" />
                <StyledParagraph>
                    Gained expertise in game design and development using Unreal Engine. Covered topics like level
                    design, user interaction, and real-time rendering.
                </StyledParagraph>
            </CertificationItem>

            <CertificationItem>
                <StyledH3>AI+ Cloud &#8482;</StyledH3>
                <StyledH4>Issued: Sept 2023</StyledH4>
                <CertificationImage src="src/ai-cloud-logo.png" alt="ai+ cloud logo" />
                <StyledParagraph>
                    Certification in integrating artificial intelligence with cloud computing solutions. Developed a
                    deep understanding of AI-driven cloud services and machine learning workflows.
                </StyledParagraph>
            </CertificationItem>
        </CertificationList>
    );
}
