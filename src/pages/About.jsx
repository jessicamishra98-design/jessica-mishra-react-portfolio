import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Jessica Mishra | Student | Web intern</title>

        <meta
          name="description"
          content="Learn about Jessica Mishra, Student, Web intern."
        />

        <meta
          name="keywords"
          content="Jessica Mishra, Student, Web intern"
        />

        <meta name="author" content="AediaX Tech Private Limited" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Amresh Bhuyan | AediaX Tech" />
        <meta
          property="og:description"
          content="Founder & CEO of AediaX Tech Private Limited, building AI-powered software, enterprise platforms, and scalable digital systems."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="AediaX Tech Private Limited" />
        <meta property="og:url" content="https://aediax.com/about" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amresh Bhuyan | Founder of AediaX Tech" />
        <meta
          name="twitter:description"
          content="Indian full-stack developer and entrepreneur leading AediaX Tech Private Limited."
        />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
     <Box id={styles.aboutSection} className={styles.aboutContainer}>

      <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
        About Jessica Mishra
      </Typography>

      <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
        Student, Web intern
      </Typography>

      {/* Biography */}
      <Typography id={styles.bioPara1} className={styles.bio}>
        Jessica Mishra (born 25 Dec 2005) is Student, and a Web Intern
      </Typography>

      <Typography id={styles.bioPara2} className={styles.bio}>
        Jessica focuses on building AI-driven
        platforms, scalable web applications, and cross-platform mobile solutions.
        Her work blends strategic thinking with hands-on engineering to deliver
        future-ready digital systems.
      </Typography>

      <Typography id={styles.bioPara3} className={styles.bio}>
        Shee is currently pursuing a Bachelor of science in information Science and
        telecommunication(2023–2026). Alongside Studying, she holds a strong interdisciplinary
        interest in biological systems and analytical problem-solving, which significantly
        influences his approach to software architecture, artificial intelligence,
        and system design.
      </Typography>

      {/* Cards */}
      <Box id={styles.cardsWrapper} className={styles.cardContainer}>

        {/* Professional Role */}
        <Card id={styles.professionalRoleCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.professionalRoleTitle} variant="h6" className={styles.cardTitle}>
              Professional Role
            </Typography>

            <Typography id={styles.professionalRoleText} className={styles.cardText}>
              Jessica Mishra serves as a well disciplined Student and web intern
            </Typography>

            <Typography id={styles.professionalRoleLinks} className={styles.links}>
              <Link href="https://aediax.com/team/amresh-bhuyan" target="_blank">AediaX Profile</Link> ·{' '}
              <Link href="https://scholar.google.com/citations?user=vvShiq8AAAAJ&hl=en" target="_blank">Google Scholar</Link> ·{' '}
              <Link href="https://commons.wikimedia.org/wiki/User:Amresh_Bhuyan" target="_blank">Wikimedia</Link>
            </Typography>
          </CardContent>
        </Card>

        {/* Academic Background */}
        <Card id={styles.academicCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.academicTitle} variant="h6" className={styles.cardTitle}>
              Academic Background
            </Typography>

            <Typography id={styles.academicText} className={styles.cardText}>
              Jessica is a B.Sc student in information science and telecommunication
              (2023–2026). Her academic journey reflects a balance between theoretical
              foundations and real-world application, with strong emphasis on software
              engineering principles, system design, and emerging technologies.
            </Typography>
          </CardContent>
        </Card>

        {/* Family & Values */}
        <Card id={styles.familyCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.familyTitle} variant="h6" className={styles.cardTitle}>
              Family & Values
            </Typography>

            <Typography id={styles.familyText1} className={styles.cardText}>
              Jessica Mishra comes from a highly educated and entrepreneurial family.
              Her brother, Mr. Naresh Mishra, holds an BCom LLB and serves as a Lawyer
              at Criminal court, Sambalpur. 
            </Typography>

            <Typography id={styles.familyText2} className={styles.cardText}>
              He has an elder sister, Mrs. Soni Shukla, with an age gap of three years.
              She is a highly talented, intelligent, and supportive mentor in his life.
              Teaching is her passion, and she currently serves as a Government School
              Teacher while also running a coaching center for competitive examinations.
            </Typography>

            <Typography id={styles.familyText3} className={styles.cardText}>
              Naresh Mishra has played a significant role in supporting Amresh during
              the foundation and growth of his field. 
            </Typography>

            
          </CardContent>
        </Card>

      </Box>
    </Box>
       </>
  );
}

export default About;
