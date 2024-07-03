const ItemsList = props => {
  const {itemDetails, onClickto} = props
  const {id, buttonText} = itemDetails

  const onClickStart = () => {
    onClickto(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickStart}>
        {buttonText}
      </button>
    </li>
  )
}
export default ItemsList
