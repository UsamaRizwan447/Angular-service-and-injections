import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoggingService } from '../shared/LoggingService.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  private LoggingService: LoggingService;
  constructor() {
    this.LoggingService =  inject(LoggingService);
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.LoggingService.logStatus(accountStatus);
  }
}
