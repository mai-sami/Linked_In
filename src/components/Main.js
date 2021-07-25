import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../App.css";

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="image__post"component="div" style={{ backgroundColor: '#cf33e8fc', height: '90vh' }} >
        <img  className="image__post" src="https://scontent.fgza9-1.fna.fbcdn.net/v/t1.6435-9/s600x600/55549631_351018352202508_6136465117212049408_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=9EaBub4l_QkAX_t7wV_&tn=rtdbt8BNfE9Yh8d0&_nc_ht=scontent.fgza9-1.fna&oh=c697c79a33094fe27fca32fc1ded338d&oe=6120BEF1" />
        <div>
        <div id="shows_comment" > 
  <div className="content__footer">
          <div className="sendNewMessagee">
          <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
        
            <input id="boxx_comments" placeholder= " اضافة تعليق"/>
            <AccountCircleIcon style={{ fontSize:36 }}/>

            
          </div>
        </div>
</div>
        </div>
        
        </div>
        
      </Container>
    </React.Fragment>
  );
}