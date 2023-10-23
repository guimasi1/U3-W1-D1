import {Component} from "react"

class ImageClassComponent extends Component {
    render() {
        return <img src={this.props.src} alt={this.props.alt} />
    }
}

export default ImageClassComponent