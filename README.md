# project1-2024
2024-2학기 캡스톤프로잭트 수업

# openweathermap

지정된 장소의 현재 날씨를 표시
```
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

# google cloud vision

개발 순서
1. 소스수정
2. 소스저장
3. 커밋애 푸쉬
4. 커밋메시지

2024-9-10 깃허브연동실습
로컬에서 편집함