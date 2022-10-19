{
    // 탭 메뉴
    const tabMenuBtn = $(".tab_menu > li");
    // const tabMenuBtn = document.querySelectorAll('.movie_title > ul > li');
    
    const contents = $(".content_box > ul > li");
    // const employCont = document.querySelectorAll('.movie_chart > div');
    
    contents.hide().eq(0).show(); //첫 화면 초기화
    
    tabMenuBtn.click(function (e) {
        e.preventDefault();

        //변수 선언//
        const target = $(this); //tabMenuBtn const target = $(this);
        const index = target.index(); //tabMenuBtn의 몇번째 선택했는지 const index = target.index();

        //클래스 추가/삭제 부분//
        tabMenuBtn.removeClass("active"); //모든 tabMenuBtn의 active 클래스 삭제
        target.addClass("active"); //선택한 tabMenuBtn의 active 클래스 추가

        //콘텐츠 부분//
        contents.hide();  // 모든 콘텐츠 숨기기
        contents.eq(index).show(); //선택한 tabMenuBtn과 맞게 콘텐츠 보여주기
    })
    }