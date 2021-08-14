import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import { Loading } from './components/Loading/index';
import { Weather } from './components/Weather/index';

const API_KEY = '760ff5a87573b0b678cda7a14c133922';
// https://api.openweathermap.org/data/2.5/weather?lat=46.995865599999995&lon=28.8456704&appid=760ff5a87573b0b678cda7a14c133922&units=metric
export default class extends Component {
	state = {
		isLoading: true,
	};

	getWeather = async (latitude: number, longitude: number) => {
		const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
		const {
			data: {
				main: { temp },
				weather: [{ main }],
			},
		} = await axios.get(URL);

		this.setState({
			isLoading: false,
			temp: temp,
			condition: main,
		});
	};

	getLocation = async () => {
		try {
			await Location.requestForegroundPermissionsAsync();
			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync();
			console.log(latitude, longitude);
			this.getWeather(latitude, longitude);

			//TODO
		} catch (error) {
			Alert.alert('Не могу определить местоположение!', 'Очень грустно :(');
		}
	};

	componentDidMount() {
		this.getLocation();
	}

	render() {
		const { isLoading, temp, condition } = this.state;

		return isLoading ? (
			<Loading />
		) : (
			<Weather temp={Math.round(temp)} condition={condition} />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
