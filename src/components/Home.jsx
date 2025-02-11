import React from 'react';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;