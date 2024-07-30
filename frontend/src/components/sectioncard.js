import React from 'react';
import { Card, Input } from 'antd';

class SectionCard extends React.Component {

  render() {
    {
        return (
            <>
              <div style={{ borderRadius: 25 }}>
                <Card style={{ borderRadius: 25, overflow: 'hidden', backgroundColor: '#e6e6e6' }}>
                  <Card.Meta
                    title={
                      <>
                        <div style={{ color: 'gray', fontSize: 'Small' }}>Section {this.props.section}</div>
                        <div style={{ fontSize: 'Large', whiteSpace: 'normal' }}>{this.props.prompt}</div>
                      </>
                    }
                    description={
                      <div style={{ fontSize: 'Medium', lineHeight: '2em' }}>
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement1}<br />
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement2}<br />
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement3}<br />
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement4}<br />
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement5}<br />
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement6}<br />
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement7}<br />
                        <Input
                          type="number"
                          style={{ marginRight: '10px', width: '50px' }}
                        />{this.props.statement8}
                      </div>
                    }
                  />
                </Card>
              </div>
            </>
          );
          
     
    
    }
  }

}

export default SectionCard;
