import { useState } from "react";
import { linkIcon } from "../assets";
export const Demo = () => {
  const [articule, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    alert("submit");
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            name=""
            value={articule.url}
            placeholder="Enter URL"
            onChange={(e) => setArticle({ ...articule, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↵
          </button>

          {/* Browser URL History */}
        </form>
      </div>
    </section>
  );
};
