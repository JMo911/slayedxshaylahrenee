import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { FilledInput } from '@mui/material';
import { extras, services } from '../data/services';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectChip() {
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedServices>) => {
    const {
      target: { value },
    } = event;
    setSelectedServices(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, display: 'flex', justifyContent: 'center' }}
        variant='filled'
        required
      >
        <InputLabel id='demo-multiple-chip-label'>Style</InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          value={selectedServices}
          onChange={handleChange}
          input={<FilledInput id='select-multiple-chip' />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {services.map((service) => (
            <MenuItem key={service.name} value={service.name}>
              {service.name}
            </MenuItem>
          ))}
          {extras.map((extra) => (
            <MenuItem key={extra.name} value={extra.name}>
              {extra.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
