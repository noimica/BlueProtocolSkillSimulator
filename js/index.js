
var current_data = AF;
/* Vue.js */
var tactical_skill_button = Vue.extend({
    props: ['imgsrc', 'data'],
    template: `
    <div class="skill">
        <img src="img/tactical_skill_bg.svg" class="tactical_skill_bg skill_bgimg">
        <img src="img/tactical_skill_frame.svg" class="tactical_skill_frame skill_bgimg">
        <img :src="imgsrc" class="skill_img">
        <span class="skill_point">{{ data.point }}</span>
        <div class="tooltip">
            <div class="tooltip_title">{{ data.title }}</div>
            <div class="tooltip_body">
                スキルポイント:{{ data.point }}<br />
                クラスレベル:{{ data.level }}<br />
                <p>{{ data.exp }}</p>
            </div>
        </div>
    </div>`
});

var ability_skill_button = Vue.extend({
    props: ['imgsrc', 'icon', 'data', 'ability'],
    template: `
    <div class="skill">
        <img src="img/ability_skill_bg.svg" class="tactical_skill_bg ability_skill_bgimg">
        <img src="img/ability_skill_frame.svg" class="tactical_skill_frame ability_skill_bgimg">
        <img :src="icon" class="tactical_skill_frame ability_skill_bgimg">
        <img :src="imgsrc" :class='[ability ? "skill_img tactical_ability_img" : "skill_img ability_skill_img"]'>
        <span class="skill_point">{{ data.point }}</span>
        <div class="tooltip">
            <div class="tooltip_title">{{ data.title }}</div>
            <div class="tooltip_body">
                スキルポイント:{{ data.point }}<br />
                クラスレベル:{{ data.level }}<br />
                <p>{{ data.exp }}</p>
            </div>
        </div>
    </div>`
});

var regular_skill_button = Vue.extend({
    props: ['imgsrc', 'icon', 'data', 'rotate'],
    template: `
    <div class="skill">
        <img src="img/regular_skill_bg.svg" :class='[rotate ? "tactical_skill_bg ability_skill_bgimg rotate_button" : "tactical_skill_bg ability_skill_bgimg"]'>
        <img src="img/regular_skill_frame.svg" :class='[rotate ? "tactical_skill_frame ability_skill_bgimg rotate_button" : "tactical_skill_frame ability_skill_bgimg"]'>
        <img :src="imgsrc" class="skill_img regular_skill_img">
        <span class="skill_point">{{ data.point }}</span>
        <div class="tooltip">
            <div class="tooltip_title">{{ data.title }}</div>
            <div class="tooltip_body">
                スキルポイント:{{ data.point }}<br />
                クラスレベル:{{ data.level }}<br />
                <p>{{ data.exp }}</p>
            </div>
        </div>
    </div>`
});

var ult_skill_button = Vue.extend({
    props: ['imgsrc', 'data'],
    template: `
    <div class="skill">
        <img src="img/ult_skill_bg.svg" class="tactical_skill_bg skill_bgimg">
        <img src="img/ult_skill_frame.svg" class="tactical_skill_frame skill_bgimg">
        <img :src="imgsrc" class="skill_img ult_skill_img">
        <span class="skill_point">{{ data.point }}</span>
        <div class="tooltip">
            <div class="tooltip_title">{{ data.title }}</div>
            <div class="tooltip_body">
                スキルポイント:{{ data.point }}<br />
                クラスレベル:{{ data.level }}<br />
                <p>{{ data.exp }}</p>
            </div>
        </div>
    </div>`
});

var permanent_button = Vue.extend({
    props: ['text', 'data'],
    template: `
    <div class="skill">
        <img src="img/permanent_bg.svg" class="tactical_skill_bg ability_skill_bgimg">
        <img src="img/permanent_frame.svg" class="tactical_skill_frame ability_skill_bgimg">
        <img src="img/tactical_ability_plus.svg" class="tactical_skill_frame ability_skill_bgimg permanent_plus">
        <span class='skill_img permanent_text'>{{ text }}</span>
        <span class="skill_point">{{ data.point }}</span>
        <div class="tooltip">
            <div class="tooltip_title">{{ data.title }}</div>
            <div class="tooltip_body">
                スキルポイント:{{ data.point }}<br />
                クラスレベル:{{ data.level }}<br />
                <p>{{ data.exp }}</p>
            </div>
        </div>
    </div>`
})

