import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function BoxOverride() {
	return (
		<Box
			mt={2}
			px={2}
			component="button"
			sx={{
				border: '1px dashed grey'
			}}
		>
			Save
		</Box>
	);
}
