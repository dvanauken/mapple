import { Pipe, PipeTransform } from '@angular/core';
import { Weekday } from '../enums/weekday'; // ensure you import the Weekday enum

@Pipe({
  name: 'dayName'
})
export class DayNamePipe implements PipeTransform {
  transform(value: Weekday | undefined): string {
    const daysMap = {
      [Weekday.MON]: 'Monday',
      [Weekday.TUE]: 'Tuesday',
      [Weekday.WED]: 'Wednesday',
      [Weekday.THU]: 'Thursday',
      [Weekday.FRI]: 'Friday',
      [Weekday.SAT]: 'Saturday',
      [Weekday.SUN]: 'Sunday'
    };
    return value ? daysMap[value] : 'Not specified';
  }
}
