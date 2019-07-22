import React, { Component } from 'react';
import { Icon, Button } from 'native-base';
import { StyleSheet, Text, View, TextInput, Actions, ImageBackground } from 'react-native';

export default class login extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            title: 'login',

        };
    }
    onLoginPressed() {
        this.props.navigation.navigate('Carte', this.state.title);
    }
    render() {
        return (

            <View style={{
                flex: 1, flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
>
                {/* <ImageBackground
                    source={
                        require('./images/splash.png')
                    }
                    style={{ width: 450, height: 750 }}
                /> */}
                <View >
                    <View>
                        <View>
                            <Icon name='person' style={{ fontSize: 20 }} />
                        </View>
                        <TextInput 
                            placeholder="Username ..."
                            style={{
                                borderBottomWidth: 0,
                                borderBottomColor: 'black',
                                width: 260,
                                height: 50,

                            }}

                        /></View>
                    <View>
                        <View >
                            <Icon name='lock' style={{ fontSize: 20 }} />
                        </View>
                        <TextInput secureTextEntry={true}
                            style={{
                                borderBottomWidth: 0,
                                borderBottomColor: 'black',
                                width: 260,
                                height: 50,

                            }}
                            placeholder="Password ..."

                        />
                    </View>
                    <View style={styles.button}>
                        <Button full success
                            onPress={() => this.state.onLoginPressed}>
                            <Text>SE CONNECTER</Text>
                        </Button>
                    </View>
                    <View >
                        <Text style={styles.motpasse}>Mot de passe oublié ?</Text>
                    </View>
                    <View><Text>OU</Text></View>

                    <View>
                    </View>
                    <View style={styles.buttonfcb}>
                        <Button block info>
                            < Icon name='menu' style={{ fontSize: 20 }} />
                            <Text>SE CONNECTER VIA FACEBOOK</Text>
                        </Button>
                    </View>
                    <View style={styles.buttonGoogle}>
                        <Button block warning>
                            < Icon name='menu' style={{ fontSize: 20 }} />
                            <Text>SE CONNECTER VIA GOOGLE+</Text>
                        </Button>
                    </View>
                    <View>
                        <Text style={styles.inscrire}>S'INSCRIRE</Text>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    inputs: {
        borderBottomWidth: 0,
        borderBottomColor: 'white',
        width: 50, height: 50
    },
    error: {
        marginTop: 10,
        fontSize: 10,
        paddingLeft: 10,
        color: "red",
    },
    button: {
        width: 260,
        height: 50,
        marginTop: 30
    },
    motpasse: {

        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        overflow: 'hidden',
        color: 'white'

    },
    buttonfcb: {
        width: 260,
        height: 50,
        marginTop: 50
    },
    buttonGoogle: {
        width: 260,
        height: 50,
        marginTop: 10
    },

    inscrire: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white'
    }
})