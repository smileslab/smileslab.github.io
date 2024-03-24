import React from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Stack,
    Button,
} from '@mui/material';
import publicationsData from "./../data/publications.json";

// import { graphql } from 'gatsby';
// // Import publications data using gatsby-source-filesystem
// import { useStaticQuery } from 'gatsby';

// const publicationsData = useStaticQuery(graphql`
//   query MyPublicationsQuery {
//     allPublicationsJson {
//       nodes {
//         title
//         authors
//         venue
//         ifValue
//         link
//       }
//     }
//   }
// `);


const PublicationCard = ({ title, authors, venue, ifValue, link }) => {
    const details = [
        authors ? authors : '',
        venue ? venue : '',
        ifValue ? `IF: ${ifValue}` : '',
    ];

    // Remove any empty strings (optional)
    const filteredDetails = details.filter(detail => detail.trim());


    return (
        <Card sx={{ marginBottom: 4, width: '100%' }}>
            <CardContent sx={{ px: 2 }}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{maxWidth: '100%'}}>
                {filteredDetails.length > 0
                        ? filteredDetails.join(', ')
                        : ''}
                </Typography>
                <br />
                {link && (
                    <Stack direction="row" spacing={2}>
                        <Button href={link} variant="outlined" target="_blank">
                            Read Paper
                        </Button>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
};


// const publicationsData = [
//     {
//         title: 'A Deep Learning Approach for Image Classification',
//         authors: ['John Doe', 'Jane Doe'],
//         venue: 'International Conference on Machine Learning (ICML)',
//         ifValue: 10.5,
//         link: 'https://arxiv.org/pdf/2302.01234.pdf',
//     },
//     // ... other publications
// ];

const Publications = () => {

    return (
        <Container maxWidth="lg">
            {/* <Typography variant="h4" gutterBottom>
                Publications
            </Typography> */}
            <Grid container spacing={3}>
                {publicationsData.map((publication) => (
                    <Grid item key={publication.title} xs={12}>
                        <PublicationCard {...publication} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}


export default Publications;
