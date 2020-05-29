
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SliderBanner from '../../components/slider-banner';
import { autoPlay } from 'react-swipeable-views-utils';
import { history } from '../../utils/config/app_config';




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'flex',
  },
}));

const landingSlider = [
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/slider-1_1584079654123.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/slider-2_1583904990519.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/slider-3_1583905385806.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/slider-4_1583905500247.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_slider-5_1582789868855.jpg?w=616.5&q=75&auto=compress',
  }
];

const fashionSliderone = [
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Big_slider-1-2_1583908342522.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Big_slider-2_1583907946237.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Big_slider-3_1583907978981.jpg?w=616.5&q=75&auto=compress',
  }
];

const fashionSlidertwo = [
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Big_slider-5_1583908727331.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Big_slider-6_1583908778121.jpg?w=616.5&q=75&auto=compress',
  },
  {
    imgPath:
      'https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Big_slider-4_1583908836402.jpg?w=616.5&q=75&auto=compress',
  }
];

function Marketplace() {
  const classes = useStyles();
  return (
    <div className="ndh-marketplace">
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
            <Icon>arrow_back</Icon>
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="search" color="inherit">
              <Icon>search</Icon>
            </IconButton>
            <IconButton aria-label="cart" color="inherit">
              <Icon>shopping_cart</Icon>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className="marketplace-body">
        <div className="mkt-hoz-scroll">
          <ul>
            <li>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/01_1570189600911.jpg?w=205.5" />
            </li>
            <li>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/02_1570190039774.jpg?w=205.5" />
            </li>
            <li>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/03_1570189892180.jpg?w=205.5" />
            </li>
            <li>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/04_%282%29_1570189852718.jpg?w=205.5" />
            </li>
          </ul>
        </div>
        <div className="carousel">
          <SliderBanner tutorialSteps={landingSlider} />
        </div>
        <div className="color-section-one">
          <div className="d-flex mr-t2">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_01_1583905798035.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_02_1583905827665.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_03_1583905855342.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_04_1583905892447.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              {/* <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_05_1583905938362.jpg?w=205.5&q=75&auto=compress" /> */}
              <img src="https://nextdoorhub.imgix.net/asset/coming_soon.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_06_1583906001235.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_07_1583906177494.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_08_1583906216591.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/add--1_09_1583906248011.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div className="carousel mr-t5">
          <SliderBanner tutorialSteps={fashionSliderone} />
        </div>
        <div className="color-section-two">
          <div className="d-flex mr-t2">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_12_1582784614585.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_13_1582784702836.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_14_1582784814675.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_15_1582784899725.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_16_1582784965377.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_17_1583486292011.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_18_1582785045915.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_19_1582785091073.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div className="carousel mr-t5">
          <SliderBanner tutorialSteps={fashionSlidertwo} />
        </div>
        <div className="color-section-three">
          <div className="d-flex mr-t2">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_21_1582785131849.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_22_1582785168583.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_23_1582785208074.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_24_1583486338088.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_25_1582785273423.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_26_1583486499499.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_27_1582785349251.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_19_1583906561453.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_21_1583906645059.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-four">
          <div className="d-flex mr-t2">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_33_1582785480713.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_34_1582785521116.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_35_1582785588058.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_36_1582785610267.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_37_1582785636517.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_38_1582785663860.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div className="color-section-five">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_40_1583487353207.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_41_1583487379093.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_42_1582785821660.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_43_1582785860742.jpg?w=616.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_44_1582785900185.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_45_1582785934447.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_46_1582785998935.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div className="color-section-six">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_48_1582786037470.jpg?w=616.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_49_1582786069223.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_50_1582786110908.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_51_1582786153647.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div className="color-section-seven">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_43_1583906707425.jpg?w=616.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_54_1582786243066.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_55_1582786287253.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_56_1582786322474.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_57_1582786363136.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_58_1582786389545.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_59_1582786433488.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div className="color-section-eight">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_61_1582786479441.jpg?w=616.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_62_1582786517281.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_63_1582786546350.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_64_1582786576359.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_66_1582786622537.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-nine">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_58_1583906917287.jpg?w=616.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_69_1582786712503.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_70_1582786734132.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_71_1582786760914.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_63_1583907021889.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-ten">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_75_1582786836351.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_76_1582786877245.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_77_1582786917278.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_78_1582786937530.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_79_1582786960212.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_80_1582786988012.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_81_1582787007011.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_82_1582787024310.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_83_1582787051252.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_75_1582789337751.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-eleven">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_87_1582787140831.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_88_1582787162117.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_89_1582787197923.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_90_1582787216386.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_91_1582787235267.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_92_1582787261782.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_93_1582787293430.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_94_1582787350480.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_95_1582787380757.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_87_1583907249111.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-twelve">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_99_1582787449401.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_100_1582787488480.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_101_1582787541495.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_102_1582787568564.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_103_1582787601717.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_104_1582787632082.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_96_1583907391895.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-thirteen">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_108_1582787709316.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_109_1583486970389.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_110_1582787775317.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_102_1582789402459.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-fourteen">
          <div className="d-flex mr-t5">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_114_1583487001251.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_115_1583487030594.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_116_1583487055468.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
        <div class="mr-t5">
          <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Category%20Popular%20on%20NDH_1567337999052.jpg?w=616.5&q=75&auto=compress" />
        </div>
        <div className="color-section-fifteen">
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_118_1582787925840.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_109_1582788302576.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_120_1582788345494.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_121_1582788367239.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_121_1582788367239.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_121_1582788367239.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_124_1582788452785.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_125_1582788471573.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_126_1582788485837.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_127_1582788502246.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_128_1582788527484.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_129_1582788547165.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_130_1582788570338.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_131_1582788590895.jpg?w=205.5&q=75&auto=compress" />
            </div>
            <div>
              <img src="https://nextdoorhub.imgix.net/ndh-admin/bannerImage/Holi_App_UI_132_1582788612561.jpg?w=205.5&q=75&auto=compress" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;


