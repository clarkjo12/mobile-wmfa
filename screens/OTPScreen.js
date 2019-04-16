import React from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Slider,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";

import { connect } from "react-redux";
import Logo from "../assets/images/Logo.png";
import LogoText from "../assets/images/LogoTextUser.png";

const styles = StyleSheet.create({
  logo: {
    height: 80
  },
  logoText: {
    width: 50
  },
  code: {
    color: "black",
    fontWeight: "bold",
    fontSize: 34,
    paddingTop: 40,
    paddingBottom: 8
  },
  inputs: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    padding: 4,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 12,
    width: "56%"
  },
  MommaDiv: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: 30,
    borderColor: "black",
    borderWidth: 1,
    padding: 50
  },
  subButton: {
    backgroundColor: "palevioletred",
    borderRadius: 3,
    marginTop: 20
  },
  switch: {
    backgroundColor: "yellow"
  }
});

class OTPScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  onLoginTextPressed(){
    this.props.navigation.goBack();
  }


  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffbd59"
        }}
      >
          <Image
            style={{ width: 150, height: 150, marginTop: 60, marginBottom: 8 }}
            source={Logo}
            alt="nope"
          />

        <Image
          style={{ width: "80%", height: 80, marginBottom: 40 }}
          source={LogoText}
          alt="nope"
        />

        <Text style={styles.code}>enter code:</Text>

        <TextInput style = { styles.inputs } 
            secureTextEntry = {true}
            placeholder = "******" />
        <TouchableOpacity
          onPress={() => this.onLoginTextPressed()}>
          <Text>New User?</Text>
        </TouchableOpacity>

        <View style={styles.subButton}>
          <Button
            style={{ color: "#ff0000" }}
            title="Submit"
            onPress={() => this.props.navigation.navigate("Truck")}
          />
        </View>
      </View>
    );
  }
}

export default connect()(OTPScreen);
