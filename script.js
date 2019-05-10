
indexPage();

const myTarget = document.getElementById('targetArea')

var highestIndexNum = 0

function indexPage(){

    const iBtn = document.getElementById('index')
    iBtn.style.backgroundColor = 'rgb(0, 173, 253)'
    iBtn.style.color = 'white'
    iBtn.style.borderColor = 'white'
    const nBtn = document.getElementById('newtab')
    nBtn.style.backgroundColor = 'rgb(0, 152, 253)'
    nBtn.style.color = 'lightgray'
    nBtn.style.borderColor = 'lightgray'


    var targetArea = document.querySelector('.targetArea') //div to be replaced

    const CreateIndexPageMain = document.createElement('div')
    CreateIndexPageMain.className = 'targetArea'
    CreateIndexPageMain.id = 'targetArea'

    const indexPageMain = document.getElementById('targetArea')
    indexPageMain.innerHTML = (
        `<div class = 'contactList' id = 'contactList'>
            Contact list
        </div>
        <div class = 'headings'>
            <span class = 'num'>#</span>
            <span class = 'Name'>Name</span>
            <span class = 'Email'>Email</span>
            <span class = 'Phone'>Phone</span>
        </div>`
    )

    var idCounter = 1
    for(var i =0; i < localStorage.length; i++){  //LOOP THROUGH EACH RECORD
        var targetData = JSON.parse(localStorage.getItem(localStorage.key(i)))

        var rowDiv = document.createElement('div')
        rowDiv.id = `rowDiv${idCounter}`
        rowDiv.className = 'rowDiv'

       // console.log(localStorage.getItem(localStorage.key(i)));  // this LOOP iterates through localStorage and logs value into console
        //CREATE SPAN ELEMENTS to hold each localStorage value
        var CreateNumSpan = document.createElement('span')
        CreateNumSpan.className = 'numSpan'
        CreateNumSpan.id = `numSpan${idCounter}`
        //var numSpan = document.querySelector('.numSpan')
        //console.log('numSpan: '+numSpan)
        var CreateNameSpan = document.createElement('span')
        CreateNameSpan.className = 'nameSpan'
        //var nameSpan = document.querySelector('.nameSpan')
        //console.log('nameSpan: '+ nameSpan)
        var CreateEmailSpan = document.createElement('span')
        CreateEmailSpan.className = 'emailSpan'
        //var emailSpan = document.querySelector('emailSpan')
        var CreatePhoneSpan = document.createElement('span')
        CreatePhoneSpan.className = 'phoneSpan'
        //var phoneSpan = document.querySelector('.phoneSpan')*/

        //APPEND localStorage values to spans
        CreateNumSpan.append(targetData.indexNum)
        CreateNameSpan.append(targetData.nameInfo)
        CreateEmailSpan.append(targetData.emailInfo)
        CreatePhoneSpan.append(targetData.phoneInfo)

        /*numSpan.append(targetData.indexNum)
        nameSpan.append(targetData.nameInfo)
        emailSpan.append(targetData.emailInfo)
        phoneSpan.append(targetData.phoneInfo)*/

        //CREATE span to hold buttons
        var buttonSpan = document.createElement('div')
        buttonSpan.className = 'ipButtonSpan'

        //CREATE details button
        var ipDetailsBtn = document.createElement('input')
        ipDetailsBtn.type = 'button'
        ipDetailsBtn.id = `ipDetailsBtn${idCounter}`
        ipDetailsBtn.className = 'ipDetailsBtn'
        ipDetailsBtn.value = 'DETAILS'

        //CREATE edit button
        var ipEditBtn = document.createElement('input')
        ipEditBtn.type = 'button'
        ipEditBtn.id = 'ipEditBtn'
        ipEditBtn.className = 'ipEditBtn'
        ipEditBtn.value = 'EDIT'

        //CREATE delete button
        var ipDeleteBtn = document.createElement('input')
        ipDeleteBtn.type = 'button'
        ipDeleteBtn.id = 'ipDeleteBtn'
        ipDeleteBtn.className = 'ipDeleteBtn'
        ipDeleteBtn.value = 'DELETE'

        //APPEND buttons to button span

        buttonSpan.append(ipDetailsBtn)
        buttonSpan.append(ipEditBtn)
        buttonSpan.append(ipDeleteBtn)

        //APPEND spans to indexPageMain
        /*indexPageMain.append(CreateNumSpan)
        indexPageMain.append(CreateNameSpan)
        indexPageMain.append(CreateEmailSpan)
        indexPageMain.append(CreatePhoneSpan)
        indexPageMain.append(buttonSpan)
        indexPageMain.append(document.createElement('br'))*/

        rowDiv.append(CreateNumSpan)
        rowDiv.append(CreateNameSpan)
        rowDiv.append(CreateEmailSpan)
        rowDiv.append(CreatePhoneSpan)
        rowDiv.append(buttonSpan)
        rowDiv.append(document.createElement('br'))

        indexPageMain.append(rowDiv)
        
        //indexPageMain.append(numSpan)
        /*indexPageMain.append(nameSpan)
        indexPageMain.append(emailSpan)
        indexPageMain.append(phoneSpan)*/

        var recordInfo = {  //I need to be able to attach each Unique record to to each unique Details button. i think it needs to be done in detailsPage()
            //                  maybe i can use localStorage values instead of userInfo
            indexNum : targetData.indexNum,
            nameInfo : targetData.nameInfo,
            emailInfo : targetData.emailInfo,
            phoneInfo : targetData.phoneInfo
        }
       // console.log('recordInfo: '+recordInfo)
       // console.log('INDEXNUM: '+recordInfo.indexNum)
       //console.log('targetnum: '+targetNum)
       //console.log(targetNum)
       /*var dtlBtn = document.getElementById(`ipDetailsBtn${idCounter}`)
       console.log('dtlBtn:*********' +dtlBtn.id)

       ipDetailsBtn.onclick = function(e){
        console.log('dtlBtnID: '+dtlBtn.id)



       }*/

        ipDetailsBtn.addEventListener('click',function(e){ // I NEED TO BE ABLE TO ASSIGN A VARIABLE BASED OFF PRECEDING localStorage value
      
        // THIS IS HOW I RELATE THE BUTTON TO THE ROW********************$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//WHEN I COME BACK, I WILL HAVE TO SET EDIT BUTTON, AND DELETE BUTTON
           var parentRow = e.target.parentNode.parentNode  //WE'VE JUST MADE some PROGRESS

           var targetIndex = parentRow.children[0].innerHTML


           //var vTest = findRecord(targetIndex)
            //console.log('findRecord(targetIndex): '+vTest)
            detailsPage(findRecord(targetIndex))//// COME BACK TO HERE*******************************************************8!!!!!!!!!!!!
        })

        ipEditBtn.addEventListener('click',function(e){

            var parentRow = e.target.parentNode.parentNode  //WE'VE JUST MADE some PROGRESS
 
            var targetIndex = parentRow.children[0].innerHTML

            editPage(findRecord(targetIndex))//findRecord has targetIndex





        })

        ipDeleteBtn.addEventListener('click',function(e){ ///record is still deleting if we escape 'ok' in alert
            var parentRow = e.target.parentNode.parentNode
            parentRow.style.backgroundColor = 'lightgray'
            var dBtn = e.target
            dBtn.style.backgroundColor = 'rgba(255, 33, 33, 0.692)'
            dBtn.style.color = 'white'
            dBtn.style.fontWeight = 'bold'

            
            const iNum = e.target.parentNode.parentNode.children[0].innerHTML
            setTimeout(function(){removeItem(iNum,parentRow,dBtn)}, 10)  
        })

        idCounter++ //needs to be at the end of for loop
    }
   

}

