import Link from "next/link";

export default function DocHieuSC() {
  return (
    <div className="mb-10">
      <h2 className="border-t-3 border-b-3 mb-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
        Đọc hiểu SC
        <Link
          href="https://yuedusc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-sm text-blue-600 hover:underline"
        >
          Xem đầy đủ tại đây
        </Link>
      </h2>
      <p className="text-center text-xl font-light text-orange-600 dark:text-orange-400">
        第二单元
      </p>

      <ul className="text-center text-xl">
        <li>
          <Link
            href="/hk5/yuedu-2-1-guonian"
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            一、过年
          </Link>
        </li>
      </ul>
    </div>
  );
}
