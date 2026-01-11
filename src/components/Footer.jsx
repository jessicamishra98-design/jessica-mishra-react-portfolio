import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';     // Wikimedia
import SchoolIcon from '@mui/icons-material/School';        // Google Scholar
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';                  // Twitter / X
import BusinessIcon from '@mui/icons-material/Business';    // AediaX
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from '../styles/Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      className={styles.footer}
      style={{ background: 'rgb(3, 11, 30)' }}
    >
      {/* Top Section */}
      <Box className={styles.topFooter}>

        {/* Navigation */}
        <Box className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Social & Professional Icons */}
        <Box className={styles.socialLinks}>

          <Tooltip title="LinkedIn">
            <Link href="https://www.linkedin.com/in/amresh-bhuyan-aa0442298/" target="_blank" className={styles.socialLink}>
              <LinkedInIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Email">
            <Link href="mailto:jessicamishra98@gmail.com" className={styles.socialLink}>
              <EmailIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Phone / WhatsApp">
            <Link href="tel:+919692724661" className={styles.socialLink}>
              <PhoneIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Instagram">
            <Link href="https://www.instagram.com/jessicamishra/" target="_blank" className={styles.socialLink}>
              <InstagramIcon />
            </Link>
          </Tooltip>

          <Tooltip title="GitHub">
            <Link href="https://github.com/jessicamishra" target="_blank" className={styles.socialLink}>
              <GitHubIcon />
            </Link>
          </Tooltip>

          <Tooltip title="X (Twitter)">
            <Link href="https://x.com/jessicamishra" target="_blank" className={styles.socialLink}>
              <XIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Google Scholar">
            <Link href="https://scholar.google.com/citations?user=vvShiq8AAAAJ&hl=en" target="_blank" className={styles.socialLink}>
              <SchoolIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Wikimedia Profile">
            <Link href="https://commons.wikimedia.org/wiki/User:Jessica Mishra" target="_blank" className={styles.socialLink}>
              <LanguageIcon />
            </Link>
          </Tooltip>

          <Tooltip title="GMU">
            <Link href="https://aediax.com" target="_blank" className={styles.socialLink}>
              <BusinessIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Sambalpur, India">
            <Link href="https://maps.google.com/?q=Sambalpur,India" target="_blank" className={styles.socialLink}>
              <LocationOnIcon />
            </Link>
          </Tooltip>

        </Box>
      </Box>

      {/* Divider */}
      <Box className={styles.divider}></Box>

      {/* Copyright */}
      <Typography variant="body2" className={styles.text}>
        © {currentYear} <strong>Jessica Mishra</strong> · Student and Web intern
      </Typography>
    </Box>
  );
}

export default Footer;