//define newBtn button
const newBtn = document.getElementById('newtab')
//define indexBtn button
const indexBtn = document.getElementById('index')
//define content node
content = document.getElementById('content')

newBtn.addEventListener('click', function(e){

    const iBtn = document.getElementById('index')
    iBtn.style.backgroundColor = 'rgb(0, 152, 253)'//change
    iBtn.style.color = 'lightgray'
    iBtn.style.borderColor = 'lightgray'
    const nBtn = document.getElementById('newtab')
    nBtn.style.color = 'white'
    nBtn.style.borderColor = 'white'
    nBtn.style.backgroundColor = 'rgb(0, 173, 253)'

    const oldDiv = document.querySelector('.targetArea')
   
    const NewContactDiv = document.createElement('div') // Create NewContactDiv Node. This will contain NewContactText
    NewContactDiv.className = 'newContact'
    const NewContactText = document.createTextNode('New Contact')// create TEXT node
    NewContactDiv.append(NewContactText) //add NewContactText to NewContactDiv
    //NAME FORM
    var nameForm = document.createElement('input') //create name form
    nameForm.id = 'nameForm'
    nameForm.type = 'text'
    const nameLabel = document.createElement('div') //create name label
    nameLabel.className = 'formLabels'
    nameLabel.innerHTML = 'Name:'

    //EMAIL FORM
    const emailForm = document.createElement('input')
    emailForm.id = 'emailForm'
    emailForm.type = 'text'
    const emailLabel = document.createElement('div')    
    emailLabel.className = 'formLabels'
    emailLabel.innerHTML = 'Email:'

    //PHONE FORM
    const phoneForm = document.createElement('input')
    phoneForm.id = 'phoneForm'
    phoneForm.type = 'text'
    const phoneLabel = document.createElement('div')
    phoneLabel.className = 'formLabels'
    phoneLabel.innerHTML = 'Phone:'

    //SUBMIT BUTTON
    const subBtn = document.createElement('input')
    subBtn.type = 'button'
    subBtn.value = 'Submit'
    subBtn.id = 'subBtn'

    const forms = document.createElement('div')
    forms.className = 'forms'

    const mainDiv = document.createElement('div') // Create mainDiv Node(element). This will be parent node to new content
        mainDiv.id = 'targetArea'
        mainDiv.className = 'targetArea'

    //            new node\/    \/Child node to be replaced
    content.replaceChild(mainDiv, oldDiv) //right now its just appending to the bottom of the existing page
    mainDiv.append(NewContactDiv)
    forms.append(nameLabel)
    forms.append(nameForm)
    forms.append(emailLabel)
    forms.append(emailForm)
    forms.append(phoneLabel)
    forms.append(phoneForm)
    forms.append(document.createElement('br'))
    forms.append(subBtn)
    
    
    mainDiv.append(forms)

    //Insert submit button here. make type = button
    

    const name = document.getElementById('nameForm')
    const email = document.getElementById('emailForm')
    const phone = document.getElementById('phoneForm')

    
    subBtn.onclick = function(){
        const nameVal = name.value
        const emailVal = email.value
        const phoneVal = phone.value

        //name pattern check
        const nameRegEx = /^./
        const nameTest = nameRegEx.test(nameVal)
        var nameError = ''

        //email pattern check
        const emailRegEx = /.+@.+\..+/
        const emailTest = emailRegEx.test(emailVal)
        var emailError = ''

        //phone pattern check
        const phoneRegEx = /^[2-9][0-9]{9}$/
        const phoneTest = phoneRegEx.test(phoneVal)
        var phoneError = ''

        const userInfo = {
            indexNum : 0,//indexVal,
            nameInfo : nameVal,
            emailInfo : emailVal,
            phoneInfo : phoneVal

        }
        if (nameTest === false){
            var nameError = 'Error: Must enter name. '
        }
        if (emailTest === false){
            var emailError = 'Error: Invalid email address. '
        }
        if (phoneTest === false){
            var phoneError = 'Error: Invalid phone number. '
        }


        var errorMsg = nameError + emailError + phoneError
 
        if (errorMsg === ''){

            if (localStorage.length = 0){
                DBindexKey = 1
                userInfo.indexNum = 1
            }
            else{

                for(var i =0; i < localStorage.length; i++){  
                    //console.log(localStorage.getItem(localStorage.key(i)));  // this LOOP iterates through localStorage and logs value into console
                    var targetData = JSON.parse(localStorage.getItem(localStorage.key(i)))
                    //console.log('target data in for loop, in IF: '+ targetData.nameInfo)
                    if (targetData.indexNum > highestIndexNum){highestIndexNum = targetData.indexNum}
                    
                }

                DBindexKey = Number(highestIndexNum) + 1
                userInfo.indexNum = Number(highestIndexNum) + 1

            }

            localStorage.setItem(DBindexKey, JSON.stringify(userInfo))
            detailsPage(userInfo);

        }

        else{
            alert(errorMsg)

        }



    }
})


