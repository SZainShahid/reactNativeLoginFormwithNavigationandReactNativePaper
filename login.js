import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { TextInput, Button, Card, Avatar, Title, Snackbar, Appbar } from 'react-native-paper';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
            isError: false,
            errorMsg: false
        }
    }

    validation() {
        const { userName, password } = this.state
        if (userName == "" && password == "") {
            this.setState({ isError: true, errorMsg: 'Please enter UserName and Password' })
            return false
        }
        else if (userName == "") {
            this.setState({ isError: true, errorMsg: 'Please enter UserName' })
            return false
        }
        else if (password == "") {
            this.setState({ isError: true, errorMsg: 'Please enter Password' })
        }
        else {
            return true
        }
    }

    onSignIn = () => {
        if (this.validation()) {
            this.setState({ isError: true, errorMsg: 'Signed in', userName: "", password: "" })
        }
    }

    render() {
        const { isError, userName, password } = this.state
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {
                    isError == true &&
                    <Snackbar
                        visible={this.state.isError}
                        onDismiss={() => this.setState({ isError: false })}
                        action={{
                            label: 'Dismiss',
                            onPress: () => {
                                this.setState({ isError: false })
                            },
                        }}>
                        {this.state.errorMsg}
                    </Snackbar>
                }
                <View style={{ width: '80%', alignSelf: 'center' }}>
                    <StatusBar style="auto" />
                    <Card>
                        <Card.Content>
                            <Title>Login</Title>
                            <TextInput
                                label="User Name"
                                value={userName}
                                onChangeText={text => this.setState({ userName: text })}
                            />
                            <TextInput
                                style={{ marginTop: 10 }}
                                secureTextEntry = {true}
                                label="Password"
                                value={password}
                                onChangeText={text => this.setState({ password: text })}
                            />
                            <Card.Actions style={{ justifyContent: 'center' }}>
                                <Button style={{ marginTop: 10, justifyContent: 'center' }} contentStyle={{ height: 50 }}
                                    icon='login' mode="contained"
                                    onPress={() => this.onSignIn()}>
                                    Sign In
                                </Button>
                            </Card.Actions>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        )
    }
}
export default Login 