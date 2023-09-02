import { atomWithStorage } from "jotai/utils";

export const bookTitleAtom = atomWithStorage("book_title", null);
export const bookPublishedAtom = atomWithStorage("published_date", null);
export const bookAuthorAtom = atomWithStorage("book_author", null);
export const bookCountAtom = atomWithStorage("book_count", 27);
export const bookCategoryAtom = atomWithStorage("book_category", null);
export const bookPagesAtom = atomWithStorage("book_pages", null);

