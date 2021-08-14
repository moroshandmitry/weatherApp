import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lighting',
		gradient: ['#141E30', '#243B55'],
		title: 'Сиди дома!',
		subtitle: 'Ты видишь что на улице?',
	},
	Dizzle: {
		iconName: 'weather-rainy',
		gradient: ['#3a7bd5', '#3a6073'],
		title: 'Возьми зонтик!',
		subtitle: 'Возможно скоро дождь усилится.',
	},
	Rain: {
		iconName: 'rainy',
		gradient: ['#3a7bd5', '#3a6073'],
		title: 'На улице дождь!',
		subtitle: 'Пейте чай у камина...',
	},
	Snow: {
		iconName: 'snow',
		gradient: ['#83a4d4', '#b6fbff'],
		title: 'На улице снежок!',
		subtitle: 'Одевайтесь потеплее...',
	},
	Dust: {
		iconName: 'weather-windy-variant',
		gradient: ['#000046', '#1CB5E0'],
		title: 'Пыльно!',
		subtitle: 'Лучше закрыть окна...',
	},
	Smoke: {
		iconName: 'weather-windy',
		gradient: ['#56CCF2', '#2F80ED'],
		title: 'На улице туман!',
		subtitle: 'Будьте внимательнее...',
	},
	Haze: {
		iconName: 'weather-hazy',
		gradient: ['#3E5151', '#DECBA4'],
		title: 'На улице снежок!',
		subtitle: 'Одевайтесь потеплее...',
	},
	Mist: {
		iconName: 'weather-fog',
		gradient: ['#606c88', '#3f4c6b'],
		title: 'Густой туман!',
		subtitle: 'Лучше за руль не садиться...',
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#56CCF2', '#2F80ED'],
		title: 'Погода супер!',
		subtitle: 'Выйди подышать свежим воздухом...',
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#757F9A', '#D7DDE8'],
		title: 'Облачно',
		subtitle: 'Возьмите на всякий случай зонт!',
	},
};

export const Weather = ({ temp, condition }) => {
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle='light-content' />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName}
					size={96}
					color='#fff'
				/>
				<Text style={styles.temp}>{temp}&#8451;</Text>
			</View>
			<View style={[styles.halfContainer, styles.textContainer]}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>
					{weatherOptions[condition].subtitle}
				</Text>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	temp: {
		color: '#fff',
		fontSize: 42,
	},
	title: {
		color: '#fff',
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10,
	},
	subtitle: {
		color: '#fff',
		fontSize: 24,
		fontWeight: '700',
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start',
	},
});