var tactical_skill = Vue.extend({
    props: ['imgsrc' ,'data'],
    template:`
    <ul class="main-tree">
        <li class="tree-parts tree-parts-start">
            <tactical_skill_button 
                :imgsrc="imgsrc"
                v-bind:data="data[0]"
                >
            </tactical_skill_button>
        </li>
        <li class="tree-parts">
            <tactical_skill_button 
                :imgsrc="imgsrc"
                v-bind:data="data[1]"
                >
            </tactical_skill_button>
        </li>
        <li class="tree-parts">
            <tactical_skill_button 
                :imgsrc="imgsrc"
                v-bind:data="data[2]"
                >
            </tactical_skill_button>
            <ul class="sub-tree">
                <li class="tree-parts tree-parts-start">
                    <ability_skill_button
                        :imgsrc="imgsrc"
                        icon="img/tactical_skill_alpha.svg"
                        v-bind:data="data[3]"
                        >
                </li>
                <li class="tree-parts">
                    <ability_skill_button
                        :imgsrc="imgsrc"
                        icon="img/tactical_skill_beta.svg"
                        v-bind:data="data[4]"
                        >
                </li>
            </ul>
        </li>
    </ul>
`
    ,
    components: {
        tactical_skill_button: tactical_skill_button,
        ability_skill_button : ability_skill_button
    }
});

var tactical_ability = Vue.extend({
    props: ['imgsrc' ,'data', 'icon'],
    template:`
        <ul class="main-tree">
            <li class="tree-parts tree-parts-start">
                <ability_skill_button
                    :imgsrc="imgsrc"
                    :icon="icon"
                    v-bind:data="data[0]"
                    ability="1"
                    >
            </li>
            <li class="tree-parts">
                <ability_skill_button
                    :imgsrc="imgsrc"
                    :icon="icon"
                    v-bind:data="data[1]"
                    ability="1"
                    >
            </li>
            <li class="tree-parts">
                <ability_skill_button
                    :imgsrc="imgsrc"
                    :icon="icon"
                    v-bind:data="data[2]"
                    ability="1"
                    >
            </li>
        </ul>
`
    ,
    components: {
        ability_skill_button : ability_skill_button
    }
});

var regular_skill = Vue.extend({
    props: ['imgsrc' ,'data', 'rotate'],
    template:`
    <ul class="main-tree">
        <li class="tree-parts tree-parts-start">
            <regular_skill_button
                :imgsrc="imgsrc"
                v-bind:data="data[0]"
                :rotate="rotate"
                >
            </regular_skill_button>
        </li>
        <li class="tree-parts">
            <regular_skill_button
                :imgsrc="imgsrc"
                v-bind:data="data[1]"
                :rotate="rotate"
                >
            </regular_skill_button>
        </li>
        <li class="tree-parts">
            <regular_skill_button
                :imgsrc="imgsrc"
                v-bind:data="data[2]"
                :rotate="rotate"
                >
            </regular_skill_button>
        </li>
    </ul>
`
    ,
    components: {
        regular_skill_button: regular_skill_button,
    }
});

var permanent = Vue.extend({
    props: ['text' ,'data'],
    template:`
    <ul class="main-tree">
        <li class="tree-parts tree-parts-start">
            <permanent_button
                :text="text"
                v-bind:data="data[0]"
                >
            </permanent_button>
        </li>
        <li class="tree-parts">
            <permanent_button
                :text="text"
                v-bind:data="data[1]"
                >
            </permanent_button>
        </li>
        <li class="tree-parts">
            <permanent_button
                :text="text"
                v-bind:data="data[2]"
                >
            </permanent_button>
        </li>
    </ul>
`
    ,
    components: {
        permanent_button: permanent_button,
    }
});

