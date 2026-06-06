# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: external-link-check.spec.ts >> 外部リンクの切れ確認 >> すべての外部リンクが有効であることを確認
- Location: tests\external-link-check.spec.ts:4:3

# Error details

```
Error: Broken external links found

expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 7

- Array []
+ Array [
+   Object {
+     "from": "/mtup/10",
+     "status": 404,
+     "url": "https://drive.google.com/drive/folders/1OJ1L3cfT1PxTF9syoDEslNsh6RG7uhdv",
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - link "🐾 フラットファンクラブ" [ref=e5] [cursor=pointer]:
        - /url: /
        - generic [ref=e6]: 🐾
        - text: フラットファンクラブ
      - generic [ref=e7]:
        - link "ホーム" [ref=e8] [cursor=pointer]:
          - /url: /
        - link "入門ガイド" [ref=e9] [cursor=pointer]:
          - /url: /guide/
        - link "コミュニティ" [ref=e10] [cursor=pointer]:
          - /url: /community/
        - link "アイテム" [ref=e11] [cursor=pointer]:
          - /url: /items/
        - link "歴史" [ref=e12] [cursor=pointer]:
          - /url: /history/
  - generic [ref=e13]:
    - navigation [ref=e14]:
      - link "ホーム" [ref=e15] [cursor=pointer]:
        - /url: /
      - generic [ref=e16]: /
      - link "入門ガイド" [ref=e17] [cursor=pointer]:
        - /url: /guide/
      - generic [ref=e18]: /
      - generic [ref=e19]: STEP 9
    - banner [ref=e20]:
      - generic: "9"
      - generic [ref=e21]: STEP 9 / 9
      - heading "クロスプラットフォーム対応" [level=1] [ref=e22]
      - paragraph [ref=e23]: 「せっかく作った可愛いフラットくん、たくさんの人に見てもらいたい！」そんな願いを叶える、無料ツールVRCQuestToolsを使った、超お手軽なAndroid・iOSプラットフォーム対応手順。
      - generic [ref=e24]:
        - generic [ref=e25]: "#VRC Quest対応•"
        - generic [ref=e26]: "#VRChat アバター Quest化•"
        - generic [ref=e27]: "#VRCQuestTools 使い方•"
        - generic [ref=e28]: "#スマホ対応 アバター"
    - main [ref=e29]:
      - article [ref=e30]:
        - paragraph [ref=e31]: 服を着せて、色変更もして、これぞ自分！というフラットくんが完成しました！おめでとうございます！ さて、せっかく作ったアバターは、なるべくたくさんのワールドに行けたり、たくさんの人に見てもらえたりした方が嬉しいですよね？
        - paragraph [ref=e32]:
          - text: 通常のアップロード方法ではPC（デスクトップモードやPC接続したVR）で遊んでいる人にしか見えないアバターになりますが、
          - strong [ref=e33]: 「クロスプラットフォーム対応（Quest化・スマホ対応）」
          - text: を行うと、Meta QuestなどのVR機器単体や、Androidスマホ、iPhone（iOS）から遊んでいる人にもあなたの可愛いフラットくんの姿を見せることができるようになります。
        - paragraph [ref=e34]:
          - text: この手順では、
          - strong [ref=e35]: 「とにかく簡単」「とりあえず表示される」
          - text: ことを最優先にした一番シンプルな対応手順をご紹介します！ （よりこだわりたい場合は様々な設定や手法がありますが、まずはここからスタートしてみましょう）
        - paragraph [ref=e36]:
          - text: まず事前準備として、
          - strong [ref=e37]:
            - link "VrcQuestTool.unitypackage" [ref=e38] [cursor=pointer]:
              - /url: /downloads/VrcQuestTool.unitypackage
          - text: (クロスプラットフォーム対応ツール) をダウンロードしておいてください。
        - separator [ref=e39]
        - heading "Step 1. 安全のためにプロジェクトをコピーする" [level=3] [ref=e40]
        - paragraph [ref=e41]:
          - text: VRCQuestToolsによるプラットフォーム変換を行う際、プロジェクト内で他のツールと干渉して不具合が起きたり、設定の切り替えミスで次回以降の改変時に混乱したりするのを防ぐため、
          - strong [ref=e42]: 「プロジェクトフォルダごとコピーして作業する」
          - text: ことを強くおすすめします。
        - list [ref=e43]:
          - listitem [ref=e44]:
            - paragraph [ref=e45]: 自分のフラットくんが完成した状態（前ステップの作業が終わった状態）です。
            - paragraph [ref=e46]:
              - img "アバターの完成状態" [ref=e47]
          - listitem [ref=e48]:
            - paragraph [ref=e49]:
              - text: 一度Unityを閉じます。保存（Save Scenes）を聞かれたら、忘れずに
              - strong [ref=e50]: 「Save」
              - text: を押して保存してください。
            - paragraph [ref=e51]:
              - img "Unityの保存ダイアログ" [ref=e52]
          - listitem [ref=e53]:
            - paragraph [ref=e54]:
              - text: ALCOMを起動し、作成した自分のプロジェクトの右側にある
              - strong [ref=e55]:
                - code [ref=e56]: …
              - text: ボタンをクリックして
              - strong [ref=e57]: 「プロジェクトの保存場所を開く」
              - text: をクリックします。
            - paragraph [ref=e58]:
              - img "プロジェクトの保存場所を開く" [ref=e59]
          - listitem [ref=e60]:
            - paragraph [ref=e61]:
              - text: エクスプローラーでフォルダが開くので、アドレスバーまたは
              - strong [ref=e62]:
                - code [ref=e63]: ↑
              - text: ボタンを押して1つ上の階層（プロジェクトフォルダが並んでいる階層）に移動します。
            - paragraph [ref=e64]:
              - img "1つ上の階層へ移動" [ref=e65]
          - listitem [ref=e66]:
            - paragraph [ref=e67]:
              - text: コピー元となる自分のプロジェクトフォルダ（例：
              - code [ref=e68]: MyFlatProject
              - text: ）が選択されている状態になります。
            - paragraph [ref=e69]:
              - img "プロジェクトフォルダの選択" [ref=e70]
          - listitem [ref=e71]:
            - paragraph [ref=e72]:
              - text: フォルダをコピー（
              - strong [ref=e73]:
                - code [ref=e74]: Ctrl + C
              - text: ）します。
            - paragraph [ref=e75]:
              - img "フォルダをコピー" [ref=e76]
          - listitem [ref=e77]:
            - paragraph [ref=e78]:
              - text: 同じフォルダ内で貼り付け（
              - strong [ref=e79]:
                - code [ref=e80]: Ctrl + V
              - text: ）を実行します（コピー処理に少し時間がかかります）。
            - paragraph [ref=e81]:
              - img "フォルダを貼り付け" [ref=e82]
          - listitem [ref=e83]:
            - paragraph [ref=e84]:
              - text: "コピーされた新しいフォルダ（例:"
              - code [ref=e85]: MyFlatProject - コピー
              - text: ）が生成されます。
            - paragraph [ref=e86]:
              - img "コピーフォルダの生成" [ref=e87]
          - listitem [ref=e88]:
            - paragraph [ref=e89]:
              - text: "コピーしたフォルダのフォルダ名を分かりやすい名前に変更しておきます（例: クロスプラットフォーム対応なので"
              - code [ref=e90]: MyFlatProject_CP
              - text: など。適当で大丈夫です）。
            - paragraph [ref=e91]:
              - img "フォルダ名の変更" [ref=e92]
        - separator [ref=e93]
        - heading "Step 2. コピーしたプロジェクトをALCOMに追加して開く" [level=3] [ref=e94]
        - list [ref=e95]:
          - listitem [ref=e96]:
            - paragraph [ref=e97]:
              - text: ALCOMに戻り、画面右上にある「プロジェクトを作成」ボタンの右隣にある
              - strong [ref=e98]: 矢印（▼）
              - text: をクリックし、
              - strong [ref=e99]: 「既存のプロジェクトを追加」
              - text: を選択します。
            - paragraph [ref=e100]:
              - img "既存のプロジェクトを追加" [ref=e101]
          - listitem [ref=e102]:
            - paragraph [ref=e103]: フォルダの選択ダイアログが表示されるので、先ほど作成（リネーム）したコピー版のフォルダを選択します。
            - paragraph [ref=e104]:
              - img "コピーフォルダを選択" [ref=e105]
          - listitem [ref=e106]:
            - paragraph [ref=e107]:
              - text: ALCOMのプロジェクト一覧に新しく追加されるので、それを確認して
              - strong [ref=e108]: 「UNITYを開く」
              - text: ボタンをクリックします。
            - paragraph [ref=e109]:
              - img "新プロジェクトでUNITYを開く" [ref=e110]
          - listitem [ref=e111]:
            - paragraph [ref=e112]: コピー元のプロジェクトと全く同じ状態のUnity画面が開きます。
            - paragraph [ref=e113]:
              - img "Unityの起動完了" [ref=e114]
        - separator [ref=e115]
        - heading "Step 3. VRCQuestToolsを導入する" [level=3] [ref=e116]
        - list [ref=e117]:
          - listitem [ref=e118]:
            - paragraph [ref=e119]:
              - text: 事前準備でダウンロードしておいた
              - strong [ref=e120]:
                - link "VrcQuestTool.unitypackage" [ref=e121] [cursor=pointer]:
                  - /url: /downloads/VrcQuestTool.unitypackage
              - text: をダブルクリックしてインポート（Import）します。
            - paragraph [ref=e122]:
              - img "VrcQuestToolをインポート" [ref=e123]
          - listitem [ref=e124]:
            - paragraph [ref=e125]:
              - text: インポート処理が進むと「Confirm」画面が表示されるので、
              - strong [ref=e126]: 「Install」
              - text: をクリックします。
            - paragraph [ref=e127]:
              - img "VrcQuestToolのインストール" [ref=e128]
        - separator [ref=e129]
        - heading "Step 4. Android（Quest・スマホ）向けにビルド＆アップロード" [level=3] [ref=e130]
        - list [ref=e131]:
          - listitem [ref=e132]:
            - paragraph [ref=e133]:
              - text: Unityの上部メニューから、
              - strong [ref=e134]: 「Tools」 ＞ 「VRCQuestTools」 ＞ 「Show Avatar Builder」
              - text: を選択します。
            - paragraph [ref=e135]:
              - img "Avatar Builderを起動" [ref=e136]
          - listitem [ref=e137]:
            - paragraph [ref=e138]:
              - text: 「VQT Avatar Builder」というウインドウが開くので、その中にある
              - strong [ref=e139]: 「開く」
              - text: ボタンをクリックします。
            - paragraph [ref=e140]:
              - img "Avatar Builderの開くボタン" [ref=e141]
          - listitem [ref=e142]:
            - paragraph [ref=e143]:
              - text: VRChat SDKのコントロールパネルが表示されます。「Platform(s)」の項目で
              - strong [ref=e144]:
                - code [ref=e145]: Windows
                - text: のチェックを外し、代わりに
                - code [ref=e146]: Android
                - text: にチェックを入れます
              - text: 。
        - blockquote [ref=e147]:
          - generic [ref=e148]:
            - generic [ref=e149]: ⚠️
            - generic [ref=e150]: WARNING
          - paragraph [ref=e151]:
            - strong [ref=e152]: プラットフォームの変更ボタンがグレーアウトして押せません
          - paragraph [ref=e153]:
            - text: UnityにAndroidビルドモジュールやiOSビルドモジュールがインストールされていない可能性が高いです。 ALCOMの初期設定（Step 5. の環境構築ガイド）でチェックを忘れてしまっていた場合は、**
            - link "VRC Quest Tools チュートリアルページ（環境構築）" [ref=e154] [cursor=pointer]:
              - /url: https://kurotu.github.io/VRCQuestTools/ja/docs/tutorial/set-up-environment
            - text: "**を参考にして、Unity Hubから追加のモジュールをインストールしてください。"
        - paragraph [ref=e155]:
          - img "Androidプラットフォームに切り替え" [ref=e156]
        - list [ref=e157]:
          - listitem [ref=e158]:
            - paragraph [ref=e159]:
              - text: 「切り替えに時間がかかります」という旨の確認ダイアログが表示されるので、
              - strong [ref=e160]: 「Confirm」
              - text: をクリックしてしばらく待ちます。
            - paragraph [ref=e161]:
              - img "Confirmダイアログ" [ref=e162]
          - listitem [ref=e163]:
            - paragraph [ref=e164]:
              - text: 切り替え完了後、VQT Avatar Builderウインドウの
              - strong [ref=e165]: 「Build & Publish for Android」
              - text: ボタンをクリックします。
            - paragraph [ref=e166]:
              - img "Android向けビルド＆パブリッシュ" [ref=e167]
          - listitem [ref=e168]:
            - paragraph [ref=e169]:
              - text: VRChat SDK側で最終確認のダイアログが出るので、
              - strong [ref=e170]: 「OK」
              - text: をクリックします。
            - paragraph [ref=e171]:
              - img "アップロード確認OK" [ref=e172]
          - listitem [ref=e173]:
            - paragraph [ref=e174]:
              - text: しばらく処理が進み、VQT Avatar Builderに
              - strong [ref=e175]: 「アップロードに成功しました。」
              - text: と表示されれば、Android対応は完了です！
            - paragraph [ref=e176]:
              - img "Android対応の成功" [ref=e177]
        - separator [ref=e178]
        - heading "Step 5. iOS（iPhone）向けにビルド＆アップロード" [level=3] [ref=e179]
        - paragraph [ref=e180]: 続けて、iPhoneなどのスマホユーザーから見えるようにiOS対応も行います。手順はAndroidとほぼ同じです。
        - list [ref=e181]:
          - listitem [ref=e182]:
            - paragraph [ref=e183]:
              - text: VRChat SDKコントロールパネルの「Platform(s)」で、
              - strong [ref=e184]:
                - code [ref=e185]: Android
                - text: のチェックを外し、代わりに
                - code [ref=e186]: iOS
                - text: にチェックを入れます
              - text: 。
            - paragraph [ref=e187]:
              - img "iOSプラットフォームに切り替え" [ref=e188]
          - listitem [ref=e189]:
            - paragraph [ref=e190]:
              - text: 同様に、VQT Avatar Builderウインドウの
              - strong [ref=e191]: 「Build & Publish for iOS」
              - text: ボタンをクリックし、SDK側の確認ダイアログで「OK」をクリックして進めます。アップロード完了までしばらく待ちます。
            - paragraph [ref=e192]:
              - img "iOS向けアップロード成功" [ref=e193]
        - separator [ref=e194]
        - heading "Step 6. VRChatやVRChat Webサイトでマークを確認する" [level=3] [ref=e195]
        - paragraph [ref=e196]:
          - text: アップロード完了後、VRChat公式Webサイト（マイページ）やゲーム内でアバターの情報を確認してみましょう。 アバターの対応プラットフォーム（プラットフォーム表記）欄に、
          - strong [ref=e197]: Windows・Android・iOSの3つのマーク
          - text: がすべて点灯していれば、完璧です！
        - paragraph [ref=e198]:
          - img "3プラットフォームのマーク点灯" [ref=e199]
        - paragraph [ref=e200]: これで、Quest単体やスマホから遊んでいるフレンドからも、あなたの可愛い姿が正常に見えるようになります！
        - separator [ref=e201]
        - heading "Step 7. 後片付け（コピーしたプロジェクトの削除）" [level=3] [ref=e202]
        - paragraph [ref=e203]: このクロスプラットフォーム対応のために一時的に作成したコピー用プロジェクトは、アップロードが正常に完了した後は不要になります。今後の混乱を防ぐために削除しておきましょう。
        - list [ref=e204]:
          - listitem [ref=e205]:
            - paragraph [ref=e206]:
              - text: Unityを終了し、ALCOMで、先ほど追加したコピープロジェクトの右側にある
              - strong [ref=e207]:
                - code [ref=e208]: …
              - text: ボタンをクリックし、
              - strong [ref=e209]: 「プロジェクトを削除」
              - text: をクリックします。
            - paragraph [ref=e210]:
              - img "ALCOMからコピープロジェクトを削除" [ref=e211]
          - listitem [ref=e212]:
            - paragraph [ref=e213]:
              - text: 確認ダイアログが表示されるので、
              - strong [ref=e214]: 「プロジェクトのファイルも削除する」
              - text: にチェックを入れて削除を完了します。
            - paragraph [ref=e215]:
              - img "プロジェクトファイルの完全削除" [ref=e216]
        - paragraph [ref=e217]: これで後片付けもすべて完了です！本当にお疲れ様でした！
        - separator [ref=e218]
        - heading "FAQ ＆ TIPS" [level=2] [ref=e219]
        - heading "Q. なんでわざわざプロジェクトをコピーして作業するの？" [level=3] [ref=e220]
        - paragraph [ref=e221]:
          - strong [ref=e222]: A. 万が一のトラブル防止と、普段の改変作業の快適性を両立するためです。
        - list [ref=e223]:
          - listitem [ref=e224]: プラットフォーム変換によって、プロジェクト内の様々な設定がQuest専用に代わります。これが原因でWindowsでの見た目がおかしくなることがたまにあります
          - listitem [ref=e225]: アバター改変ツールとQuestToolsが干渉してUnityが起動しなくなることがあります
          - listitem [ref=e226]: プラットフォーム設定を戻し忘れて、なぜかアップロードできない…といった問題が起きたります
        - paragraph [ref=e227]: これらのトラブルを起こさず、安全に使い分けをするため、コピーしてアップロードしたら消すという運用が(とりあえずの対応のためには)一番手軽です。
        - heading "Q. クロスプラットフォーム対応は絶対にやらないとダメ？" [level=3] [ref=e228]
        - paragraph [ref=e229]:
          - strong [ref=e230]: A. 必須ではありませんが、強くお勧めします！
          - text: 現在VRChatには「インポスター」という自動生成機能があり、対応していなくても荒い見た目のアバターが自動生成されて表示されるようになりました。しかし、自分で変換した方がはるかに綺麗で可愛いフラットくんの姿を相手に届けることができます。ぜひ対応してあげましょう！
        - heading "Q. しっぽが揺れなかったり、服の見た目がPC版とズレているように見える…" [level=3] [ref=e231]
        - paragraph [ref=e232]:
          - strong [ref=e233]: A. 「とにかく簡単な自動変換」を行っているため、一部の機能制限があります。
          - text: VR単機やスマホなどのプラットフォームは、動作制限（パフォーマンス制限）がPCよりも非常に厳しく設定されています。そのため、揺れる物や衣装の一部のギミックが制限によって削られたり、見た目が簡易化されたりします。またプラットフォーム間のパラメータの同期ずれという専門的な問題があり、服を着ているかどうかなどが異なる場合もあります。これはプラットフォームの仕様ですので、まずは「見えていること自体が素晴らしい！」と捉えていただければ幸いです。
        - separator [ref=e234]
        - paragraph [ref=e235]: これでフラットくんの導入からカスタム、クロスプラットフォーム対応までの初心者向け全ガイドが完了しました！ 自分好みに可愛く仕上げたお気に入りのアバターと一緒に、もふもふに包まれた素敵なVRChatライフを満喫してください！🐾
        - paragraph [ref=e236]: 集会などでお会いできる日を楽しみにしています！
    - navigation [ref=e237]:
      - link "⬅ PREVIOUS STEP 8 テクスチャを改変して自分だけのカラーにする" [ref=e238] [cursor=pointer]:
        - /url: /guide/8-customize/
        - generic [ref=e239]: ⬅ PREVIOUS STEP 8
        - generic [ref=e240]: テクスチャを改変して自分だけのカラーにする
      - link "CONGRATS! FINISH 🐾 衣装＆アイテムカタログを見る" [ref=e241] [cursor=pointer]:
        - /url: /items/
        - generic [ref=e242]: CONGRATS! FINISH 🐾
        - generic [ref=e243]: 衣装＆アイテムカタログを見る
  - contentinfo [ref=e244]:
    - generic [ref=e245]:
      - generic [ref=e246]:
        - link "フラットファンクラブ ロゴ" [ref=e247] [cursor=pointer]:
          - /url: /
          - img "フラットファンクラブ ロゴ" [ref=e248]
        - paragraph [ref=e249]: VRChat向け3Dケモノアバター「フラット」くんの魅力を伝える、非公式のファンサイトです。
      - generic [ref=e250]:
        - generic [ref=e251]:
          - heading "サイトリンク" [level=4] [ref=e252]
          - list [ref=e253]:
            - listitem [ref=e254]:
              - link "ホーム" [ref=e255] [cursor=pointer]:
                - /url: /
            - listitem [ref=e256]:
              - link "入門ガイド" [ref=e257] [cursor=pointer]:
                - /url: /guide/
            - listitem [ref=e258]:
              - link "コミュニティ" [ref=e259] [cursor=pointer]:
                - /url: /community/
            - listitem [ref=e260]:
              - link "アイテム" [ref=e261] [cursor=pointer]:
                - /url: /items/
            - listitem [ref=e262]:
              - link "歴史 timeline" [ref=e263] [cursor=pointer]:
                - /url: /history/
        - generic [ref=e264]:
          - heading "公式リンク" [level=4] [ref=e265]
          - list [ref=e266]:
            - listitem [ref=e267]:
              - link "Booth検索（フラット）" [ref=e268] [cursor=pointer]:
                - /url: https://booth.pm/ja/search/%E3%83%95%E3%83%A9%E3%83%83%E3%83%88
            - listitem [ref=e269]:
              - link "らすちんワークス（無印）" [ref=e270] [cursor=pointer]:
                - /url: https://booth.pm/ja/items/3562180
            - listitem [ref=e271]:
              - link "らすちんワークス（2nd）" [ref=e272] [cursor=pointer]:
                - /url: https://booth.pm/ja/items/5780006
            - listitem [ref=e273]:
              - link "らすちんワークス（4th）" [ref=e274] [cursor=pointer]:
                - /url: https://booth.pm/ja/items/7922210
            - listitem [ref=e275]:
              - link "らすちんワークス（If Ver）" [ref=e276] [cursor=pointer]:
                - /url: https://booth.pm/ja/items/7537714
    - generic [ref=e277]:
      - generic [ref=e278]:
        - paragraph [ref=e279]: ※本サイトはファンが作成した非公式のファンクラブサイトです※
        - paragraph [ref=e280]: アバターの仕様、販売価格等は予告なく変更される場合がありますので、最新情報は公式Boothストアをご確認ください。
        - paragraph [ref=e281]: 当サイトの掲載内容は1ファンの個人的な見解であり、公式の発表や方針に代わるものではありません。
        - paragraph [ref=e282]: アバター著作権：©らすちん (Rustin Works)
      - generic [ref=e283]: © 2026 フラットファンクラブ. Created by fans with 💛
```

