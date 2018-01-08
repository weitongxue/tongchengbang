//客服服务栏隐藏的内容
var service = document.querySelector(".headerRight .service");
//客服服务栏
var serve = document.querySelector(".headerRight .serve");

//给客服服务栏添加鼠标事件
serve.onmouseenter = function () {
    service.style.display = "block";
    serve.style.backgroundPosition = "50px -80px";


};
serve.onmouseleave = function () {
    serve.style.backgroundColor = "#f7f7f7";
    service.style.display = "none";
    serve.style.backgroundPosition = "50px -40px"
};

// 轮播图
var imgs = document.querySelector(".tuPian .imgs");
var mover = 0;
var lis = document.querySelectorAll(".indicator li");

function ltb() {
    var id = setTimeout(function stop() {
        mover -= 5;
        imgs.style["left"] = mover + "px";

        time = mover % 1200 == 0 ? 3000 : 0;

        mover = mover == -3600 ? 0 : mover;
        id = setTimeout(stop, time);
    }, 0);

    imgs.onmouseenter = function () {
        clearTimeout(id);
    };
    imgs.onmouseleave = function () {
        ltb();
    }
}

ltb();


$(function () {
    //导航栏客服服务
    $(".serve").mouseenter(function () {
        $(".serve").css({
            "backgroundColor": "white",
        })
        $(".service").css({
            "backgroundColor": "white",
        })
    }).mouseleave(function () {
        $(".serve").css({
            "backgroundColor": "#f7f7f7",
            "border": "none"
        })
    })

    //选择栏隐藏
    $(".nav1").mouseenter(function () {
        $(".nav1-right").css({
            "display": "block",
            "width": "600"
        });
        $(".nav1-left").css({
            "backgroundColor": "green",
        });
        $(".nav1-span").css({
            "display": "block"
        })
    }).mouseleave(function () {
        $(".nav1-right").animate({
            width: "hide"
        });
        $(".nav1-left").css({
            "backgroundColor": "black",
            "opacity": 0.6
        });
        $(".nav1-span").css({
            "display": "none"
        })

    });

    $(".nav2").mouseenter(function () {
        $(".nav2-right").css({
            "display": "block",
            "width": "600"
        });
        $(".nav2-left").css({
            "backgroundColor": "green",
        });
        $(".nav2-span").css({
            "display": "block"
        })
    }).mouseleave(function () {
        $(".nav2-right").animate({
            width: "hide"
        });
        $(".nav2-left").css({
            "backgroundColor": "black",
            "opacity": 0.6
        });
        $(".nav2-span").css({
            "display": "none"
        })
    });

    $(".nav3").mouseenter(function () {
        $(".nav3-right").css({
            "display": "block",
            "width": "600"
        });
        $(".nav3-left").css({
            "backgroundColor": "green",
        });
        $(".nav3-span").css({
            "display": "block"
        })
    }).mouseleave(function () {
        $(".nav3-right").animate({
            width: "hide"
        });
        $(".nav3-left").css({
            "backgroundColor": "black",
            "opacity": 0.6
        });
        $(".nav3-span").css({
            "display": "none"
        })
    });

    $(".nav4").mouseenter(function () {
        $(".nav4-right").css({
            "display": "block",
            "width": "600"
        });
        $(".nav4-left").css({
            "backgroundColor": "green",
        });
        $(".nav4-span").css({
            "display": "block"
        })
    }).mouseleave(function () {
        $(".nav4-right").animate({
            width: "hide"
        });
        $(".nav4-left").css({
            "backgroundColor": "black",
            "opacity": 0.6
        });
        $(".nav4-span").css({
            "display": "none"
        })
    });

    //进入店铺隐藏
    $(".shop1").hover(function () {
        $(".a1 div").css({
            "display": "block"
        });
        $(this).css({
            "backgroundColor": "#f7f7f7"
        });
    }, function () {
        $(".a1 div").css({
            "display": "none"
        })
        $(this).css({
            "backgroundColor": "white"
        });
    });

    $(".shop2").hover(function () {
        $(".a2 div").css({
            "display": "block"
        })
        $(this).css({
            "backgroundColor": "#f7f7f7"
        });
    }, function () {
        $(".a2 div").css({
            "display": "none"
        })
        $(this).css({
            "backgroundColor": "white"
        });
    });

    $(".shop3").hover(function () {
        $(".a3 div").css({
            "display": "block"
        })
        $(this).css({
            "backgroundColor": "#f7f7f7"
        });
    }, function () {
        $(".a3 div").css({
            "display": "none"
        })
        $(this).css({
            "backgroundColor": "white"
        });
    });

    $(".shop4").hover(function () {
        $(".a4 div").css({
            "display": "block"
        })
        $(this).css({
            "backgroundColor": "#f7f7f7"
        });
    }, function () {
        $(".a4 div").css({
            "display": "none"
        })
        $(this).css({
            "backgroundColor": "white"
        });
    });

    $(".shop5").hover(function () {
        $(".a5 div").css({
            "display": "block"
        })
        $(this).css({
            "backgroundColor": "#f7f7f7"
        });
    }, function () {
        $(".a5 div").css({
            "display": "none"
        })
        $(this).css({
            "backgroundColor": "white"
        });
    });

    // 默认排序
    $(".storeLeft-search a").click(function () {
        $(this).css("backgroundColor", "white").css("color", "#118855")
            .siblings().css("backgroundColor", "#f7f7f7").css("color", "#666")

    })

    //翻页
    function fanye(){
        var baseUrl = "http://tcb2018.applinzi.com/?pn=";
        var  currentPage = 0;  // 表示当前的页面
        var obj;  // 存储当前显示的数据
        changeBtn ();
        //更换数据
        function change(pn){
            $.get(baseUrl + pn,function (ease) {
                obj = ease;
                // 分页数据
                let shops = $(".right1 a");
                let shopS = $(obj.shop_data);
                let imgs = $(".shopMain-left img");
                let popularity = $(".right2 .popularity span");
                for (let i = 0; i < shops.length; i++) {
                    // 店铺
                    $(shops[i]).html("").html(shopS[i].shop_name);
                    // 图片
                    $(imgs[i]).attr("src", shopS[i].shop_ico);
                    //人气
                    $(popularity[i]).html("").html("人气:"+shopS[i].shop_visit + "次浏览")

                }
                //主营和地址
                $(".right1 p:eq(0)").html("").html("主营:" + obj.shop_data[0].main);
                $(".right1 p:eq(1)").html("").html("地址:" + obj.shop_data[0].addr);
                $(".right1 p:eq(2)").html("").html("主营:" + obj.shop_data[1].main);
                $(".right1 p:eq(3)").html("").html("地址:" + obj.shop_data[1].addr);
                $(".right1 p:eq(4)").html("").html("主营:" + obj.shop_data[2].main);
                $(".right1 p:eq(5)").html("").html("地址:" + obj.shop_data[2].addr);
                $(".right1 p:eq(6)").html("").html("主营:" + obj.shop_data[3].main);
                $(".right1 p:eq(7)").html("").html("地址:" + obj.shop_data[3].addr);
                $(".right1 p:eq(8)").html("").html("主营:" + obj.shop_data[4].main);
                $(".right1 p:eq(9)").html("").html("地址:" + obj.shop_data[4].addr);

                //设置默认排序，按人气，按成交量
                var shopList = shopS.slice();
                $(".storeLeft-search a:eq(1)").click(function(){
                        shopList.sort((a, b)=> b.count- a.count)
                    });
                $(".storeLeft-search a:eq(2)").click(function(){
                    shopList.sort((a, b)=> b.shop_visit - a.shop_visit)
                });

            });


        }




        //给按钮添加点击事件
        function changeBtn (){
            $(".pageMain span a").click(function(){
                let text = $(this).text().trim();

                if(text == "首页"){
                    currentPage = 1
                }else if(text == "<< 上一页"){
                    currentPage--;
                }else if(text == "下一页 >>"){
                    currentPage++;
                }else if(text == "尾页"){
                    currentPage = 99;
                }else{
                    currentPage = +text;
                }
                change(currentPage);

                //显示上一页
                if(currentPage >=2){
                    $(".pageMain span:eq(1)").css({
                        "display":"block"
                    })
                }else{
                    $(".pageMain span:eq(1)").css({
                        "display":"none"
                    })
                }
                //显示首页
                if(currentPage >= 6){
                    $(".pageMain span:eq(0)").css({
                        "display":"block"
                    })
                }else{
                    $(".pageMain span:eq(0)").css({
                        "display":"none"
                    })
                }
                //显示尾页
                if(currentPage >= 11){
                    $(".pageMain span:eq(13)").css({
                        "display":"block"
                    })
                }else{
                    $(".pageMain span:eq(13)").css({
                        "display":"none"
                    })
                }
                if(currentPage >= 94){
                    $(".pageMain span:eq(13)").css({
                        "display":"none"
                    })
                }




                //处理页码显示
                if(currentPage >= 6){
                    $(".index a").each((i,ele)=>{
                        $(ele).html(currentPage - 4 + i)
                    })
                }else{
                    $(".index a").each((i,ele)=>{
                        $(ele).html(i + 1)
                    })
                }
                if(currentPage >= 94){
                    $(".index a").each((i,ele)=>{
                        $(ele).html(90 + i)
                    })
                }

                //给按钮添加颜色
                $(".index a").each((i,ele)=>{
                    var text = $(ele).text().trim();
                    if(text == currentPage){
                        $(ele).css("backgroundColor","#FC6621")
                    }else{
                        $(ele).css("backgroundColor","white")
                    }
                })



            });

        }
    }
    fanye();



        // 回到顶部
        (function roll() {
            $(window).scroll(function () {
                $(".black").css({
                    "display": "block"
                });

                if ($(window).scrollTop() == 0) {
                    $(".black").css({
                        "display": "none"
                    });
                }

            });

            $(".black").click(function () {
                $("body,html").animate({
                    scrollTop: 0
                }, 200);
            });
        }());

        //选择城市
        (function select() {
            $(".hit1").click(function () {

                $(".select-city").css({
                    "display": "block"
                })
                $(".select-county").css({
                    "display": "none"
                })

            });

            $(".hit2").click(function () {
                $(".select-city").css({
                    "display": "none"
                });
                $(".select-county").css({
                    "display": "block"
                })
            })
        })();

        //选择城市里的关闭按钮
        $(".btn1").click(function () {
            $(".select-city").hide(100)
        });
        $(".btn2").click(function () {
            $(".select-county").hide(100)
        })
    });
