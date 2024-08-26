import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>

      <p className="desc text-left max-w-md">
        {type} dan bagikan ide, cerita, atau pengalaman kamu dengan orang lain dalam membuat prompt
        untuk AI.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Prompt AI
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) =>
              setPost({ ...post,
                prompt: e.target.value })}
            placeholder="Tulis prompt kamu..."
            className="form_textarea"
            required
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal"> (#product, #webdevelopment, #idea) </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-quaternary-color text-sm">
            Cancel
          </Link>

          <button className="px-5 py-1.5 text-sm bg-primary-color rounded-full text-quaternary-color" type="submit" disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
