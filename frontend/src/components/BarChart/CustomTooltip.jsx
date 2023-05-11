const CustomTooltip = ({ active, payload, label }) => {
	const styles = {
		backgroundColor: '#E60000',
		color: 'white',
		padding: '1em .5em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '3em',
		fontSize: '12px',
	}
	if (active && payload && payload.length) {
		return (
			<div style={styles}>
				<span>{payload[0].value}kg</span>
				<span>{payload[1].value}Kcal</span>
			</div>
		)
	}
	return null
}

export default CustomTooltip
