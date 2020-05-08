;

var exported_anonymus = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

export { exported_anonymus as anonymus };

ga('create', 'UA-45751904-1', 'yjyao.com');
ga('send', 'pageview');

"use strict";

layout.region = $('#game-region')[0];
layout.adjust();

domBinding.fragmentToDom($('#game-region')[0]);
game.adjustLayout();

$(window).resize(function(){
    layout.adjust();
    game.adjustLayout();
});

var nums = ['one', 'two', 'three', 'four'];
$('#control-region>button').on("click", function(){
    $('#control-region')[0].hidden = true;
});
$('#control-region>.newgame-but').on("click", function(){
    config.names.forEach(function(n, ind){
        config.levels[ind] = $('.player-diff.' + nums[ind] + ' input').val();
        config.names[ind] = $('.player-set-name.' + nums[ind]).text();
    });
    config.sync();
});
$('.newgame-but').on("click", function(){
    if(confirm("This will end the current game. Are you sure?")){
        game.newGame();
    }
});
$('#settings-but').on("click", function(){
    $('#settings-dialog')[0].hidden = false;
    config.names.forEach(function(n,ind){
        $('.player-set-name.' + nums[ind])[0].innerHTML = n;
        $('.player-diff.' + nums[ind] + ' input').val(parseInt(config.levels[ind]));
        console.log(parseInt(config.levels[ind]));
    });
    $('#control-region')[0].hidden = false;
});
game.newGame();

	