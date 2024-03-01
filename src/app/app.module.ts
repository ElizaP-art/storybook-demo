import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from '@ag-grid-community/angular';
import { AppComponent } from './app.component';
import { LicenseManager } from '@ag-grid-enterprise/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ResultSamplesComponent } from 'src/stories/result-samples/result-samples.component';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { ImageFormatterComponent } from 'src/stories/result-samples/image-formatter-component.component';
import { IconModule } from '@agilent/ui-element/icon';
import { HomePageComponent } from 'src/stories/home-page/home-page.component';

LicenseManager.setLicenseKey("Using_this_AG_Grid_Enterprise_key_( AG-046276 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Agilent Technologies Australia (M) Pty Ltd )_is_granted_a_( Multiple Applications )_Developer_License_for_( 10 )_Front-End_JavaScript_developers___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_AG_Grid_Enterprise___This_key_has_been_granted_a_Deployment_License_Add-on_for_( 10 )_Production_Environments___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 11 October 2024 )____[v2]_MTcyODYwMTIwMDAwMA==a36ff0ccf6bf781d9b825136505baf88");
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule ]);

@NgModule({
  declarations: [
    AppComponent,  
    ImageFormatterComponent,
    ResultSamplesComponent,
   
  ],
  imports: [
    BrowserModule,
    IconModule,
    AgGridModule,
   
  ],
  exports: [ResultSamplesComponent, ImageFormatterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
