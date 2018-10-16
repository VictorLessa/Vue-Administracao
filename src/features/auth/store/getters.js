const profileName = state => {
  if (state.details) {
    return state.details.pharmacy_name
  }
}

export default {
  profileName
}
