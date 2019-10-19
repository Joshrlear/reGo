import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.edit = null
    this.inputRef = null
    this.setEditRef = el => {
      this.edit = el.id
    }
    this.state = {
      logo_1: "https://via.placeholder.com/50",
      logo_2: "https://via.placeholder.com/50",
      profile_img: "https://via.placeholder.com/150",
      username: "No name",
      lic: "#000001",
      headline: "This is where your headline goes!",
      brokerage: "Brokerage Name",
      company: "Company Name",
      address_1: "1234 Main Street",
      address_2: "Rancho San Diego, CA 91935",
      edit: ""
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value || "Empty"
    })
  }

  clicked = e => {
    if (this.state.edit === "" || this.state.edit !== e.target.id) {
      setTimeout(() => {
        const input = document.getElementsByClassName("active").item(0)
        input && input.focus()
      },0)
      this.setState({
        edit: e.target.id
      })
    }
    else {
      this.setState({
        edit: ""
      })
    }
  }

  render() {
    return (
      <div className="popup">
        <section className="image_section">
          <div className="logo_container">
            <div className="imgUpload_wrapper">
              <img className="logo_1 logo" src={this.state.logo_1}/>
              <input id="upload_logo_1" type="file"/>
              <i id="edit_logo_1" 
                 className="fas fa-pen-square edit_btn"
                 onClick={e => {
                  this.clicked(e) 
                  document.getElementById("upload_logo_1").click()
                 }}/>
            </div>
            <div className="imgUpload_wrapper">
              <img className="logo_2 logo" src={this.state.logo_2}/>
              <input id="upload_logo_2" type="file"/>
              <i id="edit_logo_2" 
                 className="fas fa-pen-square edit_btn"
                 onClick={e =>  {
                  this.clicked(e) 
                  document.getElementById("upload_logo_2").click()
                 }}/>
            </div>
          </div>
          <div id="profile_img_wrapper" className="imgUpload_wrapper">
            <img className="profile_img" src={this.state.profile_img}/>
            <input id="upload_profile_img" type="file"/>
            <i id="edit_profile_img" 
               className="fas fa-pen-square edit_btn"
               onClick={e =>  {
                this.clicked(e) 
                document.getElementById("upload_profile_img").click()
               }}/>
          </div>
        </section>
        <section className="info_container">
        <form className="input_container">
          <i id="edit_username" 
           className="fas fa-pen-square edit_btn"
           onClick={e => this.clicked(e)}/>
          <input id="username"
                 className={`input${this.state.edit === "edit_username" ? " active" : ""}`} 
                 placeholder="Name here"
                 onChange={e => this.handleInput(e)}
                 onKeyPress={e => e.key === "Enter" && this.clicked(e)}/>
          <p className={`text${this.state.edit === "edit_username" ? " hidden" : ""}`}>
            {this.state.username}
          </p>
          </form>
          <form className="input_container">
          <i id="edit_lic" 
               className="fas fa-pen-square edit_btn" 
               onClick={e => this.clicked(e)}/>
          <input id="lic" 
                 className={`input${this.state.edit === "edit_lic" ? " active" : ""}`} 
                 placeholder="License here"
                 onChange={e => this.handleInput(e)}
                 onKeyPress={e => e.key === "Enter" && this.clicked(e)}/>
          <p className={`text${this.state.edit === "edit_lic" ? " hidden" : ""}`}>
            {this.state.lic}
          </p>
          </form>
          <form className="input_container">
          <i id="edit_headline" 
               className="fas fa-pen-square edit_btn" 
               onClick={e => this.clicked(e)}/>
          <input id="headline" 
                 className={`input${this.state.edit === "edit_headline" ? " active" : ""}`} 
                 placeholder="Headline here"
                 onChange={e => this.handleInput(e)}
                 onKeyPress={e => e.key === "Enter" && this.clicked(e)}/>
          <p className={`text${this.state.edit === "edit_headline" ? " hidden" : ""}`}>
            {this.state.headline}
          </p>
          </form>
          <form className="input_container">
          <i id="edit_brokerage" 
               className="fas fa-pen-square edit_btn" 
               onClick={e => this.clicked(e)}/>
          <input id="brokerage" 
                 className={`input${this.state.edit === "edit_brokerage" ? " active" : ""}`} 
                 placeholder="Brokerage here"
                 onChange={e => this.handleInput(e)}
                 onKeyPress={e => e.key === "Enter" && this.clicked(e)}/>
          <p className={`text${this.state.edit === "edit_brokerage" ? " hidden" : ""}`}>
            {this.state.brokerage}
          </p>
          </form>
          <form className="input_container">
          <i id="edit_company" 
               className="fas fa-pen-square edit_btn" 
               onClick={e => this.clicked(e)}/>
          <input id="company" 
                 className={`input${this.state.edit === "edit_company" ? " active" : ""}`} 
                 placeholder="Company here"
                 onChange={e => this.handleInput(e)}
                 onKeyPress={e => e.key === "Enter" && this.clicked(e)}/>
          <p className={`text${this.state.edit === "edit_company" ? " hidden" : ""}`}>
            {this.state.company}
          </p>
          </form>
          <form className="input_container">
          <i id="edit_address_1" 
               className="fas fa-pen-square edit_btn" 
               onClick={e => this.clicked(e)}/>
          <input id="address_1" 
                 className={`input${this.state.edit === "edit_address_1" ? " active" : ""}`} 
                 placeholder="Street address here"
                 onChange={e => this.handleInput(e)}
                 onKeyPress={e => e.key === "Enter" && this.clicked(e)}/>
          <p className={`text${this.state.edit === "edit_address_1" ? " hidden" : ""}`}>
            {this.state.address_1}
          </p>
          </form>
          <form className="input_container">
          <i id="edit_address_2" 
               className="fas fa-pen-square edit_btn" 
               onClick={e => this.clicked(e)}/>
          <input id="address_2" 
                 className={`input${this.state.edit === "edit_address_2" ? " active" : ""}`} 
                 placeholder="City, state, zip code here"
                 onChange={e => this.handleInput(e)}
                 onKeyPress={e => e.key === "Enter" && this.clicked(e)}/>
          <p className={`text${this.state.edit === "edit_address_2" ? " hidden" : ""}`}>
            {this.state.address_2}
          </p>
          </form>
        </section>
        <section className="btn_container">
          <button href="#" className="campaign_btn btn">Campaign</button>
        </section>
      </div>
    );
  }
}

export default App;
