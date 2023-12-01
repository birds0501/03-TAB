$(function () {
  //대상을 변수로 저장
  const $body = $("body");

  // //테슽트 : body에 백그라운드 이미지 넣기
  // $body.css({
  //   background: "url(img/blackpink01.jpg) no-repeat 0 0 / cover", //js파일이 들어간 페이지가 경로의 기준
  // });

  const $tabMenu = $(".tab-menu > li");
  const $tabContent = $(".tab-con-item");

  //초기화
  let idx = 0;
  tabAction(idx);

  //공통의 동작을 함수로 정의
  function tabAction(index) {
    //매서드 체인(동일한 선택자는 이어쓰는 것-간결해짐)
    $tabMenu.removeClass("on").eq(index).addClass("on");

    $tabContent.hide().eq(index).show();
  }

  $tabMenu.on("click", function (e) {
    e.preventDefault();

    //인덱스 받아오기
    idx = $(this).index(); //let을 지워야 정의 된 변수를 전국구로 옮겨서 사용할 때 공통으로 사용가능
    tabAction(idx);
  });
});
