import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from 'recharts'

const RadarChartComp = ({ userPerformance }) => {
	// console.log(userPerformance)
	const data = [
		{
			subject: 'Math',
			A: 120,
			B: 110,
			fullMark: 150,
		},
		{
			subject: 'Chinese',
			A: 98,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'English',
			A: 86,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'Geography',
			A: 99,
			B: 100,
			fullMark: 150,
		},
		{
			subject: 'Physics',
			A: 85,
			B: 90,
			fullMark: 150,
		},
		{
			subject: 'History',
			A: 65,
			B: 85,
			fullMark: 150,
		},
	]

	return (
		<ResponsiveContainer className="radarChart" width="100%" height="100%">
			<RadarChart
				cx="50%"
				cy="50%"
				
				outerRadius="46%"
				data={userPerformance.data}>
				<PolarGrid />
				<PolarAngleAxis radius="20%" dataKey="kind" />
				<Radar dataKey="value" fill="#E60000" fillOpacity={0.7} />
			</RadarChart>
		</ResponsiveContainer>
	)
}

export default RadarChartComp
