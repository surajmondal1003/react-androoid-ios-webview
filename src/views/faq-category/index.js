import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import headerHelpImg from '../../assets/img/question.svg';
import registrationIcon from '../../assets/img/registration.svg';
import accountIcon from '../../assets/img/account.svg';
import paymentIcon from '../../assets/img/payment.svg';
import deliveryIcon from '../../assets/img/delivery_faq.svg';
import orderIcon from '../../assets/img/order_faq.svg';
import customerIcon from '../../assets/img/customer.svg';
import returnIcon from '../../assets/img/return.svg';
import othersIcon from '../../assets/img/others.svg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function FaqCategory() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [openRegister, setOpenRegister] = React.useState(false);
  const RegisterClickOpen = () => {
    setOpenRegister(true);
  };
  const RegisterClose = () => {
    setOpenRegister(false);
  };

  const [openAccount, setOpenAccount] = React.useState(false);
  const AccountClickOpen = () => {
    setOpenAccount(true);
  };
  const AccountClose = () => {
    setOpenAccount(false);
  };

  const [openPayment, setOpenPayment] = React.useState(false);
  const PaymentClickOpen = () => {
    setOpenPayment(true);
  };
  const PaymentClose = () => {
    setOpenPayment(false);
  };

  const [openDelivery, setOpenDelivery] = React.useState(false);
  const DeliveryClickOpen = () => {
    setOpenDelivery(true);
  };
  const DeliveryClose = () => {
    setOpenDelivery(false);
  };

  const [openOrder, setOpenOrder] = React.useState(false);
  const OrderClickOpen = () => {
    setOpenOrder(true);
  };
  const OrderClose = () => {
    setOpenOrder(false);
  };

  const [openCustomer, setOpenCustomer] = React.useState(false);
  const CustomerClickOpen = () => {
    setOpenCustomer(true);
  };
  const CustomerClose = () => {
    setOpenCustomer(false);
  };

  const [openReturn, setOpenReturn] = React.useState(false);
  const ReturnClickOpen = () => {
    setOpenReturn(true);
  };
  const ReturnClose = () => {
    setOpenReturn(false);
  };

  const [openOthers, setOpenOthers] = React.useState(false);
  const OthersClickOpen = () => {
    setOpenOthers(true);
  };
  const OthersClose = () => {
    setOpenOthers(false);
  };
  return (
    <div className="faq-category">
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
      <Typography className="main-header">FAQ</Typography>
          

        </Toolbar>
      </AppBar>

      <div className="faq-category-header">
        <div className="header-text">
          <h3>New to NDH?<br />Let us help you</h3>
        </div>
        <div className="header-img">
          <img src={headerHelpImg} />
        </div>
      </div>
      <List className="faq-list">
        <ListItem onClick={RegisterClickOpen}>
          <ListItemAvatar>
            <img src={registrationIcon} />
          </ListItemAvatar>
          <ListItemText primary="Registration" secondary="Registration, User and More" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={AccountClickOpen}>
          <ListItemAvatar>
            <img src={accountIcon} />
          </ListItemAvatar>
          <ListItemText primary="Account Related" secondary="Login, Password and More" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={PaymentClickOpen}>
          <ListItemAvatar>
            <img src={paymentIcon} />
          </ListItemAvatar>
          <ListItemText primary="Payment" secondary="Mode of payment, coupon code and More" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={DeliveryClickOpen}>
          <ListItemAvatar>
            <img src={deliveryIcon} />
          </ListItemAvatar>
          <ListItemText primary="Delivery Related" secondary="Order, Packaging and More" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={OrderClickOpen}>
          <ListItemAvatar>
            <img src={orderIcon} />
          </ListItemAvatar>
          <ListItemText primary="Order Related" secondary="Timing, Orders and More" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={CustomerClickOpen}>
          <ListItemAvatar>
            <img src={customerIcon} />
          </ListItemAvatar>
          <ListItemText primary="Customer Related" secondary="Customer service, feedback and more" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={ReturnClickOpen}>
          <ListItemAvatar>
            <img src={returnIcon} />
          </ListItemAvatar>
          <ListItemText primary="Return & Refund" secondary="Return rule, Refund Policy and more" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={OthersClickOpen}>
          <ListItemAvatar>
            <img src={othersIcon} />
          </ListItemAvatar>
          <ListItemText primary="Others" secondary="Other FAQ and more" />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <ArrowForwardIosIcon fontSize="small" color="disabled" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Dialog fullScreen open={openRegister} onClose={RegisterClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Registration
            </Typography>
            <span color="inherit" onClick={RegisterClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">Who can register in nextdoorhub.com?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Anyone can register in nextdoorhub.com. However, if the user is below 18 years of age shall register under the supervision of his/her/their guardian. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">Why is mobile number necessary for registration?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Your mobile number is important for efficient communication with customer service, sellers, and delivery person. Your mobile number is also important to update you with billing, transaction, order and many such important details from time to time. It is also required to inform you any upcoming or ongoing promotional or sales activity.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">What else you can register with?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You can register with your Facebook and Google account. However, the Facebook and / or Google account must be genuine and updated.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="expansion-header">I did not get any OTP. What shall I do?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                If you did not receive any OTP, wait for few more seconds. If you still did not receive any OTP, kindly retry sending OTP.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography className="expansion-header">Can I have multiple registration?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You can only register one account number with one mobile number. You cannot make multiple registration with one mobile number.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography className="expansion-header">Are there any charges for registration?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                No. There are no charges for registration. The registration is absolutely free.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
      <Dialog fullScreen open={openAccount} onClose={AccountClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Account Related
            </Typography>
            <span color="inherit" onClick={AccountClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">What is My Account?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                My Account – feature gives a quick access to manage your personal information, mobile number, email ID, set password, upload your profile picture and so on. You can also edit your information. My Account is only accessible for registered users once the user has signed in.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">I am unable to Log In / Sign Up</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Retry with proper User ID and password or Login with OTP. If the account is inactive for more than six months, your account could be blocked for security reasons. Kindly contact the customer service team for further assistance.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">How can I reset my password?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Go to your account. There is Set Password option with a forward arrow button. Click that ( > ) button and you will get to set password.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="expansion-header">I forgot my password, what shall I do?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Try login with OTP option. Upon login change the password.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography className="expansion-header">I have changed my number, what shall I do?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                If you have changed your number, you need to create a new account to use Nextdoorhub.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography className="expansion-header">How can I update my personal details?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Sign in to your account. Go to your account and edit the personal information that you want to update.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography className="expansion-header">How can I update my email ID?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Sign in to your account. Go to your account and edit the email ID with the new email ID that you want to update.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography className="expansion-header">How can I update my email ID?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Sign in to your account. Go to your account and edit the email ID with the new email ID that you want to update.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9a-content"
              id="panel9a-header"
            >
              <Typography className="expansion-header">I want to update my delivery address:</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Go to Home. On the top your current location is showing. Click the drop down arrow beside it.<br/>You have three options:
              </Typography>
              <ul>
                <li>Get Current Location</li>
                <li>Go To Map</li>
                <li>ADD NEW ADDRESS</li>
              </ul>
              <Typography className="expansion-content">
                If you want to Add New Address, click on ADD NEW ADDRESS. You will get ‘Enter a location’, where you type in your location.  Then you fill up your full name, mobile number, landmark, and zipcode. Then save your new location as HOME / OFFICE / HOTEL / OTHERS. Then click on save address.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10a-content"
              id="panel10a-header"
            >
              <Typography className="expansion-header">Can I add more than one delivery address in an account?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Yes, you can add multiple delivery addresses in your account. Single order can only be delivered to one address. If you want to order on different address, then you have to place them as separate orders.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11a-content"
              id="panel11a-header"
            >
              <Typography className="expansion-header">Can I have addresses of different cities or locations and place multiple orders for multiple locations?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Yes, you can have different addresses for different cities or locations. You can also place orders for multiple cities or locations. You can also have multiple addresses in one city or location
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
      <Dialog fullScreen open={openPayment} onClose={PaymentClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Payment
            </Typography>
            <span color="inherit" onClick={PaymentClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">How can I pay for my orders in nextdoorhub.com?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Nextdoorhub.com accepts options, such as:
              </Typography>
              <ul>
                <li>Pay On Delivery (POD) </li>
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">Are there any hidden charges?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                No, there are no hidden charges. The prices shown on the product description are final. While purchasing, the price shown on the confirmation page is the amount that you need to pay.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">When shall I get my cashback?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                If your transaction is eligible for cashback, then you will receive it within 6 to 12 hours of delivery, in your Nextdoorhub wallet.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="expansion-header">My payment amount has been debited multiple times</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                We are extremely sorry for this inconvenience. Kindly contact the customer service team. We shall resolve the issue at earliest. The extra amount debited will be credited to your original mode of payment.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography className="expansion-header">How can I review my receipt?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                One receipt will be handover to the delivery person if you choose home delivery. If you have chosen pick-up from store option, the receipt will be handed over to you at the store. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
      <Dialog fullScreen open={openDelivery} onClose={DeliveryClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Delivery Related
            </Typography>
            <span color="inherit" onClick={DeliveryClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">When can I expect my delivery?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You can expect same day delivery, within a few hours of order.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">How long you take to deliver?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Store delivery hours may vary for different locations and depends upon the availability of supply from stores. Check the opening and closing time for every stores.  
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">What are the delivery hours?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Delivery hours depends upon the stores’ delivery hours and availability. Store delivery hours may vary for different locations and depends upon the availability of supply from stores. Check the opening and closing time for every stores.  
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="expansion-header">Do you deliver on Sundays and on Public or National Holidays?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Yes, we deliver on Sundays, public and national holidays, considering the opening, availability, opening and closing hours of stores open and functioning on the mentioned days.    
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography className="expansion-header">I want to update my delivery address: </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Go to Home. On the top your current location is showing. Click the drop down arrow beside it.<br/>You have three options:     
              </Typography>
              <ul>
                <li>Get Current Location  </li>
                <li>Go To Map</li>
                <li>ADD NEW ADDRESS</li>
              </ul>
              <Typography className="expansion-content">
                If you want to Add New Address, click on ADD NEW ADDRESS. You will get ‘Enter a location’, where you type in your location.  Then you fill up your full name, mobile number, landmark, and zipcode. Then save your new location as HOME / OFFICE / HOTEL / OTHERS. Then click on save address.    
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography className="expansion-header">Can I add more than one delivery address in an account?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Yes, you can add multiple delivery addresses in your account. Single order can only be delivered to one address. If you want to order different order on different address, then you have to place them as separate orders.   
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography className="expansion-header">Can I have addresses of different cities or locations and place multiple orders for multiple locations?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Yes, you can have different addresses for different cities or locations. You can also place orders for multiple cities or locations. You can also have multiple addresses in one city or location     
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography className="expansion-header">What are the modes of delivery?  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Nextdoorhub.com offers two modes of delivery for the convenience of buyers:     
              </Typography>
              <ul>
                <li>Store pickup</li>
                <li>Doorstep delivery</li>
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9a-content"
              id="panel9a-header"
            >
              <Typography className="expansion-header">What are the delivery charges?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Every store has their delivery charges respective of order amount and distance of service, which are otherwise waived off if the order is above a specified <b>minimum amount</b> from that store or the delivery address is within the free delivery area. The <b>minimum charges and maximum charges, or no delivery charges will be mentioned on</b> the checkout page.     
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10a-content"
              id="panel10a-header"
            >
              <Typography className="expansion-header">Will I get informed if my delivery order gets delayed?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                In case of delay the customer support team and the delivery person will inform you about the delay.     
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11a-content"
              id="panel11a-header"
            >
              <Typography className="expansion-header">What is the minimum order amount for delivery?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                There is no minimum order amount. You can order of any amount.     
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel12a-content"
              id="panel12a-header"
            >
              <Typography className="expansion-header">Is same day delivery applicable to only a few products?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Same day delivery is applicable to all products. It depends upon the store opening and closing time, your order time, and stores’ availability and unavoidable circumstances.      
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel13a-content"
              id="panel13a-header"
            >
              <Typography className="expansion-header">What if I don’t receive products in a scheduled time?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                On rare occasions, due to certain unavoidable circumstances, your product delivery may get delayed. In such situation, the customer service team will inform you at earliest.       
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel14a-content"
              id="panel14a-header"
            >
              <Typography className="expansion-header">Why would my package be returned back to the seller as undeliverable?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Your order will return back to the seller as undeliverable under the following circumstances:         
              </Typography>
              <ul>
                <li>When we receive incorrect address</li>
                <li>When we experience failed delivery services due to various reasons (example: no one to pick-up, or any unavoidable circumstances)</li>
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel15a-content"
              id="panel15a-header"
            >
              <Typography className="expansion-header">What will happen to my products delivery if I don’t stay at home during that time?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                If you are not found at home, you will be called by the delivery person or the customer service team to confirm your presence. If you are not at home, then the product will return back as undeliverable. Two attempts will be made further and if still you are found unavailable then you will get refunded (if the payment is made prior to delivery)           
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
      <Dialog fullScreen open={openOrder} onClose={OrderClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Order Related
            </Typography>
            <span color="inherit" onClick={OrderClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">How to place an order?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Sign in and choose the store near you from where you want to buy the product. Select the products and click on Add. Go to View Cart, then select the delivery option, check the bill, Select Address, and then click Continue. In the order review page confirm the following: Delivery address, Delivery Mode, Billing, Items, Store name. Upon confirming, click on “Confirm order” and you will get order confirmation message/notification. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">Can I add or remove products after I place my order?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                No. you cannot add or remove products after you place your order. However you can contact store from the order section on an immediate basis for any modifications of the order (only to reduce item quantity or remove item). Or you have to place separate order if you wanted to add something previously.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">Is it possible to place order that is out of stock?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                No it is not possible to place order that is out of stock. Products can go out of stock due to excessive demand or supply chain issue. However, you can expect the product to be stocked soon, so we recommend to check the after a while.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="expansion-header">How will I check the current status of my order?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You can check the current status of your order by “Tracking order” from Order section. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography className="expansion-header">Can I change my address or phone number after the order has been placed?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You cannot change your address or phone number after you have placed an order.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography className="expansion-header">Can I order from any location?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                We will deliver products from the store listed nearby your current location. Hence, you can order from any location provided there are stores nearby. We recommend enabling your GPS location finder and letting the app auto-detect your current location.  
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography className="expansion-header">I want to cancel my order</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Once the order has been placed, you cancel the order residing proper reason of cancellation. However you cannot cancel the order once store accepts it. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography className="expansion-header">Can I edit my order?  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Your order can be edited in the cart before the order details reach to the store. Once the order is placed, you cannot edit the order. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9a-content"
              id="panel9a-header"
            >
              <Typography className="expansion-header">How can I know if any of my orders is unavailable?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You will receive SMS and mail regarding the details of unavailable product. If payment has been done digitally, then refund will be done within 3-4 business days.   
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10a-content"
              id="panel10a-header"
            >
              <Typography className="expansion-header">I have not yet received my order</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Due to certain unavoidable circumstances, the order can be delivered lately. It is requested to wait for a while. If there’s excessive delay in delivery, you can contact customer service team.    
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11a-content"
              id="panel11a-header"
            >
              <Typography className="expansion-header">What proof do I need to show for receiving my order?  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                No proof is required. You can show the order details SMS/Notification to the delivery person so that he can give you the correct order delivery package.   
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel12a-content"
              id="panel12a-header"
            >
              <Typography className="expansion-header">Can anyone else pick up my order on behalf of me?  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Yes. Anyone else can pick up the order on behalf of you they just need to show the order details SMS/Notification received in case the delivery person asks to show for his sake of confirmation.   
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel13a-content"
              id="panel13a-header"
            >
              <Typography className="expansion-header">I have received damaged order</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                In case you have somehow received damaged product, contact the store for replacement or refund.  
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
      <Dialog fullScreen open={openCustomer} onClose={CustomerClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Customer Related
            </Typography>
            <span color="inherit" onClick={CustomerClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">How do I contact Customer service?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You can contact customer service by sending us mail at: <a href="mailto:support@nextdoorhub.com">support@nextdoorhub.com</a><br/>
                They can also be reached at: 03340548002<br/>
                The customer service of nextdoorhub.com is available Monday to Sunday, 6 AM-10PM  
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">Timings to contact the customer service team </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                The customer service of nextdoorhub is available Monday to Sunday, 6 AM-10PM   
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">How can I give feedback to customer service team? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                The customer service team of nextdoorhub are working hard to ensure you have a hassle-free experience with nextdoorhub. You can give them a feedback at: <a href="mailto:mail@nextdoorhub.com">mail@nextdoorhub.com</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="expansion-header">I want to give ratings and reviews</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Go to the Google Play Store or App Store, and give ratings and reviews to nextdoorhub.com
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
      <Dialog fullScreen open={openReturn} onClose={ReturnClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Return & Refund
            </Typography>
            <span color="inherit" onClick={ReturnClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">I have received damaged order, can I get refund?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                In case you have somehow received damaged product, contact the store for replacement or refund.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">How will I get the replaced product?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                After requesting for the replacement of the product, the replacement item is delivered generally during the time of pick-up or after the original item is picked up.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">I want to return an item that I wrongly ordered.</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                According to the seller’s Return Policy, wrongly ordered products cannot be returned. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="expansion-header">When return cannot be possible? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                Returns of products depends on certain factors. The sellers do not accept returns in case:  
              </Typography>
              <ul>
                <li>The product is found damaged </li>
                <li>The product is found tampered </li>
                <li>The product is found with missing pieces (this includes price tags, accessories, original packing, labels, any parts that come with it, freebies etc.)  </li>
                <li>The products which are consumable (edible items, foods, cosmetics etc.)  </li>
                <li>The products which are non-returnable such as innerwear, lingerie etc.  </li>
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography className="expansion-header">Can I change the address in case of product return?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                No you cannot change the address of the item while returning the product.   
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
      <Dialog fullScreen open={openOthers} onClose={OthersClose} TransitionComponent={Transition}>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Others
            </Typography>
            <span color="inherit" onClick={OthersClose}><CloseIcon /></span>
          </Toolbar>
        </AppBar>
        <div className="faq-section">
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="expansion-header">I have not received a product, but it is billed  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                We are sorry for the inconvenience. We understand this is serious and shall look forward at this mistake. You can contact the customer care service team and resolve the issue. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="expansion-header">Do I get invoice on my order?  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                You will receive invoice on delivery of products.   
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="expansion-header">I did not receive any product, but I received SMS that it’s delivered  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="expansion-content">
                We are sorry for the inconvenience. We understand this is serious and shall look forward at this mistake. We suggest to wait for estimated delivery time and you can also contact the customer care service team and resolve the issue. Meanwhile this will be taken as complaint. We will resolve the issue at the earliest.     
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default FaqCategory;