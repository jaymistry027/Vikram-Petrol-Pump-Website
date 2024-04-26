import React from 'react';
import Navbar1 from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer.jsx';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../globals.css'
import './privacy.css';


const privacy = () => {
  return (

    <div>
      <Navbar1 />
      <div className='aligner'>
        <div className='title align'>Privacy Policy</div>
        <ul className='alignment'>At Vikram Auto Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your personal data in compliance with applicable Indian data protection laws, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Personal Data Protection Bill, 2019 (once enacted).</ul>
        <ol>
          <li className='alignment'><u><b>Information We Collect:</b> </u><br />We collect the following types of personal information when you use our website:
            <ul>
              <li><b><u>Personal Information:</u></b><br /> This includes your name, email address, phone number, address, and any other information you voluntarily provide to us.</li>
              <li><b><u>Usage Information:</u></b> <br />We may collect information about your interactions with our website, including your IP address, browser type, operating system, pages visited, and other usage data.</li>
              <li><b><u>Sensitive Personal Data:</u></b><br /> We may also collect sensitive personal data or information as defined under Indian law, such as biometric information, passwords, financial information, and health records, with your explicit consent and in accordance with legal requirements.</li>
            </ul>
          </li>

          <li className='alignment'><u><b>Use of Information:</b> </u><br />We use the information we collect for the following purposes:
            <ul>
              <li>To provide and improve our services, including customer support and personalized user experiences.</li>
              <li>To communicate with you about our products, services, promotions, and updates.</li>
              <li>To analyze trends, track user behavior, and improve the performance and functionality of our website.</li>
              <li>To comply with legal obligations and protect our rights and interests.</li>
            </ul>
          </li>

          <li className='alignment'><u><b>Data Security:</b> </u><br />We may share your personal information with the following parties:
            <ul>
              <li><b><u>Service Providers: </u></b><br /> We may share your information with trusted service providers who assist us in operating our website, processing transactions, and delivering services to you. These service providers are obligated to maintain the confidentiality and security of your personal information.</li>
              <li><b><u>Business Partners and Affiliates:</u></b> <br />With your explicit consent, we may share your information with our business partners and affiliates for marketing and promotional purposes.</li>
              <li><b><u>Legal Requirements: </u></b><br />We may disclose your information when required by law or in response to lawful requests from government authorities, courts, or regulatory bodies.</li>
            </ul>
          </li>

          <li className='alignment'><u><b>Data Security:</b> </u><br />
            We implement reasonable security practices and procedures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We regularly review and update our security measures to ensure the integrity and confidentiality of your data.
          </li>

          <li className='alignment'><u><b>Your Rights:</b> </u><br />You have the following rights regarding your personal information:
            <ul>
              <li><b><u>Right to Access:</u></b><br />You have the right to request access to your personal information held by us.</li>
              <li><b><u>Right to Rectification:</u></b> <br />You have the right to request the correction or updating of inaccurate or incomplete personal information.</li>
              <li><b><u>Right to Erasure:</u></b><br />You have the right to request the deletion of your personal information under certain circumstances.</li>
              <li><b><u>Right to Object:</u></b><br />You have the right to object to the processing of your personal information for direct marketing purposes or based on legitimate interests.</li>
              <li><b><u>Right to Data Portability:</u></b><br />You have the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
            </ul>
            To exercise any of these rights or for inquiries regarding your personal information, please contact us using the information provided below.
          </li>

          <li className='alignment'><u><b>Changes to Privacy Policy</b> </u><br />
            We reserve the right to modify or update this Privacy Policy at any time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the revised Privacy Policy on our website.
          </li>

          <li className='alignment'><u><b>Contact Us:</b> </u><br />If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at:+91 82680 07000 or <a href="mailto:vikramautoservices@gmail.com" className="hyperlinks">vikramautoservices@gmail.com</a><br /><br />
            <em>By using Vikram Auto Services website, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy.</em>
          </li>

        </ol>
      </div>
      <Footer />
    </div>

  );
};

export default privacy;
