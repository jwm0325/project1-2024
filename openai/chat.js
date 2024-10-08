OPENAPI_KEY = ""


smodel35 = "gpt-3.5-turdo"
smodelmini = "gpt-4o-mini"
smodel40o = "gpt-4o"
// squestion = "황진이가 누구지"

function talk(){
    squestion = txtMsg.value 
    data ={
        model: smodelmini,
        messages: [
            {
                role: "user",
                content: squestion
            }
        ]
    }


    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/chat/completions",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        // alert(response.choices[0].messages.content)
        Text.Out.value = response.choices[0].messages.content
    }).fail(function(error){
        console.log(error)
        errormsg = error.status + ":" +error.responseJSON.error.code + "-" + error.responseJSON.error.messages
        txtOut.value = errormsg
    })
}


talk()

function draw(){
    squestion = txtMsg.value 
    data ={
        prompt: squestion,
        n: 2,
        size: "512x512"
    }
    

    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/images/generations",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        // alert(response.choices[0].messages.content)
        gimage.src = response.data[0].url
        gimage2.src = response.data[1].url
    }).fail(function(error){
        console.log(error)
        errormsg = error.status + ":" +error.responseJSON.error.code + "-" + error.responseJSON.error.messages
        txtOut.value = errormsg
    })
}
