import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"


const industryExamples = [
  {
    slug: "social-media",
    name: "Social Media",
    description: "Social networks, media sharing networks, discussion forums, content curation platforms, blogging and publishing networks",
    exampleCopy: "In order to use a social media app, the company forces you to connect your social networks to your phone number before you are able to use the service; or the choice to sign up using email is made less prominent or hard to find.",
    imageSrc: "/img/examples/social-media/iphone-social.webp",
    cardSrc: "/img/examples/social-media/social-media-card.svg",
    link: "/",
    exampleCallout:"Requires personal data to continue",
  },
  {
    slug: "smart-devices",
    name: "Smart Devices",
    description: "Smart doorbells, speakers, thermostats, medical sensors, connected security systems",
    exampleCopy: "A smart watch asks you, “Do you want to sign up for daily sleep reminders?” and the no option is very small / hidden.",
    imageSrc: "/img/examples/smart-devices/smart-devices.webp",
    cardSrc: "/img/examples/smart-devices/smart-devices-card.svg",
    link: "/",
    exampleCallout:"Hidden ‘NO’",
  },
  {
    slug: "financial-and-insurance",
    name: "Financial & Insurance",
    description: "Credit score apps, auto insurance online quote processes, online tax services",
    exampleCopy: "Essential services collect personal and payment information for a “free trial” and then automatically bill users for a paid service without a reminder that the free trial is ending and payment will begin.",
    imageSrc: "/img/examples/financial/financial.webp",
    cardSrc: "/img/examples/financial/financial-card.svg",
    link: "/",
    exampleCallout:"Auto-bills user without notice",
  },
  {
    slug: "health-and-wellness",
    name: "Health & Wellness",
    description: "Contact tracing, mental health apps, fitness apps and tracking devices",
    exampleCopy: "Companies may share a person’s mental health app data (including details on their anxiety and depression) to research institutions by default — without explicitly asking the user for permission to do so.",
    imageSrc: "/img/examples/health/iphone-health.webp",
    cardSrc: "/img/examples/health/health-card.svg",
    link: "/",
    exampleCallout:"Can be shared without permission",
  },
  {
    slug: "education",
    name: "Education",
    description: "Online learning platforms, children’s games with social media components, videoconferencing systems for educational purposes",
    exampleCopy: "An online social learning platform for kids that shares their personal profile details (including full name, age, and location) to other learners on the platform by default. ",
    imageSrc: "/img/examples/education/education.webp",
    cardSrc: "/img/examples/education/education-card.svg",
    link: "/",
    exampleCallout:"Personal data can be shared with others",
  }
]

const IndustryExamples = () => {

  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center">
            <div className="p-5 pt-0">
              <h2>DARK PATTERNS ARE EVERYWHERE</h2>
              <p>Dark patterns are common in websites and apps we use everyday, but they’re sometimes hard to spot because they’re designed to deceive us. Through secretly obtaining personal information and making us do things we don’t want to do, dark patterns can create inconveniences or even serious harms.</p>

            </div>
          </div>
          <div className="col-12">
            <Tabs>
              <TabList className="d-flex align-items-center justify-content-center mb-5">
                {industryExamples && industryExamples.map((example, index) => {
                  const { slug, name } = example
                  return (
                    <Tab
                      className=" tab-nav-link"
                      tabIndex="0"
                      key={`${slug}_button`}>
                      {name}
                    </Tab>
                  )
                })}
              </TabList>
              {industryExamples && industryExamples.map(example => {
                const { slug, name, description, exampleCopy, imageSrc, link, exampleCallout, cardSrc,  } = example
                return (
                  <TabPanel key={`${slug}_panel`}>
                    <div key={slug} className="row mt-4">
                      <div className="col-12 col-lg-7 ">


                        <div className="home-example-wrapper">

                          <div className="example-interface">
                            {/* <span>Sync your contact listto connect with friends!</span>
                            <span className="example-btn">Start</span> */}
                            <img
                              src={cardSrc}
                              alt=""
                            />
                          </div>
                          <div className="example-callout" id={slug}>
                            <span>{exampleCallout}</span>
                          </div>
                          <div className="example-device">
                            <img
                              src={imageSrc}
                              alt=""
                            />
                          </div>
                        </div>


                      </div>
                      <div className="col-12 col-lg-5  text-center d-flex justify-content-center flex-column ps-lg-5">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-12">
                            <h3>{name}</h3>
                            <p>{description}</p>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12">
                            <h4 className="mt-5 mt-lg-4">Example</h4>
                            <p>{exampleCopy}</p>
                          </div>
                        </div>
                        {/* <h3>{name}</h3>
                        <p>{description}</p>
                        <h3 className="mt-4">Example</h3>
                        <p>{exampleCopy}</p> */}
                      </div>
                    </div>
                  </TabPanel>
                )
              })}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryExamples
