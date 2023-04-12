import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const booksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const booksApiActions = createActionGroup({
  source: 'Books Api',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
