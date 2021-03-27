/**
 * @function processUrl =>  Transform url of api call.
 * @param url => Generate the correct API url for production and development environment.
 * @param isExternal
 */
const processUrl = (url: string, isExternal: boolean): string => {
  if (!isExternal) {
    return `${process.env.API_HOST}${url}`;
  } else {
    return `${url}`;
  }
};

export default processUrl;