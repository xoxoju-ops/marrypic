/* =========================================================================
   MarryPic（マリピク）共通設定ファイル
   -------------------------------------------------------------------------
   ここに書くのは「公開されても問題ない値」だけです。
   ・Stripe の決済リンク（誰でも開ける決済ページの URL）
   ・Supabase の anon public キー（ブラウザに配る前提の公開キー）
   カード番号や secret キーは絶対に書かないでください。

   ▼ 販売を開始するには、下の 2 か所を埋めるだけでOKです。
     1) stripePaymentLink  … Stripeで作成した500円の決済リンク
     2) storage.mode='cloud' / supabaseUrl / supabaseAnonKey … 写真の保存先
   （両方がそろうまで、LPの購入ボタンは「準備中」表示になります）
   ========================================================================= */

window.MARRYPIC = {
  /* 1) Stripe の 500円決済リンク（Payment Link）
     例: 'https://buy.stripe.com/xxxxxxxxxxxx'                        */
  stripePaymentLink: 'https://buy.stripe.com/00w6oz0M72pWfTk8Zq33W00',

  /* 2) 写真の保存先
     mode: 'local'  … この端末のブラウザにだけ保存（β・お試し用）
           'cloud'  … Supabase に保存（販売するならこちら）           */
  storage: {
    mode: 'cloud',

    // Supabase プロジェクトの URL（例: https://abcdefgh.supabase.co）
    supabaseUrl: 'https://zigdklspxazhhuiqgcyy.supabase.co',

    // Supabase の anon public キー（Publishable key）
    supabaseAnonKey: 'sb_publishable_WtX09_0L2L2xR7syczYFkw_hXdqpykT',

    // 写真1枚ぶんの暗号化データを入れるテーブル名
    table: 'marrypic_photos',

    // 写真データ（画像そのもの）の保存先
    //   'imgur'    … Imgur（今すぐ動く。共有のClient-IDを使うのでお試し向け）
    //   'supabase' … Supabase Storage（本番はこちら。要バケット作成）
    imageHost: 'supabase',
    bucket: 'marrypic-photos',

    // imageHost='imgur' のときに使う Client-ID（自分のImgurアプリのIDに差し替え可）
    imgurClientId: '546c25a59c58ad7'
  },

  /* 3) お問い合わせ先（LP・規約ページの表示と一致させてください） */
  supportEmail: 'xoxo.junaaaa@gmail.com'
};
