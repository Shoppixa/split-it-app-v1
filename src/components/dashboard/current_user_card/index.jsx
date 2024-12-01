import CustomAvatars from './avatar.jsx'
import PropTypes from 'prop-types'

const CurrentUserCard = (props) => {
    return <CustomAvatars name={props.name} />
}
export default CurrentUserCard
CurrentUserCard.propTypes = {
    name: PropTypes.string,
}
