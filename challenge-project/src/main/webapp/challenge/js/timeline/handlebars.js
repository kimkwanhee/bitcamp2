//위에서 준비한 템플릿 데이터를 가지고 HTML을 생성할 템플릿 엔진 준비

$(document).ready(function() {
	// 타임라인 불러오기
  var trTemplateSrc = $("#tr-template").html();
  var templateFn = Handlebars.compile(trTemplateSrc);

  $.getJSON(serverRoot + "/json/timeline/list", (data) => {
    $('#sh_tl_card_add').html(templateFn({
      list: data
    }));
    
  }).done(function() {
	  // 댓글 달기
	  var tlNos = document.getElementsByClassName("tlNo");
	  var tlLks = document.getElementsByClassName("tlLks")
	  
	  $('.tlNo').each(function(tlNos, item) {
		 $(this).removeAttr("style");
		 $(this).addClass('cm' + tlNos); 
	  });
	  
    var cmTemplateSrc = $("#cm-template").html();
    var cmtemplateFn = Handlebars.compile(cmTemplateSrc);


    var i;
    for (i = 0; i < tlNos.length; i++) {
    	(function (closed_i) {
    	  $.getJSON(serverRoot + "/json/comment/listWithNo/" + tlNos[closed_i].textContent, (data) => {
    		  
    		  var cm = 'cm' + closed_i;
    		  
    	      $('.' + cm).html(cmtemplateFn({
    	        list: data
    	      }));
    	    });
    	})(i);
    };

    
  });
});

//
$(document).ready(function() {
	$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
		$(".tl-user-name-json").html(data.name);
	})
	.done(function() {
		console.log("회원 이름 입력 성공!")
	})
	.fail(function() {
		console.log("회원 이름 입력 실패!!")
	});
	
});