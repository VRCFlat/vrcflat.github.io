---
stepNumber: 5
title: "ALCOMとUnityをインストールする"
description: "VRChatでアバターを扱うために必要な環境をゼロから構築します。ALCOMとUnity Hubのインストールから初期設定までを徹底図解。"
seoTitle: "【初心者向け】ALCOM・Unity導入手順！VRChat環境構築ガイド"
keywords: ["VRC ALCOM インストール", "Unity Hub 導入", "VRChat 環境構築"]
---
# ALCOM + Unity 導入手順書（初心者向け）

この手順書は、VRChatなどで使うアバター・ワールド制作のために、ALCOMとUnityをゼロから導入する手順をまとめたものです。
Windows 11を例に説明しています。作業は10分～30分くらいですが、最後に1時間ほど待機時間が必要なので、時間の余裕のある時にやろう！

---

## 1. ALCOMをダウンロード

1. ブラウザで [ALCOM公式ページ](https://vrc-get.anatawa12.com/ja/alcom/) を開きます。
2. 緑色の **「ダウンロード」** ボタンを押すと、`.zip` ファイル（`ALCOM-1.x.x-x86_64-setup.nsis.zip`）がダウンロードされます。

![ALCOMのダウンロードページ](/images/guides/alcom/0.webp)

---

## 2. ALCOMをインストール

1. ダウンロードした`.zip`を開き、**`ALCOM_1.x.x_x64-setup.exe`** をダブルクリックして起動します。
2. インストーラーが起動するので **「Next」** 等を押して進めます。

![ダウンロードフォルダのALCOMインストーラー](/images/guides/alcom/1.webp)

![ALCOM Setupのウェルカム画面](/images/guides/alcom/2.webp)

3. インストールが完了したら **「Finish」** をクリックします。

![ALCOM Setupの完了画面](/images/guides/alcom/3.webp)

---

## 3. ALCOMの初期設定

![ALCOMのようこそ画面（UI設定）](/images/guides/alcom/4.webp)

![Unity Hubのインストール案内画面](/images/guides/alcom/5.webp)

**「UNITY.COMでUNITY HUBをダウンロードする」** をクリックします。
ブラウザが開き、Unityダウンロードページへ移動します。

---

## 4. Unityアカウントを作成

![Unity IDアカウント作成ページ](/images/guides/alcom/6.webp)

登録画面が出るので、アカウントを作成します。

---

## 5. Unity Hubをダウンロード

1. ダウンロードページで **`Windows x64`** を選びます（環境によって異なる場合があります）。
2. `UnityHubSetup-x64.exe` がダウンロードされます。

![Unity Hubのダウンロードページ](/images/guides/alcom/8.webp)

3. ダウンロードが完了したら、`.exe`をダブルクリックしてセットアップを開始します。
4. ライセンス契約書を最後まで読み、**「同意する」** をクリックします。

![Unity Hubセットアップ - ライセンス契約書](/images/guides/alcom/9.webp)

5. インストールが完了したら **「完了」** をクリックし、Unity Hubが自動起動します。

![Unity Hubセットアップの完了画面](/images/guides/alcom/10.webp)

---

## 6. Unity Hubの初期設定

### 6-1. サインイン

1. 起動すると「Welcome to Unity Hub」が表示されるので、**「Sign in」** をクリックします。
2. ブラウザが起動し、自動的に認証されます。

![Unity Hubのウェルカム画面](/images/guides/alcom/11.webp)

### 6-2. 開発者データ収集の確認

サインイン直後、「データを有効に活用する」というポップアップが表示される場合があります。
**右上の ×** で閉じてしまって問題ありません。

![開発者データ収集の確認ダイアログ](/images/guides/alcom/7.webp)

### 6-3. Personalライセンスの同意

続いて「**Get Unity Personal**」の確認ダイアログが表示されます。

- 基本的には**無料でPersonalライセンス**が使えます。
- 内容を確認して **「Agree」** をクリックします。

![Get Unity Personalダイアログ](/images/guides/alcom/12.webp)

### 6-4. 初期セットアップのスキップ

ホーム画面が開いたら、**最新のUnityのダウンロードが自動的に始まっているので、×を押して止めます**。
VRChatが対応しているバージョンと異なるものなので、入れる意味がありません。

![Unity Hubのホーム画面](/images/guides/alcom/13.webp)

![インストール中のキャンセル確認](/images/guides/alcom/14.webp)

Unity Hubは一旦×でウィンドウを閉じます。

---

## 7. ALCOMに戻って設定を続ける

ALCOMに戻ります。

### 7-1. Unity Hubのパスを確認

「Unity Hubのインストール」画面で、**「UNITY HUBの有無を再確認する」** をクリックします。

![Unity Hubの再確認](/images/guides/alcom/16.webp)

正しく検出されると、Unity Hubの`.exe`パスが自動で表示されます。
**「進む」** をクリックします。

![Unity Hubのパスが認識された状態](/images/guides/alcom/17.webp)

### 7-2. 残りの初期設定

以降、数ステップの初期設定が続きます。画面の指示に従って進めてください。

- **プロジェクト保存先** … 通常そのままでいいですが、**日本語が入っている場合、他のフォルダへ変更したほうがいい**です

![Unity Hubのパスが認識された状態](/images/guides/alcom/17.5.webp)


- **システム設定** … **`ALCOMとvcc:URLを紐付ける`** にチェックを入れてください。

![システム設定 - vcc:URL紐付け](/images/guides/alcom/18.webp)

すべて完了すると **「初期設定が完了しました！」** と表示されるので、**「ALCOMを使い始める」** をクリックします。

![初期設定完了画面](/images/guides/alcom/19.webp)

---

## 8. ALCOMでプロジェクトを作成

1. プロジェクト画面の右上にある **「プロジェクトを作成」** ボタンをクリックします。

![ALCOMのプロジェクト画面](/images/guides/alcom/20.webp)

2. 表示されるダイアログで以下を設定します。

| 項目 | 設定内容 |
| --- | --- |
| テンプレート | **VRChat Avatars**（アバター用） |
| Unityバージョン | 2022.3.22f1 |
| プロジェクト名 | Test |
| 保存先 | 任意のフォルダ |

3. 入力したら **「作成する」** をクリックします。

![プロジェクト作成ダイアログ](/images/guides/alcom/21.webp)

4. プロジェクトが作成され、パッケージ管理画面が開きます。
   右上の **「UNITYを開く」** ボタンをクリックします。

![パッケージ管理画面](/images/guides/alcom/22.webp)

---

## 9. Unity Editorをインストール

「**Unityが見つかりません**」というダイアログが出るので、**「UNITY HUBを開く」** をクリックしてUnity Hubを開きます。

![Unityが見つかりませんダイアログ](/images/guides/alcom/23.webp)

自動的に2022.3.22f1のインストール画面が表示されます。

![モジュールの選択画面](/images/guides/alcom/24.webp)

**Android Build、iOS Buildが必要なので、チェックを入れてください**。

![設定ミスに注意 - チェックを入れる](/images/guides/alcom/25.webp)

### 9-3. ライセンスに同意

各種ライセンスが表示されるので、確認してContinue等で進めます。

![Visual Studioライセンスの同意](/images/guides/alcom/26.webp)

### 9-4. インストール完了を待つ

右上のダウンロードアイコンから進捗を確認できます。
完了までしばらく待ちます（1時間程度、回線速度等に依存）。

![ダウンロード中のアイコン](/images/guides/alcom/27.webp)

![インストール進行中](/images/guides/alcom/28.webp)

---

## Testプロジェクトの削除

先ほど作成したプロジェクトはもういらないので削除します。

![alt text](/images/guides/alcom/image.webp)

![alt text](/images/guides/alcom/image-1.webp)

「プロジェクトのファイルも削除する」を押しましょう
![alt text](/images/guides/alcom/image-2.webp)

---

長い手順お疲れさまでした！これで環境構築は完了です！
次のステップでは、実際にフラットくんをVRChatにアップロードします。
[次のステップへ：フラットくんをアップロードする](/guide/6-upload/)