function detailsPage(userInfo){ 

    const iBtn = document.getElementById('index')
    iBtn.style.backgroundColor = 'rgb(0, 152, 253)'
    iBtn.style.color = 'lightgray'
    iBtn.style.borderColor = 'lightgray'
    const nBtn = document.getElementById('newtab')
    nBtn.style.backgroundColor = 'rgb(0, 152, 253)'
    nBtn.style.color = 'lightgray'
    nBtn.style.borderColor = 'lightgray'

    var replaceThisDiv = document.querySelector('.targetArea')

    const displayInfoDiv = document.createElement('div')  //CONTAINER
    displayInfoDiv.id = 'targetArea'
    displayInfoDiv.className = 'targetArea'

    content.replaceChild(displayInfoDiv, replaceThisDiv)

    //create contact heading
    const contactHeading = document.createElement('div')
    contactHeading.id = 'cHeadingDiv'
    const contactText = document.createTextNode('Contact #')
    contactHeading.append(contactText)
    
    const cIndexNum = userInfo.indexNum

    contactHeading.append(cIndexNum)

    //create name div
    const cName = document.createElement('div')
    cName.className = 'labels'
    const cNameText = document.createTextNode('Name: ')
    cName.append(cNameText)

    const dNameSpan = document.createElement('span')
    dNameSpan.className = 'values'

    dNameSpan.append(userInfo.nameInfo)
    cName.append(dNameSpan)

    //create email div
    const cEmail = document.createElement('div')
    cEmail.className = 'labels'
    const cEmailText = document.createTextNode('Email: ')
    cEmail.append(cEmailText)

    const dEmailSpan = document.createElement('span')
    dEmailSpan.className = 'values'


    dEmailSpan.append(userInfo.emailInfo)
    cEmail.append(dEmailSpan)

    //create phone div
    const cPhone = document.createElement('div')
    cPhone.className = 'labels'
    const cPhoneText = document.createTextNode('Phone: ')
    cPhone.append(cPhoneText)

    const dPhoneSpan = document.createElement('span')
    dPhoneSpan.className = 'values'

    dPhoneSpan.append(userInfo.phoneInfo)
    cPhone.append(dPhoneSpan)

    //create edit button
    const cEditBtn = document.createElement('input')
    cEditBtn.type = 'button'
    cEditBtn.value = 'EDIT'
    cEditBtn.className = 'editBtn'
    cEditBtn.id = 'cEditBtn'

    //create delete button
    const cDeleteBtn = document.createElement('input')
    cDeleteBtn.type = 'button'
    cDeleteBtn.value = 'DELETE'
    cDeleteBtn.className = 'deleteBtn'
    cDeleteBtn.id = 'cDeleteBtn'


    const dContent = document.createElement('div')
    dContent.className = 'dContent'

    displayInfoDiv.append(contactHeading)

    dContent.append(cName)
    dContent.append(cEmail)
    dContent.append(cPhone)
    displayInfoDiv.append(dContent)

    const dBtns = document.createElement('div')
    dBtns.className = 'dBtns'

    dBtns.append(cEditBtn)
    dBtns.append(cDeleteBtn)
    displayInfoDiv.append(dBtns)

    cEditBtn.addEventListener('click', function(e){
        
        const iNum = document.getElementById('cHeadingDiv').childNodes[1].nodeValue
        //console.log('SUBBB userinfo'+userInfo)
        //const iNum = userInfo.indexnum
        //const nameVal = cNameInputField.value
        const subUserInfo = {
            indexNum : iNum,
            nameInfo : userInfo.nameInfo,
            emailInfo : userInfo.emailInfo,
            phoneInfo : userInfo.phoneInfo }
        editPage(subUserInfo)
    })
    
    cDeleteBtn.addEventListener('click', function(e){

        const iNum = document.getElementById('cHeadingDiv').childNodes[1].nodeValue

        const dBtn = e.target
        dBtn.style.backgroundColor = 'rgba(255, 33, 33, 0.692)'
        dBtn.style.color = 'white'
        dBtn.style.fontWeight = 'bold'


        setTimeout(function(){removeItem(iNum,undefined,dBtn)},10)
    })
}

