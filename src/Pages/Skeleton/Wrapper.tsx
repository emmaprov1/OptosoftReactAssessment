
import React, { FC } from 'react'
import { Footer, Header, Sidebar } from '../../Layout/Auth'
import * as Sentry from '@sentry/react';
import './Wrapper.css'
import { useLoggedInUser } from '../../Hooks';
type propsType = {
   children: React.ReactChild | React.ReactFragment | React.ReactPortal
}
const Wrapper:FC<propsType> = ({ children }) => {
  const userObject = useLoggedInUser()
  if (userObject === null) {
    window.location.href = "/";
  }

  function FallbackComponent () {
    return (
          <div>An error has occured</div>
    )
  }
  return (
    <React.Fragment>
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <div className="body-overlay">
         <Header/>
        <main>
          <div className="container-fluid ">
              <div className="row">
                <Sidebar/>
                  { children }
              </div>
          </div>
        </main>
        <Footer/>
      </div>
    </Sentry.ErrorBoundary>
    </React.Fragment>
  )
}

export default Wrapper
