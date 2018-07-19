import * as React from 'react';
import './slideShow.component.scss';
const MAX_SLIDES_COUNT = 5;
export class SlideShow extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSlideIndex: 2
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      let activeSlideIndex = this.state.activeSlideIndex;
      const nextSlideIndex = activeSlideIndex + 1 < MAX_SLIDES_COUNT ? ++activeSlideIndex : activeSlideIndex = 0;

      this.setState({activeSlideIndex: nextSlideIndex});
    }, 2000);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  enableSlide(index) {
    this.setState({activeSlideIndex: index});
  }

  render() {
    let slides = [];
    let controls = [];

    for(let i = 0; i < MAX_SLIDES_COUNT; i++) {
      const slideClassNames = `slideshow__slide ${i === this.state.activeSlideIndex ? 'slideshow__slide_active' : ''}`
      const slide = <li className={slideClassNames}>
        <img src="https://picsum.photos/640/480?random" alt=""/>
      </li>
      const controlClassNames = `slideshow__control ${i === this.state.activeSlideIndex ? 'slideshow__control_active' : ''}`
      const control = <li><button className={controlClassNames} onClick={() => this.enableSlide(i)}>{i}</button></li>
      slides.push(slide);
      controls.push(control);
    }

    return <div className="slideshow" 
      onMouseEnter={this.stopInterval.bind(this)}
      onMouseLeave={this.startInterval.bind(this)}>
      <ul className="slideshow__slides">
        {slides}
      </ul>
      <ul className="slideshow__controls">
        {controls}
      </ul>
    </div>
  }
}