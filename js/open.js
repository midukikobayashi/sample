$(".line").animate({"width":"100%"},1500,function(){

  $(".line").css("right",0)//cssはレイアウトだけを指定する。起点を逆にした。
  //コールバック関数　線が伸びた後に実行
  $(".line").animate({"width":"0"},function(){
    $(".up").animate({"height":"0%"});
    $(".down").animate({"height":"0%"});
  })
})//html要素のlineに指定。animate関数。どうしたいのか（widthを100%に）,1.5秒かけて