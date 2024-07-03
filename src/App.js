import './App.css'
import {Component} from 'react'
import ItemsList from './components/ItemsList'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    updatedObject: languageGreetingsList[0],
  }

  onClickButton = id => {
    const filteredList = languageGreetingsList.filter(
      eachObj => eachObj.id === id,
    )
    this.setState({updatedObject: filteredList[0]})
  }

  render() {
    const {updatedObject} = this.state
    const {imageUrl, imageAltText} = updatedObject
    return (
      <div>
        <div>
          <h1>Multilingual Greetings</h1>
          <ul>
            {languageGreetingsList.map(eachObj => (
              <ItemsList
                key={eachObj.id}
                itemDetails={eachObj}
                onClickto={this.onClickButton}
              />
            ))}
          </ul>
        </div>
        <div>
          <img src={imageUrl} alt={imageAltText} />
        </div>
      </div>
    )
  }
}

export default App
