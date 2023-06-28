// About Me script code

let abouttabs = document.getElementsByClassName('about-tab');
let tabcontents = document.getElementsByClassName('tab-content');

let opentab = ((tabname)=>{
for(abouttab of abouttabs){
        abouttab.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
})

console.log(abouttabs)

//end of About Me script code