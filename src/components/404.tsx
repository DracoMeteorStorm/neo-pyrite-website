import bioData from "../components/BioElements/bios.json"
const Err404: React.FC = () => {
    const backgroundColor = "#FFFFFF" + "cc";
    
  
    return (
      <div>
        <div className='page-background' style={{backgroundColor,color:"black"}}>
  
        <div className='content-container' style={{justifyContent:"center"}}>
            <div style={{fontSize:"90px"}}>404
            <br />
            <div style={{fontSize:"50px",fontStyle:"italic"}}>
            Whatever you're looking for, it's not here.</div>
            <div><br></br>
            <div style={{fontSize:"50px",fontStyle:"italic"}}>
            If there's something wrong, let me know on Discord or <a href={bioData.Draco.socials[0][1]} target="_blank">Twitter</a>
            , both @DracoMeteorStrm.
            </div>
            </div>

            </div>
        

  
  
  
        </div>
        
        
        </div></div>
  
        
    );
  };
  
  export default Err404;
  