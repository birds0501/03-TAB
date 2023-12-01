$(function () {
  //대상을 변수로 저장
  const $body = $("body");
  const $tabMenu = $(".tab-menu > li");
  const $tabContent = $(".tab-con-item");

  //배열에 이미지와 텍스트 정보를 저장
  const bgArr = [
    {
      pic: "blackpink01.jpg",
      title: "지수가 제일 예뻐요",
    },
    {
      pic: "blackpink02.jpg",
      title: "지수가 정말 예뻐요",
    },
    {
      pic: "blackpink03.jpg",
      title: "지수가 항상 예뻐요",
    },
  ];

  console.log(bgArr);
  console.log(bgArr[1]);
  console.log(bgArr[1].title);
  console.log(bgArr[1]["title"]); //키 대괄호로 접근시킬때는 문자열('')로 작성해야함

  //초기화
  let idx = 0;
  tabAction(idx);

  //공통의 동작을 함수로 정의
  function tabAction(index) {
    //매서드 체인(동일한 선택자는 이어쓰는 것-간결해짐)
    $tabMenu.removeClass("on").eq(index).addClass("on");
    $tabContent.hide().eq(index).show();

    //배경이미지 적용
    $body.css({
      background: `url(img/${bgArr[index].pic}) no-repeat 0 0/ cover`,
    });

    //탭 콘텐츠의 제목을 수정
    $tabContent.eq(index).find("h2").text(bgArr[index].title);
  }

  $tabMenu.on("click", function (e) {
    e.preventDefault();

    //인덱스 받아오기
    idx = $(this).index(); //let을 지워야 정의 된 변수를 전국구로 옮겨서 사용할 때 공통으로 사용가능
    tabAction(idx);
  });
});
