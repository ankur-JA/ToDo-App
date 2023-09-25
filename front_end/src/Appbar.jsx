import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';

function Appbar() {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#36817E',
            padding: '10px'
        }}>
            <Typography variant='h3'>My Todo App</Typography>
        </div>
    )
}

export default Appbar;