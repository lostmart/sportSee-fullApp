import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

import { PropTypes } from 'prop-types'

import CustomTooltip from './CustomTooltip'

const BarChartComp = ({ chartData }) => {

	return (
		<BarChart
			style={{ backgroundColor: '#FBFBFB', padding: '24px 30px' }}
			width={835}
			height={320}
			data={chartData}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 0,
			}}>
			<CartesianGrid strokeDasharray="2 2" />
			<XAxis dataKey="day" />
			<YAxis />
			<Tooltip content={<CustomTooltip />} />
			<Legend />
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
	)
}

BarChartComp.propTypes = {
	chartData: PropTypes.array,
}

export default BarChartComp