# Test source

```ts
  29  |       }
  30  |       
  31  |       try {
  32  |         const response = await page.goto(currentUrl, { timeout: 30_000 });
  33  |         if (!response || response.status() !== 200) {
  34  |           continue;
  35  |         }
  36  |         
  37  |         visitedPaths.add(path);
  38  |         
  39  |         // ページ内の全リンクを取得
  40  |         const links = await page.evaluate(() => {
  41  |           const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href]');
  42  |           return Array.from(anchors)
  43  |             .map(a => ({ href: a.href, text: a.textContent?.trim() || '' }))
  44  |             .filter(Boolean);
  45  |         });
  46  |         
  47  |         for (const { href } of links) {
  48  |           // mailto:やtel:、アンカーリンクはスキップ
  49  |           if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;
  50  |           
  51  |           try {
  52  |             const linkUrl = new URL(href);
  53  |             
  54  |             // 外部リンクか確認
  55  |             if (linkUrl.origin !== baseUrl) {
  56  |               // 重複チェック
  57  |               const isDuplicate = externalLinksToCheck.some(l => l.url === href);
  58  |               if (!isDuplicate) {
  59  |                 externalLinksToCheck.push({ url: href, from: path });
  60  |               }
  61  |             }
  62  |           } catch {
  63  |             // 無効なURLはスキップ
  64  |           }
  65  |         }
  66  |         
  67  |         // サイト内リンクをキューに追加
  68  |         for (const { href } of links) {
  69  |           try {
  70  |             const linkUrl = new URL(href);
  71  |             if (linkUrl.origin === baseUrl && !visitedPaths.has(linkUrl.pathname) && !isStaticAsset(linkUrl.pathname)) {
  72  |               queue.push(href);
  73  |             }
  74  |           } catch {
  75  |             // 無効なURLはスキップ
  76  |           }
  77  |         }
  78  |       } catch {
  79  |         // ページ読み込みエラーはスキップ
  80  |       }
  81  |     }
  82  |     
  83  |     console.log(`\nFound ${externalLinksToCheck.length} external links to check:`);
  84  |     
  85  |     // 外部リンクをチェック (Playwright の request を使用)
  86  |     for (const { url, from } of externalLinksToCheck) {
  87  |       try {
  88  |         console.log(`Checking: ${url} (from ${from})`);
  89  |         
  90  |         const response = await request.fetch(url, {
  91  |           method: 'HEAD',
  92  |           timeout: 10_000,
  93  |           headers: {
  94  |             'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
  95  |           },
  96  |           maxRedirects: 5,
  97  |         });
  98  |         
  99  |         const statusCode = response.status();
  100 |         await response.dispose();
  101 |         
  102 |         // x.com (Twitter) は HEAD リクエストを 403 で拒否するため、例外処理
  103 |         const isXCom = url.startsWith('https://x.com/') || url.startsWith('https://twitter.com/');
  104 |         
  105 |         if (statusCode >= 400 && !(isXCom && statusCode === 403)) {
  106 |           brokenExternalLinks.push({ url, from, status: statusCode });
  107 |           console.log(`  ❌ Status: ${statusCode}`);
  108 |         } else {
  109 |           console.log(`  ✅ Status: ${statusCode}${isXCom && statusCode === 403 ? ' (x.com HEAD制限)' : ''}`);
  110 |         }
  111 |       } catch (error) {
  112 |         brokenExternalLinks.push({ url, from, status: 'error' });
  113 |         console.log(`  ❌ Error: ${error}`);
  114 |       }
  115 |     }
  116 |     
  117 |     console.log(`\n\nSummary:`);
  118 |     console.log(`Total external links checked: ${externalLinksToCheck.length}`);
  119 |     console.log(`Broken links: ${brokenExternalLinks.length}`);
  120 |     
  121 |     if (brokenExternalLinks.length > 0) {
  122 |       console.log('\nBroken external links:');
  123 |       for (const { url, from, status } of brokenExternalLinks) {
  124 |         console.log(`  - ${url} (from ${from}, status: ${status})`);
  125 |       }
  126 |     }
  127 |     
  128 |     // ブロークン外部リンクがないことを確認
> 129 |     expect(brokenExternalLinks, `Broken external links found`).toEqual([]);
      |                                                                ^ Error: Broken external links found
  130 |   });
  131 | });
  132 | 
```