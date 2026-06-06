---
stepNumber: 6
title: "ALCOMを使ってフラットくんをアップロードする"
description: "「アバターをアップロードするのって難しそう…」そんな不安を吹き飛ばす！公式管理ツールALCOMのインストールから、Unityの起動、アップロード完了まで徹底図解。"
seoTitle: "【初心者向け】VRChatアバターのアップロード方法！ALCOMとUnityの使い方"
keywords: ["VRC アバター アップロード ALCOM", "VRChat アバター アップロード", "ALCOM 使い方 アバター"]
---
> [!IMPORTANT]
> VRChatにおいて自分のアバターをアップロードするためにはユーザーランクがNew以上の必要があります。
> ユーザーランクがVisitorのままだとアップロードができないので注意！
> まずは体験や交流をして、ユーザーランクが上がってから作業しましょう。

まず事前準備として、[MA_Liltoon_Av3.unitypackage](/downloads/MA_Liltoon_Av3.unitypackage) (ライブラリ一括導入ツール) をダウンロードしておいてください。

---

### Step 1. ALCOMで新しいアバタープロジェクトを作成する

1. ALCOMを起動し、右上の「**プロジェクトを作成**」ボタンをクリックします。

   ![プロジェクトを作成](/images/guides/upload/1.webp)

2. テンプレート一覧から「**VRChat Avatars**」を選択します。プロジェクト名（例：`MyFlatProject`）を入力し、保存先フォルダを決めたら「**作成する**」ボタンを押します。

   ![テンプレート選択と作成](/images/guides/upload/2.webp)

3. プロジェクトが作成され、パッケージ管理画面が開いたら、右上の「**UNITYを開く**」ボタンをクリックします。

   ![UNITYを開く](/images/guides/upload/3.webp)

