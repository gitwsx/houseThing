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
$(".release-success_box-bottom").click(function () {
    window.history.back(0);
})
$('.rR-s-search').click(function () {
    $('.release-search').removeClass('release-success-active');
})
$('.rs-s-search-add').click(function () {
    $('.release-search').addClass('release-success-active');
})
$('.release-search-content div').click(function () {
    $('.release-search').addClass('release-success-active');
    $('.rR-s-search-text').text($(this).text());
})

$('.rR-s-search-add').click(function () {
    $('.release-add').removeClass('release-success-active');
})
$('.releaseRequirements-head-cancel2').click(function () {
    $('.release-add').addClass('release-success-active');
})

$('.release-add-btn').click(function () {
    $('.release-add-success').removeClass('release-success-active');
})
$('.release-add-success_box-bottom').click(function () {
    $('.release-add-success').addClass('release-success-active');
    $('.release-add').addClass('release-success-active');
})

$('.hI-add-box').click(function () {
    document.getElementById('file-img').click();
})
document.getElementById('file-img').onchange = function () {
    var file = document.getElementById('file-img').files[0];
    var fr = new FileReader()
    fr.readAsDataURL(file);
    fr.onload = function () {
        var src = this.result;
        document.getElementsByClassName('hI-add-box')[0].style.background='url('+ src +') no-repeat center';
        document.getElementsByClassName('hI-add-box')[0].style.backgroundSize='75px 75px';
        $('.add-text').addClass('display');
    }

}
