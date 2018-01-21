import React, { Component } from "react";
import styled from "styled-components";
import moment from 'moment'
import GridBlock from "../GridBlock";
import Timer from "../Timer";

const Container = GridBlock.extend`
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export default function GridTimer(props) {
	return (
		<Container {...props}>
			<Timer endDate={moment(props.countdownDate)} />
		</Container>
	);
}