4. 少し時間がかかった後、Unityの画面が開きます。（※初回は様々な小さい画面が開くことがありますが、閉じてしまって構いません。）

   ![Unity起動完了](/images/guides/upload/4.webp)

   > [!TIP]
   > 作業中に誤ってUnityの画面レイアウトがおかしくなってしまった場合は、ページ最下部の「[困った時は](#こまったときは)」を参照してください。元の表示に戻すことができます。

---

### Step 2. ツールとアバターのパッケージを導入する

1. 事前準備でダウンロードしておいた **[MA_Liltoon_Av3.unitypackage](/downloads/MA_Liltoon_Av3.unitypackage)** をダブルクリックします。
   Unity画面上でインポート用のウインドウが開くので、右下の「**Import**」ボタンを押します。

   ![Importボタンを押す](/images/guides/upload/5.webp)

2. インポート処理が進むと「Confirm」画面（インストールの確認）が出るので、「**Install**」をクリックします。

   ![Installを押す](/images/guides/upload/6.webp)

3. ツールパッケージの導入が完了してインポートウインドウが消えたら、次はBoothで購入した「フラットくん」のパッケージファイル（例：`flat_v*.unitypackage`）をダブルクリックし、同様に「**Import**」します。

   ![フラットくんのパッケージをインポート](/images/guides/upload/7.webp)

4. インポートが完了すると、Unity下部の「Project」ウインドウの `Assets` フォルダ配下に「フラット」のフォルダ（例: `flat`）が生成されるので、ダブルクリックで開きます。

   ![Project内のフラットくんフォルダ](/images/guides/upload/8.webp)

---

### Step 3. マテリアルの修正 (※無印「フラット」専用の手順)

> [!NOTE]
> この手順は、無印の「フラット」アバター専用の手順です。
> 他のバージョン（フラット2nd、IF、4th等）ではこの修正は不要ですので、次の **[Step 4](#-step-4-アバターをシーンに配置する)** に進んでください。

1. `flat` フォルダ内の **`tex`** フォルダをダブルクリックして開きます。

   ![texフォルダを開く](/images/guides/upload/9.webp)

2. さらにその中にある **`Materials`** フォルダをダブルクリックして開きます。

   ![Materialsフォルダを開く](/images/guides/upload/10.webp)

3. フォルダの中にピンク色の丸（マテリアルエラー状態の球体）が3つ並んでいます。どれか1つをクリックしたあと、キーボードの **`Ctrl + A`** を押して、3つのマテリアルをすべて選択状態にします。

   ![すべて選択](/images/guides/upload/12.webp)

4. Unity画面の右側にある「Inspector」内の「Shader」をクリックし、メニューから「**lilToon**」を選択します。

   ![ShaderをlilToonに変更](/images/guides/upload/13.webp)

5. ピンク色の丸が、ベージュ色や模様のある正常な見た目に変わったことを確認します。確認できたら、下部の「Project」ウインドウで `flat` フォルダに戻ります。

   ![マテリアルの修正完了](/images/guides/upload/14.webp)

---

### Step 4. アバターをシーンに配置する

1. `flat` フォルダ内にある、四角いキューブのような青いアイコンをしたプレハブ（Prefab）ファイル（丸い印が付いていないほう）を、Unity画面左側の「**Hierarchy**（ヒエラルキー）」ウインドウへドラッグ＆ドロップします。

   ![ドラッグ＆ドロップ](/images/guides/upload/15.webp)

2. Unity画面中央の「**Scene**（シーン）」ビューに、アバターが3Dモデルとして表示されれば配置成功です！

   ![シーンにアバターが表示される](/images/guides/upload/16.webp)

---

### Step 5. VRChat SDKからアップロードを実行する

1. Unityの上部メニューから、**「VRChat SDK」 ＞ 「Show Control Panel」** を選択します。

   ![SDKコントロールパネルを開く](/images/guides/upload/17.webp)

2. 小さなログインウィンドウが開くので、自分の VRChat アカウントのID（または登録メールアドレス）とパスワードを入力し、「**Sign In**」ボタンを押します。

   ![サインイン](/images/guides/upload/18.webp)

3. 二段階認証コードが登録メールアドレス宛に届くので、コードを入力して「**Verify**」ボタンを押します。

   ![二段階認証](/images/guides/upload/19.webp)

4. ログインに成功すると、アップロードの設定画面が表示されます。「**Name**」の欄に、アバターの分かりやすい名前（例: `MyFlat` など。他のユーザーにも見えます）を入力します。

   ![名前の入力](/images/guides/upload/20.webp)

5. 「**Capture In Scene**」ボタンを押し、アバターのサムネイル用の画像を設定します。ボタンを押した後に表示されるプレビュー画面で「**Capture**」を押します（キャラクターがすごく小さいですが、とりあえずそのままで大丈夫です）。

   ![サムネイル画像のキャプチャ](/images/guides/upload/21.webp)

6. 「**Build Type**」を「**Build & Publish Your Avatar Online**」に設定します。

   ![Build Typeの確認](/images/guides/upload/22.webp)

7. アバター名が入力されていること、サムネイル画像がキャプチャされていること、Build TypeがPublishになっていることを確認し、「**Build & Publish**」ボタンをクリックします。

   ![Build & Publishボタン](/images/guides/upload/23.webp)

8. 確認ダイアログが表示されるので、「**OK**」を押します。

   ![確認OK](/images/guides/upload/24.webp)

9. 途中で「Save Scene（シーンの保存）」という画面が表示された場合は、適当な名前（例: `FlatScene` など）を入力して保存（Save）してください。

   ![シーンの保存画面](/images/guides/upload/25.webp)

10. アップロード処理が始まります。しばらく待つと、画面中央に緑色で「**Upload Succeeded!**」と表示されます。これでアップロードは無事完了です！

    ![Upload Succeeded!](/images/guides/upload/26.webp)

---

### Step 6. VRChatでアップロードしたアバターを確認する

1. VRChatを起動します（確認時はデスクトップモードで起動するとスムーズです）。ゲーム内で `Esc` キー（またはコントローラーのメニューボタン）を押してLaunch Pad（メニュー画面）を開きます。

   ![Launch Padを開く](/images/guides/upload/27.webp)

2. 「**アバター**」ボタンを押し、左の一覧から「**アップロードしたもの**」をクリックします。先ほどアップロードしたアバターが表示されるので、クリックして「**適用**」を押します。

   ![アバターの選択](/images/guides/upload/29.webp)

3. 自分自身がアップロードした可愛いフラットくんの姿に変わっていれば、大成功です！🎉

   ![変更成功](/images/guides/upload/30.webp)

---

### こまったときは

Unityの操作中に、ウインドウを誤って閉じてしまったり、配置が崩れて画面がおかしくなってしまったら：

1. Unity画面の右上にある「**Layout**」（または「**Default**」と表示されているプルダウンメニュー）をクリックします。

   ![Defaultレイアウトの選択](/images/guides/upload/t.webp)

2. ドロップダウンメニューの中から「**Default**」を選択します。

3. これで、Unityのウインドウ配置が初期状態にリセットされます。

---

これでフラットくんのアップロード手順はすべて完了です！
次のステップでは、フラットくんをさらにおしゃれにする「着替え（衣装変更）」に挑戦します。

[次のステップへ：アバターを着せ替えする](/guide/7-dress-up/)
