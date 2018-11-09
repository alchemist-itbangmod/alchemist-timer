import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './ParallaxBtn';
import swal from 'sweetalert2';
import ParallaxWrapper from 'react-parallax-button/ParallaxWrapper';
import SweetAlert from 'sweetalert2-react';


const Input = styled.input`
	width: 50vw;
	height:10vh;
`

const Img = styled.img`
	width: 60vw;
`

class FormInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}
	createSuccess = () => {
		swal({
			type: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500
		})

	}


	render() {
		return (
			<div>
				<div className="col-12 d-flex justify-content-center">
					<ParallaxWrapper parallaxScale={0.5}><Img src="/img/CreateRoom.png" /></ParallaxWrapper>
				</div>
				<form className="col-12 d-flex justify-content-center">
					<div className="form-group">
						<Input type="text" name="roomCode" className="form-control" id="exampleInputEmail1" placeholder="Enter room name" />
					</div>
					<button title='Create Room' onclick={() => this.createSuccess} bgColor='#313638'>Test</button>
				</form>
				<Button title="" onClick={() => this.setState({ show: true })}>Alert</Button>
				<SweetAlert
					show={this.state.show}
					title="Complete !!"
					type="success"
					text={{}} 
				/>
			</div>
		);
	}
}

export default FormInput;