import React from 'react';
import './faq.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

function Faq() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="faq-section">
    <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" color="disabled" aria-label="back" onClick={() =>{
            if (window.TestAndroid) {
              window.TestAndroid.goBackToApa(true)
            }
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
              window.webkit.messageHandlers.goBackToApa.postMessage(true);
            }
          }}>
            <ArrowBackSharpIcon />
          </IconButton>
      <Typography className="main-header">FAQ</Typography>
        </Toolbar>
      </AppBar>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="expansion-header">I want to partner my restaurant with NDH</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Send an email to <Link href="mailto:mail@senrysa.com">mail@senrysa.com</Link>. We will revert within 24-48 hrs.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="expansion-header">I want to provide feedback</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Send an email to <Link href="mailto:mail@senrysa.com">mail@senrysa.com</Link>. We will revert within 24-48 hrs.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="expansion-header">Can I edit my order?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Your order can be edited in the cart before it reaches the store. Else you could contact store to do so. Once order is placed and store accepts the order, you may not edit the products.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className="expansion-header">I want to cancel my order</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Once the order is placed, you can’t cancel the order.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className="expansion-header">Will NDH be accountable for quality/quantity?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Quantity and quality of the product is the store’s responsibility. However in case of issues with the quality or quantity, kindly submit your feedback at <Link href="mailto:mail@senrysa.com">feedback@nextdoorhub.com</Link> and we will pass it on to the stores.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className="expansion-header">Is there a minimum order value?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            We have no minimum order value and you can order for any amount.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className="expansion-header">Do you charge for delivery?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain stores might have fixed delivery fees. Delivery fee (if any) is specified on the ‘’Checkout” page.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className="expansion-header">How long do you take to deliver?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Standard delivery times vary by the location selected and prevailing conditions. NDH doesn’t hold any responsibility of any delayed delivery.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography className="expansion-header">What are your delivery hours?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Store delivery hours vary for different locations and depends on availability of supply from store.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography className="expansion-header">Can I order from any location?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            We will deliver from any stores listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <Typography className="expansion-header">Is single order from many store possible?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            We currently do not support this functionality. However, you can place orders for individual items from different store.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel12a-content"
          id="panel12a-header"
        >
          <Typography className="expansion-header">Can I change the address / number after order placed?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Any major change in delivery address is not possible after you have placed an order with store. If you have received delivery executive details, you can directly call him.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel13a-content"
          id="panel13a-header"
        >
          <Typography className="expansion-header">Did not receive OTP?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Please retry sending OTP.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel14a-content"
          id="panel14a-header"
        >
          <Typography className="expansion-header">Are there any charges for registration?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            No. Registration on bigbasket.com is absolutely free.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel15a-content"
          id="panel15a-header"
        >
          <Typography className="expansion-header">Do I have to necessarily register to shop on bigbasket?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            You can surf and add products to the cart without registration but only registered customer will be able to checkout and place orders. Registered members have to be logged in at the time of checking out the cart, they will be prompted to do so if they are not logged in.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel16a-content"
          id="panel16a-header"
        >
          <Typography className="expansion-header">Can I add more than one delivery address in an account? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Yes, you can add multiple delivery addresses in your bigbasket account. However, remember that all items placed in a single order can only be delivered to one address. If you want different products delivered to different address you need to place them as separate orders.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel17a-content"
          id="panel17a-header"
        >
          <Typography className="expansion-header">Can I have multiple accounts with same mobile number and email id? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Each email address and phone number can be associated with one NDH account only.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel18a-content"
          id="panel18a-header"
        >
          <Typography className="expansion-header">Can I have different city addresses under one account and still place orders for multiple cities? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            Yes, you can place orders for multiple cities.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
        <ExpansionPanelSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel19a-content"
          id="panel19a-header"
        >
          <Typography className="expansion-header">What is My Account? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="expansion-content">
            My Account is the section you reach after you log in at NDH. My Account allows you to track your active orders, as well as see your order history and update your profile details.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Faq;