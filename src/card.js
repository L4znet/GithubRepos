import React from 'react';

import axios from 'axios';
import {StyleSheet, Text, View, TouchableHighlight,Linking  } from "react-native";

export default class Card extends React.Component {
    state = {
        repositories: []
    }
    _onPressButton(url) {
        Linking.openURL(url)
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/l4znet/repos`)
            .then(res => {
                const repositories = res.data;
                this.setState({ repositories });
            })
    }

    renderButtons() {
        return this.state.repositories.map((repository) => {
            return (

            <TouchableHighlight onPress={() => { Linking.openURL(repository.html_url) }} underlayColor="white">
                <View style={card.container}>
                    <Text style={text.container}>{repository.name}</Text>
                </View>
            </TouchableHighlight>
            );
        });
    }

    render() {
        return (
            <View>
                {
                    this.renderButtons()
                }
            </View>
        )
    }
}

const card = StyleSheet.create({
    container: {
        height:110,
        width:350,
        backgroundColor: "#5149e8",
        marginTop:20,
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:20,
        paddingLeft:10,
        paddingRight:10
    },
});

const text = StyleSheet.create({
    container: {
        color:"#FFF",
        fontFamily: 'Inter_400Regular',
        fontSize:20,
        textAlign:'center'
    },
});
