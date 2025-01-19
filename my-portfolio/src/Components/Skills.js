import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Grid, 
  styled 
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);
const MotionChip = motion(Chip);

const StyledCard = styled(MotionCard)(({ theme }) => ({
  background: 'rgba(15, 22, 36, 0.95)', // Adjusted for better contrast
  borderRadius: 24,
  height: '100%',
  boxShadow: 'none',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const StyledChip = styled(MotionChip)(({ theme }) => ({
  backgroundColor: '#2D1F3D', // Darker purple background
  color: '#E9D5FF',
  borderRadius: '9999px',
  padding: '4px 12px',
  border: 'none',
  '&:hover': {
    backgroundColor: '#3D2A52',
  },
}));

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0f1d',
      paper: '#0f1624',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#A855F7',
      marginBottom: '2rem',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 600,
      color: '#fff',
      marginBottom: '0.5rem',
    },
    subtitle1: {
      color: '#94A3B8', // Adjusted for better visibility
      fontSize: '0.875rem',
      marginBottom: '1.5rem',
    },
    subtitle2: {
      color: '#A855F7',
      fontSize: '0.875rem',
      marginBottom: '0.75rem',
      fontWeight: 500,
    },
  },
});

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Web Development",
      subtitle: "Frontend & Backend Technologies",
      skills: [
        {
          subCategory: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "React.JS"]
        },
        {
          subCategory: "Backend",
          items: ["Node.JS", "Flask", "MongoDB"]
        }
      ]
    },
    {
      title: "Programming",
      subtitle: "Core Languages",
      skills: [
        {
          subCategory: "Languages",
          items: ["Python", "C++", "C"]
        }
      ]
    },
    {
      title: "Software Tools",
      subtitle: "Design & Development Tools",
      skills: [
        {
          subCategory: "Design",
          items: ["Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "Figma", "Sketch"]
        }
      ]
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          py: 8,
          px: 4,
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #0a0f1d, #0f1624)',
          backgroundAttachment: 'fixed',
        }}
      >
        <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1">
              Skills & Expertise
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledCard
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h2">
                      {category.title}
                    </Typography>
                    
                    <Typography variant="subtitle1">
                      {category.subtitle}
                    </Typography>

                    {category.skills.map((skillGroup, groupIndex) => (
                      <Box key={groupIndex} sx={{ mb: 3 }}>
                        <Typography variant="subtitle2">
                          {skillGroup.subCategory}
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: 1
                        }}>
                          {skillGroup.items.map((skill, skillIndex) => (
                            <StyledChip
                              key={skillIndex}
                              label={skill}
                              component={motion.div}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.2,
                                delay: (index * 0.1) + (skillIndex * 0.05)
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SkillsSection;