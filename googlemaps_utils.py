"""
Google MapsのAPIを使うためのメソッドたち
1. 出発地，到着地，経由地の地点名を緯度経度に変換
2. 1.で求めた緯度経度をもとに経路探索
3. Roads APIを使って，各区間の始点と終点の間の点を取得する
4. 取得した点をもとに飲食店を探す
5. 1.で求めた緯度経度と一緒に飲食店のリストをフロントに渡す
6. 経由地が追加された場合もほぼ同じ流れ。ただし出発地と到着地は最初の検索の時の値を使う
のうち，4,5以外を行う
"""