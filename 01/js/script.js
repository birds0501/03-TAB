$(function () {
  //대상을 변수에 저장
  const $tabMenu = $(".tab-menu > li");
  const $tabContent = $(".tab-con-item");

  //초기 세팅
  tabAction(0);

  //탭메뉴 클릭했을 때
  $tabMenu.on("click", function () {
    let idx = $(this).index();

    tabAction(idx);
  });

  //중복되는 동작을 함수로 정의(index는 매개변수이기 때문에 이름 변경 가능함. 다른 값들을 끌어오는 역할)
  function tabAction(index) {
    $tabContent.hide();
    $tabContent.eq(index).show();

    $tabMenu.removeClass("on");
    $tabMenu.eq(index).addClass("on");
  }
});
