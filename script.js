let popup = document.querySelector('#black')
   let createNew = document.querySelector('#popup2')
   let rolePlay = document.querySelector('#popup4')
   let novel = document.querySelector('#popup3')
   let hello5  = document.getElementById('c2')
   let hello2 = document.getElementById('bye')
   let hello3 = document.getElementById('c1')
   let hello6 = document.getElementById('c3')
   let hello10 = document.getElementById('c12')
   let hello11 = document.getElementById('c22')
   let hello122 = document.getElementById('c32')
   let text = document.getElementById('textarea')
   let head = document.getElementById('head')
   let done = document.getElementById('done')
   let goBack = document.getElementById('goBack')
   let div = document.getElementById('div')
   let div2 = document.getElementById('div2')
   let div100 = document.getElementById('div100')
   let addd = document.querySelector('#addd')
   let adddd = document.getElementById('adddd')
   let namepop = document.getElementById('namePopUpBox')
   let namecha = document.getElementById('namecharecter')
   let addddd = document.getElementById('addddd')
   let div200 = document.getElementById('div200')
   let enter = document.getElementById('check')
   let boys = document.getElementById('images')
   let boy1 = document.getElementById('boy1')
   let boy2 = document.getElementById('boy2')
   let boy3 = document.getElementById('boy3')
   let boy4 = document.getElementById('boy4')
   let boy5 = document.getElementById('boy5')
   let boy6 = document.getElementById('boy6')
   let boy7 = document.getElementById('boy7')
   let boy8 = document.getElementById('boy8')
   let boy9 = document.getElementById('boy9')
   let girls = document.getElementById('images2')
   let girl1 = document.getElementById('girl1')
   let girl2 = document.getElementById('girl2')
   let girl3 = document.getElementById('girl3')
   let girl4 = document.getElementById('girl4')
   let girl5 = document.getElementById('girl5')
   let gender2 = document.getElementById('gender')
   let rray1 = []
    let rray2 = []
    let rray3 = []
    let nHtml = '';
    let rray12 = []
    let rray22= []
    let rray32 = []

    function popUpBox() {
        popup.style.display='inline';
        createNew.style.display='inline';
    }

    function popUpBox2() {
        popup.style.display='inline';
        rolePlay.style.display='inline';
        createNew.style.display='none';

    }

    function popUpBox3() {
        popup.style.display='inline';
        novel.style.display='inline';
        createNew.style.display='none';
    }
    

        function createNewNovel() {
            rray1.push(c1.value)
            rray2.push(c2.value)
            rray3.push(c3.value)
            console.log(rray1)
            console.log(rray2)
            c1.value='';
            c2.value='';
            c3.value='';

        }

        function create() {
            for(let i = 0; i < rray1.length; i++) {

             let hi=rray1[i]

                html = `<p> ${hi} </p>`

                nHtml += html

                if(i === 0) {
                    rray1.splice(i, 1)
                }
            
            }

            for(let i = 0; i < rray2.length; i++) {

                let hi=rray2[i]

                html = `<p> ${hi} </p>`

                nHtml += html

                if(i === 0) {
                    rray2.splice(i, 1)
                }

                }

                for(let i = 0; i < rray3.length; i++) {

                    let hi=rray3[i]

                    html = `<p> ${hi} </p>
                    <button onclick="
                    writeRolePlay2()
                    "> write </button>
                    `

                    nHtml += html

                    if(i === 0) {
                        rray3.splice(i, 1)
                    }

                    }

            hello2.innerHTML= nHtml ;

            popup.style.display='none';
            rolePlay.style.display='none';
         
            
        }
    
    function createNewNovel2() {

        rray1.push(c12.value)
            rray2.push(c22.value)
            rray3.push(c32.value)
            console.log(rray1)
            console.log(rray2)
            c12.value='';
            c22.value='';
            c32.value='';

            for(let i = 0; i < rray1.length; i++) {

             let hi=rray1[i]

                html = `<p> ${hi} </p>`

                nHtml += html

                if(i === 0) {
                    rray1.splice(i, 1)
                }
            
            }

            for(let i = 0; i < rray2.length; i++) {

                let hi=rray2[i]

                html = `<p> ${hi} </p>`

                nHtml += html

                if(i === 0) {
                    rray2.splice(i, 1)
                }

                }

                for(let i = 0; i < rray3.length; i++) {

                    let hi=rray3[i]

                    html = `<p> ${hi} </p>
                    <button onclick="  
                    rolePlay5()
                    "> write </button>
                    `

                    nHtml += html

                    if(i === 0) {
                        rray3.splice(i, 1)
                    }

                    }

            hello2.innerHTML= nHtml ;

            popup.style.display='none';
            rolePlay.style.display='none';
         

        popup.style.display='none';
        novel.style.display='none';
    }

    function writeNovel(){
        text.style.display='block';
        done.style.display='block';
        goBack.style.display='block';
        head.style.display='none';

    }

    function closeNovel(){
        done.style.display='none';
        goBack.style.display='none';
        head.style.display='block';

    }

    function saveNovel(){
        done.style.display='block';
        goBack.style.display='block';
        head.style.display='none';
        div.style.display='block';
        popup.style.display='block';

    }

    function closeSaveNovel(){
        done.style.display='none';
        goBack.style.display='none';
        head.style.display='block';
        div.style.display='none';
        popup.style.display='none';

    }

    function saveingNovel(){
        done.style.display='block';
        goBack.style.display='block';
        head.style.display='none';
        div.style.display='none';
        div2.style.display='inline';

    }

    function okNovel(){
        done.style.display='none';
        goBack.style.display='none';
        head.style.display='block';
        div.style.display='none';
        div2.style.display='none';
        popup.style.display='none';
        div200.style.display='none';
        hello2.style.display='block';

    }

    let hello4 = document.createElement('h5')

    function createRolePlay() {
          let hello = document.createElement('input').setAttribute("class" , "text2")
         let hello4 = document.createElement('h5').innerHTML=`${namecha.value}:`
       div100.append(hello4)
       div100.append(hello)
    hello2.style.display='none';
     popup.style.display='none';
     namepop.style.display='none';
     head.style.display='none';
     addd.style.display='block';
     adddd.style.display='block';
     addddd.style.display='block';

    }
    function writeRolePlay() {
     addd.style.display='block';
     head.style.display='none';
     hello2.style.display='none';
     adddd.style.display='block'; 
     addddd.style.display='block';
     div100.style.display='block';
    }

    function writeRolePlay2() {
     addd.style.display='block';
     head.style.display='none';
     hello2.style.display='none';
     adddd.style.display='block';
     popup.style.display='block';
     namepop.style.display='block';
     addddd.style.display='block'; 
    }

    function writeRolePlay3() {
     addd.style.display='none';
     head.style.display='block';
     hello2.style.display='block';
     adddd.style.display='none'; 
     addddd.style.display='none';
     div100.style.display='none';
    }

    function createRolePlay2() {
        let hello = document.createElement('input')
        div100.append(hello)

        div100.style.display='block'
    }

    function rolePlay5(){
        let hello = document.createElement('textarea')
        hello.setAttribute("class","textarea")
        div100.append(hello)

        done.style.display='block';
        goBack.style.display='block';
        head.style.display='none';
        hello2.style.display='none';
        div100.style.display='block';



    }

