import React from 'react'
import MainSec from "@/components/home/contact/mainSec/MainSec";
import Scrummasters from '@/components/syllabus/scrummasters/scrummasters';

const Scrummastersyllabus = () => {
  return (
    <>
    <MainSec
        url="/assets/sys/scrum.jpg"
        parent="Scrummastersyllabus"
        title="Scrummaster-Syllabus"
      />
      <Scrummasters />
    </>
  )
}

export default Scrummastersyllabus