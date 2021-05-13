import { useRouter } from "next/router";

export const DocumentHeader = () => {
  const router = useRouter();

  return (
    <div className="sm:flex gap-4 pt-md justify-between">
      <div className="flex-none w-24 px-sm">
        <button className="h-4 button-shadow">
          <span
            onClick={() => router.back()}
            className="text-xs text-blue relative z-10 title-accent p-2 bg-white border border-blue border-solid"
          >
            ← Back
          </span>
        </button>
      </div>

      <div className="flex gap-4 max-w-2xl pt-lg px-md sm:pl-0">
        <h1 className="text-md sm:text-lg">
          A collection of documents and media produced over the course of our
          20+ years working with x, y & z.
        </h1>
        <div>
          <svg
            width="70"
            height="96"
            viewBox="0 0 70 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69 95H1V1H49.5714L69 21.4V95Z"
              stroke="#1F1F1F"
              strokeWidth="2"
            />
            <path d="M49 22V1L69 22H49Z" fill="#1F1F1F" />
          </svg>
        </div>
      </div>
    </div>
  );
};
