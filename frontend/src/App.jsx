import './App.css'

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
	Outlet,
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import Params from './pages/Params'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import OfflineMode from './components/Error/OfflineMode'

// components
import TopNavigation from './components/TopNavigation'
import VerticalNavigation from './components/VerticalNavigation'

import { API_MODE } from './services/dataFetcher'

const CheckOnline = () => {
	return !API_MODE ? <OfflineMode /> : ''
}

const Layout = () => {
	return (
		<>
			<TopNavigation />
			<VerticalNavigation />
			<CheckOnline />
			<main className="container">
				<Outlet></Outlet>
			</main>
		</>
	)
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<Home />} />
			<Route path="/:userId" element={<Home />} />
			<Route path="profile" element={<Profile />} />
			<Route path="properties" element={<Params />} />
			<Route path="blog" element={<Blog />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

const App = () => {
	return <RouterProvider router={router} />
}

export default App
