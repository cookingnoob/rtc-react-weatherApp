const Select = ({ setCity }) => {
  const handleSelect = (event) => {
    setCity(event.target.value)
  }
  return (
    <>
      <select name="City" onChange={handleSelect}>
        <option value="Madrid">Madrid</option>
        <option value="Paris">París</option>
        <option value="Berlin">Berlín</option>
        <option value="London">Londres</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    </>

  )

}

export default Select