function editPage(userInfo){
    const iBtn = document.getElementById('index')
    iBtn.style.backgroundColor = 'rgb(0, 152, 253)'
    iBtn.style.color = 'lightgray'
    iBtn.style.borderColor = 'lightgray'
    const nBtn = document.getElementById('newtab')
    nBtn.style.backgroundColor = 'rgb(0, 152, 253)'
    nBtn.style.color = 'lightgray'
    nBtn.style.borderColor = 'lightgray'

    var replaceThisDiv = document.querySelector('.targetArea')

    const displayInfoDiv = document.createElement('div')  //CONTAINER
    displayInfoDiv.id = 'targetArea'
    displayInfoDiv.className = 'targetArea'

    content.replaceChild(displayInfoDiv, replaceThisDiv)

    //create contact heading
    const contactHeading = document.createElement('div')
    contactHeading.id = 'cHeadingDiv'
    const contactText = document.createTextNode('Edit Contact #')
    contactHeading.append(contactText)

    const cIndexNum = userInfo.indexNum
    contactHeading.append(cIndexNum)


    const eContent = document.createElement('div')
    eContent.className = 'eContent'

    //create name div
    const cName = document.createElement('div')
    cName.className = 'labels'
    const cNameText = document.createTextNode('Name: ')
    cName.append(cNameText)

    const cNameInputField = document.createElement('input') //GOOD SO FAR
    cNameInputField.value = userInfo.nameInfo
    cNameInputField.id = 'cNameInputField'
    cNameInputField.className = 'cNameInputField'
    //cName.append(userInfo.nameInfo) // I NEED TO MAKE THIS AN INPUT FIELD
    //cName.append(cNameInputField)
    

    //create email div
    const cEmail = document.createElement('div')
    cEmail.className = 'labels'
    const cEmailText = document.createTextNode('Email: ')
    cEmail.append(cEmailText)

    const cEmailInputField = document.createElement('input')
    cEmailInputField.value = userInfo.emailInfo
    cEmailInputField.id = 'cEmailInputField'
    cEmailInputField.className = 'cEmailInputField'
    //cEmail.append(userInfo.emailInfo)
    //cEmail.append(cEmailInputField)

    //create phone div
    const cPhone = document.createElement('div')
    cPhone.className = 'labels'
    const cPhoneText = document.createTextNode('Phone: ')
    cPhone.append(cPhoneText)

    const cPhoneInputField = document.createElement('input')
    cPhoneInputField.value = userInfo.phoneInfo
    cPhoneInputField.id = 'cPhoneInputField'
    cPhoneInputField.className = 'cPhoneInputField'
    //cPhone.append(userInfo.phoneInfo)
    //cPhone.append(cPhoneInputField)

    //create SUBMIT button
    const cSubmitBtn = document.createElement('input')
    cSubmitBtn.type = 'button'
    cSubmitBtn.value = 'Submit'
    cSubmitBtn.className = 'cSubmitBtn'
    cSubmitBtn.id = 'cSubmitBtn'


    displayInfoDiv.append(contactHeading)

    eContent.append(cName)
    eContent.append(cNameInputField)
    eContent.append(cEmail)
    eContent.append(cEmailInputField)
    eContent.append(cPhone)
    eContent.append(cPhoneInputField)
    eContent.append(document.createElement('br'))
    eContent.append(cSubmitBtn)

    displayInfoDiv.append(eContent)

    //ADD EVENT LISTENER
    cSubmitBtn.addEventListener('click',function(e){
        const iNum = document.getElementById('cHeadingDiv').childNodes[1].nodeValue
        //console.log('SUBBB userinfo'+userInfo)
        //const iNum = userInfo.indexnum
        const nameVal = cNameInputField.value

        //name pattern check
        const nameRegEx = /^./
        const nameTest = nameRegEx.test(nameVal)
        var nameError = ''

        //email pattern check
        const emailRegEx = /.+@.+\..+/
        const emailTest = emailRegEx.test(cEmailInputField.value)
        var emailError = ''

        //phone pattern check
        const phoneRegEx = /^[2-9][0-9]{9}$/
        const phoneTest = phoneRegEx.test(cPhoneInputField.value)
        var phoneError = ''


        const subUserInfo = {
            indexNum : iNum,
            nameInfo : nameVal,
            emailInfo : cEmailInputField.value,
            phoneInfo : cPhoneInputField.value }

        if (nameTest === false){
            var nameError = 'Error: Must enter name. '
        }
        if (emailTest === false){
            var emailError = 'Error: Invalid email address. '
        }
        if (phoneTest === false){
            var phoneError = 'Error: Invalid phone number. '
        }

        var errorMsg = nameError + emailError + phoneError

        if (errorMsg === ''){
        
            localStorage.setItem(iNum, JSON.stringify(subUserInfo))

            detailsPage(subUserInfo) 

        }
        else{
            alert(errorMsg)
        }


    })
}







