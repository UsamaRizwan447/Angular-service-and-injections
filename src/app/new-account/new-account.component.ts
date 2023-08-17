import { Component, inject} from '@angular/core';
import { LoggingService } from '../shared/LoggingService.service';
import { AccountService } from '../shared/AccountService.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  providers: [LoggingService]
})
export class NewAccountComponent{

  private LoggingService: LoggingService;
  private AccountService: AccountService;

  constructor() {
    this.LoggingService = inject(LoggingService);
    this.AccountService = inject(AccountService);
  }

  onCreateAccount(name: string, status: string) {
    this.AccountService.onAccountAdded({name, status});
    this.LoggingService.logStatus(status);
  }
}
