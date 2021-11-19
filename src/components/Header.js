import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, H2}) => {
    const onClick = () => {
        console.log('on click header')
    }
    return (
        <header className="header">
            <h1 style={headingStyle}>{title}</h1>
            <Button color="green" text="Hello" />
            <Button onClick={onCLick}/>
            <h2>{H2}</h2>           
        </header>
    )
}

Header.defaultProps = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Task tracker',
}

const headingStyle = { 
    color: 'red', 
    backgroundColor: 'yellow'}

export default Header
