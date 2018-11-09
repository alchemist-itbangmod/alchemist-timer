import React from 'react';
import styled from 'styled-components';
import FormInput from '../core/FormInputCode';

const Bg = styled.div`
	max-height:100vh;
	height:100vh;
	background-color:#F7A64A;
`

const HomePage = () => (
	<div className="container-fulid">
		<Bg className='align-items-center d-flex justify-content-center'>
			<div className="row">
			<FormInput/>
			</div>
		</Bg>
	</div>
)
export default HomePage