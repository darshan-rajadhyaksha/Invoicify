import { memo } from 'react';
import { Box, Typography, useTheme } from '@mui/joy';
import { Download } from '@mui/icons-material';
import Menu from '../../components/menu/';
import { Link } from 'react-router-dom';

const getStyles = (theme) => ({
	toolbar: {
		paddingInline: theme.spacing(1.5),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: theme.spacing(2),
		height: '100%',
	},
	actionsContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(1),
		height: '100%',
	},
	logoLink: {
		textDecoration: 'none',
	},
});

const Toolbar = (props) => {
	const {
		mode,
		onFormMode,
		onPreviewMode,
		isShowModeMenu,
		onDownloadImage,
		onDownloadPdf,
		onPreviewImage,
		onPreviewPdf,
	} = props;

	const theme = useTheme();
	const styles = getStyles(theme);
	
	return (
		<Box 
			sx={styles.toolbar}
		>
			<Box>
				<Link
					to="/"
					style={styles.logoLink}
				>
					<Typography 
						level="title-md"
						component="span"
					>
						Invoicify
					</Typography>
				</Link>
			</Box>
			<Box 
				sx={styles.actionsContainer}
			>
				{isShowModeMenu && (
					<Menu
						label={mode === 'form' ? 'Form' : 'Preview'}
						items={[
							{ label: 'Form', onClick: onFormMode },
							{ label: 'Preview', onClick: onPreviewMode },
						]}
						menuButtonProps={{
							variant: 'outlined',
						}}
					/>
				)}
				<Menu
					icon={<Download />}
					label="Export"
					items={[
						{ label: 'Preview PDF', onClick: onPreviewPdf },
						{ label: 'Download PDF', onClick: onDownloadPdf },
						{ label: 'Preview Image', onClick: onPreviewImage },
						{ label: 'Download Image', onClick: onDownloadImage },
					]}
				/>
			</Box>
		</Box>
	)
};

export default memo(Toolbar);