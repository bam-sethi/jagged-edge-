import {bootstrap}    from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
