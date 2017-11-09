# Smooth scroll ss


## シンプルで使いやすいスムーズスクロールを実装するjQueryプラグイン
jQuery plug-in that implements simple and easy-to-use smooth scrolling.


<p>I am sorry, but I am not good at explaining in English, so there may be mistakes.</p>

### Description
<p>クリックで発火するページ内のスムーズスクロールを実現します。値は細かく設定することができ、使いやすさ、汎用性に優れています。</p>

<p>It realizes smooth scrolling in the page which ignites by clicking. The value can be set finely, it is easy to use, excellent in versatility.</p>

## Requirement
<p>このプラグインを使用するにはjQueryが必要です。
まだjQueryをインストールされていない場合は
https://code.jquery.com/
にアクセスしてjQueryをインストールしてください。</p>

<p>You need jQuery to use this plugin.
If you have not installed jQuery yet
https://code.jquery.com/
Please access to install jQuery.</p>
## Usage
<p>ページ内スクロールを行うクリックイベントを与えたい要素に.smoothScroll()と記述します。</p>

<p>Describe .smoothScroll () on the element you want to give the click event to scroll within the page.</p>
``` javascript
//例
(function($){
	"use strict";
  $(".target").smoothScroll();
})(jQuery);
```

<p>この場合はクラスでtargetが与えられた要素をクリックするとページの最上部までスクロールするようになります。
ページの上部に戻るだけの簡単なスムーズスクロールであればこれだけで実装可能です。
またオプションを設定して動きや位置などを細かく設定することも可能です。</p>
<p>In this case clicking target will scroll to the top of the page.
Easy smooth scrolling just back to the top of the page can be implemented with just this.
By setting options, it is also possible to set details such as movement and position.</p>

<dl>
<dt>オプション</dt>
<dt>movementTime</dt>
 <dd>スクロールにかける時間を設定します。</dd>
 <dd>初期値：400</dd>
<dt>destanation</dt>
 <dd>スクロール先を設定します。</dd>
 <dd>初期値："body"</dd>
<dt>easing</dt>
 <dd>easingを設定します。</dd>
 <dd>初期値："linear"</dd>
<dt>centering</dt>
 <dd>スクロール位置をスクロール先の上部が画面中央になるように設定するかどうか。</dd>
 <dd>初期値：false</dd>
<dt>abjustment</dt>
 <dd>スクロール先をずらす。ここに設定した値分スクロール位置をずらします。centeringがtrueの場合は中央からずらします。</dd>
<dt>split</dt>
 <dd>centeringがtrueの場合に有効なオプション。centeringにより設定される位置を調整する。abjustmentと違い同じ数字でも画面サイズによりずらす量が変わってくる。</dd>
 <dd>例：2を設定すると画面中央、3を設定すると画面上部より画面サイズ/3した場所になる</dd>
 <dd>初期値：2</dd>
</dl>
<dl>
<dt>option</dt>
<dt>movementTime</dt>
 <dd>Sets the time to scroll.</dd>
 <dd>default：400</dd>
<dt>destanation</dt>
 <dd>Set the scroll destination.</dd>
 <dd>default："body"</dd>
<dt>easing</dt>
 <dd>Set the easing.</dd>
 <dd>default："linear"</dd>
<dt>centering</dt>
 <dd>Whether to set the scroll position so that the upper part of the scroll destination is at the center of the screen.</dd>
 <dd>default：false</dd>
<dt>abjustment</dt>
 <dd>Move the scroll destination. Move the scroll position by the value set here. If centering is true, shift it from the center.</dd>
<dt>split</dt>
 <dd>A valid option if centering is true. Adjust the position set by centering. Unlike "abjustment", even if the same number, the amount of shift depends on screen size.</dd>
 <dd>Example: If you set 2, it will be the center of the screen, 3 will set the screen size / 3 from the top of the screen</dd>
 <dd>default：2</dd>
</dl>

``` javascript
//例
(function($){
	"use strict";
  $(".target").smoothScroll({
    movementTime: 600,
    destination: '#point',
    easing: 'ease',
    adjustment: 0,
    centering:true,
    split:3,
  });
})(jQuery);
```

## Install
<p>jquery_smooth_scroll_ssをダウンロードし、フッターやヘッダーに読み込ませてください。</p>
<p>Please download jquery_smooth_scroll_ss and load it in the footer or header.</p>




## Licence

[MIT](https://github.com/kunshin0518/jquery_smooth_scroll_ss/blob/master/LICENSE)

## Author

[kunshin](https://github.com/kunshin0518)
