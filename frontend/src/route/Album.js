import React from "react";
import { Divider, Card, Icon, Button, Spin } from "antd";

const metaData = [{
    title: "Card",
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"      
  }, {
    title: "Card",
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  }, {
    title: "Card",
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  }, {
    title: "Card",
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  }, {
    title: "Card",
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  }, {
    title: "Card",
    url: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  }
]

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
          data: result.data
        })
      }
    }))
  }

  render () {
    return (
      <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
        <div style={{height: "80px", backgroundColor: "black"}}></div>
        <div style={{flex: 1, backgroundColor: "#f0f0f0"}}>
          <div style={{width: "1360px", margin: "0 auto", height: "100%", backgroundColor: "#ffffff", display: "flex", flexDirection: "column", padding: "10px"}}>
            <div style={{height: "60px", padding: "10px"}}>
              <Button type="primary" onClick={this.loadData}>Reload</Button>
            </div>
            <Divider style={{margin: "0px 0px 10px"}}/>
            <div style={{flex: 1}}>

              {"loaded" === this.state.status && this.state.data.map((item, index) =>
              <Card key={index}
                style={{ width: 300, float: "left", margin: "0px 5px"}}
                cover={
                  <img
                    alt="example"
                    src={item.url}
                  />
                }
                actions={[<Icon type="setting" />]}
              >
                <Card.Meta
                  title={item.title}
                />
              </Card>)}
              {"loading" === this.state.status && 
                <div style={{padding: "100px 0px", textAlign: "center"}}>
                  <Spin />
                </div>
              }
            </div>
          </div>
        </div>
        <div style={{height: "80px", backgroundColor: "black"}}></div>
      </div>
    )
  }
}