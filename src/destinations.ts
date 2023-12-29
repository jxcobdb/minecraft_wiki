/**
 * A Destination is a web link to either internal or external page.
 * If there is a page that is not yet created in this project, redirect
 * it to old one, by adding new destination here.
 *
 * Look {@link PageLink} components for usage
 */
const Destinations = {
    Home: '/',
  } as const;
  
  export type Destination = keyof typeof Destinations;
  
  export default Destinations;
  