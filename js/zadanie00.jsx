import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function(){

    class PlanetFormFourth extends React.Component {
        constructor(props) {
            console.log('konstruktor')
            super(props);
            this.state = {
                slides: 0,
                firstPlanetDistance: 150,
                sliderValue: 300
            }
        }
        plusDivs = (n) => {
            let bg = [false,'url("images/viking.png")','url("images/gasplanet.png")','url("images/seaplanet.png")'];
            let testPlanet = document.querySelector('.test-planet-fourth');
            let result = this.state.slides += n;
            let slides = document.querySelectorAll('.mySlides');
            console.log(result)
            let setSlide = () => slides[this.state.slides].style.display = 'block'
            testPlanet.style.backgroundImage = bg[result]
            if (result > 2) {
                this.setState ({
                    slides: 0
                }, setSlide);
            } else if (result < 0) {
                this.setState ({
                    slides: 2
                }, setSlide)
            } else {
                this.setState ({
                    slides: result
                }, setSlide)
            }
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
        }

        handleChange = (e) => {
            let testPlanet = document.querySelector('.test-planet-fourth');
            console.log(e.target.value);
            this.setState ({
                slides: Number(e.target.value)
            })
            let slides = document.querySelectorAll('.mySlides');
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
            slides[e.target.value].style.display = 'block';
            if (e.target.value == 0) {
                testPlanet.style.backgroundImage = 'url("images/viking.png")'
            } else if (e.target.value == 1) {
                testPlanet.style.backgroundImage = 'url("images/jupijupi.png")'
            } else if (e.target.value == 2) {
                testPlanet.style.backgroundImage = 'url("images/seaplanet.png")'
            }
        }

        handleFirstDistanceChange = (e) => {
            this.setState({
                firstPlanetDistance: e.target.value
            })
            let orbitFirst = document.querySelector('.constructor-orbit-first');
            let orbitSecond = document.querySelector('.constructor-orbit-second');
            let orbitThird = document.querySelector('.constructor-orbit-third');
            let orbitFourth = document.querySelector('.constructor-orbit-fourth');
            let allOrbits = [orbitFirst, orbitSecond, orbitThird, orbitFourth];
            let i = 3;
            allOrbits[i].style.width = e.target.value + 'px';
            allOrbits[i].style.height = e.target.value + 'px';
            allOrbits[i].style.position = "absolute";
            allOrbits[i].style.left = "calc(45% - " + (e.target.value / 2) + "px)";
            allOrbits[i].style.top = "calc(50% - " + (e.target.value / 2) + "px)";
            console.log('dziala f')

            this.setState({
                sliderValue: e.target.value
            })

            for (let i = allOrbits.length -1; i > 0; i--) {
                if (parseInt(allOrbits[i].offsetWidth) - parseInt(allOrbits[i-1].offsetWidth) <74) {
                    console.log('dziala minus')
                    allOrbits[i-1].style.width = allOrbits[i].offsetWidth - 74 + 'px';
                    allOrbits[i-1].style.height = allOrbits[i].offsetHeight - 74 + 'px';
                    allOrbits[i-1].style.left = 'calc(45% - ' + allOrbits[i-1].offsetWidth / 2 + 'px'
                    allOrbits[i-1].style.top = 'calc(50% - ' + allOrbits[i-1].offsetWidth / 2 + 'px'
                }
            }
        }
        componentDidMount() {
            let orbitFourth = document.querySelector('.constructor-orbit-fourth');
            this.setState({
                sliderValue: orbitFourth.offsetWidth
            })
        }

        handleFirstOrbitDuration = (e) => {
            let orbit = document.querySelector('.constructor-orbit-third');
            orbit.style.animationDuration = e.target.value * 20 + "s";
        }

        render() {
            return (
                <div>
                    <div className='object-picture'>
                        <img className="mySlides" src="images/viking.png"/>
                        <img className="mySlides" src="images/jupijupi.png"/>
                        <img className="mySlides" src="images/seaplanet.png"/>
                        <button className='minus-button' onClick={e => this.plusDivs(-1)}>-</button>
                        <button className='plus-button' onClick={e => this.plusDivs(+1)}>+</button>
                    </div>
                    <h1>FOURTH PLANET</h1>
                    <form>
                        {this.state.slides}
                        <label>
                            Rocky Planet
                            <input type='radio' name='planet' checked={this.state.slides === 0} onChange={this.handleChange} value={0}/>
                        </label> <br/>
                        <label>
                            Gas Planet
                            <input type='radio' name='planet' checked={this.state.slides === 1} onChange={this.handleChange} value={1}/>
                        </label> <br/>
                        <label>
                            Sea Planet
                            <input type='radio' name='planet' checked={this.state.slides === 2} onChange={this.handleChange} value={2}/>
                        </label> <br/>
                        <label>
                            Diameter
                            <input type='number' min={7} max={11}></input>
                            Thousands kilometers
                        </label> <br/>
                        <label>
                            Distance from the star
                            <input type='range' min={374} max={850} onChange={this.handleFirstDistanceChange} value={this.state.sliderValue}/> <p>{this.state.sliderValue} mln km</p>
                        </label> <br/>
                        <label>
                            Temperature
                            <input type='number' min={-273}></input>
                            Celcius
                        </label>
                        <label>
                            Orbit duration
                            <input type='number' onChange={this.handleFirstOrbitDuration}></input>
                            years
                        </label>
                        <label>
                            Description <br/>
                            <textarea></textarea>
                        </label>
                    </form>
                </div>
            );
        }
    }

    class PlanetFormThird extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                slides: 0,
                firstPlanetDistance: 150,
                sliderValue: 200
            }
        }
        plusDivs = (n) => {
            let bg = [false,'url("images/viking.png")','url("images/gasplanet.png")','url("images/seaplanet.png")'];
            let testPlanet = document.querySelector('.test-planet-third');
            let result = this.state.slides += n;
            let slides = document.querySelectorAll('.mySlides');
            console.log(result)
            let setSlide = () => slides[this.state.slides].style.display = 'block'
            testPlanet.style.backgroundImage = bg[result]
            if (result > 2) {
                this.setState ({
                    slides: 0
                }, setSlide);
            } else if (result < 0) {
                this.setState ({
                    slides: 2
                }, setSlide)
            } else {
                this.setState ({
                    slides: result
                }, setSlide)
            }
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
        }
        componentDidMount() {
            let orbitThird = document.querySelector('.constructor-orbit-third');
            this.setState({
                sliderValue: orbitThird.offsetWidth
            })
        }
        handleChange = (e) => {
            let testPlanet = document.querySelector('.test-planet-third');
            console.log(e.target.value);
            this.setState ({
                slides: Number(e.target.value)
            })
            let slides = document.querySelectorAll('.mySlides');
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
            slides[e.target.value].style.display = 'block';
            if (e.target.value == 0) {
                testPlanet.style.backgroundImage = 'url("images/viking.png")'
            } else if (e.target.value == 1) {
                testPlanet.style.backgroundImage = 'url("images/jupijupi.png")'
            } else if (e.target.value == 2) {
                testPlanet.style.backgroundImage = 'url("images/seaplanet.png")'
            }
        }

        handleFirstDistanceChange = (e) => {
            this.setState({
                firstPlanetDistance: e.target.value
            })
            let orbitFirst = document.querySelector('.constructor-orbit-first');
            let orbitSecond = document.querySelector('.constructor-orbit-second');
            let orbitThird = document.querySelector('.constructor-orbit-third');
            let orbitFourth = document.querySelector('.constructor-orbit-fourth');
            let allOrbits = [orbitFirst, orbitSecond, orbitThird, orbitFourth];
            let i = 2;
            allOrbits[i].style.width = e.target.value + 'px';
            allOrbits[i].style.height = e.target.value + 'px';
            allOrbits[i].style.position = "absolute";
            allOrbits[i].style.left = "calc(45% - " + (e.target.value / 2) + "px)";
            allOrbits[i].style.top = "calc(50% - " + (e.target.value / 2) + "px)";

            for (let i = 0; i < allOrbits.length -1; i++) {
                if (parseInt(allOrbits[i + 1].offsetWidth) - parseInt(allOrbits[i].offsetWidth) < 74) {
                    allOrbits[i + 1].style.width = allOrbits[i].offsetWidth + 74 + 'px';
                    allOrbits[i + 1].style.height = allOrbits[i].offsetHeight + 74 + 'px';
                    allOrbits[i + 1].style.left = 'calc(45% - ' + allOrbits[i + 1].offsetWidth / 2 + 'px)';
                    allOrbits[i + 1].style.top = 'calc(50% - ' + allOrbits[i + 1].offsetWidth / 2 + 'px)';
                }
            }
            for (let i = allOrbits.length -1; i > 0; i--) {
                if (parseInt(allOrbits[i].offsetWidth) - parseInt(allOrbits[i-1].offsetWidth) <74) {
                    console.log('dziala minus')
                    allOrbits[i-1].style.width = allOrbits[i].offsetWidth - 74 + 'px';
                    allOrbits[i-1].style.height = allOrbits[i].offsetHeight - 74 + 'px';
                    allOrbits[i-1].style.left = 'calc(45% - ' + allOrbits[i-1].offsetWidth / 2 + 'px'
                    allOrbits[i-1].style.top = 'calc(50% - ' + allOrbits[i-1].offsetWidth / 2 + 'px'
                }
            }
        }
        handleFirstOrbitDuration = (e) => {
            let orbit = document.querySelector('.constructor-orbit-third');
            orbit.style.animationDuration = e.target.value * 20 + "s";
        }

        render() {
            return (
                <div>
                    <div className='object-picture'>
                        <img className="mySlides" src="images/viking.png"/>
                        <img className="mySlides" src="images/jupijupi.png"/>
                        <img className="mySlides" src="images/seaplanet.png"/>
                        <button className='minus-button' onClick={e => this.plusDivs(-1)}>-</button>
                        <button className='plus-button' onClick={e => this.plusDivs(+1)}>+</button>
                    </div>
                    <h1>THIRD PLANET</h1>
                    <form>
                        {this.state.slides}
                        <label>
                            Rocky Planet
                            <input type='radio' name='planet' checked={this.state.slides === 0} onChange={this.handleChange} value={0}/>
                        </label> <br/>
                        <label>
                            Gas Planet
                            <input type='radio' name='planet' checked={this.state.slides === 1} onChange={this.handleChange} value={1}/>
                        </label> <br/>
                        <label>
                            Sea Planet
                            <input type='radio' name='planet' checked={this.state.slides === 2} onChange={this.handleChange} value={2}/>
                        </label> <br/>
                        <label>
                            Diameter
                            <input type='number' min={7} max={11}></input>
                            Thousands kilometers
                        </label> <br/>
                        <label>
                            Distance from the star
                            <input type='range' min={150} max={850} onChange={this.handleFirstDistanceChange} value={this.state.sliderValue}/> <p>{this.state.sliderValue} mln km</p>
                        </label> <br/>
                        <label>
                            Temperature
                            <input type='number' min={-273}></input>
                            Celcius
                        </label>
                        <label>
                            Orbit duration
                            <input type='number' onChange={this.handleFirstOrbitDuration}></input>
                            years
                        </label>
                        <label>
                            Description <br/>
                            <textarea></textarea>
                        </label>
                    </form>
                </div>
            );
        }
    }

    class PlanetFormSecond extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                slides: 0,
                firstPlanetDistance: 150,
                sliderValue: 200
            }
        }
        plusDivs = (n) => {
            let bg = [false,'url("images/viking.png")','url("images/gasplanet.png")','url("images/seaplanet.png")'];
            let testPlanet = document.querySelector('.test-planet-second');
            let result = this.state.slides += n;
            let slides = document.querySelectorAll('.mySlides');
            console.log(result)
            let setSlide = () => slides[this.state.slides].style.display = 'block'
            testPlanet.style.backgroundImage = bg[result]
            if (result > 2) {
                this.setState ({
                    slides: 0
                }, setSlide);
            } else if (result < 0) {
                this.setState ({
                    slides: 2
                }, setSlide)
            } else {
                this.setState ({
                    slides: result
                }, setSlide)
            }
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
        }

        componentDidMount() {
            let orbitSecond = document.querySelector('.constructor-orbit-second');
            this.setState({
                sliderValue: orbitSecond.offsetWidth
            })
        }

        handleChange = (e) => {
            let testPlanet = document.querySelector('.test-planet-second');
            console.log(e.target.value);
            this.setState ({
                slides: Number(e.target.value)
            })
            let slides = document.querySelectorAll('.mySlides');
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
            slides[e.target.value].style.display = 'block';
            if (e.target.value == 0) {
                testPlanet.style.backgroundImage = 'url("images/viking.png")'
            } else if (e.target.value == 1) {
                testPlanet.style.backgroundImage = 'url("images/jupijupi.png")'
            } else if (e.target.value == 2) {
                testPlanet.style.backgroundImage = 'url("images/seaplanet.png")'
            }
        }

        handleFirstDistanceChange = (e) => {
            this.setState({
                firstPlanetDistance: e.target.value
            })
            let orbitFirst = document.querySelector('.constructor-orbit-first');
            let orbitSecond = document.querySelector('.constructor-orbit-second');
            let orbitThird = document.querySelector('.constructor-orbit-third');
            let orbitFourth = document.querySelector('.constructor-orbit-fourth');
            let allOrbits = [orbitFirst, orbitSecond, orbitThird, orbitFourth];
            let i = 1;
            allOrbits[i].style.width = e.target.value + 'px';
            allOrbits[i].style.height = e.target.value + 'px';
            allOrbits[i].style.position = "absolute";
            allOrbits[i].style.left = "calc(45% - " + (e.target.value / 2) + "px)";
            allOrbits[i].style.top = "calc(50% - " + (e.target.value / 2) + "px)";

            for (let i = 0; i < allOrbits.length -1; i++) {
                if (parseInt(allOrbits[i + 1].offsetWidth) - parseInt(allOrbits[i].offsetWidth) < 74) {
                    allOrbits[i + 1].style.width = allOrbits[i].offsetWidth + 74 + 'px';
                    allOrbits[i + 1].style.height = allOrbits[i].offsetHeight + 74 + 'px';
                    allOrbits[i + 1].style.left = 'calc(45% - ' + allOrbits[i + 1].offsetWidth / 2 + 'px)';
                    allOrbits[i + 1].style.top = 'calc(50% - ' + allOrbits[i + 1].offsetWidth / 2 + 'px)';
                }
            }
        }
        handleFirstOrbitDuration = (e) => {
            let orbit = document.querySelector('.constructor-orbit-second');
            orbit.style.animationDuration = e.target.value * 20 + "s";
        }

        render() {
            return (
                <div>
                    <div className='object-picture'>
                        <img className="mySlides" src="images/viking.png"/>
                        <img className="mySlides" src="images/jupijupi.png"/>
                        <img className="mySlides" src="images/seaplanet.png"/>
                        <button className='minus-button' onClick={e => this.plusDivs(-1)}>-</button>
                        <button className='plus-button' onClick={e => this.plusDivs(+1)}>+</button>
                    </div>
                    <h1>SECOND PLANET</h1>
                    <form>
                        {this.state.slides}
                        <label>
                            Rocky Planet
                            <input type='radio' name='planet' checked={this.state.slides === 0} onChange={this.handleChange} value={0}/>
                        </label> <br/>
                        <label>
                            Gas Planet
                            <input type='radio' name='planet' checked={this.state.slides === 1} onChange={this.handleChange} value={1}/>
                        </label> <br/>
                        <label>
                            Sea Planet
                            <input type='radio' name='planet' checked={this.state.slides === 2} onChange={this.handleChange} value={2}/>
                        </label> <br/>
                        <label>
                            Diameter
                            <input type='number' min={7} max={11}></input>
                            Thousands kilometers
                        </label> <br/>
                        <label>
                            Distance from the star
                            <input type='range' min={150} max={850} onChange={this.handleFirstDistanceChange} value={this.state.sliderValue}/> <p>{this.state.sliderValue} mln km</p>
                        </label> <br/>
                        <label>
                            Temperature
                            <input type='number' min={-273}></input>
                            Celcius
                        </label>
                        <label>
                            Orbit duration
                            <input type='number' onChange={this.handleFirstOrbitDuration}></input>
                            years
                        </label>
                        <label>
                            Description <br/>
                            <textarea></textarea>
                        </label>
                    </form>
                </div>
            );
        }
    }

    class PlanetForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                slides: 0,
                firstPlanetDistance: 150,
                sliderValue: 150
            }
        }
        plusDivs = (n) => {
            let bg = [false,'url("images/viking.png")','url("images/gasplanet.png")','url("images/seaplanet.png")'];
            let testPlanet = document.querySelector('.test-planet-first');
            let result = this.state.slides += n;
            let slides = document.querySelectorAll('.mySlides');
            console.log(result)
            let setSlide = () => slides[this.state.slides].style.display = 'block'
            testPlanet.style.backgroundImage = bg[result]
            if (result > 2) {
                this.setState ({
                    slides: 0
                }, setSlide);
            } else if (result < 0) {
                this.setState ({
                    slides: 2
                }, setSlide)
            } else {
                this.setState ({
                    slides: result
                }, setSlide)
            }
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
        }

        handleChange = (e) => {
            let testPlanet = document.querySelector('.test-planet-first');
            console.log(e.target.value);
            this.setState ({
                slides: Number(e.target.value)
            })
            let slides = document.querySelectorAll('.mySlides');
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
            slides[e.target.value].style.display = 'block';
            if (e.target.value == 0) {
                testPlanet.style.backgroundImage = 'url("images/viking.png")'
            } else if (e.target.value == 1) {
                testPlanet.style.backgroundImage = 'url("images/jupijupi.png")'
            } else if (e.target.value == 2) {
                testPlanet.style.backgroundImage = 'url("images/seaplanet.png")'
            }
        }

        componentDidMount() {
            let orbitFirst = document.querySelector('.constructor-orbit-first');
            this.setState({
                sliderValue: orbitFirst.offsetWidth
            })
        }

        handleFirstDistanceChange = (e) => {
            this.setState({
                firstPlanetDistance: e.target.value
            })
            let orbitFirst = document.querySelector('.constructor-orbit-first');
            let orbitSecond = document.querySelector('.constructor-orbit-second');
            let orbitThird = document.querySelector('.constructor-orbit-third');
            let orbitFourth = document.querySelector('.constructor-orbit-fourth');
            let allOrbits = [orbitFirst, orbitSecond, orbitThird, orbitFourth];
            let i = 0;
            allOrbits[i].style.width = e.target.value + 'px';
            allOrbits[i].style.height = e.target.value + 'px';
            allOrbits[i].style.position = "absolute";
            allOrbits[i].style.left = "calc(45% - " + (e.target.value / 2) + "px)";
            allOrbits[i].style.top = "calc(50% - " + (e.target.value / 2) + "px)";

            for (let i = 0; i < allOrbits.length -1; i++) {
                if (parseInt(allOrbits[i + 1].offsetWidth) - parseInt(allOrbits[i].offsetWidth) < 74) {
                    allOrbits[i + 1].style.width = allOrbits[i].offsetWidth + 74 + 'px';
                    allOrbits[i + 1].style.height = allOrbits[i].offsetHeight + 74 + 'px';
                    allOrbits[i + 1].style.left = 'calc(45% - ' + allOrbits[i + 1].offsetWidth / 2 + 'px)';
                    allOrbits[i + 1].style.top = 'calc(50% - ' + allOrbits[i + 1].offsetWidth / 2 + 'px)';
                }
            }
        }
        handleFirstOrbitDuration = (e) => {
            let orbit = document.querySelector('.constructor-orbit-first');
            orbit.style.animationDuration = e.target.value * 20 + "s";
        }

        render() {
            return (
                <div>
                    <div className='object-picture'>
                        <img className="mySlides" src="images/viking.png"/>
                        <img className="mySlides" src="images/jupijupi.png"/>
                        <img className="mySlides" src="images/seaplanet.png"/>
                        <button className='minus-button' onClick={e => this.plusDivs(-1)}>-</button>
                        <button className='plus-button' onClick={e => this.plusDivs(+1)}>+</button>
                    </div>
                    <h1>FIRST PLANET</h1>
                    <form>
                        {this.state.slides}
                        <label>
                            Rocky Planet
                            <input type='radio' name='planet' checked={this.state.slides === 0} onChange={this.handleChange} value={0}/>
                        </label> <br/>
                        <label>
                            Gas Planet
                            <input type='radio' name='planet' checked={this.state.slides === 1} onChange={this.handleChange} value={1}/>
                        </label> <br/>
                        <label>
                            Sea Planet
                            <input type='radio' name='planet' checked={this.state.slides === 2} onChange={this.handleChange} value={2}/>
                        </label> <br/>
                        <label>
                            Diameter
                            <input type='number' min={7} max={11}></input>
                            Thousands kilometers
                        </label> <br/>
                        <label>
                            Distance from the star
                            <input type='range' min={150} max={850} onChange={this.handleFirstDistanceChange} value={this.state.sliderValue}/> <p>{this.state.sliderValue} mln km</p>
                        </label> <br/>
                        <label>
                            Temperature
                            <input type='number' min={-273}></input>
                            Celcius
                        </label>
                        <label>
                            Orbit duration
                            <input type='number' onChange={this.handleFirstOrbitDuration}></input>
                            years
                        </label>
                        <label>
                            Description <br/>
                            <textarea></textarea>
                        </label>
                    </form>
                </div>
            );
        }

    }



    class CreatorForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                resultForm: this.props.setForm
            }
        }

        render() {
            return (
                <div className='menu'>
                    {this.props.setForm}
                </div>
            );
        }
    }

    class Orbits extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }
        render() {
            return (
                <div>
                    <div className='main-star'></div>

                    <div className='constructor-orbit-first'><div className={'planet test-planet-first'}></div></div>

                    <div className='constructor-orbit-second'><div className={'planet test-planet-second'}></div></div>

                    <div className='constructor-orbit-third'><div className={'planet test-planet-third'}></div></div>

                    <div className='constructor-orbit-fourth'><div className={'planet test-planet-fourth'}></div></div>
                </div>
            )
        }
    }

    class Creator extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                formSet: <PlanetForm/>
            }
        }
        handleFirstPlanet = () => {
            this.setState({
                formSet: <PlanetForm/>
            })
        }
        handleSecondPlanet = () => {
            this.setState({
                formSet: <PlanetFormSecond/>
            })
        }
        handleThirdPlanet = () => {
            this.setState({
                formSet: <PlanetFormThird/>
            })
        }
        handleFourthPlanet = () => {
            this.setState({
                formSet: <PlanetFormFourth/>
            })
        }
        render() {
            return (
                <div>
                    <div className={'creator-edit-holder'}>
                        <button onClick={this.handleFirstPlanet}>1</button>
                        <button onClick={this.handleSecondPlanet}>2</button>
                        <button onClick={this.handleThirdPlanet}>3</button>
                        <button onClick={this.handleFourthPlanet}>4</button>
                        <button onClick={this.handleSun}>5</button>
                    </div>
                    <ButtonHolder/>
                    <Orbits/>
                    <CreatorForm setForm={this.state.formSet}/>
                </div>
            )
        }
    }

    class ButtonHolder extends React.Component {
        handleAnimation = () => {
            let allOrbits = document.querySelectorAll('.orbit-first, .orbit-second, .orbit-third, .orbit-fourth, .orbit-fifth, .orbit-sixth, .orbit-seventh, .orbit-eighth');
            let allPlanets = document.querySelectorAll('.mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune');
            if (allOrbits[0].style.animationPlayState === 'running') {
                for (let i = 0; i < allOrbits.length; i++) {
                    allOrbits[i].style.animationPlayState = 'paused';
                    allPlanets[i].style.animationPlayState = 'paused'
                }
            } else {
                for (let i = 0; i < allOrbits.length; i++) {
                    allOrbits[i].style.animationPlayState = 'running';
                    allPlanets[i].style.animationPlayState = 'running'
                }
            }
        }
        handleOrbitControl = () => {
            let allOrbits = document.querySelectorAll('.orbit-first, .orbit-second, .orbit-third, .orbit-fourth, .orbit-fifth, .orbit-sixth, .orbit-seventh, .orbit-eighth');
            if (allOrbits[0].style.border === "1px solid white") {
                for (let i = 0; i < allOrbits.length; i++) {
                    allOrbits[i].style.border = "1px solid transparent"
                }
            } else {
                for (let i = 0; i < allOrbits.length; i++) {
                    allOrbits[i].style.border = "1px solid white"
                }
            }
        }
        render() {
            return (
                <div className="button-holder">
                    <button className="create-button">Create</button>
                    <button className="edit-button" onClick={this.handleOrbitControl}>Orbits</button>
                    <button className="animation-control" onClick={this.handleAnimation}>Play/Stop</button>
                </div>
            )
        }
    }

    class SideMenu extends React.Component {
        render() {
            return (
                <div className='menu'>
                    <div className='object-picture'>
                        <img src={this.props.image}/>
                    </div>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.distance}</h2>
                    <h2>{this.props.radius}</h2>
                    <p className='object-description'>{this.props.description}</p>
                </div>
            )
        }
    }

    class Main extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                slides: 0,
                image: "images/mercury.png",
                name: 'Mercury',
                description: `Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.'${<br/>}${<br/>}'Like Venus, Mercury orbits the Sun within Earth\'s orbit as an inferior planet, and never exceeds 28° away from the Sun when viewed from Earth. This proximity to the Sun means the planet can only be seen near the western or eastern horizon during the early evening or early morning. At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.`,
                radius: "Radius: 2440km",
                distance: "Distance from the sun: 58mln km"
            }
        }

        componentDidMount() {

        }

        plusDivs = (n) => {
            let result = this.state.slides += n;
            let slides = document.querySelectorAll('.mySlides');

            let setSlide = () => slides[this.state.slides].style.display = 'block'

            if (result > 2) {
                this.setState ({
                    slides: 0
                }, setSlide)
            } else if (result < 0) {
                this.setState ({
                    slides: 2
                }, setSlide)
            } else {
                this.setState ({
                    slides: result
                }, setSlide)
            }
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
        }

        handleChange = (e) => {
            console.log(e.target.value);
            this.setState ({
                slides: Number(e.target.value)
            })
            let slides = document.querySelectorAll('.mySlides');
            for (let i = 0; i <= 2; i++) {
                slides[i].style.display = 'none'
            }
            slides[e.target.value].style.display = 'block';
        }



        handleSun = (e) => {
            this.setState({
                name: 'Sun',
                description: `The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.`,
                image: "images/sunProper.png",
                distance: "",
                radius: "Radius: 696,000km"
            })
        }
        handleMercury = (e) => {
            this.setState({
                name: 'Mercury',
                description: `Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.'${<br/>}${<br/>}'Like Venus, Mercury orbits the Sun within Earth\'s orbit as an inferior planet, and never exceeds 28° away from the Sun when viewed from Earth. This proximity to the Sun means the planet can only be seen near the western or eastern horizon during the early evening or early morning. At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.`,
                image: "images/mercury.png",
                radius: "Radius: 2440km",
                distance: "Distance from the sun: 58mln km"
            }, () => console.log(this.state.name))
        }
        handleVenus = (e) => {
            this.setState({
                name: 'Venus',
                description: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun rises in the west and sets in the east). It does not have any natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight.[15][16] Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun its maximum angular distance from the Sun (elongation) is 47.8°.",
                image: "images/venus.png",
                distance: "Distance from the sun: 108mln km",
                radius: "Radius: 6050km"

            }, () => console.log(this.state.name))
        }
        handleEarth = (e) => {
            this.setState({
                name: 'Earth',
                description: "Earth is the third planet from the Sun, and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth orbits around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.",
                image: "images/earth.png",
                radius: "Radius: 6370km",
                distance: "Distance from the sun: 150mln km"
            })
        }
        handleMars = (e) => {
            this.setState({
                name: 'Mars',
                description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
                image: "images/mars.png",
                distance: "Distance from the sun: 228mln km",
                radius: "Radius: 3389km"
            })
        }
        handleJupiter = (e) => {
            this.setState({
                name: 'Jupiter',
                description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune, are ice giants. Jupiter has been known to astronomers since antiquity.[17] It is named after the Roman god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows,[19] and making it on average the third-brightest natural object in the night sky after the Moon and Venus.',
                image: "images/jupiter.png",
                distance: "Distance from the sun: 778mln km",
                radius: "Radius: 70.000km"
            })
        }
        handleSaturn = (e) => {
            this.setState({
                name: 'Saturn',
                description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.",
                image: "images/saturn3.png",
                distance: "Distance from the sun: 1443mln km",
                radius: "Radius: 60,200km"
            })
        }
        handleUranus = (e) => {
            this.setState({
                name: 'uranus',
                description: "Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus' atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more \"ices\" such as water, ammonia, and methane, along with traces of other hydrocarbons.[14] It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.",
                image: "images/uranus.png",
                distance: "Distance from the sun: 2742mln km",
                radius: "Radius: 25,559km"
            })
        }
        handleNeptune = (e) => {
            this.setState({
                name: 'Neptune',
                description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.",
                image: "images/neptune.png",
                radius: "Radius: 24,340km",
                distance: "Distance from the sun: 4500mln km"
            })
        }


        render() {
            return (
                <div>

                    <ButtonHolder/>

                    {/*<div className='facts'>*/}
                    {/*    <h1>Random fact #31</h1>*/}
                    {/*    <div className='facts-picture'></div>*/}
                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda blanditiis consequatur, cumque ea eligendi eos est ipsa ipsum iure laboriosam molestias natus qui ratione rerum sunt unde ut voluptate! Distinctio esse magnam natus tenetur! At, consequuntur, dignissimos exercitationem fuga in labore libero natus praesentium quibusdam reprehenderit suscipit ut veritatis!</p>*/}
                    {/*</div>*/}

                    <div className ="sun2" onClick={this.handleSun}>

                    </div>
                    <div className='orbit-first'>
                        <div className='planet mercury' onClick={this.handleMercury}></div>
                    </div>

                    <div className='orbit-second'>
                        <div className='planet venus' onClick={this.handleVenus}></div>
                    </div>

                    <div className='orbit-third'>
                        <div className='planet earth' onClick={this.handleEarth}></div>
                    </div>

                    <div className='orbit-fourth'>
                        <div className='planet mars' onClick={this.handleMars}></div>
                    </div>

                    <div className='orbit-fifth'>
                        <div className='planet jupiter' onClick={this.handleJupiter}></div>
                    </div>

                    <div className='orbit-sixth'>
                        <div className='planet saturn' onClick={this.handleSaturn}></div>
                    </div>

                    <div className='orbit-seventh'>
                        <div className='planet uranus' onClick={this.handleUranus}></div>
                    </div>

                    <div className='orbit-eighth'>
                        <div className='planet neptune' onClick={this.handleNeptune}></div>
                    </div>

                    <SideMenu image={this.state.image} name={this.state.name} description={this.state.description} distance={this.state.distance} radius={this.state.radius}/>


                    {/*<div className="menu">*/}
                    {/*    <article className="details">*/}
                    {/*        <div className="object-picture"></div>*/}
                    {/*        <h1>SUN</h1>*/}
                    {/*        <p className="object-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
                    {/*            A at blanditiis consequatur cupiditate debitis dicta dolorem eaque earum eligendi, ex*/}
                    {/*            exercitationem ipsum iusto modi molestiae pariatur possimus provident quo quos ratione*/}
                    {/*            rerum sed sit suscipit ullam ut vel veritatis vero vitae! A accusamus ad alias aliquam*/}
                    {/*            assumenda atque beatae blanditiis commodi consequuntur corporis cumque cupiditate*/}
                    {/*            debitis distinctio ducimus et exercitationem harum id itaque laudantium minus mollitia*/}
                    {/*            natus neque nihil, nostrum, officiis pariatur perferendis possimus quis quos recusandae*/}
                    {/*            repellat sed vel velit veniam veritatis voluptatibus voluptatum! Doloremque earum est*/}
                    {/*            eveniet fugit inventore neque nobis non odio saepe, tempore! Porro, temporibus,*/}
                    {/*            unde?</p>*/}
                    {/*    </article>*/}
                    {/*</div>*/}

                    {/*<div className="menu">*/}
                    {/*    <form>*/}
                    {/*        <div className="object-picture"></div>*/}
                    {/*        <label>*/}
                    {/*            Standard yellowshifted star*/}
                    {/*            <input type='radio' name='star'></input>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Standard blueshifted star*/}
                    {/*            <input type='radio' name='star'></input>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Standard redshifted star*/}
                    {/*            <input type='radio' name='star'></input>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Diameter*/}
                    {/*            <input type='number'></input>*/}
                    {/*            kilometers*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Mass*/}
                    {/*            <input type='number'></input>*/}
                    {/*            billion tons*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Temperature range <br/>*/}
                    {/*            <input type='number'></input>*/}
                    {/*            <input type='number'></input>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Number of planets*/}
                    {/*            <input type='number'/>*/}
                    {/*        </label>*/}

                    {/*    </form>*/}

                    {/*    <button className='form-next'></button>*/}
                    {/*</div>*/}

                    {/*<div className="test">*/}
                    {/*<div className="test-subject">*/}
                    {/*<div className="test-subject-another">*/}

                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className='menu'>*/}
                    {/*    <div className='object-picture'>*/}
                    {/*        <img className="mySlides" src="images/star1.jpg"/>*/}
                    {/*        <img className="mySlides" src="images/star2.jpg"/>*/}
                    {/*        <img className="mySlides" src="images/star3.jpg"/>*/}
                    {/*        <button className='minus-button' onClick={e => this.plusDivs(-1)}>-</button>*/}
                    {/*        <button className='plus-button' onClick={e => this.plusDivs(+1)}>+</button>*/}
                    {/*    </div>*/}
                    {/*    <h1>PLANET</h1>*/}
                    {/*    <form>*/}
                    {/*        {this.state.slides}*/}
                    {/*        <label>*/}
                    {/*            Rocky Planet*/}
                    {/*            <input type='radio' name='planet' checked={this.state.slides === 0} onChange={this.handleChange} value={0}/>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Gas Planet*/}
                    {/*            <input type='radio' name='planet' checked={this.state.slides === 1} onChange={this.handleChange} value={1}/>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Sea Planet*/}
                    {/*            <input type='radio' name='planet' checked={this.state.slides === 2} onChange={this.handleChange} value={2}/>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Diameter*/}
                    {/*            <input type='number'></input>*/}
                    {/*            Thousands kilometers*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Distance from the star*/}
                    {/*            <input type='number'/>*/}
                    {/*        </label> <br/>*/}
                    {/*        <label>*/}
                    {/*            Temperature*/}
                    {/*            <input type='number'></input>*/}
                    {/*            Celcius*/}
                    {/*        </label>*/}

                    {/*    </form>*/}
                    {/*</div>*/}

                    {/*<div className={'parent'}>*/}
                    {/*    <Child1/>*/}
                    {/*    <Child2/>*/}
                    {/*    <Child3/>*/}

                    {/*    <Result name={this.state.name} description={this.state.description}/>*/}
                    {/*</div>*/}

                </div>



            );
        }
    }

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                result: <Main/>
            }
        }
        handleCheat = () => {
            this.setState({
                result: <Creator/>
            })
            console.log('m')
        }
        handleCheat2 = () => {
            this.setState({
                result: <Main/>
            })
            console.log('c')
        }
        render() {
            return (
                <div>
                    <button className={'cheat-button'} onClick={this.handleCheat}>C</button>
                    <button className={'cheat-button2'} onClick={this.handleCheat2}>M</button>
                    {this.state.result}
                </div>

            );
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});


