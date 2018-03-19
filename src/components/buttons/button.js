import styled from 'react-emotion'

const Button = styled.button`
	color: ${props => props.primary ? 'turquoise' : 'hotpink'};
	padding: 10px 20px 10px 20px;
	border-radius: 0px;
	border: 1px solid ${props => props.primary ? 'turquoise' : 'hotpink'};
	background-color: transparent;
	&:hover {
		background-color: ${props => props.primary ? 'turquoise' : 'hotpink'};
		color: white;
		cursor: pointer;
	}
`
export default Button