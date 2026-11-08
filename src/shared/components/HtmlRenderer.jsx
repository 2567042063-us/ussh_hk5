"use client";

import { useEffect, useRef } from "react";

export default function HtmlRenderer({ htmlContent }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const title = containerRef.current
      .querySelector("title")
      ?.textContent?.trim();
    if (title) document.title = title;

    // Tìm tất cả các thẻ <script> chưa xử lý
    const scripts = containerRef.current.querySelectorAll(
      "script:not([data-processed])",
    );

    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      // Copy các thuộc tính cũ sang mới
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // Đánh dấu script đã xử lý
      newScript.setAttribute("data-processed", "true");

      if (oldScript.innerHTML) {
        // Bọc toàn bộ code inline vào trong một block {} hoặc IIFE để cô lập biến T1
        // Điều này giúp biến T1 của Link 2 không bị đụng hàng với T1 của Link 1 cũ
        newScript.innerHTML = `{ ${oldScript.innerHTML} }`;
      }

      // Thay thế an toàn
      if (oldScript.parentNode) {
        oldScript.parentNode.replaceChild(newScript, oldScript);
      }
    });
  }, [htmlContent]); // Chạy lại mượt mà khi chuyển đổi giữa Link 1 và Link 2

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      suppressHydrationWarning={true}
    />
  );
}
