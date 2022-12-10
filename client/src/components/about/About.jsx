
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://ctengg.amu.ac.in/web/img/slide2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">BLOG WEBSITE ZHCET</Typography>
                <Text variant="h5">We are students of ZHCET AMU. 
                    {/* I've built websites, desktop applications and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here */}
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                    <br/>
                    <br/>
                    <h1>OUR AIM</h1>
                    <br/>

                    <div>This is blog website created to share your ideas , experiences .</div>
                    <div>To increase motivation for reading and writing.</div>
                    <div>To improve the digital literacy of the students.</div>
                    <div>To interact with teachers and seniors , they can post blogs about their experiences so that we can learn from them ,and can do better in future.</div>
                </Text>
                <br/>
                
            </Wrapper>
        </Box>
    )
}

export default About;