var componentRoot = new Vue({
    data: () => {
        return current_data;
    },
    template: `
    <div>
        <div class="rows">
            <div class="rows_title">レギュラースキル</div>
            <div class="rows" style="margin-left:-20px;margin-right:10px">
                <regular_skill :imgsrc="RG[0].imgsrc" v-bind:data="RG[0].data" :rotate="RG[0].rotate"></regular_skill>
            </div>
            <div class="rows" style="width:60px">
                <regular_skill :imgsrc="RG[1].imgsrc" v-bind:data="RG[1].data" :rotate="RG[1].rotate"></regular_skill>
            </div>
        </div>
        <div class="rows rows_border">
            <div class="rows_title">タクティカルスキル1</div>
            <tactical_skill :imgsrc="TC[0][0].imgsrc" v-bind:data="TC[0][0].data"></tactical_skill><br>
            <tactical_skill :imgsrc="TC[0][1].imgsrc" v-bind:data="TC[0][1].data"></tactical_skill>
        </div>
        <div class="rows rows_border">
            <div class="rows_title">タクティカルスキル2</div>
            <tactical_skill :imgsrc="TC[1][0].imgsrc" v-bind:data="TC[1][0].data"></tactical_skill><br>
            <tactical_skill :imgsrc="TC[1][1].imgsrc" v-bind:data="TC[1][1].data"></tactical_skill>
        </div>
        <div class="rows rows_border">
            <div class="rows_title">タクティカルスキル3</div>
            <tactical_skill :imgsrc="TC[2][0].imgsrc" v-bind:data="TC[2][0].data"></tactical_skill><br>
            <tactical_skill :imgsrc="TC[2][1].imgsrc" v-bind:data="TC[2][1].data"></tactical_skill>
        </div>
        <div class="rows rows_border">
            <div class="rows_title">タクティカルスキル4</div>
            <tactical_skill :imgsrc="TC[3][0].imgsrc" v-bind:data="TC[3][0].data"></tactical_skill><br>
            <tactical_skill :imgsrc="TC[3][1].imgsrc" v-bind:data="TC[3][1].data"></tactical_skill>
        </div>
        <div class="rows rows_border">
            <div class="rows_title">ULTスキル</div>
            <div style="height:32px"></div>
            <ult_skill_button 
                :imgsrc="ULT.imgsrc"
                v-bind:data="ULT.data"
            >
            </ult_skill_button>
        </div>
        <div class="rows rows_border">
            <div class="rows_title">タクティカルアビリティ</div>
            <table class="tactical_ability">
                <tr>
                    <td>
                        <tactical_ability
                            :imgsrc="TCAB[0].imgsrc"
                            icon="img/tactical_ability_plus.svg"
                            v-bind:data="TCAB[0].data"
                        >
                        </tactical_ability>
                    </td>
                    <td>
                        <tactical_ability
                            :imgsrc="TCAB[1].imgsrc"
                            icon="img/tactical_ability_plus.svg"
                            v-bind:data="TCAB[1].data"
                        >
                        </tactical_ability>
                    </td>
                    <td>
                        <tactical_ability
                            :imgsrc="TCAB[2].imgsrc"
                            icon="img/tactical_ability_plus.svg"
                            v-bind:data="TCAB[2].data"
                        >
                        </tactical_ability>
                    </td>
                </tr>
                <tr>
                    <td>
                        <tactical_ability
                            :imgsrc="TCAB[3].imgsrc"
                            icon="img/tactical_ability_plus.svg"
                            v-bind:data="TCAB[3].data"
                        >
                        </tactical_ability>
                    </td>
                    <td>
                        <tactical_ability
                            :imgsrc="TCAB[4].imgsrc"
                            icon="img/tactical_ability_plus.svg"
                            v-bind:data="TCAB[4].data"
                        >
                        </tactical_ability>
                    </td>
                    <td>
                        <tactical_ability
                            :imgsrc="TCAB[5].imgsrc"
                            icon="img/tactical_ability_plus.svg"
                            v-bind:data="TCAB[5].data"
                        >
                        </tactical_ability>
                    </td>
                </tr>
            </table>
        </div>
        <div class="rows rows_border">
            <div class="rows_title">パーマネント</div>
            <table class="tactical_ability">
                <tr>
                    <td>
                        <permanent
                            :text="PM[0].text"
                            :data="PM[0].data"
                        ></permanent>
                    </td>
                    <td>
                        <permanent
                            :text="PM[1].text"
                            :data="PM[1].data"
                        ></permanent>
                    </td>
                    <td>
                        <permanent
                            :text="PM[2].text"
                            :data="PM[2].data"
                        ></permanent>
                    </td>
                </tr>
                <tr>
                    <td>
                        <permanent
                            :text="PM[3].text"
                            :data="PM[3].data"
                        ></permanent>
                    </td>
                    <td>
                        <permanent
                            :text="PM[4].text"
                            :data="PM[4].data"
                        ></permanent>
                    </td>
                    <td>
                        <permanent
                            :text="PM[5].text"
                            :data="PM[5].data"
                        ></permanent>
                    </td>
                </tr>
                <tr>
                    <td>
                        <permanent
                            :text="PM[6].text"
                            :data="PM[6].data"
                        ></permanent>
                    </td>
                    <td>
                        <permanent
                            :text="PM[7].text"
                            :data="PM[7].data"
                        ></permanent>
                    </td>
                    <td>
                        <permanent
                            :text="PM[8].text"
                            :data="PM[8].data"
                        ></permanent>
                    </td>
                </tr>
                <tr>
                    <td>
                        <permanent
                            :text="PM[9].text"
                            :data="PM[9].data"
                        ></permanent>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    `
    ,
    components: {
        tactical_skill : tactical_skill,
        regular_skill: regular_skill,
        ult_skill_button: ult_skill_button,
        tactical_ability: tactical_ability,
        permanent: permanent
    }
});
  

