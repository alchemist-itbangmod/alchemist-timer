import React,{Component} from 'react';
import styled from 'styled-components';
import Button from './ParallaxBtn'
import ParallaxWrapper from 'react-parallax-button/ParallaxWrapper';
import axios from 'axios';


const Input = styled.input`
	width: 50vw;
	height:10vh;
`

const Img = styled(ParallaxWrapper)`

`
class FormInput extends Component {

  render() {
    return (
				<div>
					<div className="col-12 d-flex justify-content-center">
						<ParallaxWrapper parallaxScale={0.5}>
							<img src="/img/Timer.png"/>
						</ParallaxWrapper>
					</div>
					<form>
						<div className="form-group">
							<Input type="text" name="roomCode" className="form-control" id="exampleInputEmail1" placeholder="Enter room code" />
						</div>
						<a href="/timepage">
							<Button title='Join Room' bgColor='#EE6352'></Button>
						</a>
						<a href="/createroom"><Button title='Create Room' bgColor='#313638' /></a>
					</form>
				</div>
    );
  }
}

export default FormInput