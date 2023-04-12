import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/book.service';
import { booksActions, booksApiActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(booksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(booksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(booksActions.removeBook({ bookId }));
  }
}
