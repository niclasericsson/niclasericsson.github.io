'use strict';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        if (this.state.open) {
            console.log("open")
            return (


                <div className="infoBox row" id="jox" data-status="closed" onClick={() => this.setState({ open: false }) }>
                    <div className="logoContainer col-md-12 col-sm-12">
                        <div className="logo" id="joxlogo"></div>
                    </div>
                    <div className="labels col-md-12 col-sm-12">
                        <div className="label">Habit Tracker</div>
                        <div className="label">React Native</div>
                        <div className="label">Expo</div>
                    </div>
                    <div className="projectInfo col-md-12">
                        <div className="mediaContainer col-md-6 col-sm-6">
                            <img src="img/jox.png"></img>
                        </div>
                        <div className="description">
                            <span><b>Jox</b> is a minimalistic habit tracker. It's supposed to be easy to use while still visualizing
                            your habits in a nice way. I'm developing and designing this with my girlfriend, and I'm hoping to get it out soon.
                            <br/><br/>
                            <a className="disabled">Coming soon!</a><br/>
                            </span>
                        </div>
                    </div>
                </div>


            )
        }

        return (



            <div className="infoBox row" id="jox" data-status="closed" onClick={() => this.setState({ open: true }) }>
                <div className="logoContainer col-md-12 col-sm-12">
                    <div className="logo" id="joxlogo"></div>
                </div>
            </div>


        );
    }
}

let domContainer = document.querySelector('#projectContainer');
ReactDOM.render(<Project />, domContainer);