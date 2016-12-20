$(".hI-elements label").click(function(){
    $(this).children("i").toggleClass("hI-radio-active");
})
$(".releaseRequirements-head-cancel").click(function(){
    $(".release-cancel").removeClass("release-success-active");
})
$(".release-cancel_box-bottom-left").click(function(){
    $(".release-cancel").addClass("release-success-active");
})
$(".release-cancel_box-bottom-right").click(function(){
    window.history.back(0);
})
$(".releaseRequirements-btn").click(function(){
    $(".release-success").removeClass("release-success-active");
})
// 确认发布

