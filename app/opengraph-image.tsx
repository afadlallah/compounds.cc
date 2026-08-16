import {
  createSocialCardImage,
  socialCardAlt,
  socialCardContentType,
  socialCardSize,
} from "@/lib/seo/social-card";

export const alt = socialCardAlt;
export const size = socialCardSize;
export const contentType = socialCardContentType;

export default function OpenGraphImage() {
  return createSocialCardImage();
}
