import React from 'react';
import HorizontalTimeline from "react-horizontal-timeline";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const data = [
  {
    date: "2018-09-22",
    content: "status",
  },
  {
    date: "2018-09-23",
    content: "status",
  }
];

export default class Timeline extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        curIdx: 0,      
      };
    }
  
    //state = { value: 0, previous: 0 };
  
    render() {    
      const {curIdx} = this.state;
      const daily_content = data[curIdx].content;
  
      return (
        <div>
          {/* Bounding box for the Timeline */}
          <div
            style={{
              width: "60%",
              height: "100px",
              margin: "0 auto",
              marginTop: "20px",
              fontSize: "15px"
            }}
          >
            <HorizontalTimeline
              styles={{
                background: "#f8f8f8",
                foreground: "#1A79AD",
                outline: "#dfdfdf"
              }}
              index={this.state.curIdx}
              indexClick={index => {
                const curIdx = this.state.curIdx;
                this.setState({ curIdx: index, prevIdx: curIdx });
              }}            
              values={data.map(x => x.date)}
            />
          </div>
          <div>
              <Box display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="10vh" >{daily_content}</Box>

            </div>
          </div>
      );
    }
  }