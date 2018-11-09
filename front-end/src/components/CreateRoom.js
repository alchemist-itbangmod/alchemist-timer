import React from 'react';
import styled from 'styled-components';
import FormInputName from '../core/FormInputName';

const Bg = styled.div`
	max-height:100vh;
	height:100vh;
	background-color:#F7A64A;
`

const CreateRoom = () => (
    <div className="container-fulid">
        <Bg className='align-items-center d-flex justify-content-center'>
            <div className="row">
                <FormInputName />
            </div>
        </Bg>
    </div>
)
export default CreateRoom