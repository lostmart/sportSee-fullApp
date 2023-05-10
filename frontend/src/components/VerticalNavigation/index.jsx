import yoga from '../../assets/yoga.svg'
import cycle from '../../assets/cycle.svg'
import swim from '../../assets/swim.svg'
import weightlift from '../../assets/weightlift.svg'

const iconsArray = [yoga, cycle, swim, weightlift]

const VerticalNavigation = () => {
	return (
		<nav className="navBar-left">
			<ul>
				{iconsArray.map((icon, indx) => (
					<img key={indx} src={icon} alt="sportSee icon" />
				))}
			</ul>
			<span>Copiryght, SportSee 2020</span>
		</nav>
	)
}

export default VerticalNavigation
