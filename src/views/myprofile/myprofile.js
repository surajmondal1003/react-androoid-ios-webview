import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Toolbar, Icon ,IconButton} from '@material-ui/core';
import UserProfile from '../../containers/user-profile';
import StoreProfile from '../../containers/store-profile';
import { replaceUrl } from '../../utils/miscellaneous/imgLib';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default class MyProfile extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      value:0
    }
    // this.theme = useTheme();
    window.myProfile=this;
  }

  setValue = (value)=>{
    this.setState({value})
  }
  // const [value, setValue] = React.useState(0);

  callFromMobile(lat, long,authToken){
    console.log(lat, long, authToken)

    window.localStorage.setItem('apa-2-token',authToken);
    window.localStorage.setItem('lat',lat);
    window.localStorage.setItem('long',long);
    this.props.getAccountDetails()
 }
  
   getStoreDetails = () => {
     
    if (this.props.userStoreInfo.get('storeId')) {
     
        const payload = { storeId: this.props.userStoreInfo.get('storeId'), latitude: '22.5392287', longitude: '88.3595163' };
        this.props.gettStoreProfilePageDetails(payload);
      
    }
  }
   handleChange = (event, newValue) => {
    // if (newValue)
      // this.getStoreDetails();
    this.setValue(newValue);
  };

   handleChangeIndex = (index) => {
    // if (index)
      // this.getStoreDetails();
    this.setValue(index);
  };

  goBack=()=>{
    console.log('go back')
    if (window.TestAndroid) {
      window.TestAndroid.goBackToApa(true)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
      window.webkit.messageHandlers.goBackToApa.postMessage(true);
    }
  }
  
   getImgUrl = (url) => {
    if (url.includes('ndhbucket'))
    return replaceUrl(url);
    else
    return url;
    }

  render(){

    let userStoreInfo = this.props.userStoreInfo ? this.props.userStoreInfo.toJS() : {};
    let userDetails = { name: '' };
    let isSeller = false;
    if (this.props.userDetails) {
      userDetails = this.props.userDetails.toJS();
      isSeller = userDetails.roles.includes('SELLER') ? true : false;
    }

    return (
      <>
        {
          isSeller ?
  
            <div className="seller-order profile-tabs-view">
              <AppBar position="static" className="seller-order-tab">
              <Toolbar>
              <IconButton edge="start" aria-label="menu" onClick={() => this.goBack()}>
                <Icon>arrow_back</Icon>
              </IconButton>
              <Typography className="app-toolbar-header" variant="h6" style={{color:'#3e4152'}}>
                ACCOUNT SETTINGS
            </Typography>
              </Toolbar>
              </AppBar>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  className="profile-change"
                >
                  <Tab label={userDetails.name} icon={<img src={this.getImgUrl(userDetails.profile_image)} />} {...a11yProps(0)} />
                  <Tab label={userStoreInfo.store_display_name} icon={<img src={replaceUrl(userStoreInfo.store_logo_url, 'store')} />} {...a11yProps(1)} />
                </Tabs>
              
              
                <TabPanel value={this.state.value} index={0} >
                  <UserProfile />
                </TabPanel>
                <TabPanel value={this.state.value} index={1} >
                  <StoreProfile storeId={userStoreInfo.storeId}/>
                </TabPanel>
              
              {/* <SwipeableViews
                axis={this.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabPanel value={this.state.value} index={0} dir={this.theme.direction}>
                  <UserProfile />
                </TabPanel>
                <TabPanel value={this.state.value} index={1} dir={this.theme.direction}>
                  <StoreProfile />
                </TabPanel>
              </SwipeableViews> */}
            </div>
            :
            <div className="seller-order profile-tabs-view">
            <AppBar position="static" className="seller-order-tab">
              <Toolbar>
              <IconButton edge="start" aria-label="menu" onClick={() => this.goBack()}>
                <Icon>arrow_back</Icon>
              </IconButton>
              <Typography className="app-toolbar-header" variant="h6" style={{color:'#3e4152'}}>
              ACCOUNT SETTINGS
            </Typography>
              </Toolbar>
              </AppBar>
            <UserProfile />
            </div>
        }
      </>
    );
  }
  
}