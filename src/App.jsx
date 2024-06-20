import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import WeatherApp from './WeatherApp';

function App () {
  return (
    <>
        <WeatherApp/>
    </>
  );
}

// Basics Material UI Buttons
// function App() {
//   function handleClick () {
//     console.log("button was clicked!");
//   }

//   return (
//     <>
//     <h1>Material UI</h1>
//     <Button variant="contained" onClick={handleClick}>Click Me</Button> &nbsp; &nbsp; 
//     <Button variant="contained" onClick={handleClick} disabled size="small">Click Me2</Button> &nbsp; &nbsp; 
//     <Button variant="contained" onClick={handleClick} color="error" size="large">Click Me2</Button> &nbsp; &nbsp; 
//     <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon />}>Click Me</Button> 
//     <IconButton color="secondary" aria-label="add an alarm"> &nbsp; &nbsp;
//         <AlarmIcon />
//         </IconButton>
//     </>
//   )
// }

export default App
