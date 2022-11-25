//variables

    chosed_option_num=undefined;
    var audio=new Audio("./src/music/Beat It.mp3")
    playing=false;
    interval=0;
    
    //songs
    songs=[{
        name:"Beat It",
        src:"Beat It.mp3",
        playlist:"Thriller",
        cover_src:"beat-it.jpg",
        duration:"4:18"
    },{
        name:"Bad",
        src:"Bad.mp3",
        playlist:"Bad",
        cover_src:"bad.jpg",
        duration:"4:10"
    },{
        name:"Billie Jean",
        src:"Billie Jean.mp3",
        playlist:"Thriller",
        cover_src:"billie-jean.jpg",
        duration:"4:52"
    },{
        name:"Black or White",
        src:"Black or White.mp3",
        playlist:"Dangerous",
        cover_src:"black-or-white.jpg",
        duration:"3:18"
    },{
        name:"Earth Song",
        src:"Earth Song.mp3",
        playlist:"HIStory",
        cover_src:"earth-song.jpg",
        duration:"5:01"
    },{
        name:"Remember the Time",
        src:"Remember the Time.mp3",
        playlist:"Dangerous",
        cover_src:"remember-the-time.jpg",
        duration:"3:59"
    },{
        name:"Smooth Criminal",
        src:"Smooth Criminal.mp3",
        playlist:"Bad 25",
        cover_src:"smooth-criminal.jpg",
        duration:"3:59"
    },{
        name:"Way You Make Me Feel",
        src:"The Way You Make Me Feel.mp3",
        playlist:"Number Ones",
        cover_src:"the-way-you-make-me-feel.jpg",
        duration:"4:58"
    },{
        name:"They Don’t Care About Us",
        src:"They Don’t Care About Us.mp3",
        playlist:"HIStory",
        cover_src:"they-dont-care-about-us.jpg",
        duration:"4:44"
    },{
        name:"Thriller",
        src:"Thriller.mp3",
        playlist:"Thriller",
        cover_src:"thriller.jpg",
        duration:"5:11"
    },
]
//fucntions

    function onload() {
        for (let i = 0; i < songs.length; i++) {
            var song = songs[i]
            el =document.getElementsByClassName("music_list_child")[i]
            el.onclick="load_song("+i+")"
            el.innerHTML=`
            <h1 onclick="load_song(${i})">${song.name}</h1>
            <h2>${song.playlist}</h2>
            <h3>${song.duration}</h3>
            `
        }
    }
    function load_song(index) {
        audio.pause()
        console.log(index)
        song = songs[index]
        audio=new Audio(`./src/music/${song.src}`)
        document.getElementsByClassName("album_cover")[0].src=`./src/img/Covers/${song.cover_src}`
        document.getElementsByClassName("button_play")[0].src="./src/icons/play_arrow.svg"
        for (let u = 0; u < document.getElementsByClassName("music_list_child").length; u++) {
            document.getElementsByClassName("music_list_child")[u].style.filter="invert(0)"
            
        }
        document.getElementsByClassName("music_list_child")[index].style.filter="invert(1)"
        document.getElementsByClassName("song_name")[0].innerHTML=song.name
        document.getElementById("music_range").value=0;
        update_scrolbar()
        upd();
        
    }
    function open_option(which) {
        biography_option=document.getElementById("biography_option");
        music_option=document.getElementById("music_option");
        if (which) {
            if (chosed_option_num!=1) {
                biography_option.classList="option chosed_option"
                music_option.classList="option unchosed_option"
                chosed_option_num=1;
                reveal_timeline(1)
                reveal_music(0)
            }else{
                biography_option.classList="option"
                music_option.classList="option"
                chosed_option_num=undefined;
                reveal_timeline(0)
            }
            
        } else {
            if (chosed_option_num!=0) {
                biography_option.classList="option unchosed_option"
                music_option.classList="option chosed_option"
                chosed_option_num=0;
                reveal_timeline(0)
                reveal_music(1)
            }else{
                biography_option.classList="option"
                music_option.classList="option"
                chosed_option_num=undefined;
                reveal_music(0)
            }
        }
    }
    function reveal_timeline(todo) {
        t=document.getElementById("timeline_div");
        if (todo) {
            t.style.display="block"
            t.style.height = "5500px"
        } else {
            t.style.display="none"
            t.style.height = "0px"
        }
    }
    function reveal_music(todo) {
        
        t=document.getElementById("music_div");
        if (todo) {
            t.style.display="flex"
            t.style.height = "100vh"
        } else {
            t.style.display="none"
            t.style.height = "0vh"
        }
    }
    function update_scrolbar(){
        input=document.getElementById("music_range");
        pers=(input.value/input.max)*100;
        input.style.backgroundSize=` ${pers}% 100%`;
    }



    function playaudio() {
        document.getElementsByClassName("button_play")[0].src="./src/icons/pause_circle.svg"
        document.getElementById("music_range").max=audio.duration
        audio.play()
        interval = setInterval(upd,1000)
        
    }

    function playpausebutton(){
        if (playing==false) {
            playing=true
            playaudio()
        } else {
            playing=false
            audio.pause();
            clearInterval(interval);
            document.getElementsByClassName("button_play")[0].src="./src/icons/play_arrow.svg"
        }
    }
    function upd() {
        document.getElementById("music_range").value=audio.currentTime
        update_scrolbar()
        Math.round()
        document.getElementsByClassName("timecode")[0].innerHTML=convert_text(Math.round(audio.currentTime))
    }
    function convert_text(seconds) {
        minutes=(seconds-(seconds%60))/60
        seconds=seconds%60
        minutestext=`${minutes}`
        if (minutes<10) {
            minutestext="0"+minutes
        }
        secondstext=`${seconds}`
        if (seconds<10) {
            secondstext="0"+seconds
        }
        return `${minutestext}:${secondstext}`
    }
    function oninputtime(val) {
        audio.currentTime=document.getElementById("music_range").value
    }
