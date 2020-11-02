import React from "react"
import Layout from "./components/layout-jp"
import Banner from "./components/bannerjp"

const embassystaff = () => {
  return (
    <Layout>
      <div className="wrapper">
        <Banner></Banner>
        <h2>大使館職員</h2>
        <p>
          グスタボ・フィゲロア（公使）
          <br />
          <strong>次席</strong>　
        </p>

        <p>
          マリタ・プエルタス（参事官）
          <br />
          <strong> 貿易経済、機関、環境、協力担当、国際熱帯木材委員会のペルー常任代表委</strong>
        </p>
        <p>
        エドゥアルド・バシリオ・シルバ・マルズカ<br /> <strong> 駐在武官</strong>
        </p>
        <p>
          フェルナンド・アルバレダ <br /> <strong> 商務参事官</strong>
        </p>
        <p>
          エンリケ・デスカルシ (一等書記官) <br />
          <strong> 政治、司法協力、科学技術担当</strong>
        </p>
        <p>
          アレハンドロ・イダルゴ（三等書記官）
          <br />
          <strong> 文化、災害危機管理担当</strong>
        </p>
        <p>
          ウィリアム・バルデラマ <br /> <strong> 商務部農業専門家</strong>
        </p>
      </div>
    </Layout>
  )
}

export default embassystaff
