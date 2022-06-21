import Slider, { SliderThumb } from '@mui/material/Slider';

function MySlider({ speed, setSpeed }) {

    const marks = [
        {
            value: 0,
            label: '0s',
        },
        {
            value: 500
        },
        {
            value: 1000,
            label: '1s',
        },
        {
            value: 1500
        },
        {
            value: 2000,
            label: '2s',
        },
        {
            value: 2500
        },
        {
            value: 3000,
            label: '3s',
        },
        {
            value: 3500
        },
        {
            value: 4000,
            label: '4s',
        },
        {
            value: 4500
        },
        {
            value: 5000,
            label: '5s',
        },
    ];

    const handleChange = (event, newValue) => {
        setSpeed(newValue);
    };
    return (
        
                <Slider
                    aria-label="Speed Slider"
                    size="large"
                    step={500}
                    marks={marks}
                    defaultValue={2500}
                    max={5000}
                    value={speed}
                    valueLabelDisplay="auto"
                    onChange={handleChange}
                />
            

    )
}

export default MySlider