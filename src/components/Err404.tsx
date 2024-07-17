import bioData from "./BioElements/bios.json"
const Err404: React.FC = () => {
    const backgroundColor = "#FFFFFF" + "cc";
    
  
    return (
      <div>
        <div className='page-background' id="err-page" style={{backgroundColor,color:"black"}}>
  
        <div className='content-container' id="err404" style={{justifyContent:"center"}}>
            <div className="err1">404
            <br />
            <div>
            <div className="err2">
            Whatever you're looking for, it's not here.</div>
            <div><br></br>
            <div className="err2">
            If there's something wrong, let me know on Discord or <a href={bioData.Draco.socials[0][1]} target="_blank">Twitter</a>
            , both @DracoMeteorStrm.
            </div></div>
            </div>

            </div>
        

  
  
  
        </div>
        
        
        </div></div>
  
        
    );
  };
  
  export default Err404;
  