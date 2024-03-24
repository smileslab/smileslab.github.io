import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button
} from '@mui/material';

const ProjectCard = ({
  title,
  description,
  fundingSource,
  links,
}) => {
  return (
    <Card sx={{ marginBottom: 4, width: '100%' }}>
      <CardContent sx={{ px: 2 }}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph sx={{maxWidth: '100%', textAlign: 'justify' }}>
          {description}
        </Typography>
        {fundingSource.length >0? (<Typography variant="body1" sx={{ fontWeight: 'bold', maxWidth: '100%', textAlign: 'justify'}}>
          Funded by: {fundingSource}
        </Typography>):""}
        <br />
        <Stack direction="row" spacing={2}>
          {links.length>0 ? links.map((link) => (
            // <Chip key={link.label} label={link.label} clickable={true} href={link.url} variant="outlined" target="_blank" />
            <Button href={link.url} variant="outlined" target="_blank">{link.label}</Button>            
          )): ""}
        </Stack>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: 'Hemorrhagepredictor: A Multimodal, Neuro-symbolic, and Federated AI-based Tool for Subarachnoid Hemorrhage Prediction',
      description: `Dr. Khalid Malik (Sole PI) was awarded $221,009 by the Michigan Translational Research and Commercialization (MTRAC) Life Sciences to support the work "Hemorrhagepredictor: A Multimodal, Neuro-symbolic, and Federated AI-based Tool for Subarachnoid Hemorrhage Prediction"`,
      fundingSource: 'Michigan Translational Research and Commercialization (MTRAC) Life Sciences',
      links: [
        { label: 'The University Record', url: 'https://record.umich.edu/articles/medc-u-m-award-1-8m-for-biomedical-research-projects/' },
      ],
    },
    {
      title: 'REU Site: Research Experience for Undergraduates in Digital Accessibility',
      description: `Marouane Kessentini, Doughlas Zytko, Khalid Malik (senior personnel) was awarded $429,397.00 by the NSF to support the work "REU Site: Research Experience for Undergraduates in Digital Accessibility""`,
      fundingSource: 'National Science Foundation',
      links: [
        { label: 'NSF Award', url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2349350&HistoricalAwards=false' },
      ],
    },
    {
      title: 'Development of an Explainable and Robust Detector of Forged Multimedia and Cyber Threats using Artificial intelligence.',
      description: `Disinformation has seen a distinctive rise in recent months, fueled by deepfaked multimedia. From political leaders delivering fabricated speeches to manipulated audio and video in scams, deepfakes pose a significant threat. With research over 6 years and nearly $1M in grants, we developed a deepfake detector. The DFD detects audio-visual forgeries, including various types of deepfakes. This NSF-PFI and MTRAC funded project seeks to further improve the Deep Forgery Detector (DFD) technology.`,
      fundingSource: 'National Science Foundation & Michigan Translational Research and Commercialization',
      links: [
        { label: 'NSF Award', url: 'https://nsf.gov/awardsearch/showAward?AWD_ID=1815724&HistoricalAwards=false' },
        { label: 'MTRAC Press Release', url: 'https://www.michiganbusiness.org/press-releases/2021/12/mtrac-innovation-hub-for-advanced-computing-welcomes-third-cohort-of-early-stage-deep-tech-innovation-projects/' },
      ],
    },
    {
      title: 'NeuroAssist.AI:  An Intelligent Secure Decision Support System for Prediction and clinical Management of subarachnoid hemorrhage.',
      description: `Cerebrovascular accident (CVA), or stroke, is the leading cause of disability worldwide and the second leading cause of death. Additionally, stroke is the fifth leading cause of death for all Americans and a leading cause of serious long-term disability. Annually, 15 million people worldwide suffer a stroke, and of these, 5 million die and another 5 million are left permanently disabled. Early diagnosis and improved clinical management of factors such as cerebral aneurysms, AVM, and Cerebral Occlusive Disease, causing stroke is essential if these deaths and disabilities are to be prevented. Without a reliable prediction tool it is difficult to save precious lives and achieve quality of life for patients at risk for SAH. Such a tool would save significant costs by eradicating unnecessary treatment associated with the main surgical procedures for treatment, clipping and coiling. Management of stroke events cannot be left to outdated measures and gut feelings. When it comes to using computers to assist physicians in the mitigation of stroke events, there are a number of factors in the way. Chief among these is the simple fact that no technology exists to assist physicians in complex clinical management of these neurological disorders. There is a need, then, for the development of a decentralized and highly explainable AI-based approach to aid physicians in making well-informed decisions, ultimately reducing fatalities, long-term disabilities, high costs, and alleviating financial and psychological stress for patients.      This project uses following techniques: Multimodal AI on DSA,MRA,CTA image modalities along with clinical text, Federated learning, RAG-based neurosymbolic reasoning, computational fluid dynamics, and multimodal explainable AI, to take in patient data, infuse it with domain knowledge, and arrive at a clinical severity and risk of stroke prediction score with a full and explainable report that can then be used by clinicians to make an informed treatment plan for the patient.`,
      fundingSource: 'Brain Aneurysm Foundation & Michigan Translational Research and Commercialization',
      links: [
        { label: 'BAF Research Grant Recipient', url: 'https://www.bafound.org/blog/meet-research-grant-recipient-khalid-malik-phd/' },
        { label: 'MTRAC Press Release', url: 'https://www.michiganbusiness.org/press-releases/2021/12/mtrac-innovation-hub-for-advanced-computing-welcomes-third-cohort-of-early-stage-deep-tech-innovation-projects/' },

      ],
    },
    {
      title: 'Neuro-Symbolic AI based web filtering',
      description: `Web filtering solutions, a vital component of cybersecurity, block access to malicious websites, prevent malware from infecting our machines, and protect organizations’ sensitive data. TheyIt offer a secure, efficient, and controlled online experience across various sectors, addressing concerns related to security, productivity, and content appropriateness. UM-Flint has partnered with leading Japanese URL Filtering company, Netstar Inc, to develop a machine learning based solution. The team consists of multiple PhD and postdoc students from the Secure Modeling and Intelligent Learning in Engineering System (SMILES) Lab and employees of Netstar.
      Data and knowledge sharing calls for dynamic classification of web contents, particularly at the edges of the Internet. The main purpose of URL classification is to perform dynamic web filtering as the internet moves toward end-to-end encryption. We employ Multimodal and Neurosymbolic AI to classify both encrypted and non-encrypted traffic. The proposed framework ensures efficient categorization of URLs.`,
      fundingSource: 'Netstar Inc.',
      links: [
        { label: 'Netstar Inc.', url: 'https://incompass.netstar-inc.com/' },
      ],
    },
    {
      title: 'Automated Nuero Knowledge Graph Curation',
      description: `Automated curation of a knowledge graph taken from voluminous neurological unstructured data can extract valuable and actionable information. This information, which is machine readable can potentially extract knowledge discovery from clinical data, assisting clinical decision making and allowing for the recommendation of personalized treatment. It may also be used to understand unknown risk factors, the natural history of complex diseases and the effectiveness of different treatments. This project creates a novel framework to organize and integrate the clinical notes into conceptual knowledge graphs by employing semantic and statistical analysis on the clinical data.`,
      fundingSource: '',
      links: [],
    },
    {
      title: 'Automotive Cybersecurity Education',
      description: `Cybersecurity education can be a little dry and theoretical, but it doesn’t have to be that way. Our research group is developing a suite of tools like digital twins and a visual question-answer system to teach complex and interdisciplinary topics in cybersecurity like automotive cybersecurity. Using neurosymbolic logic, AI and the flipped classroom, we’re working to redesign classes from the ground up, starting with a new offering in automotive cybersecurity. The class will feature hands-on exercises on the digital twin of a real car system and will also offer 24/7 assistance with a chatbot based on a large language model like chatGPT.`,
      fundingSource: '',
      links: [],
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* <Typography variant="h4" gutterBottom>
        Research Projects
      </Typography> */}
      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid item key={project.title} xs={12}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
