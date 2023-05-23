const CustomTooltip = ({ active, payload, label }) => {
	const styles = {
		backgroundColor: 'white',
		color: 'black',
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
				<span>{payload[0].value} min</span>
			</div>
		)
	}
	return null
}

export default CustomTooltip
