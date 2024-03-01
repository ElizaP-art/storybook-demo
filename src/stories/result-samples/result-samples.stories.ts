import { AgGridModule } from "@ag-grid-community/angular";
import { ArgTypes, Meta, Story, moduleMetadata } from "@storybook/angular";
import { ResultSamplesComponent } from "./result-samples.component";
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import { ColDef, ComponentMeta, ICellRendererParams } from "@ag-grid-community/core";
import { ImageFormatterComponent } from "./image-formatter-component.component";
import { IconModule } from "@agilent/ui-element";

interface gridArgs{
  columnDefs : ColDef[];
  rowData: any[];
}


const meta: Meta<typeof ResultSamplesComponent> = {
  title: 'Result Samples',
  tags: ['autodocs'],
  component: ResultSamplesComponent,   
  decorators: [    
    moduleMetadata({
      declarations: [ImageFormatterComponent],
      imports: [AgGridModule, IconModule],     
    })
  ],
}

export default meta;

const Template: Story<gridArgs> = (args: gridArgs) => ({
  component: ResultSamplesComponent,
  props: args,
})

export const Default = Template.bind({});
var rowFailErrorMessage: string = 'Sample result failed';
var groupRowWarningMessage: string = 'average pass despite Individual row failure';
Default.args = {
  
  columnDefs : [
    { field: 'measurementno', rowGroup: true, hide: true, headerName: 'Measurement', valueGetter: avgValueGetter },
    { field: 'repeatno', headerName: 'Repeat No.', aggFunc: 'first' },
    { field: 'sampleno', rowGroup: false, hide: true },
    { field: 'samplelabel', headerName: 'Sample Label', aggFunc: 'first' },
    { field: 'issummary', headerName: 'Is Summary', hide: true, aggFunc: '' },
    {
      field: 'reason', headerName: 'Reason',
      valueGetter: (params: any) => {
        if (params.node.group) {
          return {
            toString: () => params.node.key == params.node.allLeafChildren[0].data.measurementno ?
                    params.node.allLeafChildren[0].data.reason : '',
          }       
        }
        else
          return {
           toString: () => params.data.reason,
          }
      }
    },
    {
      field: 'summaryresult', headerName: 'Summary Result', aggFunc: 'first',   
      valueGetter: (params: any) => {
        if (params.node.group) {
          return {
            toString: () => params.node.key == params.node.allLeafChildren[0].data.measurementno ?
                  params.node.allLeafChildren[0].data.summaryresult : '',
          }
        }
        else
        return {
          toString: () => params.data.summaryresult,
         }
      },
      cellRenderer: ImageFormatterComponent,
      cellRendererParams: {
        errorMessage: (params: ICellRendererParams) => ResultSamplesComponent.isSampleResultFailing(params) ? rowFailErrorMessage : '' ,
                  
        warningMessage: (params: ICellRendererParams) => ResultSamplesComponent.isSampleResultWarning(params) ? groupRowWarningMessage : ''
       },
      
    }
  ],

  rowData:[
    { sampleno: 1, measurementno: '1.1', repeatno:'1', samplelabel: 'Sample 1',summaryresult: 'Pass',issummary: true, reason:'Individual scan failures but overall Pass'},
    { sampleno: 1, measurementno: '1.1.1', repeatno:'1', samplelabel: 'Sample 1',summaryresult: 'Pass',issummary: false, reason:'reason1'},    
    { sampleno: 1, measurementno: '1.2', repeatno:'2', samplelabel: 'Sample 1',summaryresult: 'Fail',issummary: true, reason: 'Scan1:Repeat2:Weight out of range '},       
    { sampleno: 1, measurementno: '1.2.1', repeatno:'2', samplelabel: 'Sample 1',summaryresult: 'Fail',issummary: false, reason:'fails'},       
    { sampleno: 2, measurementno: '2.1', repeatno:'1', samplelabel: 'Sample 2',summaryresult: 'Fail',issummary: true, reason: 'Weight max exceeds in 2.1 '},    
    { sampleno: 2, measurementno: '2.1.1', repeatno:'1', samplelabel: 'Sample 2',summaryresult: 'Fail',issummary: false, reason:'fails'},    
    { sampleno: 2, measurementno: '2.2', repeatno:'2', samplelabel: 'Sample 2',summaryresult: 'Fail',issummary: true, reason: 'Weight max exceeds in scan 2'},    
    { sampleno: 2, measurementno: '2.2.1', repeatno:'2', samplelabel: 'Sample 2',summaryresult: 'Fail',issummary: false, reason:'its again a weight issue'}
     
] 




}

function avgValueGetter(params: any){
  return params.data.measurementno.substring(0,3);
}

