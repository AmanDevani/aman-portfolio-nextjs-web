import env from "@/env";

export const generateUrl = (path) => {
  return `${env.NEXT_PUBLIC_CLOUDINARY_PREFIX_URL}/${env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME}/${path}`;
};
