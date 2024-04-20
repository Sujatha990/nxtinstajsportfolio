import React from 'react'
import MainPage from './_components/MainPage'
import AboutPage from './_components/AboutPage'
import ProjectsPage from './_components/ProjectsPage'
import ContactPage from './_components/ContactPage'


const Home = () => {
  return (
    <div>
      <MainPage/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/>
    </div>
  )
}

export default Home
