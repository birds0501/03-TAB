$(function () {
  //대상을 변수에 저장
  const $tabMenu = $(".tab-menu > li");
  const $tabContent = $(".tab-con-item");

  console.log($tabMenu, $tabContent);

  //초기세팅 : 탭 컨텐츠가 첫번재만 빼고 다 숨겨져있어야 함
  $tabContent.hide();
  $tabContent.eq(0).show();

  //초기 세팅 : 첫번재 탭메뉴에 on클래스 부여
  $tabMenu.eq(0).addClass("on");

  //탭메뉴 클릭했을 때
  $tabMenu.on("click", function () {
    //모든 탭메뉴에서 on클래스 삭제
    $tabMenu.removeClass("on");

    //클릭한 탭메뉴에 on클래스 부여--> 디스 안쓰고 인덱스 이용할거임 일부러!

    //클락헌 메뉴의 인덱스를 구해서 : index()
    let idx = $(this).index();

    //그 인덱스에 해당하는 메뉴의 on클래스 부여
    $tabMenu.eq(idx).addClass("on");

    //모든 탭 컨텐츠를 다 숨기고
    $tabContent.hide();
    //클릭한 탭 메뉴 인덱스에 해당하는 탭 컨텐츠만 보이게
    $tabContent.eq(idx).show();
  });
});