//console.log('target [in OUTER]: '+targetArea)

indexBtn.addEventListener('click', function(e){
    var target = document.querySelector('.targetArea')
    
    indexPage(target);
})





function findRecord(indexNumber){
    for(var i =0; i < localStorage.length; i++){  //LOOP THROUGH EACH RECORD
        var targetData = JSON.parse(localStorage.getItem(localStorage.key(i)))
        
        var storageKeyNum = localStorage.key(i)
        //console.log('keyNum: ' +storageKeyNum)

        matchedRecord = localStorage.getItem(storageKeyNum)////THIS IS THE RECORD WE WANT
       
        if (indexNumber == storageKeyNum){
   
            ParsedMatchedRecord = JSON.parse(matchedRecord)
 
            console.log('SUCCESS')
            return ParsedMatchedRecord

        }
        else{
            console.log('no match @ i = '+ i)
        }


    }
    //console.log(localStorage.getItem(localStorage.))
}


function removeItem(indexNumber, parentRow, dBtn){
    //alert('Are you sure?')
    var confirmed = confirm('Are you sure?')


    if (confirmed){
        localStorage.removeItem(indexNumber)
        const target = document.querySelector('.targetArea')
        indexPage(target)
    }
    else{
        if(parentRow != undefined){
            parentRow.style.backgroundColor = 'white'
        }
        if(dBtn != undefined){
            dBtn.style.backgroundColor = 'white'
            dBtn.style.fontWeight = 'normal'
            dBtn.style.color = 'rgba(255, 33, 33, 0.692)'
        }
    }

}
