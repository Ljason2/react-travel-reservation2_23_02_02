

# 여행예약 프로젝트

## :star:사이트 소개
    국내 여행으로 서울, 경기도, 경상도, 제주도 추천 여행지를 소개해주고, 여행 티켓을 예약할 수 있는 웹 서비스 개발
## :date:일정
    2023. 01. 25 ~ 2023. 02. 01

## :computer:디바이스
    PC


## :lips:개발언어
- React, JavaScript, CSS3, HTML5

<img src="https://jason-img.s3.amazonaws.com/mdoc/react.png" style="width:100px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/js.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/css.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/html5.png" style="width:56px">
## :earth_americas:개발환경
- VScode, npm, Node.js, AWS

<img src="https://jason-img.s3.amazonaws.com/mdoc/vscode.png" style="width:90px"><img src="https://jason-img.s3.amazonaws.com/mdoc/npm2.png" style="width:60px; margin-left:3px;">
<img src="https://jason-img.s3.amazonaws.com/mdoc/nodejs.png" style="width:91px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/aws.png" style="width:90px">



## :link:배포링크

- 배포방식은 AWS: S3의 배포방식을 이용하였습니다.
- [바로가기](https://jason-react-travel-resevation2-23-02-02.s3.amazonaws.com/index.html)


## :clipboard:프로젝트 설명


 #### JSON 파일을 가져와서 여행 예약 리스트를 볼 수 있는 기능

1. 사용자가 여행 예약 리스트를 볼 수 있음.
    
        JSON 파일을 가져와서 useEffect를 통해 데이터를 업로드하여 화면에 나타나게 하였다.


#### 리스트 항목을 삭제할 수 있는 기능

1. 사용자가 여행 예약 리스트의 항목을 삭제할 수 있음.

        데이터의 id값에 해당하지 않는 객체들만 남겨두는 함수를 만들어서 리스트가 삭제되게 하였다.

        
#### 리스트에 해당 하는 내용을 검색 할 수 있는 기능

1.  사용자가 여행 예약 리스트의 내용을 검색할 수 있음.

        useState를 사용하여 단어를 입력하고 검색버튼을 누르면 해당하는 항목이 검색되게 하였다. 


#### 리스트를 해당 메뉴에 따라 정렬 할 수 있는 기능

1.  사용자가 여행 예약 리스트를 이름, 지역명, 상품명 등으로 정렬할 수 있음.
    
        정렬 아이콘을 클릭하여 이름, 지역명, 상품명등의 메뉴를 클릭하면 useState를 통해서 
        리스트가 해당 메뉴에 맞게 정렬되게 하였다.


#### 여행 티켓 예약 기능

1. 사용자가 여행 티켓을 예약할 수 있는 기능을 개발.

        상단의 예약하기를 클릭하면 여행 예약 신청란이 나오고, 해당 폼에 예약 정보를 입력하면 useState를 통해서
        객체의 정보가 수정되고 하단의 예약하기를 누르면 리스트로 예약 정보가 넘어가게끔 하였다.


#### 모달창이 나오는 기능

1. 여행 티켓을 예약하면 예약정보를 확인시켜주는 창이 나오는 기능을 개발.

        모달창 컴포넌트를 만들어서 useState를 통해 창이 나오고, 사라지게끔 하였다.
        


#### 여행지 추천 기능

1. 사용자가 국내 여행지 안내표를 클릭하면 지역마다 추천 여행지를 안내해주는 기능을 개발.

        국내 여행지 안내표를 클릭하면 모달창의 display 값이 수정되어 모달창이 나오고, 사라지게 하였다. 

## :pencil2:피드백

### 느낀점




- 데이터를 받아오는 도중에 useEffect의 무한루프 문제(useEffect 함수 내의 setState가 원인)가 있었는데 이를 해결하기위해 useCallback이 필요하다는 것을 깨달았다.
    

- 다양한 종류의 React-Icons를 경험하며 상황에 맞는 사용법을 익혔다.

