import React from 'react';
import { ParallaxButton, ParallaxWrapper } from 'react-parallax-button'
import styled from 'styled-components';


const Btn = (props) => (
	<ParallaxButton
		text={props.title}
		parallaxScale={0.8}
		backgroundStyle={{
			background: props.bgColor,
			borderRadius: '8px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'
		}}
		type={props.type} />
)
export default Btn