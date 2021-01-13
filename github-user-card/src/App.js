import React from 'react';
import './App.css';
import axios from 'axios'


class App extends React.Component {
// Using Constructor with state
/*constructor() {
  super();
  this.state = {
    user: {}
  }
}*/
// Not Using Constuctor
  state = {
    user: {},
    userSearch:''
  }

componentDidMount(){
  console.log('App: Component Mounted')
}

  handleChange = event => {
    console.log('App: Handle Change');
    this.setState({
      userSearch: event.target.value
    });
  }

  handleClick = event => {
    event.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.userSearch}`)
    .then(response => {
      console.log(response.data,"handleClick")
      this.setState({
        user: response.data
      })
    })
    .catch(error => {
      console.log('App: Handle Click Error')
    })
  }

  render() {
    console.log('App: Component Rendered')
    return(

      <div className="App">
        <body>
          <section>
            <h1>Search for GitHub User!</h1>
            <form>
              <input  onChange={this.handleChange} type='text'/>
              <button onClick={this.handleClick}>Search</button>
            </form>
            <div className='gitCard'>
              <div className='gitImg'>
                <img src={this.state.user.avatar_url} alt=''/>
              </div>
              <div className='gitText'>
                <p className='gitLogin'>{this.state.user.login}</p>
                <p className='gitName'>{this.state.user.name}</p>
                <p className='gitBio'>{this.state.user.bio}</p>
              </div>
            </div>
          </section>
        </body>
      </div>
    )
  }
}

export default App;
