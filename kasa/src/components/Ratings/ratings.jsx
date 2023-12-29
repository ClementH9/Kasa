import emptyStar from '../../Assets/Images/emptyStar.svg'
import fullStar from '../../Assets/Images/star-rate.svg'

function Ratings({ rating }) {
	/* Creating a rating system of 5 stars. */
	const totalStar = 5
	const starNumber = parseInt(rating)
	const emptyStarNumber = totalStar - starNumber

	return (
		<div className="rating-wrapper">
			{/* Render the amount of Full star. */}
			{[...Array(starNumber)].map((e, i) => (
				<img
					className="star"
					key={'full-star-' + i}
					src={fullStar}
					alt="Full Star Rating"
				/>
			))}
			{/* Render the amount of Empty star. */}
			{[...Array(emptyStarNumber)].map((e, i) => (
				<img
					className="star-empty"
					key={'empty-star-' + i}
					src={emptyStar}
					alt="Empty Star Rating"
				/>
			))}
		</div>
	)
}

export default Ratings