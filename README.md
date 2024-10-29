# project1-2024
2024-2학기 캡스톤프로잭트 수업


# openweathermap

지정된 장소의 현재 날씨를 표시
- [실습해보기](https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35)

<img src="img1.png">

```javascript
$.ajax({
			type: "GET",
			url: 'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35',
		}).done(function(response) {

            // console.log(response)
            // alert(response.weather[0].main)

            let wdata = response
            let exdata = response.weather[0];
        
            temp.innerText = wdata.main.temp + "°C";
            min.innerText = wdata.main.temp_min;
            max.innerText = wdata.main.temp_max;
            wind.innerText = wdata.wind.speed;
        
            weather.innerText = exdata.main + "," + exdata.description;
            icon.setAttribute('src', icon_url + exdata.icon + ".png");
		}).fail(function(error) {
			alert("!/js/user.js에서 에러발생: " + error.statusText);
		});
```
# openAI
OpenAI에서 제공하는 텍스트생성 및 이미지 생성 실습
<img src="img3.png">
- 텍스트 생성
```javascript
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
```

- 이미지 생성
```javascript
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
```
# google cloud vision
얼굴 사진에서 표정읽기

<img src="img2.png">

```javascript
$.ajax({
        type:"POST",
        url:'https://vision.googleapis.com/v1/images:annotate?key=' + VISION_API_KEY,
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        alert(response.faceAnnotations[0].messages.content)
    }).fail(function(error){
        console.log(error)

    })
```
---

개발 순서
1. 소스수정
2. 소스저장
3. 커밋애 푸쉬
4. 커밋메시지

2024-9-10 깃허브연동실습
로컬에서 편집함