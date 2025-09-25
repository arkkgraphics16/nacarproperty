const ensureMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  return element;
};

export const setSEO = ({ title, description, image, url }) => {
  if (typeof document === 'undefined') return;

  if (title) {
    document.title = title;
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title }).setAttribute('content', title);
  }

  if (description) {
    ensureMeta('meta[name="description"]', { name: 'description', content: description }).setAttribute('content', description);
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description }).setAttribute('content', description);
  }

  if (image) {
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: image }).setAttribute('content', image);
  }

  if (url) {
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: url }).setAttribute('content', url);
  }
};
