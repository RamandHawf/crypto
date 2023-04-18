import React from 'react';
import './faq.css'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
const Faq = () => {
    const [expanded, setExpanded] = 
    React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    return (
        <div className='faqparent'>
          <div className='one'> Have any Question? </div>
          <div className='two'> Join the industry leaders to discuss where the market are heading
          we accept token payment  </div>
          <div className='three'> 
          
           
          <div className='First' >General</div>
          <div className='Second'>Pre ICO & ICO</div>

          <div className='Third'>Token</div>

          <div className='Fourth'>Client</div>
          <div className='Fifth'>Legal</div>



          
           </div>
<div className='four'>
           
      <Accordion sx={{
        marginTop: "10px",
        backgroundColor:"#1E1E1E",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    borderRadius: "10px",
    
    }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography 
          sx={{fontFamily: 'MuseoModerno',
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "22px",
          lineHeight: "30px",
        
          textTransform: "capitalize",
          
          color: "#FFFFFF"}}
          >What cryptocurrencies can i use to purchase?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          sx={{fontFamily: 'MuseoModerno',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "26px",
      
          textTransform: "capitalize",
          background: "rgba(136, 59, 222, 0.08)",
          color: "#FFFFFF"}}
          
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        marginTop: "10px",
        backgroundColor:"#1E1E1E",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    borderRadius: "10px",
    
    }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography 
          sx={{fontFamily: 'MuseoModerno',
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "22px",
          lineHeight: "30px",
          /* identical to box height, or 136% */
          // backgroundColor:"#1E1E1E",
          textTransform: "capitalize",
          
          color: "#FFFFFF"}}
          >What is Optimos Cypto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography 
           sx={{fontFamily: 'MuseoModerno',
           fontStyle: "normal",
           fontWeight: "400",
           fontSize: "14px",
           lineHeight: "26px",
       
           textTransform: "capitalize",
           
           color: "#FFFFFF"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  
      sx={{
        marginTop: "10px",
        backgroundColor:"#1E1E1E",
      background: "rgba(255, 255, 255, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.16)",
      borderRadius: "10px",
      
      }}
      expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontFamily: 'MuseoModerno',
fontStyle: "normal",
fontWeight: "600",
fontSize: "22px",
lineHeight: "30px",

textTransform: "capitalize",

color: "#FFFFFF"}} >How can i participate in ICO token sale?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography 
           sx={{fontFamily: 'MuseoModerno',
           fontStyle: "normal",
           fontWeight: "400",
           fontSize: "14px",
           lineHeight: "26px",
         
           textTransform: "capitalize",
           
           color: "#FFFFFF"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        marginTop: "10px",
        backgroundColor:"#1E1E1E",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    borderRadius: "10px",
    
    }} expanded={expanded === 'panel4'} onChange={handleChange('panel3')}>
        <AccordionSummary  aria-controls="panel4d-content" id="panel4d-header">
          <Typography 
          sx={{fontFamily: 'MuseoModerno',
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "22px",
          lineHeight: "30px",
    
          textTransform: "capitalize",
          
          color: "#FFFFFF"}}
          >How do i benefit from ICO token?</Typography>
        </AccordionSummary >
        <AccordionDetails >
          <Typography
           sx={{fontFamily: 'MuseoModerno',
           fontStyle: "normal",
           fontWeight: "400",
           fontSize: "14px",
           lineHeight: "26px",
       
           textTransform: "capitalize",
           
           color: "#FFFFFF"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
           </div>
           <div class="logobottom">
        <div class="pic">
          <img src="top.png" alt="top" />
        </div>
      </div>        
        </div>
    );
}

export default Faq;
