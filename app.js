// form


const submitBtn = document.querySelector('[type=button]')
const result = document.querySelector('.result')

submitBtn.addEventListener('click', function(){
    let selectedGender = document.getElementById('selectGender').value
    let loves = Math.floor(Math.random()*20)+80

    const yourName = document.querySelector('.form-control')
    let name = yourName.value
    let nameValue = yourName.value.slice(0,3);
    let wow = 'Wow! You are lucky'
    let herName = ''

    if(selectedGender=='Male'){
        if(nameValue=='far') herName='Sila' 
        else if(nameValue=='shu' || nameValue=='suv' || nameValue=="ism" || nameValue=='Shu' || nameValue=='Suv' || nameValue=="Ism") herName='Farjana'
        else if( nameValue=='ifa' || nameValue=='has'|| nameValue=='Ifa' || nameValue=='Has') {
            herName = 'Mia Khalifa'
            wow= 'Great! You are so lucky'
        }
        else if(nameValue=='emo' || nameValue == 'sha' || nameValue=='sah'){
            herName = 'Suny Leon'
            wow= 'Great! You are so lucky'
        } 
        else if(nameValue=='soh' || nameValue=='sho') herName='Mim'
        else if(nameValue=='sop'  || nameValue=='Sop') herName='Sumaiya'
        else if(nameValue=='rit') herName=='There is one who'
        else {
        herName='There is no one who'
         wow = 'Ops! So Sad.'
         let loves = 0
    }
    }else{
        if(nameValue=='far' || nameValue=='Far') herName='Shuvo' 
        else if(nameValue=='mim' || nameValue=='sal') herName= 'Sohel'
        else if(nameValue=='sum') herName='Sopon'
        else if(nameValue=='rit') herName='There is one who'
        else {
            herName='There is no one who'
             wow = 'Ops! So Sad.'
             let loves = 0
        }
    }
    
    
    

    result.innerHTML = `<span>Hi <b id="name">${name}</b>,</span><p>${wow}. ${herName} loves you a lot.At this moment, ${loves}% of love among you.</p>`
})
