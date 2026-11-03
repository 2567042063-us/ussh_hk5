"use client"; // có thể ko cần nếu ko dùng các hook của React

/* ───────────────────────── Component ───────────────────────── */

export default function Template() {
  return (
    <div className="">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </div>
  );
}
/* ───────────────────────── CSS (nhúng sẵn) ───────────────────────── */

const CSS = ``;
