import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Courses from './Courses/Courses'
import Pricing from './Pricing/Pricing'
import BlogSection from './Blog/BlogSection'
// import Testimonies from './Testimonies/Testimonies';
// import CoursesDetails from './CoursesDetails/CoursesDetails'
const HomeLayout = () => {
  return (
    <>
    <Hero />
      <About />
      <Courses />
      <Pricing />
      {/* <CoursesDetails /> */}
      {/* <Testimonies /> */}
      <BlogSection />
    </>
  )
}

export default HomeLayout