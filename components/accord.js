import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaAngleDown } from "react-icons/fa";
import styles from '../styles/courses.module.css'


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          className={styles.firstArc}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>Pass Requirements...</b>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Acedemic Requirements for any Course</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
              <li>70 % in Mathematics</li>
              <li>60 % in English</li>
              <li>70 % in Physical Sciences</li>
          </ul>
        </AccordionDetails>
      </Accordion>
          </div>
  );
}
