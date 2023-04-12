import { createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/books.model';
import { booksApiActions } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(booksApiActions.retrievedBookList, (state, { books }) => books)
);
