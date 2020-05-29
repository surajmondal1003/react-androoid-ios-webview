import React from 'react';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
function TermsConditions() {
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
      <Typography className="main-header">TERMS & CONDITIONS</Typography>
          

        </Toolbar>
      </AppBar>

    <div className="terms">
      {/* <h1>Terms and Conditions</h1> */}
      <h2>PERSONAL INFORMATION</h2>
      <p>The name “nextdoorhub.com” and www.nextdoorhub.com  with the domain name ‘nextdoorhub.com’ and / or ‘nextdoorhub’ that includes the mobile application, , the website, the mobile site, official social media pages or collectively referred as ‘marketplace’, and / or ‘local marketplace’, and / or ‘platform’ is owned and controlled by Senrysa Technologies Private Limited.</p>
      <p>We strongly recommend you to go through the Terms and Conditions and understand the given Terms of Use (herein after the marketplace) carefully.</p>
      <p>In this Terms and Conditions (herein referred to as “T&C”), wherever the context mentions ‘you’, ‘your’ and / or ‘yours’, it is and it shall relate to any legal person who is registered as any visitor, i.e.  consumer and / or buyer or user and seller or registered seller or vendor with nextdoorhub.com by registering and by providing data asked to be provided on the dashboard. The word ‘user’ here collectively implies a seller, a buyer or any visitor who visits the nextdoorhub.com marketplace platforms: the mobile application, the website or official social media pages. The terms ‘we’, ‘us’, ‘our’, ‘team’ shall refer to nextdoorhub.com and Senrysa Technologies (includes its affiliates and subsidiaries, jointly and severally) and their working staffs.</p>
      <p>All the information accessed, viewed and read by the User is considered confidential and is authorized for personal, business and / or legal purposes only.</p>
      <p>We display and provide content to the user subject to the terms and conditions</p>
      <p>By reading and understanding these ‘Terms and Conditions’ you agree to be bound with an agreement between you and the Company, including its affiliates and subsidiaries, jointly and severally (hereinafter the ‘User Agreement’). If you do not agree with or violate the User Agreement, you should not use or access the platform and / or the nextdoorhub.com marketplace for any purpose.</p>
      <p>The terms and conditions and the user agreement can be updated from time to time and it is the user’s responsibility to check frequently for the updated terms and conditions before accessing the platform and / or the marketplace.</p>
      <h2>ACCEPTANCE OF TERMS</h2>
      <ul className="number">
        <li>Nextdoorhub.com mobile application, website, mobile site, official social media channels and that of Senrysa Technologies (including its affiliates and subsidiaries, jointly and severally) are legally owned by Senrysa Technologies Private Limited. On browsing, referencing, sharing, linking, using or accessing the com mobile application, website, mobile site, official social media channels of both nextdoorhub.com and Senrysa Technologies Pvt. Ltd. The User agrees and understands the Terms and hold the company harmless from claims of any nature that arise from the access, browsing or unsafe of the platforms.</li>
        <li>The Platform(s) takes no responsibility for the Contents of any form that are provided by any third party or vendors.</li>
        <li>The information displayed and provided on the platforms or marketplace includes, but not limited to, the services provided by nextdoorhub.com and the Company it and does not render any certifications, advices, guarantees, and warranties, on the content relating to services which the company makes available on the website.</li>
        <li>Nextdoorhub.com has the right to make modifications, changes on the terms and conditions as may deemed necessary without any prior notification to the user. It is the user’s responsibility to check frequently for the updated terms and conditions before accessing the platform and / or the marketplace.</li>
      </ul>
      <h2>SERVICES OVERVIEW</h2>
      <ul className="alphabet">
        <li>Nextdoorhub.com marketplace is a platform for hyperlocal e-commerce. The mobile application needs to be downloaded and the user shall register and create account in order to access and avail the nextdoorhub.com services.  The domestic users are consumers i.e. the buyers and there are third party sellers. This platforms allows domestic consumers to transact with third party sellers, who have been granted this platform for accessing the marketplace in order to display and offer their respective products for products to the users. The company only provides the marketplace as an online platform to buy, sell and transact at their own cost and risk.</li>
        <li>The online shopping services enable us to buy items from the sellers which are collectively called “Product” or “products” or “item” or “items”. The products are also supervised and functional according to the Purchase Policy, Cancellation Policy, Return and Replacement Policy, FAQ and other terms and conditions available on the application. Moreover, there might be specific Terms of Use for specific products, and if so, it will be displayed along with the product. Nextdoorhub.com does not give warranty that the product description of the product is accurate, reliable or error-free as these information are always provided by the sellers. It assumes no liability in this regard.</li>
        <li>Nextdoorhub.com and the Company is not and shall not be a party to any transaction, communication or disputes between the users or buyers and third party sellers. Nextdoorhub.com and the company does not and shall not have any control, influence, involvement, control or monitoring over the products and / or price transacted and / or purchased by users from third party sellers. The Company and Nextdoorhub.com therefor disclaims all warranties, guarantees and liabilities that are associated with any or all products on the marketplace.</li>
        <li>Services on the nextdoorhub.com marketplace platform are available to select the geographical locations in India and does have restrictions based on the business hours, national holidays and availability of third party sellers.</li>
        <li>The services includes registration process on the platform. Nextdoorhub.com may collect the basic identifiable information about the User that may include first name and last name, email address, alternate email address, contact number, postal code, and demographic profile like age, gender, occupation, location, address etc. The platform can take the information about the pages user is visiting, the products and links those are being clicked, and other browsing information. We collect and store your personal information that you provide to us. The main motive behind storing your data is to offer you a safe, efficient and convenient user experience. This allows us to provide good services and features that will meet your needs and also to send you updates on any products, services and features. Once you provide information, you are not anonymous to us anymore. However, if you wish, you can scroll through the website, mainly on the unrestricted portion, without providing us your personal information. But once you provide your personal information for better services and features, your information provided shall be kept safe with us.</li>
        <li>We also have the right to track user information based on your website behaviour, solely for research purpose which is to understand our users better and to serve them our best. The information may also include the URL that you just came from or the URL you will next go to, along with your IP address. We indicate the fields which are required to be filled to collect certain information. You always have the rights and options to not give or provide any information by choosing not to use any particular feature, service or option on the website.</li>
        <li>We use “cookies” and other data collection devices on certain pages of the website to analyse our web flow, promote trust, safety and security. You always have the right to decline our cookies if your browser permits.</li>
        <li>Nextdoorhub.com has its full rights over its own contents, information, data, terms and conditions, privacy policy and other terms. Nextdoorhub.com at its sole discretion can modify, add, amend, upgrade, omit, extend, withdraw any of the nextdoorhub.com services, information and content from time to time. Nextdoorhub.com does not guarantee any information or services to be made available to you all times. Users of the platform, shall check the marketplace to identify such changes.</li>
        <li>Users hereby agree, understand and acknowledge that nextdoorhub.com is only a marketplace platform which is a facilitator between you and the sellers and nextdoorhub.com only provides you with access to use the platform, to sell and purchase the products provided by sellers and complete the transaction on the platform. Nextdoorhub.com is not a party to any transaction, communication or disputes between the users and sellers. You hereby understand and acknowledge that nextdoorhub.com shall not be liable for any actions, conducts, omissions, inclusions of the sellers (including their services and staffs) and also delivery partners before, during or after the course of providing the services to you.</li>
        <li>It is the responsibility of the sellers to share updated product list along with their respective prices on the platform and has to make sure that it is frequently updated. Nextdoorhub.com is not responsible in any way for inaccurate item and price list.</li>
        <li>The sellers and the buyers shall not initiate any transaction that is illegal, unethical, immoral, unlawful, unsafe, harmful and is in violation of terms and conditions of nextdoorhub.com</li>
        <li>The buyers and sellers should take their own responsibility of receiving and handing over the ordered products. Nextdoorhub.com does not check or verify or take any responsibility of you or the items that are being delivered to you by the delivery partner. </li>
        <li>Nextdoorhub.com and Senrysa Technologies has the right to report you if you are found receiving, delivering or trading any illegal or harmful substance during the delivery or after you have availed the Doorstep delivery or pick-up services through the official platform of nextdoorhub.com</li>
        <li>Nextdoorhub.com has the full rights to terminate your request for any services without giving any reason.</li>
        <li>Nextdoorhub.com is not liable to any code of misconduct, misbehaviour or any harmful or insulting acts between the Buyer and Seller before, during, and after the purchase to delivery procedure where on nextdoorhub.com.</li>
        <li>The sellers shall ensure that the delivery items are packed properly and according to the type of products that needs to be packed and delivered. Nextdoorhub.com shall not be liable to any leakage, spillage or damaged to any item due to packaging and / or while delivery by the delivery partner.</li>
        <li>The Buyers and Sellers must agree to provide as much information as possible on the Platform with respect to the products /services both the parties wish to deliver / purchase/ want to avail, using the nextdoorhub.com marketplace platform.</li>
        <li>Nextdoorhub.com can access your current location if you ‘Allow’ for a better service to you.</li>
        <li>You understand and acknowledge that nextdoorhub.com itself does not engage in any buying and selling of products or items.</li>
        <li>You understand and acknowledge that nextdoorhub.com is not responsible for the quality and quantity delivered. However you can forward your grievances to the seller through the platform.</li>
        <li>Call nextdoorhub.com helpdesk number in case you have any complaints against the services of nextdoorhub.com</li>
      </ul>
      <h2>COMMERCE POLICY</h2>
      <ul className="number">
        <li>You understand that nextdoorhub.com is an online marketplace platform and it facilitates trade between the buyers and sellers. Nextdoorhub.com is not involved in any selling between the two trade parties and not involved in transaction of any party.</li>
        <li>The sellers are solely responsible for the contents that they will provide, i.e. the product listings that includes price, fees, legal disclosures (if any), product description, product availability, content regarding offers, sales promotion  etc.</li>
        <li>Transactions must comply with the nextdoorhub.com terms and policies.</li>
        <li>The sellers are responsible for their transactions and providing and displaying privacy terms, sales terms, or any other terms applicable to deal with the buyers.</li>
        <li>Nextdoorhub.com and Senrysa Technologies Pvt. Ltd. are not responsible for processing, dealing, trading, paying on behalf of, or accomplishing any sales that relates to the transactions.</li>
        <li>With this terms and conditions, you agree, acknowledge and grant nextdoorhub.com a transferable, non-exclusive, sub-licensable, royalty-free global licence to run, distribute, modify, copy, display, translate, host derivative works of any content and information that is provided by the users and sellers, including photos, videos, product listing etc.</li>
        <li>The Sellers are responsible for the promotion and content of the sales (if any), other terms (if any) that the sellers want to apply on the service for the users. Nextdoorhub.com is not responsible for any of the aforementioned regarding sales promotion and content.</li>
        <li>For sales, the sellers are responsible for managing, accomplishing, paying for any sales that result from the product listings provided by the seller.</li>
        <li>The sellers are responsible for collecting, withholding, remitting, determining and reporting all the applicable duties, fees, taxes, additional charges (if any) for the sales relating to transactions for the ordered products via nextdoorhub.com.</li>
        <li>The buyers and sellers hereby agree, understand and acknowledge that the payments and transactions are processed by third-party payment processor, and with whom buyers and sellers are coming under a direct relationship with the payment processor third-party, in accordance with their terms and conditions and policies, and not by nextdoorhub.com.</li>
        <li>Offer for providing sells and / or sales are strictly prohibited for the following:
				<ul className="dot-t">
            <li>No Tobacco products and related paraphernalia:
						<p>- Cigarettes</p>
              <p>- Chewing tobacco</p>
              <p>- Cigars</p>
              <p>- Electronic cigarettes (E-cigarettes)</p>
              <p>- Hookahs</p>
              <p>- Bongs</p>
              <p>- Tobacco pipes and paraphernalia</p>
              <p>- Tobacco devices</p>
              <p>- Rolling papers</p>
              <p>- Nicotine patches</p>
              <p>- Nicotine gums</p>
              <p>✔ Acceptable: Apparel with tobacco brand, logo or image</p>
            </li>
            <li>No Prescription Drugs and Illegal Drugs:
						<p>- Prescription drugs</p>
              <p>- Illegal drugs</p>
              <p>- Marijuana and marijuana products</p>
              <p>- Pipes, bongs, and drug paraphernalia</p>
            </li>
            <li>No alcohol:
						<p>- Legal and illegal alcohols</p>
              <p>- Alcoholic beverages</p>
              <p>- Alcohol making kits</p>
            </li>
            <li>No weapons, explosives, ammunitions:
						<p>- No legal and illegal weapons</p>
              <p>- No explosives and flammable substances</p>
              <p>- Firearms</p>
              <p>- Fireworks</p>
              <p>- Paintball guns</p>
              <p>- BB guns</p>
              <p>- Pepper spray</p>
              <p>- Taesers</p>
              <p>- Gun shows</p>
              <p>- Gun ranges</p>
              <p>- Gun parts</p>
              <p>- Any ammunition and ammunition parts</p>
              <p>- Sharp weapons</p>
              <p>- Explosives</p>
            </li>
            <li>No unsafe supplements:
						<p>- Human growth hormones</p>
              <p>- Hormonal medicines</p>
              <p>- Anabolic steroids</p>
              <p>- Chitosan</p>
              <p>- Comfrey</p>
              <p>- Dehydroepiandrosterone</p>
              <p>- Ephedra</p>
            </li>
            <li>No Animals:
						<p>- No live or dead animals</p>
              <p>- No prohibited animal body parts and fluids</p>
              <p>- Any product or part, including but not limited to leather, skin, hide, fur, wool, or hair from any dogs, cats, and endangered or threatened animals</p>
              <p>✔ Acceptable: Animal toys, animal collars, pet stuffs, pet grooming objects</p>
            </li>
            <li>No body parts and fluids:
						<p>- Hair extensions</p>
              <p>- Teeth</p>
              <p>- Organs</p>
              <p>- Human tissue</p>
              <p>- Urine</p>
              <p>- Blood</p>
              <p>- Body fluids</p>
              <p>- Body parts</p>
            </li>
            <li>No adult products and services:
						<p>- Sex toys</p>
              <p>- Adult entertainment audio, video, images, graphic images, live shows, communication, acts, services</p>
              <p>- Sexual enhancement products</p>
              <p>- Sexually suggestive services</p>
            </li>
            <li>No medical, healthcare and emergency products:
						<p>- Bandages and braces for physical injuries</p>
              <p>- Thermometers</p>
              <p>- Contact lenses</p>
              <p>- Breast pumps</p>
              <p>- First-aid kits</p>
              <p>- Testing kits for medical conditions or diseases</p>
              <p>- Nicotine patches</p>
              <p>- Nicotine gums</p>
              <p>✔ Acceptable: Lifestyle and fitness accessories</p>
            </li>
            <li>Items or products with overly sexualized positioning:
						<p>- Implied nudity</p>
              <p>- Implied sexual acts</p>
              <p>- Sexual images, videos, conversations, audios</p>
            </li>
            <li>No dating or relationship services:
						<p>- Online Dating services</p>
              <p>- Marriage services</p>
              <p>- Divorce services</p>
            </li>
            <li>No Real money gambling services:
						<p>- Gambling</p>
              <p>- Money games</p>
              <p>- Lotteries</p>
              <p>- Online casinos</p>
              <p>- Bingo</p>
              <p>- Poker etc</p>
            </li>
            <li>No products or items that facilitate or encourage unauthorized access to digital media:
						<p>- Sale of streaming devices loaded with software that facilitates unauthorized access to content</p>
              <p>- Jailbroken or loaded devices</p>
              <p>- Jamming or descrambling devices</p>
              <p>- Wiretapping devices</p>
              <p>✔ Acceptable: Add-on equipment for streaming devices such as keyboards and remotes</p>
            </li>
            <li>No digital and subscription services, including links to or processing of any subscription sales, renewals, or upgrades:
						<p>- Downloadable content, downloadable PDFs, downloadable documents of any file formats, music, games, movies, etc.</p>
              <p>- Digital accounts, including games accounts</p>
              <p>- Digital subscriptions and internet streaming services, including TV, Mobile, etc.  Digital coupons</p>
              <p>✔ Acceptable: Authentic audio or video CDs, DVDs, and Blu Ray</p>
              <p>✔ Acceptable: Digital devices, including Smartphones, video game consoles, and TVs</p>
            </li>
            <li>No business models, goods, items, or services that we determine may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups:
						<p>- Multilevel marketing</p>
              <p>- Penny auctions</p>
              <p>- ICOs and binary options</p>
              <p>- Payday loans, paycheck advances, P2P lending, debt collection, and bail bonds</p>
              <p>- Diet, weight loss, or other health related products that imply or attempt to generate negative self-perception</p>
            </li>
            <li>No real, virtual or fake currency:
						<p>- Real money (cash or cash equivalent instruments and coins)</p>
              <p>- Replica or prop money</p>
              <p>- Digital or crypto currency</p>
              <p>- Active bank credit or debit cards</p>
              <p>- Store credit cards or coupons</p>
              <p>- Pre-paid credit or debit cards</p>
              <p>- Checks or cheque books</p>
              <p>- Equipment to create counterfeit currency or financial instruments</p>
            </li>
            <li>No Third-Party Infringement:
						<p>- Counterfeits, knockoffs, or replicas of branded goods, or posts offering goods that are likely to confuse consumers about the source, sponsorship or affiliation of those goods</p>
              <p>- Unauthorized or pirated copies of copyrighted works, such as videos, movies, TV shows and broadcasts, video games, CDs or other musical works, books, etc.</p>
            </li>
          </ul>
        </li>
      </ul>
      <h2>TRANSACTIONS AND COMMUNICATION TERMS</h2>
      <p>Nextdoorhub.com and Senrysa Technologies Private Limited are not responsible for processing, dealing, trading, paying on behalf of, or accomplishing any sales that relates to the transactions. The marketplace platform (nextdoorhub.com) is for independently interacting with one another for communication and transaction. Nextdoorhub.com is not a party to any transaction, communication or disputes between the users and sellers.</p>
      <ul className="number">
        <li>The contractual or commercial terms are offered by the Sellers. The contractual/commercial terms are agreed between you and the users or buyers, the terms which includes price, date, period, transaction and payment terms and methods, warranties, features, services of products after-sales and other services. Nextdoorhub.com is not involved in any terms that’s been offered or accepted in between you or the sellers and users or buyers. Nextdoorhub.com has no control, neither it advices nor it determines in the terms between you and buyers.</li>
        <li>Nextdoorhub.com does not make any warranties nor it make any representations of any products or any services (such as quality or value based warranties or services) on the Platform. Nextdoorhub.com does not support or endorse the sale or purchase of any particular products or services in this Platform, neither explicitly nor implicitly. Nextdoorhub.com does not accept any liability for any faults or errors or omissions of third parties in association to the products and services.</li>
        <li>The payment and transactions must comply with the nextdoorhub.com terms and policies.</li>
        <li>Nextdoorhub.com is not responsible for any breach of any contract between Sellers and buyers. Nextdoorhub.com cannot and does not guarantee that Sellers and buyers concerned will perform transaction(s) concluded on the Platform. Nextdoorhub.com shall not and is not required to mediate or resolve disputes or disagreements between you and buyers.</li>
        <li>For sales, the sellers are responsible for managing, accomplishing, paying for any sales that result from the product listings provided by the seller.</li>
        <li>The sellers are responsible for collecting, withholding, remitting, determining and reporting all the applicable duties, fees, taxes, additional charges (if any) for the sales relating to transactions for the ordered products via nextdoorhub.com.</li>
        <li>The sellers are responsible for their transactions and providing and displaying privacy terms, sales terms, or any other terms applicable to deal with the buyers.</li>
        <li>Nextdoorhub.com and Senrysa Technologies Private Limited are not responsible for processing, dealing, trading, paying on behalf of, or accomplishing any sales that relates to the transactions.</li>
        <li>Sellers are advised to independently verify the bona fides of any buyer or any particular buyer you choose to deal with on the Nextdoorhub.com Platform and use best judgment in that regard as Nextdoorhub.com does not make any representations or warranties regarding item-specifics (such as legal title, creditworthiness, identity, etc.) of any of its users.</li>
        <li>Nextdoorhub.com does not take possession of any of the products or services offered by you, gain title to or have any rights or claims over the products or services offered by you to the buyer, at any point of time during a transaction between you and the buyer.</li>
        <li>Nextdoorhub.com is not responsible for unsatisfactory performances of Sellers or delayed services, damages, or delays as a result of items which are out of stock, unavailable, or back-ordered.</li>
        <li>The Buyers and Sellers hereby agree, understand and acknowledge that nextdoorhub.com only provides a platform for communication and it is agreed that the contract for sale of any products or services shall be a strictly bipartite contract between Sellers and the Buyers.</li>
        <li>The buyers and sellers hereby agree, understand and acknowledge that the payments and transactions are processed by third-party payment processor, and with whom buyers and sellers are coming under a direct relationship with the payment processor third-party, in accordance with their terms and conditions and policies, and not by nextdoorhub.com.</li>
        <li>Sellers agree that they release and indemnify nextdoorhub.com and/or any of its associates, officers and representatives from any cost, damage, liability or other consequence of any of the actions of the users on the Platform and specifically waive any claims that sellers may have on this behalf under any applicable law. Notwithstanding its reasonable efforts on that behalf, nextdoorhub.com cannot control the information provided by other users which is made available on the Platform. Sellers may find other users’ information to be offensive, harmful, inaccurate or deceptive. Please use caution and practice safe trading when using the Platform. Please note that there may be risks in dealing with underage persons or people acting under false pretence.</li>
      </ul>
      <h2>USER INFORMATION</h2>
      <p>With access to the marketplace platform, the buyers, users, and sellers are hereby agreeing to provide the information that are requested by us. You shall remain responsible for maintaining privacy and confidentiality of this information that you are providing. You should agree, understand and acknowledge that certain information will be case sensitive and must be handles with care. Nextdoorhub.com shall have the right to terminate your account or suspend the account or block your account temporarily or permanently if we find you providing information which are inaccurate, inappropriate, not current, incomplete, not in accordance to the information asked for, or not according to the Terms and Conditions.</p>
      <h2>USER ELIGIBILITY</h2>
      <p>Persons eligible to access the website are those who can form legally binding contracts under Indian Contract Act, 1872. Under this contract, persons who are “incompetent to contract” includes minors, un-discharged insolvents etc. A minor below the age of 18 years shall not register as user ofnextdoorhub.com. An 18 year old or below shall not do the transaction on nextdoorhub.com. A minor’s parents or legal guardian can however do the transaction on behalf of him / her. Nextdoorhub.com has the right to deny the access of the mobile application, i.e. the marketplace platform and terminate the registration or membership if it is discovered that the transaction has been done by a minor below the age of 18 years. </p>
      <h2>SELLER ELIGIBILITY</h2>
      <p>We consider registered sellers who are privileged to use nextdoorhub.com marketplace platform to be the persons who can form legally binding contracts under the Indian Contract Act, 1872. Minors, insolvents who are undischarged, and people who are “incompetent to contract” within the Indian Contract Act, 1872 are not eligible for usage and operating the Sellers’ Platform as a registered Seller. If you are aged under the age of 18 years, you shall not register yourself as a Seller on the Sellers’ Platform and shall not involve in transactions. Nextdoorhub.com has the rights to terminate your registration if you are discovered to be aged under the age of 18 years. If your register as a business entity, it means that you are authorised by the business entity and have the authority to bind the business entity to the Terms and Conditions.</p>
      <h2>USER ACCOUNT, PASSWORD AND SECURITY</h2>
      <ul className="alphabet">
        <li>To access nextdoorhub.com services, you need to register and create your ‘Account’ with unique Username / User ID and Password. The mobile application nextdoorhub.com. I.e. the marketplace platform first needs to be downloaded on your phone or tablet in order to avail its services.</li>
        <li>You need to agree, understand and acknowledge that nextdoorhub.com needs your basic information in order to create your account and that you need to provide nextdoorhub.com your genuine information.</li>
        <li>You shall remain responsible for maintaining privacy and confidentiality of this information that you are providing.</li>
        <li>You shall immediately let know nextdoorhub.com if there is any unauthorized access on your account.</li>
        <li>You shall exit from your account at the end of your session with nextdoorhub.com</li>
        <li>Nextdoorhub.com is not liable for your loss or damage of account if the user has failed in keeping account information or has disclosed the username / user ID and password and other data to any other person or body.</li>
      </ul>
      <h2>COMMUNICATION</h2>
      <p>You agree that you are communicating with us when you reply to our communication by providing us replies, answers, data, information or any other detail that we shall ask from you via electronic records and platforms. We can communicate with you via email, message, the marketplace platform itself or any other electronic medium of communication.</p>
      <h2>TERMS OF USAGE OF THE PLATFORM</h2>
      <p>The following pictures, texts, and contents shall be refrained from uploading, displaying, hosting, and updating:</p>
      <ul className="number">
        <li>If the pictures, texts, and contents belong to someone else and you have no right over it.</li>
        <li>If the pictures, texts, and contents are misleading</li>
        <li>If the pictures, texts, and contents are harassing, derogatory, pornographic, paedophilic, sexist, hateful, directly or indirectly relate to anything unlawful in any manner, including Indecent Representation of Women (Prohibition) Act, 1986.</li>
        <li>If it directly or indirectly harasses a person or a community.</li>
        <li>If it promotes or encourages any criminal activities, illegal activities, threatening messages and abusive contents.</li>
        <li>If it involves ‘junk mails’, ‘spamming’, ‘chain letters’, mass mailing etc.</li>
        <li>If it infringes any third party’s rights which includes rights of privacy, rights of publicity, intellectual property rights etc.</li>
        <li>If it contains images of another person(s)</li>
        <li>If it contains hidden pages, hidden images, password-only access pages etc.</li>
        <li>If it contains or promotes any unauthorized copy of other copyrighted work.</li>
        <li>If it refers to any website which to our sole discretion contains inappropriate contents, images and videos.</li>
      </ul>
      <p>User/users may be considered fraudulent due to fraudulent activities if they are found to meet the following scenarios:</p>
      <ul className="dot-t">
        <li>Users don’t produce required adequate documents and information during the verification of payment details.</li>
        <li>Users provide invalid email address and phone number.</li>
        <li>Users provide false email address and phone number.</li>
        <li>Users refuse to pay for any order purchased</li>
        <li>Users are not replying to payment related queries or verification mail that’s been sent by nextdoorhub.com</li>
      </ul>
      <h2>PLATFORM USAGE AND REGULATIONS</h2>
      <p>You agree herein that Nextdoorhub.com merely provides hosting services to its registered users (buyers and sellers) and people browsing or visiting the platform. The items that are advertised or listed along with the contents therein are advertised and listed by the registered Sellers and are third party user generated contents. Nextdoorhub.com shall not bear any responsibility or liability in relation to or arising out of third party generated contents. Nextdoorhub.com is merely an intermediary and does not interfere in the transaction between buyers and sellers. Nextdoorhub.com neither originates nor initiates the transmission, neither selects the sender and receiver of the transmission nor selects or modifies the information contained in the transmission.</p>
      <p>You agree, understand, undertake and confirm that your use of the Platform shall be strictly governed by the following binding principles:</p>
      <ul className="number">
        <li>You shall not host, display, upload, modify, publish, copy, transmit, update or share any information, content, data or image which:
				<ul className="dot-t">
            <li>is grossly harmful, harassing, blasphemous, defamatory, bigotry, obscene, pornographic, paedophilic, libellous, invasive of another’s privacy, hateful, or racially, ethnically objectionable, disparaging, relating to or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever, or unlawfully threatening or harassing, including but not limited to ‘indecent representation of women’ within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986;</li>
            <li>belongs to another person and over which you have no right;</li>
            <li>is false, inaccurate or misleading in any way or in any form;</li>
            <li>harasses, troubles or advocates harassment of another person;</li>
            <li>promotes illegal activity or conduct that is abusive, threatening, obscene, defamatory, or libellous;</li>
            <li>involves the transmission of ‘junk mail’, ‘chain letters’, unsolicited mass mailing, or ‘spamming’;</li>
            <li>infringes upon or violates any third party's rights [including but not limited to intellectual property rights, rights of privacy (including without limitation unauthorized disclosure of a person's name, email address, physical address, or phone number or rights of publicity</li>
            <li>promotes an illegal or unauthorized copy of another person's copyrighted work (see “Copyright complaint" below for instructions on how to lodge a complaint about uploaded copyrighted material) such as providing pirated computer programs or links, information to circumvent manufacturer-installed copy-protect devices, or pirated music or links to pirated music files;</li>
            <li>contains restricted or password-only access pages, hidden pages, hidden links, or images or URLs leading to any other pages (those not linked to or from another accessible page);</li>
            <li>provides material that exploits people in a sexual, obscene, violent or otherwise inappropriate manner or solicits personal information from anyone;</li>
            <li>provides instructional information about illegal activities such as making or buying illegal weapons, violating someone's privacy, providing or creating computer viruses;</li>
            <li>contains unauthorized videos, photographs or images of another person (whether a minor or an adult);</li>
            <li>tries to gain unauthorized access or exceeds the scope of authorized access to the Platform, profiles, blogs, communities, account information, bulletins, friend requests, or other areas of the platform, or solicits passwords or personal identifying information for commercial or unlawful purposes from other users on the Platform;</li>
            <li>Engages in commercial activities and/or sales such as contests, sweepstakes, barter, advertising, pyramid schemes, or the buying or selling of ‘virtual’ items related to the Platform or mobile application or even website or mobile site without our prior written consent.</li>
            <li>solicits gambling or engages in any gambling activity which we, at our sole discretion, believe is or could be construed as being illegal;</li>
            <li>interferes with another’s usage of the Platform;</li>
            <li>refers to any website/URL which, at our sole discretion, contains material that is inappropriate for the Platform or any other website and content that is prohibited or violates the letter and spirit of Terms and Conditions;</li>
            <li>harms minors in any way or in any form;</li>
            <li>infringes any patent, trademark, copyright, proprietary rights, third-party’s trade secrets, rights of publicity, or privacy, is fraudulent, or involves the sale of counterfeit or stolen items;</li>
            <li>violates any law for the time being in force;</li>
            <li>deceives or misleads the addressee/ users about the origin of messages or communicates any information which is grossly offensive or menacing in nature;</li>
            <li>impersonates another person;</li>
            <li>contains software viruses or any other computer codes, files, or programs designed to interrupt, destroy, or limit the functionality of any computer resource; or contains any trojan horses, worms, time bombs, cancelbots, Easter eggs, or other computer programming routines that may damage, detrimentally interfere with, diminish value of, surreptitiously intercept, or expropriate any system, data, or personal information;</li>
            <li>threatens the unity, integrity, defence, security or sovereignty of the nation, friendly relations with foreign states, or public order or causes incitement to the commission of any offence or prevents investigation of any offence or is insulting any other nation;</li>
            <li>shall, directly or indirectly, offer or attempt to offer trade or attempt to trade in any item which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force;</li>
            <li>shall, directly or indirectly, offer or attempt to offer trade or attempt to trade in any item which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force;</li>
            <li>shall create liability for us or cause us to lose (in whole or part) the services of our Internet Service Provider (“ISPs”) or other suppliers.</li>
          </ul>
        </li>
        <li>Users shall not use any ‘deep-link’, ‘page-scrape’, ‘robot’, ‘spider’, automatic device, program, algorithm, methodology, or any similar or equivalent manual process to access, acquire, copy, monitor any portion of the Sellers’ Platform or content or in any way reproduce, or circumvent the navigational structure, presentation of the Sellers’ Platform, or any content to obtain any material, data, documents, or information through any means not purposely made available through the Sellers’ Platform. We reserve our right to bar any such activities.</li>
        <li>Users shall not attempt to gain unauthorized access to any portion or feature of the Sellers’ Platform, other systems, networks connected to the platform, server, computer, network, or the services offered on or through the platform by hacking, password ‘mining’, or any other illegitimate means.</li>
        <li>Users shall not probe, scan or test the vulnerability of the marketplace Platform or any network connected to the Sellers’ Platform or breach the security, authentication measures on the Platform or any network connected to the Platform. You may not reverse look-up, trace or seek to trace information on any other user of or visitor to Sellers’ Platform (including any account on the Platform that is not owned by you) or to its source or exploit the Platform, any service, information made available, or offered by or through the  Platform in any way where the purpose is to reveal any information (including but not limited to personal identification or information other than your own information) provided by the Sellers’ Platform.</li>
        <li>Nextdoorhub.com owns its official LOGO, Tagline, slogans, graphics images and videos that are legally owned by nextdoorhub.com and Senrysa Technologies Private Limited, and hence legal actions can be taken if found any infringement of copyright, trademark, patent of nextdoorhub.com and Senrysa Technologies Private Limited.</li>
        <li>Users shall not make any negative, devaluing or defamatory statement(s)/comment(s) about us, the brand name or domain name used by us, including the terms Nextdoorhub.com, Nextdoorhub, NextDoorHub, Next Door Hub, NDH, Nextdoorhub Marketplace, Nextdoorhub Local Marketplace or otherwise engage in any conduct or action that might tarnish the image or reputation of nextdoorhub.com or sellers on the platform or otherwise dilute any nextdoorhub.com trade mark, service marks, trade name and/or goodwill associated with such trade, service marks or trade name as may be owned or used by us. You agree that you will not take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Platform systems, networks, or any systems or networks connected to nextdoorhub.com</li>
        <li>Users agree not to use any device, software or routine to interfere or attempt to interfere with the proper working of the platform, or any transaction being conducted on the platform or any other person’s use of the marketplace platform.</li>
        <li>Users shall not forge headers or otherwise manipulate identifiers in order to disguise the origin of any message, transmittal you send to us on or through the platform, or any service offered on or through the marketplace platform. Users may not pretend that they represent someone else or impersonate any other individual or entity.</li>
        <li>You may not use the marketplace Platform or any content for any purpose that is unlawful or prohibited by the Terms and Conditions or to solicit the performance of any illegal activity or other activity which infringes the rights of nextdoorhub.com and/or others.</li>
        <li>From time to time users shall be responsible for providing information relating to the items or services proposed to be sold by you. In this connection, you undertake that all such information shall be accurate in all respects.</li>
        <li>Users shall not engage in advertising or solicitation of other sellers on the nextdoorhub.com platform to buy or sell any products or services, including but not limited to products or services related to what is displayed on the Sellers’ Platform. You may not transmit any chain letters or unsolicited commercial or junk email to other users acquired/via any means using the nextdoorhub.com platform. It shall be a violation of the Terms and Conditions to use any information obtained from the Platform in order to harass, abuse, or harm others or contact, advertise and sell to or solicit persons other than those who have chosen to buy from you.</li>
        <li>You understand that we have the right at all times to disclose any information (including the identity of the persons who have provided information or material on the Sellers’ Platform) as necessary to satisfy any law, regulation, or valid governmental request. This may include, without limitation, disclosure of the information in connection with the investigation of an alleged illegal activity or its solicitation and/or response to a lawful court order or subpoena. In addition, we can (and you hereby expressly authorized us to) disclose any information about you to law enforcement or other government officials as we, at our sole discretion, deem necessary or appropriate in connection with the investigation and/or resolution of possible crimes, especially those that may involve personal injury.</li>
        <li>Nextdoorhub.com shall have the right, at its sole discretion, to remove any content that violates or is alleged to violate any applicable law or either the spirit or letter of the Terms and Conditions. Notwithstanding this right, you remain solely responsible for the content of the material you post on the website and your independent communication with the buyers and other sellers, regardless of form. Please be advised that such content posted does not reflect nxtdoorhub.com views. In no event shall nextdoorhub.com assume or have any responsibility or liability for any content posted on the Platform or claims, damages, or losses resulting from its use and/or appearance of it on the Platform. You hereby represent and warrant that you have necessary rights to all the content you provide and all information it contains and that such content shall not infringe any proprietary or other rights of third parties or contain any misleading, libellous, tortious, or otherwise unlawful information.</li>
        <li>Sellers’ correspondence or business dealings with or participation in the promotion of advertisers on or through the nextdoorhub.com platform (including payment and delivery of related products or services, any other terms, conditions, warranties, or representations associated with such dealings) are solely between you and such advertisers. We shall not be responsible or liable for any loss or damage of any sort incurred as a result of such dealings or the presence of such advertisers on the marketplace platform.</li>
        <li>It is possible that other users (including unauthorized persons or ‘hackers’) may post or transmit offensive or obscene material on the Platform and that you may be involuntarily exposed to such material. It is also possible for others to obtain personal information about you due to your use of the Platform and use such information to harass or injure you. We do not approve of such unauthorized uses but by using the Platform, you acknowledge and agree that we are not responsible for the use of any personal information that you publicly disclose or share with others on the Platform. Please carefully select the type of information that you publicly disclose or share with others on the Platform.</li>
        <li>Nextdoorhub.com shall have all the rights to take necessary action and claim damages that may occur due to your involvement/participation in any way on your own or through group(s) of people, intentionally or unintentionally, in denial of service (DoS) / Distributed Denial of Services (DDoS).</li>
      </ul>
      <h2>TRADEMARK AND COPYRIGHT:</h2>
      <p>Nextdoorhub.com owns its official LOGO, Tagline, slogans, graphics images and videos that are legally owned by nextdoorhub.com and Senrysa Technologies Private Limited, and hence legal actions can be taken if found any infringement of copyright, trademark, patent of nextdoorhub.com and Senrysa Technologies Private Limited.</p>
      <p>The items and products sold on nextdoorhub.com including images, graphics, texts, contents, audio clips and video clips are protected by copyrights, trademarks and other intellectual property rights.</p>
      <p>All products are a third party user generated material that are controlled and operated by nextdoorhub.com. You may access and download the product information, services and the contents that are available on the website platform, provided that you will not make any modifications to the content or you must not copy, reproduce, upload or distribute the materials in any way or any means without the consent of the owner, seller and authorities of the website, otherwise it will be considered the violation of copyrights, trademarks and other intellectual property rights. The products and contents available on nextdoorhub.com are solely for your personal and non-commercial use.</p>
      <h2>PRODUCT DESCRIPTION</h2>
      <p>Product description and product related content are provided by sellers. Sellers thereby must agree, understand and acknowledge that they must provide genuine, detailed, appropriate, non-plagiarised, authentic and updated product description, product related content and information of the nextdoorhub.com platform. Nextdoorhub.com does not warrant that product description or other content on the Platform is accurate, complete, reliable, current, or error-free and assumes no liability in this regard.</p>
      <h2>AUDITS</h2>
      <p>Nextdoorhub.com shall have the right to inspect and audit seller’s records and premises / place of business through itself or through Nextdoorhub.com approved third party testing agencies. Cost of such audit shall solely be borne by nextdoorhub.com unless audit reflects discrepancy in seller accounts / non-compliance with seller policies of nextdoorhub.com, in which case cost of audit shall be borne by the seller.</p>
      <h2>BREACH</h2>
      <p>Without limiting other remedies, we may limit user activity, immediately remove your information, warn other users of your actions immediately, temporarily/indefinitely suspend/terminate/block your account and/or refuse you access to the nextdoorhub.com Platform in the event of, including but not limited to, the following: 1. if you breach the Terms and Conditions, privacy policy or other policies (if any); 2. if we are unable to verify or authenticate any information you provide; or 3. if it is believed that your actions may cause legal liability for you, other users, or us; We may at any time, at our sole discretion, reinstate suspended users.</p>
      <p>A user that has been suspended or blocked may not register or attempt to register with us or use the nextdoorhub.com Platform (through itself or any other entity or legal form) in any manner whatsoever until such time that such a seller is reinstated by us. Notwithstanding the foregoing, if you breach the Terms and Conditions or other rules and policies, we reserve the right to recover any amounts due and owed by you to us and take strict legal action, including but not limited to a referral to the appropriate police or other authorities for initiating criminal or other proceedings against you.</p>
      <h2>INDEMNITY</h2>
      <p>You shall indemnify and hold harmless nextdoorhub.com its owner, licensee, affiliates, subsidiaries, group companies (as applicable) and their respective officers, directors, agents, and employees from any claim, demand, or actions including reasonable attorneys' fees made by any third party or penalty imposed due to or arising out of your breach of the Terms and Conditions, privacy policy and other policies or your violation of any law, rules, regulations or the rights (including infringement of intellectual property rights) of a third party.</p>
      <h2>LIMITATION OF LIABILITY</h2>
      <p>In no event shall nextdoorhub.com be liable for any special, incidental, indirect, or consequential damages of any kind in connection with the Terms and Conditions, even if nextdoorhub.com has been informed in advance of the possibility of such damages.</p>
      <p>Nextdoorhub.com shall be in no way, liable for any punitive, incidental, consequential or indirect damages due to:</p>
      <ul className="dot-t">
        <li>Breach of condition, representations of warranties by the manufacturers of the products</li>
        <li>The use of services or products</li>
        <li>The inability to use the services or products</li>
        <li>The unauthorized access to or alteration of the user’s transmissions or data</li>
      </ul>
      <p>Nextdoorhub.com shall not be responsible for unavailability of nextdoorhub.com mobile application, website, mobile site or its official social media pages during any periodic maintenance operations on any unplanned suspension of access to the nextdoorhub.com The Users must agree that any product or data or content downloaded at nextdoorhub.com is done at users’ own discretion and risk and shall be solely responsible for any loss of data or any damage in phone due to download of data or content.</p>
      <h2>TERMINATION:</h2>
      <p>Nextdoorhub.com has the rights to terminate or suspend any service or your overall use of nextdoorhub.com if it believes in its absolute discretion that you have violated, abused, infringed or exploited any terms of Service. The termination or suspension of account and usage of nextdoorhub.com will also be executed if you use any false email address, provide any false information or use the website for any unlawful or fraudulent purpose.</p>
      <p>If you have any queries or need further clarifications in our Terms and Conditions, feel free to mail us at: mail@nextdoorhub.com<br />Call us: 03340548002</p>
    </div>
    </div>
  );
}

export default TermsConditions;