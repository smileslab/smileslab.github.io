import React from 'react';
import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { YouTube, WorkHistory } from '@mui/icons-material';
import malikHeadshot from "./../images/malik_headshot.jpeg";
import ijazHeadshot from "./../images/ijaz_headshot.jpg";
import kutubHeadshot from "./../images/kutub_headshot.jpeg";
import irfanHeadshot from "./../images/irfan_headshot.jpeg";
import saadHeadshot from "./../images/saad_headshot.jpg";
import jjHeadshot from "./../images/jj_headshot.jpeg";
import ryanHeadshot from "./../images/ryan_headshot.jpg";
import awaisHeadshot from "./../images/awais_headshot.jpg";
import anasHeadshot from "./../images/anas_headshot.png";
import umarHeadshot from "./../images/umar_headshot.jpeg";
import malikCV from "./../data/CV_Khalid_Malik-March_2024.pdf";

// School, Language

import styled from 'styled-components';

const StyledCard = styled(Card)`
  display: flex; /* For grid layout, use display: grid instead */
  flex-direction: column;
  width: 350px;
  height: 450px;
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


const StyledAvatarContainer = styled.div`
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

`;

const StyledSeparator = styled.div`
  width: 50%;
  height: 1px;
  background-color: #ddd; /* You can replace this with your primary theme color */
  margin: 10px 0;
