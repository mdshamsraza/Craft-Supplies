import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Policy = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/img/privacy.jpeg"
            alt="contactus pic"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5">
          <p className="text-justify mt-2">
          <b>1.</b> Establish your e-commerce Terms of Service early to regulate user behavior, protect content ownership, and mitigate legal risks. While not mandatory, having clear terms can prevent customer disputes and ensure fair usage.

          </p>
          <p className="mt-3">
          <b>2.</b> Ensure compliance with privacy laws like GDPR by creating a privacy policy detailing consent for data processing, protection measures, breach notifications, and cross-border data transfers, especially if targeting EU residents.

          </p>
          <p className="mt-3">
          <b>3.</b> Craft a comprehensive returns and exchanges policy, addressing key questions such as procedures, time frames, conditions, and refund methods, to manage customer expectations and streamline processes.
          </p>
          <p className="mt-3">
          <b>4.</b> Clarify shipping details in your policy, including carrier options, delivery speeds, pricing, handling times, and restrictions, to enhance customer transparency and facilitate informed purchasing decisions.
          </p>
         
        
        </div>
      </div>
    </Layout>
  );
};

export default Policy;