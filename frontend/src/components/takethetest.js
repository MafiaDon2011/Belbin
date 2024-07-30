import SectionList from "./sectionlist";

function Test(props) {
  return (
    <>
    <div className="site-layout-content">
      <h1 style={{textAlign:'center'}}>Take the Belbin test!</h1>
      <p style={{textAlign:'center', paddingLeft:40, paddingRight:40}}>To complete each section of this inventory, tick in the far left hand column the one, two or three sentences 
        most applicable to yourself.
        Then in the column on the right, apportion 10 points between those sentences that apply to you: one of 
        which you feel sums you up well while the other only applies some of the time. In this instance you could 
        give your first choice seven points and the remaining points to your second choice. In some instances you 
        might decide that there are two sentences which apply to you equally - if this is the case, award five points 
        to each. <br></br><br></br><strong>You must allocate all 10 points in each section.</strong></p>

    </div>    
    <SectionList />   
    </>  
  );
}

export default Test;
