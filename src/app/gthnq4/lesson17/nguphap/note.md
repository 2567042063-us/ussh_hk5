```
app/
└── lessons/
└── lesson17/
├── NguPhapBaiKhoa17.tsx (giữ nguyên — tab 课文 highlight)
├── GrammarTab.tsx (MỚI — tab 语法 bài 17, từ PDF)
├── ExercisesTab.tsx (MỚI — tab 练习, từ câu ví dụ 语法)
└── page.tsx (cập nhật — gom 3 tab)
```

GrammarTab.tsx — tab 语法, lấy đúng mục "四 语法" của PDF bài 17: ① 存现句 (5 ví dụ + 2 ghi chú lỗi), ② 越来越… (3 ví dụ), ③ 越…越… (4 ví dụ + 2 ghi chú lỗi). Có công thức, giải thích, highlight vàng.

ExercisesTab.tsx — tab 练习, gom đủ 12 câu ví dụ trong 语法 thành 4 dạng: 填空 (ẩn cụm ngữ pháp), 连词成句 (tokens xáo cố định), 翻译 (Việt → Trung), 例句 (danh sách đầy đủ). Mỗi câu có details xem đáp án.

page.tsx — chỉ còn 3 tab (语法 · 练习 · 课文 highlight), gom 3 component lại, không còn nội dung nào bị nhúng trùng lặp.
