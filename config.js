// ① 部署 Google Apps Script 後，把「網頁應用程式網址」貼在這裡
// 留空時，排行榜會顯示「範例資料」方便預覽版面
window.LEADERBOARD_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbzFswYIQpObmKood3yOaxH3fp-_a6JivJdG2LoPOnR6KG4rRhG5nCWs5TdMNd7BredO4g/exec",
  REFRESH_SECONDS: 5,
  // 戰力分數公式：划船機公尺 × 5、飛輪公尺 × 2
  MULTIPLIER: { rower: 5, bike: 2 },
  EVENT_NAME: "輔仁大學 × 健身工廠 校園挑戰賽",
  EVENT_DATE: "11/17（二）13:00–17:00｜輔大風華廣場"
};
