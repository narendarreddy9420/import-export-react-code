const SuggestionItem = props => {
  const {eachDetails, key, onClickEle} = props
  const {eachDetail} = eachDetails

  const onClickEl = () => {
    onClickEle(eachDetail)
  }

  return (
    <li>
      <p>{eachDetail}</p>
      <button onClick={onClickEl}>
        <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" />
      </button>
    </li>
  )
}

export default SuggestionItem
