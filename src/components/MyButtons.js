import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RefreshIcon from "@mui/icons-material/Refresh";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MySlider from "./MySlider";


const SortButton = ({ sortMethod }) => (
  <Button
    onClick={sortMethod}
    variant={"contained"}
    size={"small"}
  >
    Sort
  </Button>
)

function RefreshButton({ refresh, setRefresh }) {
  return (
    <Button
      onClick={() => {
        refresh == "false" ? setRefresh("true") : setRefresh("false");
      }
      }
      variant={"contained"}
      size={"small"}
    >
      <RefreshIcon />
    </Button>
  )
}

const ArraySwitch = ({ max, setMax }) => {
  // const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setMax(event.target.value);
  };
  return (
    <FormControl sx={{ flexDirection: "row" }}>

      <FormLabel
        sx={{
          margin: "auto",
          color: "white",
          fontFamily: "'Fira Sans Condensed', sans-serif",
          "&.Mui-focused": { color: "white" }
        }} >
        Length
      </FormLabel>

      <RadioGroup row sx={{ marginLeft: "10px" }}>

        <FormControlLabel
          value="5"
          size="medium"
          onChange={handleChange}
          label="5"
          control={
            <Radio
              size="small"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white"
                },
              }} />
          } />


        <FormControlLabel
          value="10"
          size="medium"
          onChange={handleChange}
          label="10"
          control={
            <Radio
              size= "small"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white"
                },
              }} />
          } />

      </RadioGroup>
    </FormControl>
  );
}

const ArraySizeButton = ({ arraySize, setMax }) => (
  <Button
    onClick={() => {
      setMax(arraySize);
    }}
    variant={"contained"}
    size={"small"}
  >
    {arraySize}
  </Button>
)

const ButtonBox = ({sortMethod, refresh, setRefresh, max, setMax, speed, setSpeed }) => (

  // <Box className="button-box" container row>
  //   <Box>
  //     <ArraySwitch max={max} setMax={setMax} />
  //   </Box>
  //   <Box>
  //     <SortButton sortMethod={sortMethod} />
  //     <RefreshButton refresh={refresh} setRefresh={setRefresh} />
  //   </Box>
  //   <Box>
  //     <MySlider speed={speed} setSpeed={setSpeed} />
  //   </Box>
  // </Box>
  
    <Box className="button-box" >
      <List sx={{paddingBottom:"0", textAlign:"center"}}>
      <ListItemText children="Array Size" disableTypography />
        <ListItem >
          <ArraySizeButton arraySize={5} setMax={setMax} />
          <ArraySizeButton arraySize={10} setMax={setMax} />
        </ListItem>
        <ListItem >
          <SortButton sortMethod={sortMethod} />
          <RefreshButton refresh={refresh} setRefresh={setRefresh} />
        </ListItem>
        <ListItemText children="Speed" disableTypography/>
        <ListItem >
          <MySlider speed={speed} setSpeed={setSpeed} />
        </ListItem>
      </List>
    </Box>

)


export { ButtonBox}