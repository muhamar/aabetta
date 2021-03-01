import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Block } from "galio-framework";
import AuthNavigation from './screens/Auth'
import { authentication } from "./store/actions/auth";
import Screen from './navigation/Screens'

const Main = () => {
  const user = useSelector(state => state.auth.user)

  const dispatch = useDispatch()

  useEffect(() => {
    const init = async () => {
      try {
        await dispatch(authentication())
      } catch (e) {
      }
    }
    init()
  }, [dispatch])

  return (
    <Block flex>
      {user ? <Screen /> : <AuthNavigation />}
    </Block>
  )
}

export default Main