componentRoot.$mount( '#MyAppRoot' );
/*
マウス追従吹き出し
http://php.o0o0.jp/article/jquery-mouse_balloons
*/
$(function () {
    $('img').hover(function() {
      //$(this).nextAll('div').show();
      $("#tooltip").html($(this).nextAll('div').html());
      $("#tooltip").show();
    }, function(){
      //$(this).nextAll('div').hide();
      $("#tooltip").hide();
    });
  
    // マウス座標を吹き出しにセット
    $('img').mousemove(function(e){
      // 吹き出しに合わせ微調整
      $('.tooltip').css({
        'top': e.pageY ,
        'left': e.pageX + 10
      });    
    });

    $(document).on('click', 'img', (event) => {
        var par = $(event.target).parent('.skill');
        var lis = par.parent('li');
        var nn = Array();
        par.toggleClass('skill-active');
        nn.push(par);
        if(par.hasClass('skill-active')){
            if(lis.parent('ul').hasClass('sub-tree')){
                lis = lis.parent('ul').parent('li');
                lis.children('.skill').toggleClass('skill-active', true);
                nn.push(lis.children('.skill'));
            }
            lis.prevAll().each((index, el) => {
                $(el).children('.skill').toggleClass('skill-active', true);
                nn.push($(el).children('.skill'));
            });
        }else{
            if(!lis.parent('ul').hasClass('sub-tree')){
                lis.nextAll().each((index, el) => {
                    $(el).children('.skill').toggleClass('skill-active', false);
                    nn.push($(el).children('.skill'));
                });
            }
            lis.parent().last('li').find('.sub-tree > li').each((index, el) => {
                $(el).children('.skill').toggleClass('skill-active', false);
                nn.push($(el).children('.skill'));
            });
        }
        //console.log(nn);
        change_point();
    });

    function change_point(){
        var sum = 0;
        $('div.skill-active').each((index, el) => {
            sum += Number($(el).find('.skill_point').text());
        });
        $('#used_point').text(sum);
        $('#last_point').text($("#max_point").val()-$('#used_point').text());
    }

    $('.topnav input').on('change', () => {
        console.log($("#max_point").val()-$('used_point').text());
        $('#last_point').text($(event.target).val()-$('#used_point').text());
    });

    function reset(){
        $('div.skill-active').each((index, el) => {
            $(el).toggleClass('skill-active', false);
        });
        $('#used_point').text('0');
        $('#last_point').text($("#max_point").val()-$('#used_point').text());
    }

    $('#reset').on('click', () => {
        reset();
    })
    
    function jobchange(job){
        switch(job){
            case 'AF':
                componentRoot._data = AF;
                break;
            case 'TS':
                componentRoot._data = TS;
                break;
            case 'BA':
                componentRoot._data = BA;
                break;
            case 'SC':
                componentRoot._data = SC;
                break;
            
        }
        componentRoot.$forceUpdate();
    }

    $('#job').on('change', (el) => {
        reset();
        jobchange($(event.target).val());
    });

    function to64(num){
        var ret = "";
        var code = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
        num += "000000";
        for(var i=0, i_len = Math.ceil((num.length-6)/6); i<i_len; i++){
            ret += code[parseInt(num.substr(i*6, 6), 2)];
        }
        return ret;
    }
    function inverseObject (obj, keyIsNumber) {
        return Object.keys(obj).reduceRight(function (ret, k) {
          return (ret[obj[k]] = keyIsNumber ? parseInt(k, 10) : k, ret);
        }, {});
    }
    function to2(num){
        var code = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
        code = inverseObject(code, true);
        var ret = "";
        for(var i=0, i_len = num.length; i<i_len; i++){
            ret += ('0000000000' + code[num[i]].toString(2)).slice(-6);
        }
        return ret;
    }

    function display_tree(str){
        var job = str.substr(0, 2);
        $("#job").val(job);
        console.log(job)
        jobchange(job);

        var s = str.substr(2);
        s = to2(s);
        console.log(s);
        $('div.skill').each((index, el) => {
            if(s[index] == "1"){
                $(el).toggleClass('skill-active', true);
            }else{

            }
        });
        change_point();
    }

    var saved_tree = {};    //保存されたスキルツリー
    (function init(){
        if(location.search != "" && location.search != "?"){
            display_tree(location.search.substr(1));
        }
        //ローカルストレージから保存済みスキルツリーの読み出し
        saved_tree = JSON.parse(localStorage.getItem('saved_tree'));
        if(saved_tree == null)
            return;
        for(let key in saved_tree){
            $('#saved_tree').append('<option value="'+saved_tree[key]+'">'+key+'</option>');
        }
    })();

    function getProp(){
        var n = "";
        $('div.skill').each((index, el) => {
            if($(el).hasClass('skill-active')){
                n += "1";
            }else{
                n += "0";
            }
        });
        return to64(n);
    }

    $('#geturl').on('click', () => {
        var url = location.host + location.pathname + "?";
        url = url+$('#job').val()+getProp();
        $('.content > p').text(url);
        $('.popup').addClass('show').fadeIn();
        $('.content').addClass('show').fadeIn();
    });
      
    $('#close').on('click',function(){
        $('.popup').fadeOut();
        $('.content').fadeOut();
    });

    function execCopy(string){

        // 空div 生成
        var tmp = document.createElement("div");
        // 選択用のタグ生成
        var pre = document.createElement('pre');
      
        // 親要素のCSSで user-select: none だとコピーできないので書き換える
        pre.style.webkitUserSelect = 'auto';
        pre.style.userSelect = 'auto';
      
        tmp.appendChild(pre).textContent = string;
      
        // 要素を画面外へ
        var s = tmp.style;
        s.position = 'fixed';
        s.right = '200%';
      
        // body に追加
        document.body.appendChild(tmp);
        // 要素を選択
        document.getSelection().selectAllChildren(tmp);
      
        // クリップボードにコピー
        var result = document.execCommand("copy");
      
        // 要素削除
        document.body.removeChild(tmp);
      
        return result;
    }
    
    $('#copy').on('click', () => {
        if(execCopy($('.content > p').text())){
            alert('コピーしました');
        }
    });

    $('#save').on('click', () => {
        var text = $('#job option:selected').text();
        var i = 1;
        while(saved_tree[text+i]) i++;
        //入力
        var r = window.prompt("保存名を入力してください。", text+i);
        if(r == null)
            return;
        //保存情報の収集
        var p = $('#job').val()+getProp();
        if(saved_tree == null)
            saved_tree = {};
        saved_tree[r] = p;
        //セレクトボックスに追加
        $('#saved_tree').append($('<option>').html(r).val(p));
        //保存
        localStorage.setItem('saved_tree', JSON.stringify(saved_tree));
    });

    $('#delete').on('click', () => {
        if(!saved_tree || !Object.keys(saved_tree).length)
            return;
        var tx = $('#saved_tree option:selected').text();
        if(!window.confirm('「'+tx+'」を削除してもよろしいですか？'))
            return;
        saved_tree[tx] = undefined;
        localStorage.setItem('saved_tree', JSON.stringify(saved_tree));
        $('#saved_tree option:selected').remove();
    });

    $('#load').on('click', () => {
        if(!saved_tree || !Object.keys(saved_tree).length)
            return;
        var tx = $('#saved_tree option:selected').text();
        display_tree(saved_tree[tx]);
    });
})