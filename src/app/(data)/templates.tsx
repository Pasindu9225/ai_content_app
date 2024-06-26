import blogpng from "@/../../public/blog.png";
import blogcontentpng from "@/../../public/blogcontent.png";
import blogTopicIdeaspng from "@/../../public/blogTopicIdeas.png";
import youtubeSeoPng from "@/../../public/youtubeSeo.png";
import YouTubeDescriptionpng from "@/../../public/YouTubeDescription.png";
import YouTubeTagsPng from "@/../../public/YouTubeTags.png";
import RewriteArticlesPng from "@/../../public/RewriteArticles.png";
import TextImproverPng from "@/../../public/TextImprover.png";
import instagramPng from "@/../../public/instagram.png";
import emojiPng from "@/../../public/smile.png";

export default [
  {
    name: "Blog Title",
    description: "an AI tool that generates blog titles",
    category: "Blog",
    icon: blogpng,
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points based on the given input",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your blog outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    description: "an AI tool that generates blog content",
    category: "Blog",
    icon: blogcontentpng,
    aiPrompt: "Generate detailed blog content based on the given outline",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter your blog outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    description: "an AI tool that generates blog topic ideas",
    category: "Blog",
    icon: blogTopicIdeaspng,
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points based on the given input",
    slug: "generate-blog-topic-ideas",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter additional details",
        field: "textarea",
        name: "details",
        required: false,
      },
    ],
  },
  {
    name: "YouTube SEO Title",
    description: "an AI tool that generates SEO-friendly YouTube titles",
    category: "YouTube",
    icon: youtubeSeoPng,
    aiPrompt: "Generate an SEO-friendly YouTube title based on the given input",
    slug: "generate-youtube-seo-title",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter additional details",
        field: "textarea",
        name: "details",
        required: false,
      },
    ],
  },
  {
    name: "YouTube Description",
    description: "an AI tool that generates YouTube video descriptions",
    category: "YouTube",
    icon: YouTubeDescriptionpng,
    aiPrompt: "Generate a YouTube video description based on the given input",
    slug: "generate-youtube-description",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter your video content details",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Tags",
    description: "an AI tool that generates YouTube tags",
    category: "YouTube",
    icon: YouTubeTagsPng,
    aiPrompt: "Generate relevant YouTube tags based on the given input",
    slug: "generate-youtube-tags",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter additional details",
        field: "textarea",
        name: "details",
        required: false,
      },
    ],
  },
  {
    name: "Rewrite Articles (Plagiarism Free)",
    description: "an AI tool that rewrites articles to be plagiarism-free",
    category: "Writing",
    icon: RewriteArticlesPng,
    aiPrompt: "Rewrite the following article to be plagiarism-free",
    slug: "rewrite-articles",
    form: [
      {
        label: "Enter the article text",
        field: "textarea",
        name: "article",
        required: true,
      },
      {
        label: "Enter additional details",
        field: "textarea",
        name: "details",
        required: false,
      },
    ],
  },
  {
    name: "Text Improver",
    description: "an AI tool that improves the quality of your text",
    category: "Writing",
    icon: TextImproverPng,
    aiPrompt:
      "Improve the following text to make it more engaging and readable",
    slug: "text-improver",
    form: [
      {
        label: "Enter the text to improve",
        field: "textarea",
        name: "text",
        required: true,
      },
      {
        label: "Enter additional details",
        field: "textarea",
        name: "details",
        required: false,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    description: "an AI tool that generates engaging Instagram posts",
    category: "Social Media",
    icon: instagramPng,
    aiPrompt: "Generate an engaging Instagram post based on the given input",
    slug: "generate-instagram-post",
    form: [
      {
        label: "Enter the topic of your post",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter details for your post",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    description: "an AI tool that adds relevant emojis to your text",
    category: "Text Enhancement",
    icon: emojiPng,
    aiPrompt: "Add relevant emojis to the following text",
    slug: "add-emojis-to-text",
    form: [
      {
        label: "Enter the text",
        field: "textarea",
        name: "text",
        required: true,
      },
      {
        label: "Enter additional details",
        field: "textarea",
        name: "details",
        required: false,
      },
    ],
  },
];
