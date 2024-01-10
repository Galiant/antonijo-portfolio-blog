import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlog`.
 */
export type TextBlogProps = SliceComponentProps<Content.TextBlogSlice>;

/**
 * Component for "TextBlog" Slices.
 */
const TextBlog = ({ slice }: TextBlogProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_blog (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextBlog;
