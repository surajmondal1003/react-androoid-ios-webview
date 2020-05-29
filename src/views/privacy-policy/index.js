import React from 'react';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
function PrivacyPolicy() {
  console.log('rpivaysya');
  return (
    <div>
    <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" color="disabled" aria-label="back" onClick={() => {
            console.log('go back')
            if (window.TestAndroid) {
              window.TestAndroid.goBackToApa(true)
            }
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
              window.webkit.messageHandlers.goBackToApa.postMessage(true);
            }
          }
          }>
            <ArrowBackSharpIcon />
          </IconButton>
      <Typography className="main-header">PRIVACY POLICY</Typography>
          

        </Toolbar>
      </AppBar>
    <div className="terms">
      {/* <h1>Privacy Policy</h1> */}
      <p> NextDoorHub values your faith upon us. That’s why we give our utmost focus on ensuring your safety and security. NextDoorHub uses the highest standards and technology for security of every customer information and transaction details. </p>
      <p> When you use the NextDoorHub website, you are to follow the Terms of Use of NextDoorHub and you are subjected under the Privacy Policy of NextDoorHub. The website domain name www.nextdoorhub.com is owned by Senrysa Technologies Private limited. The mobile application ‘NextDoorHub’ is owned by Senrysa Technologies Private Limited. The website, contents, products, services and tools are guided and governed by the Terms of Use i.e. the Terms and Conditions by Senrysa Technologies Private Limited and this means you are binding obligations with NextDoorHub. </p>
      <p> Our Privacy Policy is subjected to change at any time without any prior notice to the Users and the Sellers. Kindly review this policy frequently to be aware of any changes. </p>
      <p> By using this website you agree to the terms and conditions of the Privacy Policy which is incorporated into the subject of Terms of Use. </p>
      <ul>
        <li><b>Collection of Personal information and Personally Identifiable Information</b>
          <p> We collect and store your personal information that you provide to us. The main motive behind storing your data is to offer you a safe, efficient and convenient user experience. This allows us to provide good services and features that will meet your needs and also to send you updates on any products, services and features. Mainly, we collect identifiable information, such as email address, name, phone number, card details and other payment details etc. We will use your provided phone numbers and email address to update with offers and discounts or any updates. </p>
          <p> Once you provide information, you are not anonymous to us anymore. However, if you wish, you can scroll through the website, mainly on the unrestricted portion, without providing us your personal information. But once you provide your personal information for better services and features, your information provided shall be kept safe with us. We also have the right to track user information based on your website behaviour, solely for research purpose only to understand our users better and to serve them our best. The information may also include the URL that you just came from or the URL you will next go to, along with your IP address. We indicate the fields which are required to be filled to collect certain information. You always have the rights and options to not give or provide any information by choosing not to use any particular feature, service or options on the website.</p>
          <p> We use “cookies” and other data collection devices on certain pages of the website to analyse our web flow, promote trust, safety and security. You always have the right to decline our cookies if your browser permits. </p>
          <p> We have the right to store your information with utmost priority to users’ safety and to collect information of buying behaviour when: </p>
          <p> You purchase products from the website.</p>
          <p> When you involve in transaction (be it any form of transaction available to you) </p>
          <p> When you post messages, comments give reviews and give feedback. This information is kept to review the feedbacks and resolve disputes and also to provide customer support and troubleshoot problems. </p>
          <p> We collect information on your buying behaviour, if you choose to buy on the website. </p>
          <p> We collect additional information, when you choose to transact with us. Your billing address, credit / debit card number, credit / debit card expiration date and other payment details and tracking information from cheque, money orders or other payment options will be gathered by us. You have rights to decline saving your payment detail options and also have the option not to save your payment detail option.</p>
          <p> We will collect information that you provide with us, when you are using out message board, chat rooms, emailing us, subscribing; giving rating, reviews and feedbacks. We collect and retain these information to resolve disputes, figure out troubleshoot problems, and provide customer support as permitted by law. </p>
          <p> We may collect information into a file that’s specific to you, if you send us personal correspondence like emails and letters, or if any other third party or users send us correspondence about your activities or postings on our website. </p>
          <p> We collect personally identifiable information, such as your name, phone number, email address, payment details like credit card / debit card, card expiration date etc. when you set up your account with us. When you will be placing an order or browsing through certain sections of our website, we collect your registration details. We use your contact information to send you any offer details or purchase details. </p>
          <p> We use your personal information to have a smooth operation and help you experience a better functionality from choosing products to delivery and refunding or returning process if required. With the provided information, we also take a feedback of your experiences and try to resolve disputes and we also detect and protect against error, fraud and other criminal activity. </p>
          <p> We do not use your personal information when you check our products on our social media pages and profiles. We do not use your personal information when you are checking our products on any other websites or social media pages and/or profiles. Nextdoorhub is not responsible for your personal information if you are providing your details to any third party websites or other companies which are showing or advertising our products without our consent. </p>
        </li>
        <li><b>Usage of Personal Information / Demographic / Profile Data / Other Information</b>
          <p> We use your information for providing you the service we offer and the service you request which we can offer. We use your personal information, demographic and profile details and other purchase behaviours to market to you our products, services and additional benefits that you are entitled to receive under our Terms and Conditions. You always have the right to opt-out all the services and you can always decline the access of providing the information. We use your personal information that you provide us on the website, mobile application, social media, emails, SMS, phone numbers and other forms of communication platforms, to resolve disputes; solve troubleshoot problems; ensure smooth and secure payment process and transactions, promote and market better services to you, measure and study consumer interests, inform you about offers, discounts, sales, services and other updates; customize your interest and experience; detect the errors, frauds, any criminal activities and protect you and us against the violence, fraudulence and criminal activities; enforce terms and conditions; ensure the terms and conditions and other policies being followed and maintained properly. With your consent, we will have access to your contacts directory, SMS, call history, location and device information, media and galleries, access to your SMS, and we can also request you to provide your PAN and Aadhaar Card details to check your eligibility for certain products and / or services providing by us, our affiliates or lending partners. We may share your information and data with our affiliates and our lending partners for the purposes mentioned above. We collect and identify your IP address and use it to improve or solve any problems with our server and to administer or monitor the Website. We take IP address and information to identify you and to gather the demographic information. We collect your demographic details and profile data to continually improve our products and service offerings. We can collect your information by asking you to complete online surveys. You can be asked for contact information, and demographic information. We use this data to monitor and study your experiences with our website and services so that we can provide you a better service according to your preferences and interest. </p>
        </li>
        <li><b>Cookies</b>
          <p> A “cookie” is a small piece of information that is stored by a web server on a web browser so it can be later read back from that browser. These cookies are useful for enabling the browser to remember information that are specific to a given user. The cookies do not have any of your personal information. The cookies are placed in your computer’s hard drive both temporary and permanent. </p>
        </li>
        <li><b>Sharing of Personal Information</b>
          <p> Your personal information may be disclosed to third parties. This disclosure may be required for us to detect, prevent and investigate fraudulent or illegal activities that is related to our services; to provide you access to services, and to comply with our legal obligations. We do not disclose personal information to any third parties for marketing and advertising without your consent. We may disclose personal information if required to do so by law, to law enforcement offices, third party rights owners, or others when it is reasonably necessary to enforce Terms of Use or Privacy Policy, respond to claims that any advertisement or post or any content violates the rights of the third party. </p>
        </li>
        <li><b>Link to different sites</b>
          <p> Our website links with other websites and that may collect personally identifiable information about the user. NextDoorHub is not responsible for the privacy policies or the content of those linked websites. </p>
        </li>
        <li><b>Opt-out / unsubscribe</b>
          <p> The users can opt-out from receiving promotional advertisements from NextDoorHub on behalf of our partners after registering with us. Users can remove contact information and personal information any time they want, to stop getting notifications. Users can unsubscribe if they wish. </p>
        </li>
        <li><b>Advertisements on www.nextdoorhub.com</b>
          <p> You may often find advertisements on our websites. We use third-party advertising companies to provide us ads and you can often see the ads when you visit our websites. These companies can use your information and / or ask you for providing them information. These companies can also trace details on your visits to our websites and other websites to provide you advertisements, services, features and offers that can be of your interest. NextDoorHub is not responsible if you provide them information on your consent. </p>
        </li>
        <li><b>Your Own Consent</b>
          <p> By visiting our website, our mobile app and our official social media page or by providing your information, you consent to the collection and usage of your information that you disclose on the website in accordance with the Terms and Conditions and Privacy Policy of NextDoorHub. We can change our privacy policy and shall post those changes on this page and so that you must be aware of the changes made, and what information we collect and how we collect it, under what circumstances we disclose it and how we ensure the safety of everyone who visits website and our mobile app. </p>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default PrivacyPolicy;