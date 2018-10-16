const LOGIN_USER = (state, obj) => {
  state.statusUser = true
  state.user = obj
}

const ALERT_LOGIN = (state, obj) => {
  state.alertError = obj
  state.statusUser = false
  state.user = undefined
}

const DETAILS_PHARMACY = (state, obj) => {
  state.details = obj
}

export default {
  LOGIN_USER,
  ALERT_LOGIN,
  DETAILS_PHARMACY
}
