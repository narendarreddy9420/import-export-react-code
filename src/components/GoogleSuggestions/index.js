import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickEle = eachDetail => {
    this.setState({searchInput: eachDetail})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" />
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" />
          <input onChange={this.onChangeInput} value={searchInput} />
        </div>

        <ul className="suggestions-list">
          {searchResults.map(each => (
            <SuggestionItem
              key={each.id}
              eachDetails={each}
              onClickEle={this.onClickEle}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
