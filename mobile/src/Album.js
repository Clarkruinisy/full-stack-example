import React from "react";
import { View, Text, FlatList, Image } from "react-native";


export class Album extends React.Component {

  state = {
    status: "loading",
    data: []
  }

  componentWillMount() {
    this.loadData()
  }

  loadData = () => {
    // this.setState({
    //   status: "loading"
    // }, () => setTimeout(() => {
    //   this.setState({
    //     data: metaData,
    //     status: "loaded"
    //   })
    // }, 500))
    this.setState({
      status: "loading"
    }, () => fetch("http://52.52.212.227:8900/").then(response => response.json()).then(result => {
      if (result.success) {
        this.setState({
          status: "loaded",
          data: result.data.map((item, index) => ({
            ...item,
            key: index + ""
          }))
        })
      }
    }))
  }

  render () {
    return <View style={{display: "flex", height: "100%"}}>
      <View style={{height: 80, paddingTop: 40, paddingLeft: 10, backgroundColor: "black"}}>
        <Text style={{color: "white", fontSize: 20}}>Album List</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <View>
            <Image style={{width: "100%", height: 150}}
              source={{uri: item.url}}/>
            <Text>{item.title}</Text>
          </View>}
        />
      </View>
    </View>
  }
}