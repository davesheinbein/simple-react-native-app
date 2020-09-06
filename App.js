import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	View,
	Text,
	Image,
	SectionList,
	Button,
	Modal,
	TouchableHighlight,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
	{
		title: 'Main dishes',
		data: ['Pizza', 'Burger', 'Risotto'],
	},
	{
		title: 'Sides',
		data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
	},
	{
		title: 'Drinks',
		data: ['Water', 'Coke', 'Beer'],
	},
	{
		title: 'Desserts',
		data: ['Cheese Cake', 'Ice Cream'],
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

export default class App extends Component {
	state = {
		modalVisible: false,
	};

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};

	onPressLearnMore() {
		<View style={styles.learnMore}>
			<Text style={styles.learnMoreText}>Hello</Text>
		</View>;
	}
	render() {
		const { modalVisible } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.heading}>
					Simple React Native App
				</Text>
				<View style={styles.mainContainer}>
					<ScrollView style={styles.scrollView}>
						<Image
							style={styles.tinyLogo}
							source={{
								uri:
									'https://source.unsplash.com/random/400x400',
							}}
						/>
						<Text style={styles.subHeading}>
							Description
						</Text>
						<Text style={styles.body}>
							Dolor amet id aute cillum culpa aliquip est
							eiusmod eiusmod pariatur ea deserunt. Sunt
							reprehenderit mollit deserunt proident
							consectetur aliquip esse eu exercitation magna
							culpa enim qui. Incididunt proident
							reprehenderit eiusmod in dolore. Deserunt
							deserunt excepteur et consequat cupidatat sunt
							enim amet commodo ut sit mollit nostrud
							occaecat. Ad incididunt occaecat nisi Lorem
							esse. In nostrud enim pariatur non laborum
							laborum proident voluptate sint ut quis fugiat
							adipisicing non. Tempor magna enim non
							voluptate ad quis ut ex eu enim fugiat laborum
							sint in. Irure mollit cillum do excepteur quis
							id eiusmod amet incididunt eu quis. Deserunt
							occaecat tempor dolor reprehenderit non qui
							culpa. Anim sint sint consectetur ea commodo
							enim officia ut laborum anim laboris
							exercitation tempor qui. Fugiat occaecat
							cupidatat aliquip nisi ex culpa quis dolor qui
							nostrud minim consequat.
							{'\n'}
							{'\n'}
							Dolor amet id aute cillum culpa aliquip est
							eiusmod eiusmod pariatur ea deserunt. Sunt
							reprehenderit mollit deserunt proident
							consectetur aliquip esse eu exercitation magna
							culpa enim qui. Incididunt proident
							reprehenderit eiusmod in dolore. Deserunt
							deserunt excepteur et consequat cupidatat sunt
							enim amet commodo ut sit mollit nostrud
							occaecat. Ad incididunt occaecat nisi Lorem
							esse. In nostrud enim pariatur non laborum
							laborum proident voluptate sint ut quis fugiat
							adipisicing non. Tempor magna enim non
							voluptate ad quis ut ex eu enim fugiat laborum
							sint in. Irure mollit cillum do excepteur quis
							id eiusmod amet incididunt eu quis. Deserunt
							occaecat tempor dolor reprehenderit non qui
							culpa. Anim sint sint consectetur ea commodo
							enim officia ut laborum anim laboris
							exercitation tempor qui. Fugiat occaecat
							cupidatat aliquip nisi ex culpa quis dolor qui
							nostrud minim consequat.
							{'\n'}
							{'\n'}
							Dolor amet id aute cillum culpa aliquip est
							eiusmod eiusmod pariatur ea deserunt. Sunt
							reprehenderit mollit deserunt proident
							consectetur aliquip esse eu exercitation magna
							culpa enim qui. Incididunt proident
							reprehenderit eiusmod in dolore. Deserunt
							deserunt excepteur et consequat cupidatat sunt
							enim amet commodo ut sit mollit nostrud
							occaecat. Ad incididunt occaecat nisi Lorem
							esse. In nostrud enim pariatur non laborum
							laborum proident voluptate sint ut quis fugiat
							adipisicing non. Tempor magna enim non
							voluptate ad quis ut ex eu enim fugiat laborum
							sint in. Irure mollit cillum do excepteur quis
							id eiusmod amet incididunt eu quis. Deserunt
							occaecat tempor dolor reprehenderit non qui
							culpa. Anim sint sint consectetur ea commodo
							enim officia ut laborum anim laboris
							exercitation tempor qui. Fugiat occaecat
							cupidatat aliquip nisi ex culpa quis dolor qui
							nostrud minim consequat.
						</Text>
						<StatusBar style='auto' />
						<SectionList
							style={styles.subContainer}
							sections={DATA}
							keyExtractor={(item, index) => item + index}
							renderItem={({ item }) => (
								<Item title={item} />
							)}
							renderSectionHeader={({
								section: { title },
							}) => (
								<Text style={styles.subHeader}>
									{title}
								</Text>
							)}
						/>
						<View style={styles.btnContainer}>
							<Button
								style={styles.btn}
								onPress={this.onPressLearnMore}
								title='Hey'
								color='#ffffff'
								accessibilityLabel='Learn more about this purple button'
							/>
						</View>
						<View style={styles.centeredView}>
							<Modal
								animationType='slide'
								transparent={true}
								visible={modalVisible}
								onRequestClose={() => {
									Alert.alert('Modal has been closed.');
								}}>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<Text style={styles.modalText}>
											Hello World!
										</Text>

										<TouchableHighlight
											style={{
												...styles.openButton,
												backgroundColor: '#2196F3',
											}}
											onPress={() => {
												this.setModalVisible(!modalVisible);
											}}>
											<Text style={styles.textStyle}>
												Hide Modal
											</Text>
										</TouchableHighlight>
									</View>
								</View>
							</Modal>

							<TouchableHighlight
								style={styles.openButton}
								onPress={() => {
									this.setModalVisible(true);
								}}>
								<Text style={styles.textStyle}>
									Show Modal
								</Text>
							</TouchableHighlight>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		position: 'relative',
		width: '100%',
		height: '100%',
		marginTop: Constants.statusBarHeight,
		backgroundColor: 'pink',
	},

	mainContainer: {
		flex: 18,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		width: '100%',
		height: '10%',
		marginTop: Constants.statusBarHeight,
		backgroundColor: 'pink',
	},
	scrollView: {
		width: '100%',
		height: '100%',
		marginBottom: 40,
	},
	heading: {
		flex: 1,
		backgroundColor: '#5555',
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		width: '100%',
		fontSize: 35,
		fontFamily: 'Cochin',
	},
	tinyLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		width: '90%',
		height: 350,
		marginHorizontal: '5%',
		padding: '5%',
	},
	subHeading: {
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'left',
		width: '100%',
		marginTop: '5%',
		paddingHorizontal: '5%',
		fontSize: 28,
		fontFamily: 'Cochin',
	},
	body: {
		justifyContent: 'center',
		alignContent: 'center',
		width: '90%',
		height: 1630,
		textAlign: 'left',
		marginHorizontal: '5%',
		marginVertical: '5%',
		fontSize: 20,
		color: '#ffffff',
	},
	subContainer: {
		width: '100%',
	},
	title: {
		fontSize: 24,
	},
	subHeader: {
		fontSize: 32,
		backgroundColor: '#fff',
		width: '100%',
		height: 40,
	},
	item: {
		backgroundColor: '#f9c2ff',
		color: 'black',
		justifyContent: 'center',
		alignContent: 'center',
		marginVertical: 8,
		padding: 10,
		width: '100%',
	},
	btnContainer: {
		backgroundColor: '#f55555',
		color: '#f9c2ff',
		justifyContent: 'center',
		alignContent: 'center',
		left: '40%',
		width: '100%',
		marginVertical: 8,
		position: 'relative',
		padding: 10,
		width: 80,
		borderRadius: 50,
	},
	btn: {},
	learnMore: {
		backgroundColor: 'black',
		color: '#f9c2ff',
		justifyContent: 'center',
		alignContent: 'center',
		marginVertical: 8,
		padding: 10,
		width: '100%',
	},
	learnMoreText: {
		color: '#f9c2ff',
		justifyContent: 'center',
		alignContent: 'center',
		marginVertical: 8,
		padding: 10,
		width: '100%',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	openButton: {
		backgroundColor: '#F194FF',
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});
