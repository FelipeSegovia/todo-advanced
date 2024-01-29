import LoadingPage from '@pages/LoadingPage'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'


const HomePage = lazy(() => import("@pages/HomePage"))

const renderLoader = () => <LoadingPage />

const AppRoutes = () => {
  return (
    <Suspense fallback={renderLoader()}>
        <Routes>
            <Route path='/' element={<HomePage />}/>
        </Routes>
    </Suspense>
  )
}

export default AppRoutes