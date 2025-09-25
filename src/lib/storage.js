const STORAGE_KEY = 'nacarproperty-admin-draft';

export const saveDraft = (data) => {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Unable to save draft', error);
  }
};

export const loadDraft = () => {
  try {
    if (typeof window === 'undefined') return null;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn('Unable to load draft', error);
    return null;
  }
};

export const clearDraft = () => {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Unable to clear draft', error);
  }
};