function image() {
    enter.style.display="none";
             popup.style.display="none";
             namepop.style.display="none";
             addd.style.display="none";
             adddd.style.display="none";
             addddd.style.display="none";
             boys.style.display="block";
             gender2.style.display="none"
}

function closing() {
    namepop.style.display="block";
    enter.style.display="none";
}

function select(selection) {
    if (namecha.value == "") {
        namepop.style.display="none";
        enter.style.display="block";
    }
    if (selection == "selected boy1") {
        div100.style.display="block"
        let hello = document.createElement('div')
        let hello5 = document.createElement('h5')
        hello5.innerHTML=`<img src="boy1.PNG" class="boy"> ${namecha.value}: <br>
        <input>`
        hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy2") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy2.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy3") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy3.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy4") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy4.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy5") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy5.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy6") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy6.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy7") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy7.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy8") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy8.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected boy9") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="boy9.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         boys.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected girl1") {
        div100.style.display="block"
        let hello = document.createElement('div')
        let hello5 = document.createElement('h5')
        hello5.innerHTML=`<img src="girl1.PNG" class="boy"> ${namecha.value}: <br>
        <input>`
        hello.append(hello5)
    document.body.appendChild(hello)
         girls.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected girl2") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="girl2.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         girls.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected girl3") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="girl3.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         girls.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected girl4") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="girl4.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         girls.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    if (selection == "selected girl5") {
        div100.style.display="block"
        let hello = document.createElement('div')
    let hello5 = document.createElement('h5')
    hello5.innerHTML=`<img src="girl5.PNG" class="boy"> ${namecha.value}: <br>
    <input>`
    hello.append(hello5)
    document.body.appendChild(hello)
         girls.style.display="none";
         addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";

    }

    
}

function gender() {
    
    popup.style.display="block"
    gender2.style.display="block"
}

function girl() {
    enter.style.display="none";
             popup.style.display="none";
             namepop.style.display="none";
             addd.style.display="none";
             adddd.style.display="none";
             addddd.style.display="none";
             girls.style.display="block";
             gender2.style.display="none";
}

function a() {
    if (namecha.value == "") {
        namepop.style.display="none";
        enter.style.display="block";
        popup.style.display="block";
        addd.style.display="block";
             adddd.style.display="block";
             addddd.style.display="block";
             boys.style.display="none";
    }
}