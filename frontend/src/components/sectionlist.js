import React from 'react';
import { Col, Row } from 'antd';
import SectionCard from './sectioncard';
import { status, json } from '../utilities/requestHandlers';


class SectionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: []
    }
  }

  // Fetch all sections from API
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/sections')
    .then(status)
    .then(json)
    .then(data => {
      this.setState({ sections: data })
    })
    .catch(err => 
      console.log("Error fetching sections", err));

  }

  render() {
    if (!this.state.sections.length) {
      return <h3 style={{ textAlign:'center', padding:15 }}>Loading sections...</h3>
    }

    const cardList = this.state.sections.map((section, index) => {
      return (
        <>
        <Col span={4} />
        <Col span={16}>
          <div style={{padding:"10px"}} key={index}>
            <SectionCard {...section} />  
          </div>
        </Col>
        <Col span={4} />
        </>
      )
    });
    return (
      <Row type="flex" justify="space-around">
        {cardList}
      </Row>
    );
  }
}

export default SectionList;
