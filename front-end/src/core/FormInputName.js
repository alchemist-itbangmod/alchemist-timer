import React, { Component } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert2';
import ParallaxWrapper from 'react-parallax-button/ParallaxWrapper';
import axios from 'axios';

const Input = styled.input`
	width: 50vw;
	height:10vh;
`

const Img = styled.img`
	width: 60vw;
`
const Btn = styled.button`
	margin : 1%;
`

class FormInput extends Component {
	state = {
		show: false,
		persons: [],
		newRoomName: '',
		text : '',
	};

	createSuccess = () => {
		swal({
			type: 'success',
			title: 'Your work has been saved',
			showConfirmButton: true,
			onConfirm: this.setState({ show: false }),
			confirmButtonClass: 'btn btn-success',
		})
	}

	componentDidMount() {
		axios.get(`http://localhost:8000/api/rooms`)
			.then(res => {
				const persons = res.data;
				this.setState({ persons });
			})
	}

	getRoomName() {
		axios({
			method: 'post',
			url: 'http://localhost:8000/api/room',
			data: {
				room_name: 'TetsRoom',
				user_id: 1,
			},
		}).then(res => {
			const data = res.data.room_name;
			this.setState({ newRoomName: data })
		})
	}

	handleChange(e) {
    this.setState({ text: e.target.value });
  }

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 d-flex justify-content-center">
						<ParallaxWrapper parallaxScale={0.5}><Img src="/img/CreateRoom.png" /></ParallaxWrapper>
					</div>
					<div className="col-12 d-flex justify-content-center">
						<div className="form-group">
							<Input 
							value={this.state.text} 
							onChange={(e) => this.handleChange(e)} 
							className="form-control" 
							placeholder="Enter room name" />
						</div>
					<Btn className="btn-primary" type='button' onClick={() => this.getRoomName()}>Alert</Btn>
					</div>
					<ul>
						Test : {this.state.persons.map(persons => <li>{persons.room_name}</li>)}
					</ul>
					{this.state.newRoomName}
				</div>
			</div>
		);
	}
}

export default FormInput;