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

export const JoiningUs = () => {
    return (<Card sx={{ marginBottom: 4, width: '100%' }}>
        <CardContent sx={{ px: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Applying to the SMILES Ph.D. Program in Multimodal Neuro-Symbolic AI in cybersecurity or Stroke Informatics
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: '100%', textAlign: 'justify' }}>
                I receive many inquiries from prospective Ph.D. students, so I've created this page to
                answer some common questions. Please note that my comments here reflect my
                personal views and not necessarily official department or university policy.
                <ul>
                    <li>I accept a small number of new Ph.D. students each year, so there&#39;s no need to
                        ask about availability. However, I encourage you to carefully consider the
                        following information before applying.</li>
                    <li>My research focuses on <b>multimodal neuro-symbolic AI in cybersecurity and
                        clinical stroke management.</b> Our lab primarily works on <b>multimodal and
                            neurosymbolic AI.</b> For details see lab’s projects</li>
                </ul>
            </Typography>
            <Typography variant="h6" paragraph sx={{ maxWidth: '100%', textAlign: 'justify', fontWeight: "bold" }}>
                Ideal Ph.D. Student Profile
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: '100%', textAlign: 'justify' }}>
                I am always looking for motivated students to join my Ph.D. program. While not all
                requirements, the following qualities are highly valued:
                <ul>
                    <li>Bachelor’s or master’s degree in computer science or electrical engineering</li>
                    <li>Coursework and understanding of:</li>
                    <ul>
                        <li>Signal and image processing.</li>
                        <li>Machine learning and deep learning</li>
                        <li>Natural language processing (NLP) or Computer vision or Cybersecurity
                            depending on project that you chose.</li>
                    </ul>
                    <li>Strong programming skills and experience</li>
                    <li>Solid background in mathematics, probability, and statistics</li>
                    <li>Prior experience in artificial intelligence, human/biological vision, knowledge
                        representation, or neurosymbolic AI</li>
                    <li>Publications or significant research/industry experience in cybersecurity,
                        computer vision/ NLP, or AI (helpful, but not required)</li>
                </ul>
            </Typography>
            <Typography variant="h6" paragraph sx={{ maxWidth: '100%', textAlign: 'justify', fontWeight: "bold" }}>
                Applying to the Program
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: '100%', textAlign: 'justify' }}>
                If your background aligns with the criteria above and active research projects of lab, I
                encourage you to submit the following materials for your application:
                <ul>
                    <li>
                        Resume
                    </li>
                    <li>
                        Statement of research interests
                    </li>
                    <li>
                        Any relevant publications
                    </li>
                </ul>
            </Typography>
            <Typography variant="h6" paragraph sx={{ maxWidth: '100%', textAlign: 'justify', fontWeight: "bold" }}>
                Funding Opportunities
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: '100%', textAlign: 'justify' }}>
                Ph.D. students in the College of Innovation and Technology are typically funded for their
                entire degree program through Graduate Student Research Assistantships (GSRAs)
                or Teaching Assistantships (TAs). These opportunities are generally prioritized for
                outstanding Ph.D. candidates whose research interests closely align with mine from the
                outset.
                Master's students typically do not receive funding through GSRAs or TAs. However,
                there may be occasional openings, though these are not common. Master's student
                funding is generally prioritized for:
                <ul>
                    <li>
                        Individuals already in the U.S.
                    </li>
                    <li>
                        Students who have previously taken one of my courses
                    </li>
                    <li>
                        Students interested in pursuing a master’s thesis aligned with my funded
                        research projects.
                    </li>
                </ul>
                For more information on applying to the Ph.D. program in computing, please refer to the
                official CIT website.
            </Typography>



        </CardContent>
    </Card>)
}