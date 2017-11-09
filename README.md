# Smooth scroll ss


## シンプルで使いやすいスムーズスクロールを実装するjQueryプラグイン


### Description
クリックで発火するページ内のスムーズスクロールを実現します。値は細かく設定することができ、使いやすさ、汎用性に優れています。


## Requirement
このプラグインを使用するにはjQueryが必要です。
まだjQueryをインストールされていない場合は
https://code.jquery.com/
にアクセスしてjQueryをインストールしてください。

## Usage
ページ内スクロールを行うクリックイベントを与えたい要素に.smoothScroll()と記述します。
``` javascript
//例
(function($){
	"use strict";
  $(".target").smoothScroll();
})(jQuery);
```

この場合はクラスでtargetが与えられた要素をクリックするとページの最上部までスクロールするようになります。
ページの上部に戻るだけの簡単なスムーズスクロールであればこれだけで実装可能です。
またオプションを設定して動きや位置などを細かく設定することも可能です。
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
jquery_smooth_scroll_ssをダウンロードし、フッターやヘッダーに読み込ませてください。





## Licence

[MIT](https://github.com/kunshin0518/jquery_smooth_scroll_ss/blob/master/LICENSE)

## Author

[kunshin](https://github.com/kunshin0518)
