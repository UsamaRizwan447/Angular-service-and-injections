import { Component, Input } from '@angular/core';
import { LoggingService } from '../shared/LoggingService.service';
import { AccountService } from '../shared/AccountService.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private LoggingService: LoggingService, private AccountService: AccountService) {}

  onSetTo(status: string) {
    this.AccountService.onStatusChanged({id: this.id, newStatus: status});
    this.LoggingService.logStatus(status);
  }
}
