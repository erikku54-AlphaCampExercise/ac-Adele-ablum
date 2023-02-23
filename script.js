// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://webdev.alphacamp.io/api/lyrics/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////

for(let i=0;i<album.tracks.length;i++)
{

    //create list item elements
    const liSongName = document.createElement("li");
    const aSongName = document.createElement("a");

    liSongName.classList.add("nav-item");
    aSongName.classList.add("nav-link");
    aSongName.setAttribute("href", "#");
    aSongName.innerText=album.tracks[i];


    // if click in panel, remove lyrics
    // lyricsPanel.addEventListener("click",(e)=>{

    //   lyricsPanel.innerHTML="";
  
    // },true);

    //if click the element, show effect
    aSongName.addEventListener("click",(e)=>{

        //remove active song effect first
        const aActiveItem=songList.querySelector('#song-list .active');
        if (aActiveItem!==null){
          aActiveItem.classList.remove("active");
        }

        
        e.target.classList.add("active");
        const title=e.target.innerText;

        axios.get(BASE_URL+album.artist+"/"+title+".json").then(response=>{

          lyricsPanel.innerHTML="<h3>"+title+"</h3>";
          lyricsPanel.innerHTML+="<pre>"+response.data.lyrics+"</pre>";
        })
    });


    //if cursor enter the element, show effect
    // aSongName.addEventListener("mouseenter",(e)=>{

    //     e.target.classList.add("active");

    //     const title=e.target.innerText;

    //     axios.get(BASE_URL+album.artist+"/"+title+".json").then(response=>{

    //       lyricsPanel.innerHTML="<h3>"+title+"</h3>";
    //       lyricsPanel.innerHTML+="<pre>"+response.data.lyrics+"</pre>";

    //     })

    // });


    //if cursor leave the element, remove effect
    // aSongName.addEventListener("mouseleave",(e)=>{

    //     e.target.classList.remove("active");
    //     lyricsPanel.innerHTML="";

    // });
    
    //show elements
    liSongName.appendChild(aSongName);
    songList.appendChild(liSongName);
}
