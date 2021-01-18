import React from 'react';
import HorizontalTimeline from "react-horizontal-timeline";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const data = [
  {
    date: "2018-09-22",
    content: "The police finally had registered a complaint on 20 Sep. Initially registered as assault and SC/ST Act case, gangrape was later added to the list of charges after the police were able to take an official statement from the victim. In her three recorded statements she mentioned that she was raped and strangulated when she tried to resist. She was later shifted to Safdarjung Hospital after her condition worsened.",
  },
  {
    date: "2018-09-23",
    content: "The victim died succumbing to her injuries in Sajdarjung Hospital, New Delhi. The autopsy registered the cause of death as “injury to the cervical spine by blunt force trauma”. The victim was cremated at 2:30am by the UP  Police. The Allahabad High Court took suo moto cognizance of the case asking the victim’s family, the DM and the SP to appear before it.",
  },
  {
    date: "2018-09-24",
    content: "The police finally had registered a complaint on 20 Sep. Initially registered as assault and SC/ST Act case, gangrape was later added to the list of charges after the police were able to take an official statement from the victim. In her three recorded statements she mentioned that she was raped and strangulated when she tried to resist. She was later shifted to Safdarjung Hospital after her condition worsened.",
  },
  {
    date: "2018-09-25",
    content: "The victim died succumbing to her injuries in Sajdarjung Hospital, New Delhi. The autopsy registered the cause of death as “injury to the cervical spine by blunt force trauma”. The victim was cremated at 2:30am by the UP  Police. The Allahabad High Court took suo moto cognizance of the case asking the victim’s family, the DM and the SP to appear before it.",
  },
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
      const date = data[curIdx].date;
      const { classes } = this.props;
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
                foreground: "#1E1E1E",
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
          <div style={{ display:'flex', justifyContent:'center' }}>
          <Card style={{width: '25rem', backgroundColor:'#1E1E1E'}}>
          <CardContent>
            <Typography style={{color: '#F5F5F5', fontWeight: 'normal'}}>
              {daily_content}
            </Typography>
          </CardContent>
          </Card>
            </div>
          </div>
      );
    }
  }


  
