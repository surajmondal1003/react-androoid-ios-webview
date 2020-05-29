import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import service1Img from '../../assets/img/service-ic-1.png';
import service2Img from '../../assets/img/service-ic-2.png';
import service3Img from '../../assets/img/service-ic-3.png';
import service4Img from '../../assets/img/service-ic-4.png';
import service5Img from '../../assets/img/service-ic-5.png';
import service6Img from '../../assets/img/service-ic-6.png';
import restaurantImg from '../../assets/img/restaurant.jpg';
import sweetImg from '../../assets/img/sweet.jpg';
import bakeryImg from '../../assets/img/bakery.jpg';
import salonImg from '../../assets/img/salon.jpg';
import jewelleryImg from '../../assets/img/jewellery.jpg';
import boutiquesImg from '../../assets/img/boutiques.jpg';
import apparelImg from '../../assets/img/apparel.jpg';
import watchesImg from '../../assets/img/watches.jpg';
import kidsImg from '../../assets/img/kids.jpg';
import electronicsImg from '../../assets/img/electronics.jpg';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import Link from '@material-ui/core/Link';
import { history } from '../../utils/config/app_config';

function BrandExclusive() {
  const [city, setCity] = React.useState(10);
  const handleChange = event => {
    setCity(event.target.value);
  };
  return (
    <div className="brand-exclusive">
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" color="disabled" aria-label="back" onClick={()=>{
             if (window.TestAndroid) {
              window.TestAndroid.goBackToApa(true)
            }
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
              window.webkit.messageHandlers.goBackToApa.postMessage(true);
            }
          }}>
            <ArrowBackSharpIcon />
          </IconButton>
          <FormControl className="select-city">
            <Select value={city} onChange={handleChange} labelId="choose-city" id="city">
              <MenuItem value={10}>Kolkata</MenuItem>
              <MenuItem value={20}>Mumbai</MenuItem>
              <MenuItem value={30}>Delhi</MenuItem>
              <MenuItem value={40}>Chennai</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <div className="brands-list">
        <div className="brand-features">
          <ul>
            <li>
              <div className="features-box">
                <img src={service1Img} />
                <p>Shop in<br />8 languages</p>
              </div>
            </li>
            <li>
              <div className="features-box">
                <img src={service2Img} />
                <p>Shop in<br />8 languages</p>
              </div>
            </li>
            <li>
              <div className="features-box">
                <img src={service3Img} />
                <p>Secure<br />payments</p>
              </div>
            </li>
            <li>
              <div className="features-box">
                <img src={service4Img} />
                <p>Estimated<br />impport fees</p>
              </div>
            </li>
            <li>
              <div className="features-box">
                <img src={service5Img} />
                <p>Track your<br />package</p>
              </div>
            </li>
            <li>
              <div className="features-box">
                <img src={service6Img} />
                <p>24/7<br />customer services</p>
              </div>
            </li>
          </ul>
        </div>
        <GridList cellHeight={180} spacing={4} className="brands-list-box">
          <GridListTile cols={2}>
            <img src={restaurantImg} />
            <GridListTileBar
              title="Restaurant"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={sweetImg} />
            <GridListTileBar
              title="Sweet"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={bakeryImg} />
            <GridListTileBar
              title="Bakery"
            />
          </GridListTile>
          <GridListTile cols={2}>
            <img src={salonImg} />
            <GridListTileBar
              title="Spa & Salon"
            />
          </GridListTile>
        </GridList>
        <div className="list-box-header">
          <h4>Premium stores in your city</h4>
        </div>
        <GridList cellHeight={180} spacing={4} className="brands-list-box">
          <GridListTile cols={1}>
            <img src={jewelleryImg} />
            <GridListTileBar
              title="Jewellery"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={boutiquesImg} />
            <GridListTileBar
              title="Boutiques"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={apparelImg} />
            <GridListTileBar
              title="Apparel shop"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={watchesImg} />
            <GridListTileBar
              title="Watches"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={kidsImg} />
            <GridListTileBar
              title="Kids shop"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={electronicsImg} />
            <GridListTileBar
              title="Electronics"
            />
          </GridListTile>
        </GridList>
        <div className="register-with-us">
          <p>To list your store, please register <Link to='/store-create'>here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default BrandExclusive;