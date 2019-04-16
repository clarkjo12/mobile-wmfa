import React, {Component} from "react";

import {
  Button,
  Dimensions,
  Image,
  TextInput,
  View, Text, Switch,
  ScrollView
} from "react-native";

let logo = require("../assets/images/BlueLogo.png");

export default class TruckHome extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    laPos: 'unknown',
    loPos: 'unknown',
    backcolor: 'pink',
    firstswitchval:false,
    secondswitchval:false,
    thirdswitchval:false,
    isTrucker: false,
    password: '',
    counter: null
 }

 componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          const laPos = JSON.stringify(position.coords.latitude);
          const loPos = JSON.stringify(position.coords.longitude);

          this.setState({ laPos });
          this.setState({ loPos });

       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  
 }
  // findTrucker = () => {
  //   fetch("https://evening-brushlands-53491.herokuapp.com/api/truckers/5c6ded53fb6fc01c4ce8fc5c", {method: "GET", headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',}
  //     })
  //   .then((response) => {
  //     console.log(response);
  //   })
  // }
  // componentDidMount = () => {
    
  // }
  updateForDriving(){
    // alert(this.state.laPos);
    //alert(this.state.laPos+"/"+this.state.loPos);
    // setInterval( () => {

    // changes by Rahul
      // this.interval = setInterval(() => {
        // this.setState({counter: this.state.counter + 1});
        console.log(this.state.counter);
        fetch("https://evening-brushlands-53491.herokuapp.com/api/truckers/5cab58e2c38f510034704e16", {method: "PUT", headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          "username": "kongkong"+this.state.counter,
          "password": "kingking",
          "title": "kingking's Kitchen",
          "status": "closed",
          "favorites": 0,
          "location": {
            "coordinates": [Number(this.state.laPos), Number(this.state.loPos)]
          },
          "picture": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiv06j50p3gAhWwZd8KHbuyCssQjRx6BAgBEAU&url=http%3A%2F%2Fthemetapicture.com%2Fi-hate-tacos%2F&psig=AOvVaw1sMD6HB7A3PpdLH25DoR7c&ust=1549217445029750",
          "summary": "Tacos, Tacos, Who wants tacos?"
        })})
        .then((response) => {
          console.log("result:--", response);
        }) 
    // changes by Rahul
    // }, 5000);
  }
  updateForServing (){
      fetch("https://evening-brushlands-53491.herokuapp.com/api/truckers/5cab58e2c38f510034704e16", {method: "PUT", headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        "username": "kongkong",
        "password": "kingking",
        "title": "kingking's Kitchen",
        "status": "closed",
        "favorites": 0,
        "location": {
          "coordinates": [Number(this.state.laPos), Number(this.state.loPos)]
        },
        "picture": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiv06j50p3gAhWwZd8KHbuyCssQjRx6BAgBEAU&url=http%3A%2F%2Fthemetapicture.com%2Fi-hate-tacos%2F&psig=AOvVaw1sMD6HB7A3PpdLH25DoR7c&ust=1549217445029750",
        "summary": "Tacos, Tacos, Who wants tacos?"
      })})
      .then((response) => {
        console.log(response);
      }) 
  }

  updateForDone () {
    fetch("https://evening-brushlands-53491.herokuapp.com/api/truckers/5cab58e2c38f510034704e16", {method: "PUT", headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      "username": "kongkong",
      "password": "kingking",
      "title": "kingking's Kitchen",
      "status": "closed",
      "favorites": 0,
      "location": {
        "coordinates": [Number(this.state.laPos), Number(this.state.loPos)]
      },
      "picture": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiv06j50p3gAhWwZd8KHbuyCssQjRx6BAgBEAU&url=http%3A%2F%2Fthemetapicture.com%2Fi-hate-tacos%2F&psig=AOvVaw1sMD6HB7A3PpdLH25DoR7c&ust=1549217445029750",
      "summary": "Tacos, Tacos, Who wants tacos?"
    })})
    .then((response) => {
      console.log(response);
    }) 
}

  handlebackcolor1 = () => {
    if(this.state.backcolor == "yellow")
      this.setState({backcolor:'pink', firstswitchval:!this.state.firstswitchval});
    else
      this.setState({backcolor:'yellow', firstswitchval:!this.state.firstswitchval,
      secondswitchval:false, thirdswitchval:false});
  }
  handlebackcolor2 = () => {
    if(this.state.backcolor == "green")
      this.setState({backcolor:'pink', secondswitchval:!this.state.secondswitchval});
    else
      this.setState({backcolor:'green', secondswitchval:!this.state.secondswitchval,
      firstswitchval:false, thirdswitchval:false});
  }

  handlebackcolor3 = () => {
    if(this.state.backcolor == "red")
      this.setState({backcolor:'pink', thirdswitchval:!this.state.thirdswitchval});
    else
      this.setState({backcolor:'red', thirdswitchval:!this.state.thirdswitchval,
      firstswitchval:false, secondswitchval:false});
  }

  submit = () => {
    console.log(this.state.password);
    if(this.state.password != "sd")
    {
      if(this.state.backcolor == 'red')
      {
        this.updateForDone();
      }
      else if(this.state.backcolor == 'yellow')
      {
        this.updateForDriving();
      }
      else if(this.state.backcolor == 'green')
      {
        this.updateForServing();
      }
    }
    else
    {
      alert("login error!");
    }
  }
  render = () => (
    <ScrollView  style={{
      flex: 1,
      backgroundColor: "#38b6ff",
      }}> 
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
            marginTop:32,
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
            backgroundColor: this.state.backcolor,
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
            alignSelf: "center",
          }}
          onValueChange={this.handlebackcolor1}
          value = {this.state.firstswitchval}

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
            alignSelf: "center",
          }}
          onValueChange={this.handlebackcolor2}
          value = {this.state.secondswitchval}

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
          Done!
        </Text>
        <Switch
          style={{
            backgroundColor: "#38b6ff",
            alignSelf: "center",
          }}
          onValueChange={this.handlebackcolor3}
          value = {this.state.thirdswitchval}

        />
      </View>
      <View style={{marginTop:48}}>
        <TextInput style={{
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 3,
            padding: 5,
            margin: 7,
            alignSelf: "center",
            width: "55%"
          }}
          onChangeText={(password) => this.setState({password})}
          value = {this.state.password}
          placeholder="Password" />
        <Button
          style={{
            width: 51,
            justifyContent: "center",
            borderColor: "black",
            borderWidth: 2
          }}
          title="Submit"
          // onPress={this.addTrucksArray}
          onPress={this.submit}

        />
      </View>
      <Button
        style={{
          width: 51,
          justifyContent: "center",
          borderColor: "black",
          borderWidth: 2,
          marginTop:48,
        }}
        title="Sign out"
        onPress={() => this.props.navigation.navigate("Landing")}
      />
    </View>
    </ScrollView>
  );
}

