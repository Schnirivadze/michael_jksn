//variables
{
    chosed_option_num=undefined;
}
//fucntions
{
    function open_option(which) {
        console.log(`${which}/${chosed_option_num}`)
        if (which) {
            biography_option=document.getElementById("biography_option");
            music_option=document.getElementById("music_option");
            if (chosed_option_num!=1) {
                biography_option.classList="option chosed_option"
                music_option.classList="option unchosed_option"
                chosed_option_num=1;
            }else{
                biography_option.classList="option"
                music_option.classList="option"
                chosed_option_num=undefined;
            }
            
        } else {
            biography_option=document.getElementById("biography_option");
            music_option=document.getElementById("music_option");

            if (chosed_option_num!=0) {
                biography_option.classList="option unchosed_option"
                music_option.classList="option chosed_option"
                chosed_option_num=0;
            }else{
                biography_option.classList="option"
                music_option.classList="option"
                chosed_option_num=undefined;
            }
        }
    }
}
