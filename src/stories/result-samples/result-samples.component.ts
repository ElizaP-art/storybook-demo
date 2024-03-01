import { Component, Input, OnInit } from '@angular/core';
import { ColDef, GridOptions, GridReadyEvent, Module, RowGroupingDisplayType} from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';

@Component({
  selector: 'app-result-samples',
  template: `  
    <div >     
      <ag-grid-angular #agGrid
        style="height: 500px" class="ag-theme-agilent"  [rowHeight] = 32     
        [rowData]="rowData"
        [columnDefs]="columnDefs"
        [defaultColDef]="defaultColDef"
        [modules] = "modules"
        [gridOptions]="gridOptions"
        [groupDisplayType]="groupDisplayType"
        [animateRows]="true"        
        (gridReady)="onGridReady($event)"> 
      >
      </ag-grid-angular>
    </div>
  ` 
})
export class ResultSamplesComponent {

  @Input() columnDefs: ColDef[] = [];
  @Input() rowData: any[] = []; 
  public modules: Module[] = [ClientSideRowModelModule, RowGroupingModule];
  private gridApi: any;
  private columnApi: any;
  public defaultColDef : any;
  public groupDisplayType: RowGroupingDisplayType= 'singleColumn';

  public static isSampleResultFailing(params: any): boolean {
    if(params.data){
      return params.data.summaryresult=='Fail'? true: false
  }else{ return params.node.aggData.summaryresult=='Fail'? true: false

  }
}
public static isSampleResultWarning(params: any): boolean {
  if(params.node.aggData){
    var rowCondition = params.node.allLeafChildren.filter((x: any) => x.data.summaryresult == "Fail").length > 0;
    return  params.node.aggData.summaryresult == "Pass"  && rowCondition == true ? true: false
  }
  else
  { 
    return false
  }
}
  public gridOptions: GridOptions = {
    suppressAggFuncInHeader: true,
    animateRows: true,
    isExternalFilterPresent: function () {
      return true;
    },
    doesExternalFilterPass: function (rowNode) {
      return !rowNode.data.issummary;
    },
    autoGroupColumnDef: {
      field: 'no',
      headerName: '',
      sortable: true,
      cellRendererParams: { suppressCount: true },
      pinned: 'left'
    },   
    defaultColDef: {
      resizable: false,
      editable: false,
      enableRowGroup: true,          
      //cellRenderer: ResultsCellFormatterComponent,
    },
    getMainMenuItems: (params) => this.getMainMenuItems(params),   
    onColumnRowGroupChanged: (params) => {
      if (params.columns!.length > 0 && params.columns![params.columns!.length - 1].getColId() == "no") {        
        this.gridOptions.api!.forEachNode((node, index) => {
          if (node.group && node.childrenAfterFilter!.length === 1) {
            this.gridOptions.api!.setRowNodeExpanded(node, true);
            this.gridOptions.groupHideOpenParents = true;
            //this.cdr.detectChanges();
          }
        });
      }
      else
        this.gridOptions.groupHideOpenParents = false;
        //this.cdr.detectChanges();
    }
  }

  getMainMenuItems(params : any) {
    params.defaultItems.push('contractAll');
    params.defaultItems[params.defaultItems.length - 1] = {
      name: "Reset Columns",
      action: () => {
        this.resetColumnsWithAggregation();
      },
    };    
    //Filter the default resetColumns
    return params.defaultItems.filter((item : any)  => item != 'resetColumns');
  }

  resetColumnsWithAggregation() {
    // Store the current aggregation state
    var currentAggState :any = {};   
    this.gridOptions.columnApi!.getAllGridColumns().forEach(column => {
      currentAggState[column.getColId()] = {
        aggFunc: column.getAggFunc(),
      };
    });

    // Restore the aggregation state
    Object.keys(currentAggState).forEach(colId => {
      var column = this.gridOptions.columnApi!.getColumn(colId);
      var aggState = currentAggState[colId];
      if (column) {
        column.setAggFunc(aggState.aggFunc);
        column.setPinned(false);
      }
    });

    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    };

    // Reset the columns   
    this.gridOptions.api!.setColumnDefs(this.columnDefs);

  }

  public onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }
  
 
}
