import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './TermsAndConditions.css'; 
// import 'bootstrap/dist/css/bootstrap.css';
// import '../globals.css'

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading">Vikram Auto Services - Terms and Conditions</h1>
        <br />
        <p className="paragraph">Welcome to Vikram Auto Services! These Terms and Conditions govern your use of our website and services provided through it. By accessing or using our website, you agree to abide by these terms. Please read them carefully before using our services.</p>
        <ol className="list">
          <li className="listItem">Acceptance of Terms: By accessing or using Vikram Auto Services website, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, you may not access the website or use any services.</li>
          <li className="listItem">Use of Services: Our website provides information about fuel station services, products, promotions, and other related content. You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions.</li>
          <li className="listItem">Privacy Policy: Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose information about you.</li>
          <li className="listItem">Intellectual Property: All content on the Vikram Auto Services website, including text, graphics, logos, images, and software, is the property of Vikram Auto Services or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, modify, reproduce, or distribute any content from our website without prior written consent.</li>
          <li className="listItem">User Accounts: Some services on our website may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</li>
          <li className="listItem">Prohibited Activities: You agree not to engage in any of the following prohibited activities:
            <ul>
              <li>Violating any applicable laws or regulations of India.</li>
              <li>Impersonating any person or entity or misrepresenting your affiliation with any person or entity.</li>
              <li>Interfering with or disrupting the operation of our website or servers.</li>
              <li>Uploading or transmitting viruses, malware, or other harmful code.</li>
              <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of our website.</li>
            </ul>
          </li>
          <li className="listItem">Links to Third-Party Websites: Our website may contain links to third-party websites or services that are not owned or controlled by Vikram Auto Services. We are not responsible for the content, privacy policies, or practices of any third-party websites. Your use of third-party websites is at your own risk.</li>
          <li className="listItem">Disclaimer of Warranties: The information and services provided on the Vikram Auto Services website are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, or that any defects will be corrected.</li>
          <li className="listItem">Limitation of Liability: In no event shall Vikram Auto Services, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or services.</li>
          <li className="listItem">Governing Law and Jurisdiction: These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in [Specify the city or jurisdiction].</li>
          <li className="listItem">Changes to Terms and Conditions: We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Your continued use of our website after any changes signifies your acceptance of the revised terms.</li>
        </ol>
        <p className="contactInfo">Contact Us: If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
        <p className="contactInfo">Phone: +91 82680 07000</p>
        <p className="contactInfo">Email: <a href="mailto:vikramautoservices@gmail.com" className="hyperlinks"> vikramautoservices@gmail.com</a></p>
        <p className="acknowledgement">By using Vikram Auto Services website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
