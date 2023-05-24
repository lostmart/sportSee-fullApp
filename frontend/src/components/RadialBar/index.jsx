import { PropTypes } from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import styles from './index.module.css'

const RadialBarChartComp = ({ userInfos }) => {
	const data = [
		{
			name: 'objectif',
			uv: 1,
			fill: '#FBFBFB',
		},
		{
			name: 'objectif',
			uv: userInfos ? userInfos : '0',
			fill: '#FF0000',
		},
	]
	return (
		<section className={'radialChart ' + styles.radialChartCont}>
			<h2>Score</h2>
			<p className={styles.description}>
				<span>{userInfos * 100}%</span> de votre objectif
			</p>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="46%"
					innerRadius="50%"
					outerRadius="122%"
					barSize={10}
					data={data}
					startAngle={90}
					endAngle={450}>
					<RadialBar background clockWise dataKey="uv" />
				</RadialBarChart>
			</ResponsiveContainer>
		</section>
	)
}

RadialBarChartComp.propTypes = {
	userInfos: PropTypes.number,
}

export default RadialBarChartComp
