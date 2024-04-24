import React from "react";
import Layout from "./../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/img/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Craft supplies encompass a wide range of materials used for creative endeavors, from simple DIY projects to intricate artwork. These supplies vary depending on the specific craft.Craft supply stores, both physical and online, offer a vast array of these materials to cater to the needs of hobbyists, artists, and DIY enthusiasts. Additionally, many crafters enjoy repurposing common household items or upcycling materials to create unique and sustainable crafts.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;