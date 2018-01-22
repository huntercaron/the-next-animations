import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";
import GridBlock from "../GridBlock";

const Container = GridBlock.extend`
`;

const TimerContainer = styled.div`
  ${props => !props.vertical && 'display: flex;'};
`

const TimerNumber = styled.div`
  ${props => props.vertical && 'width: 2.5rem;'};
  ${props => props.vertical && 'writing-mode: vertical-lr;'};
  font-variant-numeric: tabular-nums;
  -moz-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  letter-spacing: -1px;

  p {
    margin: 0;
  }
`

const Hide = styled.span`
  opacity: 0;
  font-size: 1.5rem;
`

const ColonWrapper = styled.span`
`

function Colon() {
  return (
    <ColonWrapper><Hide>:</Hide>:<Hide>:</Hide></ColonWrapper>
  )
}

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeRemaining: {
				months: "",
				days: "",
				h: "",
				m: "",
				s: "",
				interval: function() {}
			},
			startDate: new moment(),
			min: new Date(),
			startTimer: false
		};
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.state.interval = setInterval(this.tick, 1000);
    this.afterEachSecond(this.props.endDate);
	}

	componentWillUnmount() {
		this.state.interval && clearInterval(this.state.interval);
	}

	tick() {
		if (typeof this.props.endDate === typeof new Date()) {
			this.afterEachSecond(this.props.endDate);
		} else {
			console.log("timer error");
		}
	}

	afterEachSecond(endDate) {
		var temp = { months: "", days: "", h: "", m: "", s: "" };
		var now = moment(); // today's date
		var end = moment(endDate); // end date
		var duration = moment.duration(end.diff(now));

		if (duration.asSeconds() >= 0) {
			if (Math.floor(duration.asDays()) > 0) {
				if (Math.floor(duration.asDays()) < 10) {
					temp.days = "0" + Math.floor(duration.asDays());
				} else {
					temp.days = Math.floor(duration.asDays());
				}
			}
			if (Math.floor(duration.asHours()) > 0) {
				if (Math.floor(duration.hours()) < 10) {
					temp.h = "0" + Math.floor(duration.hours());
				} else {
					temp.h = Math.floor(duration.hours());
				}
			}
			if (Math.floor(duration.asMinutes()) > 0) {
				if (Math.floor(duration.minutes()) < 10) {
					temp.m = "0" + Math.floor(duration.minutes());
				} else {
					temp.m = Math.floor(duration.minutes());
				}
			}
			if (Math.floor(duration.asSeconds()) > 0) {
				if (Math.floor(duration.seconds()) < 10) {
					temp.s = "0" + Math.floor(duration.seconds());
				} else {
					temp.s = Math.floor(duration.seconds());
				}
			}
		}
		this.setState({
			timeRemaining: temp
		});
	}

	render() {
		return (
			<TimerContainer vertical={this.props.vertical}>
        {this.state.timeRemaining.months && (
					<TimerNumber vertical={this.props.vertical}> <p>{this.state.timeRemaining.months}<Colon/></p>  </TimerNumber>
        )}
				{this.state.timeRemaining.days && (
					<TimerNumber vertical={this.props.vertical}> <p>{this.state.timeRemaining.days}<Colon/></p>  </TimerNumber>
				)}
				{this.state.timeRemaining.h && (
					<TimerNumber vertical={this.props.vertical}> <p>{this.state.timeRemaining.h}<Colon/></p>  </TimerNumber>
				)}
				{this.state.timeRemaining.m && (
					<TimerNumber vertical={this.props.vertical}><p>{this.state.timeRemaining.m}<Colon/></p>  </TimerNumber>
				)}
				{this.state.timeRemaining.s && (
					<TimerNumber vertical={this.props.vertical}><p>{this.state.timeRemaining.s}</p> </TimerNumber>
				)}
			</TimerContainer>
		);
	}
}

Timer.propTypes = {
	endDate: PropTypes.object.isRequired
};
