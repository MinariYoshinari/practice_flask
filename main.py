from flask import Flask, render_template
# import googlemaps_utils
# import hotpepper_utils

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
    
    return render_template("index.html")

@app.route("/search_result", methods=['GET'])
def search_result():
    """
    GET元: top
    render先: search_result.html?
    入力: 
        {出発地，到着地，(あれば)経由地の地点名}
        または
        {starかunstarか, star/unstarされたお店の一通りの情報}
        入力がどちらなのかによって処理を変える
    出力: 
        - 出発地・到着地・(あれば)経由地の緯度経度
        - 検索結果のお店の情報
            - 緯度経度
            - 店名
            - 住所
            - 予算
            - 営業時間
            - 駐車場の有無
            - ホットペッパーのページのURL
            - その店がこのユーザにふぁぼられているかどうか
    処理の実態はsearch_restaurantsとstar_restaurant, unstar_restaurantで
    """
    return

def search_restaurants():
    """
    引数　: 出発地，到着地，(あれば)経由地の地点名の3点セット
    返り値: 
        - 出発地・到着地・(あれば)経由地の緯度経度
        - 検索結果のお店の情報
            - 緯度経度
            - 店名
            - 住所
            - 予算
            - 営業時間
            - 駐車場の有無
            - ホットペッパーのページのURL
            - その店がこのユーザにふぁぼられているかどうか
    """
    return

def is_stared():
    """
    引数　: 緯度と経度……？(お店を一意に特定できるならなんでもいい)
    返り値: その店がこのユーザにふぁぼられているか否かのbool値
    """
    return

def star_restaurant():
    """
    引数　: starされたお店の一通りの情報
    帰り値: なし
    内部処理:
        受け取ったお店の情報をお店テーブルに登録する
        ユーザとふぁぼられたお店を紐付けるテーブルにユーザIDとお店IDを登録する
    """
    return


def unstar_restaurant():
    """
    引数　: unstarされたお店の一通りの情報
    帰り値: なし
    内部処理:
        starと逆の処理を行う
    """
    return


if __name__ == "__main__":
    app.run()
