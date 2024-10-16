import React from 'react'
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Scrummasters from '@/components/syllabus/scrummasters/Scrummasters';
import ContactUsSection from '@/components/sysContact/ContactUsSection';

const Scrummastersyllabus = () => {
  return (
    <>
    <MainSec
        url="/assets/sys/scrum.jpg"
        parent="Scrummastersyllabus"
        title="Scrummaster-Syllabus"
      />
      <Scrummasters />
      <ContactUsSection />
    </>
  )
}

export default Scrummastersyllabus