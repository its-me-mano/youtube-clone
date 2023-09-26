import './App.css';
import React from 'react';
import 'animate.css';
import './SearchBar.css';
class SearchBar extends React.Component{

    state={Input:""};

     onSubmit=event=>{
         this.setState({Input:event.target.value});
     }

     OnFormSubmit=event=>{
         event.preventDefault();
   
         this.props.FormSubmit(this.state.Input);

     }



      render(){
        const searchStyle={
            border: '3px solid green', 
            marginTop:'10px',
            padding: '10px', 
            position:'relative',
            width : '100%',
            height:'75px',
        
            //backgroundColor:'#00b4d8',
            // backgroundColor:'black',
            //backgroundImage: "linear-gradient(to right, #7400b8 , #80ffdb)",
            //backgroundImage: "repeating-radial-gradient(red 25%,black 10%)",
            boxShadow: '5px 5px 5px grey'
        };
          return(
            // <div className="search-bar ui segment corner" style={searchStyle}>
            //     <form onSubmit={this.OnFormSubmit} className="ui">
                <div className="main">
                <form onSubmit={this.OnFormSubmit} className="">
                    <div className="label">
                        {/* <div className="labels animate__animated animate__backInLeft">
        
                            <div className="icon">
                              
                            </div>
                           
                        </div> */}
                         <ion-icon name="logo-youtube">T  U  B  E </ion-icon> 
                         <div className="searchBar">
                         <input  
                          type='text'
                          value={this.state.input}
                          onChange={this.onSubmit}
                          >
                            
                          </input>
                         </div>
                      
                  
                    </div> 
                </form>
            </div>
          );
      }
}


export default SearchBar;