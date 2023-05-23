import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { PropTypes } from 'prop-types'
// import { curveCardinal } from 'd3-shape'
import CustomTooltip from './CustomTooltip'

// const cardinal = curveCardinal.tension(0.2)

const titleStyle = {
	padding: '29px 34px',
	color: 'white',
	opacity: '0.50',
	fontSize: '15px',
	maxWidth: '202px',
	position: 'absolute',
	fontWeight: 'normal',
}

const LineChartComp = ({ userAvarageSessions }) => {
	return (
		<article className="lineChart">
			<h2 style={titleStyle}>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={userAvarageSessions.sessions}
					margin={{
						top: 60,
						right: 7,
						left: 7,
						bottom: 5,
					}}>
					<XAxis width={50} dataKey="day" />

					<Tooltip content={<CustomTooltip />} />
					<Area
						type="monotone"
						dataKey="sessionLength"
						stroke="#FFF"
						fill="#FFF"
						fillOpacity={0.2}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</article>
	)
}

LineChartComp.propTypes = {
	chartData: PropTypes.array,
}

export default LineChartComp
