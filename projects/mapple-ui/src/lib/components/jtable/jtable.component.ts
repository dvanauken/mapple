import { Component, OnInit } from '@angular/core';
import { Weekday } from '../../enums/weekday'; // Import Weekday enum
import { HttpClient } from '@angular/common/http';

interface TableData {
  id: number;
  string: string;
  integer: number;
  float: number;
  money: number;
  date: Date;
  time?: string;
  boolean?: boolean;
  enumeration?: Weekday;
  editable: boolean;
}

@Component({
  selector: 'app-jtable',
  templateUrl: './jtable.component.html',
  styleUrls: ['./jtable.component.scss']
})
export class JtableComponent implements OnInit {
  data: TableData[] = [
    { id: 1, string: 'John Doe', integer: 30, editable: false, float: 0.0, money: 1.00, date: new Date('2024-12-25'), time: '12:00', enumeration: Weekday.MON, boolean: true },
    { id: 2, string: 'Jane Doe', integer: 25, editable: false, float: 0.0, money: 1.00, date: new Date('2024-12-25'), time: '12:00', enumeration: Weekday.TUE, boolean: true },
    { id: 3, string: 'Sam Smith', integer: 22, editable: false, float: 0.0, money: 1.00, date: new Date('2024-12-25'), time: '12:00', enumeration: Weekday.WED, boolean: true }
  ];

  newRow: TableData = {
    id: 0,
    string: '',
    integer: 0,
    editable: true,
    float: 0.0,
    money: 1.00,
    date: new Date(),
    boolean: true
  };
  readonly apiUrl = 'https://something.com/api/v1/save';  // Dummy endpoint URL

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // No need to load data from localStorage
  }

  private getNextId(): number {
    return this.data.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1;
  }

  addNewRow(): void {
    const newId = this.getNextId();
    if (this.newRow.string && this.newRow.integer !== null) {
      this.data.push({ ...this.newRow, id: newId, editable: false });
      this.newRow = {
        id: 0,
        string: '',
        integer: 0,
        float: 0.0,
        money: 1.00,
        date: new Date(),
        boolean: true,
        editable: true
      };
    }
  }

  enableEditing(row: TableData): void {
    row.editable = true;
  }

  save(row: TableData): void {
    row.editable = false;
    this.saveAll(); // Save to the backend after saving an individual row
  }

  cancel(row: TableData): void {
    row.editable = false;
  }

  saveAll(): void {
    // Make all rows non-editable before saving
    this.data.forEach(row => row.editable = false);

    // Simulate saving the table data to a backend
    console.log('Saving data to the backend...', this.data);

    // Simulate a success response after "saving" the data
    setTimeout(() => {
      console.log('Data saved successfully!');
      alert('Data saved successfully!');
    }, 1000); // Mock a delay of 1 second
  }

  onDateChange(event: any, row: TableData) {
    row.date = new Date(event); // Convert string back to Date
  }

}
