
const Download = () => {

    //function to open link based on input

    function openLink(type) {
        let link;
        if(type === 'jar') {
            link = 'https://drive.google.com/uc?export=download&id=1hlKQAPW4dK0ZRBrclu9bIgWCRBZXLvyc'
        } else if(type === 'zip') {
            link = 'https://drive.google.com/uc?export=download&id=1Dy1gvjgWshjZoBNNFZF0Byw0tABIkint'
        }
        window.open(link, '_blank');
    }

    return ( 
        <div className = 'download'>
            <h1>Downloads</h1>
            <h3>Current Version: 1.0</h3>
            <h4>Created by Ashwin Talwalkar</h4>

            <div className = 'downloadContainer'>
                <div className = 'downloadItem' onClick = {()=>{openLink('jar')}}>
                    <h2>Jar File</h2>
                    <h3>Download Treasure Seeker as a self-executable</h3>
                </div>
                <div className = 'downloadItem' onClick = {()=>{openLink('zip')}}>
                    <h2>Raw Files</h2>
                    <h3>Download Treasure Seekers'.java & .class files</h3>
                </div>
            </div>

            <div className="red">Note: in order to play Treasure Seeker, Java must be downloaded on local machine!</div>
        </div>
     );
}
 
export default Download;