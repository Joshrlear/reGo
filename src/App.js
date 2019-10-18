import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.edit = null
    this.setEditRef = el => {
      this.edit = el.id
    }
    this.state = {
      profileInfo: {
        logo_1: "https://via.placeholder.com/50",
        logo_2: "https://via.placeholder.com/50",
        profile_img: "https://via.placeholder.com/200",
        username: "No name",
        lic: "#000001",
        headline: "This is where your headline goes!",
        brokerage: "Brokerage Name",
        company: "Company Name",
        address_1: "1234 Main Street",
        address_2: "Rancho San Diego, CA 91935",
        campaign_addons: "mailer, oh-flyer, fb-post, email"
      },
      edit: ""
    }
  }

  clicked = e => {
    e.preventDefault()
    console.log(e.target, e.target.id)
    this.setState({
      edit: e.target.id
    })
  }

  render() {
    return (
      <div className="popup">
        <section className="image_section">
          <div className="logo_container">
            <img className="primary_logo logo" src={this.state.profileInfo.logo_1}/>
            <img className="secondary_logo logo" src={this.state.profileInfo.logo_2}/>
          </div>
          <img className="profile_img" src={this.state.profileInfo.profile_img}/>
        </section>
        <section className="info_container">
          <div ref={this.setEditRef} id="edit_username" className="edit_btn" onClick={e => this.clicked(e)}/>
          <p className={`text`}>{this.state.profileInfo.username}</p>
          <input className={`input${this.state.edit === "edit_username" ? " active" : ""}`} placeholder="Name here"/>
          <div ref={this.setEditRef} id="edit_Lic" className="edit_btn" onClick={e => this.clicked(e)}/>
          <p className={`text`}>{this.state.profileInfo.lic}</p>
          <input className={`input${this.state.edit === "edit_Lic" ? " active" : ""}`} placeholder="License here"/>
          
        </section>
      </div>
    );
  }
}

export default App;
