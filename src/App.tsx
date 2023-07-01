import './App.css';
import fetchUsers from './lib/fetchUsers';
// import Form from './components/Form';
import BoxSx from './components/Box';
import BoxOverride from './components/BoxOveride';
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

// Grid version 2
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import Form from './components/Form';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary
}));
fetchUsers();
function App() {
	return <Form />;
}

export default App;
