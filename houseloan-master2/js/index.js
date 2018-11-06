$(function() {
	$("#youhui li").click(function() {
		var val = $(this).children("a").attr("val");
		var texVal = val * 100;
		$(".zhekou").prop("value", texVal);
	});

	$("#youhui li").on("touchend", function() {
		var val = $(this).children("a").attr("val");
		var texVal = val * 100;
		$(".zhekou").prop("value", texVal);
	});

	$("[name=sub]").click(function() {
		var money = $("#money").prop("value");
		var zhekou = $(".zhekou").prop("value");
		var result = money * (zhekou / 100);
		$("#result").html(result.toFixed(2));
		$("#show").fadeIn();
	});

	$("[name=sub]").on("touchend", function() {
		var money = $("#money").prop("value");
		var zhekou = $(".zhekou").prop("value");
		var result = money * (zhekou / 100);
		$("#result").html(result.toFixed(2));
		$("#show").fadeIn();
	});

	$("#goufanglilv").click(function() {
		$("#goufanglilv").children("a").css("color","#d9534f");
		$("#goufangzhekou").children("a").css("color","#337ab7");
		$("#gfzk").hide();
		$("#gfll").show();

	});

	$("#goufangzhekou").click(function() {
		$("#goufangzhekou").children("a").css("color","#d9534f");
		$("#goufanglilv").children("a").css("color","#337ab7");
		$("#gfll").hide();
		$("#gfzk").show();

	});

	$("#goufanglilv").on("touchend", function() {
		$("#goufanglilv").children("a").css("color","#d9534f");
		$("#goufangzhekou").children("a").css("color","#337ab7");
		$("#gfzk").hide();
		$("#gfll").show();

	});

	$("#goufangzhekou").on("touchend", function() {
		$("#goufangzhekou").children("a").css("color","#d9534f");
		$("#goufanglilv").children("a").css("color","#337ab7");
		$("#gfll").hide();
		$("#gfzk").show();

	});
})