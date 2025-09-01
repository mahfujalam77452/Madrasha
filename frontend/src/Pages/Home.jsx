import React from 'react'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import AboutUs from '../Components/AboutUS/AboutUs'
import OurActivities from '../Components/OurActivities/OurActivities'
import TeacherAnm from '../Components/TeacherAnm/TeacherAnm'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <ImageSlider/>
      <AboutUs/>
      <OurActivities/>
      <TeacherAnm/>
      <Contact/>
      
    </div>
  )
}

export default Home
