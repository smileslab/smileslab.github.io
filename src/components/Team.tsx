import React from 'react';
import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import malikHeadshot from "./../images/malik_headshot.jpg";
import ijazHeadshot from "./../images/ijaz_headshot.jpg";
import irfanHeadshot from "./../images/irfan_headshot.jpeg";
import jjHeadshot from "./../images/jj_headshot.jpeg";
import awaisHeadshot from "./../images/awais_headshot.jpg";
import anasHeadshot from "./../images/anas_headshot.png";
import umarHeadshot from "./../images/umar_headshot.jpeg";

import styled from 'styled-components';

const StyledCard = styled(Card)`
  display: flex; /* For grid layout, use display: grid instead */
  flex-direction: column;
  width: 350px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f5f5f5;

  /* Image styles */
  .MuiCardMedia-root {
    display: flex; /* Add flexbox */
    justify-content: center; /* Horizontally center Avatar within CardMedia */
    align-items: center; /* Vertically center Avatar within CardMedia (optional) */

    img {
      margin-bottom: 0px;
      width: 100%;
      height: 200px;
      object-fit: cover; /* Adjust as needed */
      
    }
  }

  /* Text styles */
  .MuiTypography-h5 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .MuiTypography-body2 {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;


const TeamMemberCard = ({ name, imageSrc, bio, profileLink }) => {

    return (
        <StyledCard>
            <CardActionArea href={profileLink} target='_blank'>
                <CardMedia>
                    <Avatar
                        alt="profile pic"
                        src={imageSrc}
                        sx={{ width: 200, height: 200 }}
                    />
                    {/* <img src={imageSrc} alt='profile pic' /> */}
                </CardMedia>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {bio}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </StyledCard>
    );
};

const Team = () => {
    const teamMembers = [
        {
            name: 'Dr. Khalid Mahmood Malik',
            imageSrc: malikHeadshot,
            bio: 'Khalid Mahmood Malik is currently a Professor at Computer Science, University of Michigan-Flint. His research interests include multimedia forensics, development of intelligent decision support systems using analysis of medical imaging and clinical text, secure multicast protocols for intelligent transportation systems, and Automated ontology and knowledge graph generation. His research is supported by the National Science Foundation (NSF) and Brain Aneurysm Foundation.',
            profileLink: "https://scholar.google.ca/citations?user=MZGQT2wAAAAJ&hl=en"
        },
        {
            name: 'Dr. Ijaz Ul Haq',
            imageSrc: ijazHeadshot,
            bio: 'Ijaz Ul Haq received the Ph.D. degree from the Sejong University, Seoul, Korea in 2022. He is currently working as Research Fellow in University of Michigan. His research interests include the multimodal and  neurosymbolic learning for multimedia forensics.',
            profileLink: "https://scholar.google.ca/citations?hl=en&user=TdaSaRgAAAAJ"
        },
        {
            name: 'Awais Khan',
            imageSrc: awaisHeadshot,
            bio: 'Awais Khan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            profileLink: "https://scholar.google.ca/citations?hl=en&user=N3awCpYAAAAJ"
        },
        {
            name: 'Muhammad Irfan',
            imageSrc: irfanHeadshot,
            bio: 'Muhammad Irfan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            profileLink: "https://scholar.google.ca/citations?hl=en&user=MfhBA7EAAAAJ"
        },
        {
            name: 'James Ryan',
            imageSrc: jjHeadshot,
            bio: 'James Ryan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            profileLink: "https://www.linkedin.com/in/jjryan111/"
        },
        {
            name: 'Muhammad Anas Raza',
            imageSrc: anasHeadshot,
            bio: 'Anas fell in love with programming in 6th grade when he learned that my friend could develop the games he played on his PC. He attempted to create a Visual Basic application in high school. He adores reading, writing, thinking about, improving, and understanding programs, especially in Python. At SMILES Lab, He works in using Computer Vision techniques for multimedia forensics personal website: https://anasrz.com',
            profileLink: "https://anasrz.com"
        },
        {
            name: 'Muhammad Umar Farooq',
            imageSrc: umarHeadshot,
            bio: 'Muhammad Umar Farooq is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            profileLink: "https://www.linkedin.com/in/muhammad-umar-farooq-345a7a141/"
        },
    ];

    return (
        <StyledCardContainer>
            {teamMembers.map((member, index) => (
                <TeamMemberCard
                    key={index}
                    name={member.name}
                    imageSrc={member.imageSrc}
                    bio={member.bio}
                    profileLink={member.profileLink}
                />
            ))}
        </StyledCardContainer>
    );
};

export default Team;
