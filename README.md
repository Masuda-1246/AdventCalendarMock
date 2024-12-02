# AdventCalendarMock

## DEMO


## 環境構築
```bash
$ npm install
```

## 実行
```bash
$ npm run dev
```

http://localhost:5173/
でアクセスできます。

## カスタマイズ

### title, description
index.htmlのタイトルと説明を変更します。
```html: index.html
<title>AdventCalendarMock</title>
<meta name="description" content="AdventCalendarMock" />
```

### データソース
src/data/calendar.jsonにデータを記述します。
```json: src/data/calendar.json
{
  "title": "", // タイトル
  "subtitle": "", // サブタイトル
  "description": "", // 説明
  "entries": [
    {
      "day": 1, //日付
      "author": "",　// 著者の名前
      "avatar": "",　//著者のアイコン
      "title": "", //記事のタイトル
      "link": "" //記事のリンク
    }
  ]
}
```

### カレンダー調整
src/config/calendar.tsのカレンダーの設定を変更します。
```typescript: src/config/calendar.ts
export const CALENDAR_CONFIG = {
  // 0: Sunday, 1: Monday, ..., 6: Saturday
  startDay: 0, //どの曜日から始まるか
  year: 2024, //年
  month: 12, // 月
  totalDays: 31,　//何日間にするか
} as const;
```

