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

// components
import TopNavigation from './components/TopNavigation'
import VerticalNavigation from './components/VerticalNavigation'

const Layout = () => {
	return (
		<>
			<TopNavigation />
			<VerticalNavigation />
			<main className="container">
				<Outlet></Outlet>
			</main>
		</>
	)
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/:userId" element={<Home />} />
			<Route path="profile" element={<Profile />} />
			<Route path="" element={<Params />} />
			<Route path="blog" element={<Blog />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

const App = () => {
	return <RouterProvider router={router} />
}

export default App
