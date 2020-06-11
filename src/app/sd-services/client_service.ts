/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
//CORE_REFERENCE_IMPORTS
import { SDBaseService } from '../../app/n-services/SDBaseService';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
//append_imports_start

//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class client_service {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  //   service flows_client_service

  async startNode(i1: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          i1: i1
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      this.sd_NidNc2obqrnUcoU5(bh);
      //appendnew_next_startNode
      return (
        // formatting output variables
        {
          input: {},
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oSnv4HMsfmD65Ex5');
    }
  }

  //appendnew_flow_client_service_Start

  async sd_NidNc2obqrnUcoU5(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.input.i1);
      //appendnew_next_sd_NidNc2obqrnUcoU5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NidNc2obqrnUcoU5');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_client_service_Catch
}
