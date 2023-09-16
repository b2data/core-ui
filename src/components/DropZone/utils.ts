// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#types
const DISCRETE_TYPES = [
  "application",
  "audio",
  "example",
  "font",
  "image",
  "model",
  "text",
  "video",
];

export const validateFilesType = (
  files: FileList | null,
  accept: string = "",
): { isValid: boolean; files: File[] } => {
  if (!files) {
    return {
      isValid: false,
      files: [],
    };
  }

  const arrFiles = Array.from(files);

  // When accept is '*' and any file type.
  if (accept === "*") {
    return {
      isValid: true,
      files: arrFiles,
    };
  }

  const acceptedTypes = accept.split(",").map((s) => s.trim());

  // Try to find bad mime type files.
  const notAcceptedFiles = arrFiles.filter((file) => {
    const fileType = file.type;

    let isFileAccepted = false;

    // When accept is '..., image/png, ...' and file type is 'image/png'.
    if (acceptedTypes.includes(fileType)) {
      isFileAccepted = true;
    }

    // When accept is '..., image/*, ...' and file type is 'image/png'.
    DISCRETE_TYPES.forEach((t) => {
      if (acceptedTypes.includes(`${t}/*`) && fileType.includes(`${t}/`)) {
        isFileAccepted = true;
      }
    });

    // Uniq case when '.arp' files has type === ''.
    // May be browser specific error, probably more formats has bad types.
    if (!isFileAccepted) {
      const fileName = file.name;

      // Try to compare accepted types with file name extension.
      acceptedTypes.forEach((type) => {
        if (fileName.endsWith(type)) {
          isFileAccepted = true;
        }
      });
    }

    return !isFileAccepted;
  });

  return {
    isValid: !notAcceptedFiles.length,
    files: notAcceptedFiles.length ? notAcceptedFiles : arrFiles,
  };
};
