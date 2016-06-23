$(document).ready(function(){
var pageTrainingDetail = GENIE.MAIN.Application.getNextPageDetail();
 $("#msgid").html(pageTrainingDetail.value);
});