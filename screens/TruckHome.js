import React from "react";

import {
  AppState,
  AsyncStorage,
  Button,
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Switch,
  View
} from "react-native";

import { connect } from "react-redux";

let logo = require("../assets/images/BlueLogo.png");

class TruckHome extends React.Component {
  static navigationOptions = {
    header: null
  };

  render = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: "#38b6ff",
        justifyContent: "space-between"
      }}
    >
      <View
        style={{
          width: Dimensions.get("window").width,
          height: 15,
          backgroundColor: "#38b6ff"
        }}
      />

      <View>
        <Switch />
      </View>

      <Button
        style={{
          width: 51,
          justifyContent: "center",
          borderColor: "black",
          borderWidth: 2
        }}
        title="Sign out"
        onPress={() => this.props.navigation.navigate("Landing")}
      />
    </View>
  );
}

export default connect()(TruckHome);
