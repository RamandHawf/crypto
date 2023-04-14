import React from 'react';

const Aboutus = () => {
    return (
        <div className='aboutparent' style={{
            marginTop:"177px",
            height : "626.67px",
            with:"100%",
            backgroundColor:"#1E1E1E"
        }}>
            <div className='logoup' style={{
                height: "12.73px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: 'center',
                alignContent: 'center'

            }}>
                <div className='pic' style={{ marginTop: '3px', width: "76.75px", height: '12.72px' }} >
                    <img src="top.png" alt="top" />
                </div>
            </div>

         <div className='middlebodydata' style={{
            marginTop:"120.21px",
            height : "361px",
            width:"100%",
            display:'flex',
            flexDirection:"row",
         }} >
          <div className='videodata' style={{
            height:'361px',
            width:'519px',
            border: "2px solid yellow",
            backgroundColor:"white",
            marginLeft:'172px'
    
          }}>
        
          </div>
          <div className='textdata' style={{
            margin:'55px',
            marginLeft:'120px',
            height:'252px',
            width:'458px',
            display:'flex',
            flexDirection:'column',
          }}>
            <div className='a' style={{
               width: "117px",
               height: "20px",
 
               
               fontFamily: 'MuseoModerno',
               fontStyle: "normal",
               fontWeight: "700",
               fontSize: "18px",
               lineHeight: "20px",
               /* identical to box height, or 111% */
               
               letterSpacing: "0.2em",
               textTransform: "uppercase",
               
               background: "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%), #C004DE",
               webkitBackgroundClip: "text",
               webkitTextFillColor: "transparent",
               backgroundClip: "text",
               textFillColor: "transparent",
            }} >About Us</div>
            <div className='b' style={{
                 marginTop:'px',
                  width: "443px",
                  height: "56px",
    
                  
                  fontFamily: 'MuseoModerno',
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "56px",
                  color: "#FFFFFF",
            }} > What is optimos ? </div>

            <div className='c' style={{

marginTop:'px',
width: "443px",
height: "152px",


fontFamily: 'MuseoModerno',
fontStyle: "normal",
fontWeight: "700",
fontSize: "24px",
lineHeight: "38px",
color: "rgba(255, 255, 255, 0.9)"
            }} >
                Optimos offer music artists the ability
                to connect with each other along with 
                investors and digitally exchange NFTs 
                for their with in.....

            </div>

          </div>
         </div>

         <div className='logobottom' style={{
                height: "12.73px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: 'center',
                alignContent: 'center'

            }}>
                <div className='pic' style={{  

 marginTop: '220px', width: "76.75px", height: '12.72px' }} >
                    <img src="top.png" alt="top" />
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
