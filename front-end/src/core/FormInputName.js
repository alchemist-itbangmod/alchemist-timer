import React, { Component } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert2';
import ParallaxWrapper from 'react-parallax-button/ParallaxWrapper';
import axios from 'axios';


const Input = styled.input`
	width: 40vw;
	height:10vh;
`

const Img = styled.img`
	width: 60vw;
`
const Btn = styled.button`
	margin : 0%;
	border-radius : 5%;	
	height: 10vh;
`

class FormInput extends Component {
	state = {
		show: false,
		persons: [],
		getRoomBycode: '',
		text: '',
		getCode : '',
	};


	componentDidMount() {
		axios.get(`http://localhost:8000/api/rooms`)
			.then(res => {
				const data = res.data;
				this.setState({ data });
			})
	}

	getRoomName() {
		axios({
			method: 'post',
			url: 'http://localhost:8000/api/room',
			data: {
				room_name: this.state.text,
			},
		}).then(res => {
			const data = res.data.room_name;
			this.setState({ getRoomBycode: data })
			const roomcode = res.data.room_code;
			this.setState({getCode : roomcode})
		})
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		if (this.state.getRoomBycode != '') {
			swal({
				title : "Your room name is" + " " +this.state.getRoomBycode,
				html :"<b>Your code is</b>" + " "+ this.state.getCode,
			})
		} 
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 d-flex justify-content-center">
						<ParallaxWrapper parallaxScale={0.5}><Img src="/img/CreateRoom.png" /></ParallaxWrapper>
					</div>
					<div className="col-12">
						<div className="row">
							<div className="col-8 d-flex justify-content-end">
								<div className="form-group">
									<Input
										value={this.state.text}
										onChange={(e) => this.handleChange(e)}
										className="form-control"
										placeholder="Enter room name" />
								</div>
							</div>
							<div className="col-4 justify-content-start">
								<Btn className="btn btn-primary" type='button' onClick={() => this.getRoomName()}>CreateRoom</Btn>
							</div>
						</div>
					</div>
				</div>
				<ul>
				</ul>
			</div>
		);
	}
}

export default FormInput;