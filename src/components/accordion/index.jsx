import MuiAccordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';

const Accordion = (props) => {
	const {
		icon,
		iconColor = 'primary',
		label,
		description,
		children
	} = props;

	return (
		<MuiAccordion>
			<AccordionSummary>
				<Avatar color={iconColor}>
					{icon}
				</Avatar>
				<ListItemContent>
					<Typography 
						level="title-md"
					>
						{label}
					</Typography>
					<Typography 
						level="body-sm"
					>
						{description}
					</Typography>
				</ListItemContent>
			</AccordionSummary>
			<AccordionDetails>
				{children}
			</AccordionDetails>
		</MuiAccordion>
	);
};

export default Accordion;