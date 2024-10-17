import React from 'react'
import MainSec from "@/components/home/contact/mainSec/MainSec";
import ContactUsSection from '@/components/sysContact/ContactUsSection';
import ScrummastersS from '@/components/syllabus/scrummasters/ScrummastersS';

const Scrummastersyllabus = () => {
  return (
    <>
    <MainSec
        url="/assets/sys/scrum.jpg"
        parent="Scrummastersyllabus"
        title="Scrummaster-Syllabus"
      />
      <ScrummastersS />
      <ContactUsSection />
    </>
  )
}

export default Scrummastersyllabus