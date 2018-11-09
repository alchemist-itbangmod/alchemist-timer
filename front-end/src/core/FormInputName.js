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
const Btn = styled.button`

`

class FormInput extends Component {
	state = {
			show: false,
		};

		createSuccess = () => {
			swal({
				type: 'success',
				title: 'Your work has been saved',
				showConfirmButton: true,
				onConfirm : this.setState({ show: false }),
				confirmButtonClass: 'btn btn-success',
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
				<Btn className="btn-primary" type='submit' onClick={(e) => this.createSuccess(e)}>Alert</Btn>
				</form>
			</div>
		);
	}
}

export default FormInput;