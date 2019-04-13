import React, {Component} from "react"; 

class Image extends Component {
    constructor() {
        super(); 
    }

    render() {
        return(
            <div>
                <img src={this.props.myImage} alt="cat"/> 

            </div>
        ); 
    }
}

export default Image; 