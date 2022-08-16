export const handleChangeFromRedux = (value) => {
  return (
    {
      type: "INCREASE_COUNT",
      payload: value,
    },
    {
      type: "DECREASE_COUNT",
      payload: value,
    }
  )
}
