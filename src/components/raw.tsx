import React from 'react';
import styled from 'styled-components';

const ProjectSectionWrapper = styled.section`
  margin-bottom: 40px;
  border: 1px solid #ccc;
  padding: 20px;
`;

const ProjectTitle = styled.h2`
  color: #333;
  text-align: justify;
`;

const ProjectDescription = styled.p`
  color: #555;
  text-align: justify;
`;

const FundingInfo = styled.p`
  color: #777;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  a {
    color: #007acc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectSection = ({ title, description, fundingSource, links }) => (
  <ProjectSectionWrapper>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
    <FundingInfo>
      <strong>Funded by:</strong> {fundingSource}
    </FundingInfo>
    <ProjectLinks>
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      ))}
    </ProjectLinks>
  </ProjectSectionWrapper>
);

const ProjectsPageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;


const Projects = () => {
  return (
        <ProjectsPageWrapper>
            <h1>Research Projects</h1>
          <ProjectSection
        title="Development of an Explainable and Robust Detector of Forged Multimedia and Cyber Threats using Artificial intelligence.  Funded by National Science Foundation & Michigan Translational Research and Commercialization"
        description="Disinformation has seen a distinctive rise in just the last few months, fueled by a new weapon: Deepfaked multimedia. We have been told all of our lives to believe what we see with our own eyes, and for the first time, we can no longer trust them. From political leaders delivering fabricated speeches to the manipulation of audio and video in scams, deepfakes have exceeded the realm of science fiction, becoming an unsettling reality that demands our attention. 
        Fake multimedia is a growing threat on the global stage, and the technology has progressed to a level where detection in some cases is beyond the ability for humans to achieve unassisted. Thus, its potential to foment mistrust in democratic institutions, and to manipulate public opinion and political decisions through social media for malicious purposes, has significantly increased. More disturbingly, fake multimedia, particularly deepfakes, poses a significant threat to the integrity of the judicial system.
        With research over 6 years, backed by nearly $1M in grants from agencies like the National Science Foundation and MTRAC, we have developed a deepfake detector. This NSF partnership for innovation (NSF-PFI) and MTRAC funded project seeks to further improve Deep Forgery Detector (DFD) technology, built on NSF lineage award# 1815724: SaTC: CORE: ForensicExaminer: Testbed for Benchmarking Digital Audio Forensic Algorithms and MTRAC project titled 'Deep Forgery Detector' . The DFD detects audio-visual forgeries, including various types of deepfakes, that are used in the manipulation of digital multimedia. For details see 
        "
        fundingSource="National Science Foundation & Michigan Translational Research and Commercialization"
        links={[
          { label: 'NSF Award', url: 'https://nsf.gov/awardsearch/showAward?AWD_ID=1815724&HistoricalAwards=false' },
          { label: 'MTRAC Press Release', url: 'https://www.michiganbusiness.org/press-releases/2021/12/mtrac-innovation-hub-for-advanced-computing-welcomes-third-cohort-of-early-stage-deep-tech-innovation-projects/' },
        ]}
      />

      <ProjectSection
        title="NeuroAssist.AI:  An Intelligent Secure Decision Support System for Prediction and clinical Management of subarachnoid hemorrhage, Funded by Brain Aneurysm Foundation"
        description="Cerebrovascular accident (CVA), or stroke, is the leading cause of disability worldwide and the second leading cause of death. Additionally, stroke is the fifth leading cause of death for all Americans and a leading cause of serious long-term disability. Annually, 15 million people worldwide suffer a stroke, and of these, 5 million die and another 5 million are left permanently disabled. 
        Early diagnosis and improved clinical management of factors such as cerebral aneurysms, AVM, and Cerebral Occlusive Disease, causing stroke is essential if these deaths and disabilities are to be prevented. Without a reliable prediction tool it is difficult to save precious lives and achieve quality of life for patients at risk for SAH. Such a tool would save significant costs by eradicating unnecessary treatment associated with the main surgical procedures for treatment, clipping and coiling.        
        To understand the complexities of the clinical management of cerebrovascular diseases that cause stroke, let's take the example of intracranial aneurysm. 
        Management of stroke events cannot be left to outdated measures and gut feelings. When it comes to using computers to assist physicians in the mitigation of stroke events, there are a number of factors in the way. Chief among these is the simple fact that no technology exists to assist physicians in complex clinical management of these neurological disorders. There is a need, then, for the development of a decentralized and highly explainable AI-based approach to aid physicians in making well-informed decisions, ultimately reducing fatalities, long-term disabilities, high costs, and alleviating financial and psychological stress for patients.
        This project uses following techniques: Multimodal AI on DSA,MRA,CTA image modalities along with clinical text, Federated learning, RAG-based neurosymbolic reasoning, computational fluid dynamics, and multimodal explainable AI, to take in patient data, infuse it with domain knowledge, and arrive at a clinical severity and risk of stroke prediction score with a full and explainable report that can then be used by clinicians to make an informed treatment plan for the patient. 
        "
        fundingSource="Brain Aneurysm Foundation"
        links={[
          { label: 'BAF Research Grant Recipient', url: 'https://www.bafound.org/blog/meet-research-grant-recipient-khalid-malik-phd/' },
        ]}
      />

      <ProjectSection
        title="Neuro-Symbolic AI based web filtering"
        description="Web filtering solutions, a vital component of cybersecurity, blocks access to malicious websites, prevents malware from infecting our machines, and protects sensitive data from going out of organizations. It offers a secure, efficient, and controlled online experience across various sectors, addressing concerns related to security, productivity, and content appropriateness. UofM Flint has partnered with leading Japanese URL Filtering company, Netstar Inc, to develop machine learning based solution. The team consists of multiple PhD and postdoc students of Secure Modeling and Intelligent Learning in Engineering System (SMILES) Lab and employees of Netstar.
        The growing trends in Internet usage for data and knowledge sharing calls for dynamic classification of web contents, particularly at the edges of the Internet. One of the main purpose of this URL classification is to perform web filtering. We are employing Multimodal AI and Neurosymbolic AI to classify both encrypted and non-encrypted traffic. The proposed framework ensures efficient categorization of URLs (even overlapping categories).
        "
        fundingSource="Netstar Inc."
        links={[
          { label: 'Netstar Inc.', url: 'https://incompass.netstar-inc.com/' },
        ]}
      />

      <ProjectSection
        title="Automated Nuero Knowledge Graph Curation"
        description="The automated curation of knowledge graph from voluminous neurological unstructured data can extract actionable information which is machine readable and can potentially help knowledge discovery from clinical data, assisting clinical decision making and personalized treatment recommendation, to understand about unknown risk factors, natural history of complex diseases and
        effectiveness of different treatments. This project involves a novel framework to organize and integrate the clinical notes into conceptual knowledge graphs by employing semantic and statistical analysis on the clinical data. 
        "
        fundingSource="ABC"
        links={[
          // Add relevant links for this project
        ]}
      />

      <ProjectSection
        title="Automotive Cybersecurity Education"
        description="Cybersecurity education can be a little dry and theoretical, but it doesn’t have to be that way. Our research group is developing various tools such as digital twin and visual question answer system to teach complexity of interdisciplinary subjects such as automotive cybersecurity. In summary, using neurosymbolic logic, AI and the flipped classroom, we’re working to redesign classes from the ground up, starting with a new offering in automotive cybersecurity. The class will feature hands-on exercises on the digital twin of a real car system and will also offer 24/7 assistance with a chatbot based on a large language model like chatGPT. 
        "
        fundingSource="ABC"
        links={[
          // Add relevant links for this project
        ]}
      />

      {/* Add more ProjectSection components for other projects */}

</ProjectsPageWrapper>
  );
};

export default Projects;
