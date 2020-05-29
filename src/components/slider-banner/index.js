import React, { Component } from 'react'
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

export default class SliderBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 0 }
    this.maxSteps = this.props.tutorialSteps.length;

  }
  setActiveStep = (activeStep) => {
    this.setState({
      activeStep
    })
  }

  handleStepChange = (step) => {
    this.setActiveStep(step);
  };
  render() {
    return (
      <div className="carousel">
        <SwipeableViews
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {this.props.tutorialSteps.map((step, index) => (
            <div key={`${index}_slide`}>
              {Math.abs(this.state.activeStep - index) <= 2 ? (
                <img src={step.imgPath} alt={`${index}_slide`} />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={this.maxSteps}
          position="static"
          variant="dots"
          className="slider-dot"
          activeStep={this.state.activeStep}
        />
      </div>
    )
  }
}