`;

const TeamMemberCard = ({ name, imageSrc, occupation, researchAreas, links }) => {

    return (
        <StyledCard>
            {/* <CardActionArea href={profileLink} target='_blank'> */}
            <CardMedia>
                <StyledAvatarContainer>
                    <Avatar
                        alt="profile pic"
                        src={imageSrc}
                        sx={{ width: 200, height: 200 }}
                    />
                </StyledAvatarContainer>
                {/* <img src={imageSrc} alt='profile pic' /> */}
            </CardMedia>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2">
                    {occupation}
                </Typography>
                <StyledSeparator />
                <Typography variant="body2">
                    Research Areas:
                </Typography>
                <Typography variant="body2">
                    {researchAreas}
                </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'left', marginTop: 'auto', paddingLeft: '10px' }}>
                {/* LinkedIn Button */}
                {links.linkedinLink && <IconButton color='primary' href={links.linkedinLink} target="_blank" style={{ marginRight: '10px' }}>
                    <LinkedInIcon />
                </IconButton>}
                {/* Google Scholar Button */}
                {links.scholarLink && <IconButton color='primary' href={links.scholarLink} target="_blank" style={{ marginRight: '10px' }}>
                    <SchoolIcon />
                </IconButton>}
                {/* Personal Website Button */}
                {links.websiteLink && <IconButton color='primary' href={links.websiteLink} target="_blank" style={{ marginRight: '10px' }}>
                    <PublicIcon />
                </IconButton>}
                {links.youtubeLink && <IconButton color='primary' href={links.youtubeLink} target="_blank" style={{ marginRight: '10px' }}>
                    <YouTube />
                </IconButton>}
                {links.cvLink && <IconButton color='primary' href={links.cvLink} target="_blank" style={{ marginRight: '10px' }}>
                    <WorkHistory />
                </IconButton>}
            </div>
            {/* </CardActionArea> */}

        </StyledCard>
    );
};

const Team = () => {
    const teamMembers = [
        {
            name: 'Dr. Khalid Mahmood Malik',
            imageSrc: malikHeadshot,
            occupation: 'Director of Cyber Security and Professor, CS, UM-Flint',//'Khalid Mahmood Malik is currently a Professor at Computer Science, University of Michigan-Flint. His research interests include multimedia forensics, development of intelligent decision support systems using analysis of medical imaging and clinical text, secure multicast protocols for intelligent transportation systems, and Automated ontology and knowledge graph generation. His research is supported by the National Science Foundation (NSF) and Brain Aneurysm Foundation.',
            researchAreas: "Cybersecurity, Deep Fake Detection, Neuro-symbolic AI, Neurological disorders.",
            links: { linkedinLink: "https://www.linkedin.com/in/khalid-malik-8495195", scholarLink: "https://scholar.google.ca/citations?user=MZGQT2wAAAAJ&hl=en", youtubeLink: "https://www.youtube.com/watch?v=j0xpudgyW2I", cvLink:malikCV }
        },
        {
            name: 'Dr. Ijaz Ul Haq',
            imageSrc: ijazHeadshot,
            occupation: 'Senior Fellow, Cyber Security, CS, UM-Flint',//'Ijaz Ul Haq received the Ph.D. degree from the Sejong University, Seoul, Korea in 2022. He is currently working as Research Fellow in University of Michigan. His research interests include the multimodal and  neurosymbolic learning for multimedia forensics.',
            researchAreas: "Video Summarization, Multimedia Forensics, DeepFake.",
            links: { linkedinLink: "https://www.linkedin.com/in/ijaz-ul-haq-48a294167", scholarLink: "https://scholar.google.ca/citations?hl=en&user=TdaSaRgAAAAJ", youtubeLink:"" }
        },
        {
            name: 'Dr. Kutub Uddin',
            imageSrc: kutubHeadshot,
            occupation: 'Senior Fellow, Cyber Security, CS, UM-Flint',//'Ijaz Ul Haq received the Ph.D. degree from the Sejong University, Seoul, Korea in 2022. He is currently working as Research Fellow in University of Michigan. His research interests include the multimodal and  neurosymbolic learning for multimedia forensics.',
            researchAreas: "Image/video compression, image processing, machine learning, image/video forensics, and 3D point cloud processing.",
            links: { linkedinLink: "https://www.linkedin.com/in/kutub-uddin-227a51183/?trk=opento_sprofile_topcard", scholarLink: "https://scholar.google.com/citations?user=OX2Bzg0AAAAJ&hl=en&authuser=1", youtubeLink:"" }
        },
        {
            name: 'Awais Khan',
            imageSrc: awaisHeadshot,
            occupation: "PhD Student, CS, UM-Flint", //'Awais Khan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            researchAreas: "Multimedia Forensics, DeepFake, Audio Spoofing.",
            links: { linkedinLink: "https://www.linkedin.com/in/awais-khan-01620a14a", scholarLink: "https://scholar.google.ca/citations?hl=en&user=N3awCpYAAAAJ", youtubeLink:""  }
        },
        {
            name: 'Muhammad Irfan',
            imageSrc: irfanHeadshot,
            occupation: "PhD Student, CSI, Oakland University", //'Muhammad Irfan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            researchAreas: "Computer Vision, Machine Learning, Medical Image Analysis, Autonomous Driving.",
            links: { linkedinLink: "https://www.linkedin.com/in/muhammad-irfan-1b0a4014a", scholarLink: "https://scholar.google.ca/citations?hl=en&user=MfhBA7EAAAAJ", youtubeLink:""  }
        },
        {
            name: 'Muhammad Saad Saeed',
            imageSrc: saadHeadshot,
            occupation: "PhD Student, CS, UM-Flint", //'Muhammad Irfan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            researchAreas: "Computer Vision, Multimodal Learning - Deep Fake Detection, Autonomous Driving, Web Content Filtering.",
            links: { linkedinLink: "https://www.linkedin.com/in/msaadsaeed58/", scholarLink: "https://scholar.google.com/citations?user=uyhEJ5IAAAAJ&hl=en", youtubeLink:""  }
        },
        {
            name: 'James Ryan',
            imageSrc: jjHeadshot,
            occupation: "PhD Student, CS, UM-Flint", //'James Ryan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            researchAreas: "Cyber Security, Autonomous Driving.",
            links: { linkedinLink: "https://www.linkedin.com/in/jjryan111/", scholarLink: "", youtubeLink:""  }
        },
        {
            name: 'Ryan Raymond',
            imageSrc: ryanHeadshot,
            occupation: "MS Student, CS, UM-Flint", //'James Ryan is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            researchAreas: "Cybersecurity, Networking, Industrial automation, Penetration-testing.",
            links: { linkedinLink: "", scholarLink: "", youtubeLink:"", websiteLink: "https://auxmonster.github.io/"  }
        },
        {
            name: 'Muhammad Umar Farooq',
            imageSrc: umarHeadshot,
            occupation: "PhD Student, CS, UM-Flint", //'Muhammad Umar Farooq is currently pursuing a Doctor of Philosophy in Computer Science at the School of Engineering and Computer Science, Oakland University, Rochester, Michigan, USA. His research interests revolve around the captivating realm of speech processing, with a particular emphasis on topics like Deepfake Detection, Automatic Speaker Verification, and Anti-Spoofing. He aims to enhance security and combat emerging threats within voice-based technologies.',
            researchAreas: "Computer Vision, Multimedia Forensics, DeepFake.",
            links: { linkedinLink: "https://www.linkedin.com/in/muhammad-umar-farooq-345a7a141/", scholarLink: "", websiteLink: "https://stackoverflow.com/users/7344164/devloverumar", youtubeLink:""  }
        },
    ];

    return (
        <StyledCardContainer>
            {teamMembers.map((member, index) => (
                <TeamMemberCard
                    key={index}
                    name={member.name}
                    imageSrc={member.imageSrc}
                    occupation={member.occupation}
                    researchAreas={member.researchAreas}
                    links={member.links}
                />
            ))}
        </StyledCardContainer>
    );
};

export default Team;
