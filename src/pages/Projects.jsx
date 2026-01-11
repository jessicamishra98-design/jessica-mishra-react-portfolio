import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import SecurityIcon from '@mui/icons-material/Security';
import ArticleIcon from '@mui/icons-material/Article';
import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';

import styles from '../styles/Projects.module.css';

const TechStack = ({ tech }) => (
  <Box className={styles.tech}>
    {tech.map((t, i) => (
      <Chip key={i} label={t} size="small" style={{color:'rgb(66, 201, 255)'}} />
    ))}
  </Box>
);

function Projects() {
  const projects = [
    {
      title: "SUIIT Library Management System",
      description: "A centralized academic library platform designed to manage catalogues, users, and institutional workflows.",
      tech: ['React', 'Node', 'Firebase', 'HTML', 'CSS', 'JS'],
      link: "https://library.suiit.ac.in",
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.blue
    },
    {
      title: "NAMAMI INDIA Support Services",
      description: "Corporate digital presence for a hospitality and facility management organization.",
      tech: ['React', 'SEO', 'Sitemap', 'Web'],
      link: "https://namamiindia.co.in",
      icon: <LanguageIcon className={styles.icon} />,
      color: styles.green
    },
    {
      title: "FLAVR APOGI – Enterprise Platforms",
      description: "Multi-platform systems including web, Android, iOS, and internal support portals for enterprise operations.",
      tech: ['Expo', 'React Native', 'TypeScript', 'Firebase', 'Node', 'Express'],
      link: "https://www.flavrapogi.com",
      icon: <AndroidIcon className={styles.icon} />,
      color: styles.purple
    },
    {
      title: "Pragati Security & Intelligence Services",
      description: "Professional corporate website for a licensed security and intelligence services company.",
      tech: ['React', 'Corporate Web', 'SEO'],
      link: "https://pragatisecurity.com",
      icon: <SecurityIcon className={styles.icon} />,
      color: styles.orange
    },
    {
      title: "Signature Verification System",
      description: "AI-driven authentication system focused on identity verification and fraud prevention.",
      tech: ['Python', 'ML', 'TensorFlow', 'React'],
      icon: <StorageIcon className={styles.icon} />,
      color: styles.red
    },
    {
      title: "Research & Publications",
      description: "Author of multiple IEEE and Springer research works on intelligent and secure systems.",
      tech: ['IEEE', 'Springer', 'AI Research'],
      link: "https://link.springer.com/chapter/10.1007/978-3-032-06688-6_17",
      icon: <ArticleIcon className={styles.icon} />,
      color: styles.gray
    },
    {
      title: "Internship & Mentorship",
      description: "Mentoring full-stack developer interns with emphasis on real-world development practices.",
      tech: ['React', 'Node', 'Firebase', 'Git'],
      icon: <GroupIcon className={styles.icon} />,
      color: styles.dark
    }
  ];

  // Create meta description from projects
  const metaDescription = `Professional projects by Amresh Bhuyan including ${projects.slice(0, 3).map(p => p.title).join(', ')} and more. Explore enterprise solutions, AI systems, and research publications.`;

  return (
    <>
      <Helmet>
        <title>Projects by Amresh Bhuyan | Web Development & AI Systems</title>
        <meta 
          name="description" 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content="Amresh Bhuyan projects, web development projects, AI systems, React projects, enterprise solutions, library management system, signature verification, research publications"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amreshbhuyan.com/projects" />
        <meta property="og:title" content="Projects by Amresh Bhuyan | Web Development & AI Systems" />
        <meta 
          property="og:description" 
          content="Explore professional projects including enterprise platforms, AI systems, research publications, and corporate solutions built with modern technologies."
        />
        <meta property="og:image" content="https://amreshbhuyan.com/images/projects-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://amreshbhuyan.com/projects" />
        <meta property="twitter:title" content="Projects by Amresh Bhuyan | Web Development & AI Systems" />
        <meta 
          property="twitter:description" 
          content="Check out my portfolio of enterprise solutions, AI systems, and research publications in web development and artificial intelligence."
        />
        <meta property="twitter:image" content="https://amreshbhuyan.com/images/projects-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://amreshbhuyan.com/projects" />
        
        {/* Additional meta tags */}
        <meta name="author" content="Amresh Bhuyan" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Structured Data for Projects/Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projects Portfolio - Amresh Bhuyan",
            "description": "Collection of professional projects and contributions by Amresh Bhuyan",
            "url": "https://amreshbhuyan.com/projects",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.link || "https://amreshbhuyan.com/projects",
                "keywords": project.tech.join(", "),
                "author": {
                  "@type": "Person",
                  "name": "Amresh Bhuyan"
                }
              }
            }))
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://amreshbhuyan.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://amreshbhuyan.com/projects"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Work & Contributions
        </Typography>

        <Typography className={styles.subtitle}>
          Professional systems, enterprise platforms, and research work
        </Typography>

        <Box className={styles.cards}>
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`${styles.card} ${project.color}`}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <CardContent>
                {project.icon}
                <Typography 
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {project.title}
                </Typography>
                <Typography 
                  className={styles.text}
                  itemProp="description"
                >
                  {project.description}
                </Typography>
                <Box itemProp="keywords" style={{ display: 'none' }}>
                  {project.tech.join(', ')}
                </Box>
                <TechStack tech={project.tech} />
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.title.includes('Library') ? 'Visit Platform' : 
                     project.title.includes('NAMAMI') ? 'Company Website' :
                     project.title.includes('FLAVR') ? 'Explore Platform' :
                     project.title.includes('Pragati') ? 'Visit Website' :
                     project.title.includes('Research') ? 'View Publication' :
                     'View Project'}
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Projects;