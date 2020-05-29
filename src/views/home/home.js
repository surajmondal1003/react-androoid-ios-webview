import React, { Component } from 'react'
import SliderBanner from '../../components/slider-banner';
import StoreList from '../../containers/store-list';

export default class Home extends Component {

  
  render() {
    console.log('called');
    return (
      <>
        {/* <div className="not-found text-center">
          <img src={notfoundImg} alt="not-found" />
          <small>Opps... no stores near you</small>
          <div className="text-center add-store">
              <Button className="rounded-btn" variant="outlined" color="primary">Add store in your community</Button>
          </div>
          <div className="learn-more">
            <Button>Learn More</Button>
          </div>
      </div> */}


        {/* <div style={{ backgroundColor: '#FFF', padding: '20px'}}>
          <div className="shine box"></div>

          <div className="div">
            <div className="shine lines"></div>
            <div className="shine lines"></div>
            <div className="shine lines"></div>
          </div>

          <div className="shine photo" ></div>
          <div className="shine photo"></div>

          <br />

          <div className="shine box"></div>

          <div className="div">
            <div className="shine lines"></div>
            <div className="shine lines"></div>
            <div className="shine lines"></div>
          </div>
        </div> */}

        {/* <StoreList storeListType={'favorite'} /> */}
        <StoreList storeListType={'nearby'} />
      </>
    )
  }
}
