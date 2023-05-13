import React, { useEffect } from 'react'

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'

import { PropTypes } from 'prop-types'
import styles from './index.module.css'

import CustomTooltip from './CustomTooltip'

const BarChartComp = ({ chartData }) => {
	useEffect(() => {
		console.log(window.innerWidth)
	})

	return (
		<div style={{ position: 'relative' }} className="barChart">
			<div className={styles.legendContainer}>
				<h2>Activité quotidienne</h2>
				<ul>
					<li>Poids (kg)</li>
					<li>Calories bûlées kCal</li>
				</ul>
			</div>
			<ResponsiveContainer width={window.innerWidth * 0.6} height="75%">
				<BarChart
					style={{
						backgroundColor: '#FBFBFB',
						padding: '85px 30px 15px 30px',
						height: 'auto',
					}}
					data={chartData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 0,
					}}>
					<CartesianGrid strokeDasharray="2 2" />
					<XAxis dataKey="day" />
					<YAxis orientation="right" />
					<Tooltip content={<CustomTooltip />} />
					{/* <Legend
					iconType="circle"
					align="right"
					margin={{ top: 20, left: 0, right: 0, bottom: 0 }}
				/> */}
					<Bar
						dataKey="kilogram"
						fill="#282D30"
						barSize={7}
						radius={[4, 4, 0, 0]}
					/>
					<Bar
						dataKey="calories"
						fill="#E60000"
						barSize={7}
						radius={[4, 4, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

BarChartComp.propTypes = {
	chartData: PropTypes.array,
}

export default BarChartComp
