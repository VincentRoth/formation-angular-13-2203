import { Directive, OnInit } from '@angular/core';
import { AbstractCrudService } from '../api/abstract-crud.service';

@Directive()
export abstract class AbstractListComponent<T extends { id?: number }>
  implements OnInit
{
  items: T[];

  constructor(protected dataService: AbstractCrudService<T>) {}

  ngOnInit(): void {
    this.refreshData();
  }

  deleteItemFromList(model: T): void {
    this.dataService.delete(model.id).subscribe(() => {
      this.refreshData();
    });
  }

  private refreshData(): void {
    this.dataService.getAll().subscribe((data) => (this.items = data));
  }
}
