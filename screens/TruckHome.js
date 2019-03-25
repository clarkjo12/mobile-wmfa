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
import { underline, bold } from "ansi-colors";

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
          paddingTop: 30,
          backgroundColor: "#38b6ff",
          alignSelf: "center"
        }}
      >
        <Image
          source={logo}
          style={{
            width: 300,
            height: 70,
            paddingTop: 15,
            backgroundColor: "#38b6ff",
            alignSelf: "center"
          }}
        />
      </View>

      <View>
        <Text
          style={{
            paddingBottom: 20,
            backgroundColor: "#38b6ff",
            alignSelf: "center",
            textDecorationLine: "underline",
            fontSize: 20
          }}
        >
          Truck Status
        </Text>
        <View
          style={{
            paddingBottom: 20,
            backgroundColor: "yellow",
            alignSelf: "center",
            width: 70,
            height: 70,
            borderRadius: 35
          }}
        />
      </View>
      <View>
        <Text
          style={{
            paddingBottom: 20,
            backgroundColor: "#38b6ff",
            alignSelf: "center",
            textDecorationLine: "underline",
            fontSize: 35
          }}
        >
          Driving?
        </Text>
        <Switch
          style={{
            backgroundColor: "#38b6ff",
            alignSelf: "center"
          }}
        />
      </View>

      <View>
        <Text
          style={{
            paddingBottom: 20,
            backgroundColor: "#38b6ff",
            alignSelf: "center",
            textDecorationLine: "underline",
            fontSize: 35
          }}
        >
          Serving!
        </Text>
        <Switch
          style={{
            backgroundColor: "#38b6ff",
            alignSelf: "center"
          }}
        />
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
