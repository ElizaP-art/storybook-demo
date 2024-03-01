import { ChangeDetectorRef, Component , ElementRef, Input, NgModule, Renderer2  } from "@angular/core";
import { AwfCellRendererComponent} from '@agilent/ag-grid-community-extensions';
import { AwfCellRendererModule } from '@agilent/ag-grid-community-extensions';
import { ICellRendererParams } from "@ag-grid-community/core";
import { CellRendererComponent } from "@ag-grid-community/core/dist/cjs/es5/components/framework/componentTypes";
import { CustomSvgIcons } from "../assets/custom-svg-icons";

@Component({
  selector: 'app-image-formatter-cell',
  template: `<div style='display:flex' 
  (mouseenter)="onMouseEnter()"
  (mouseleave)="onMouseLeave()"
  agTooltip
  (hidden)="detectChanges()"  
  tooltipPlacement="auto"><div style='padding-right:5px;'><awf-icon-ng [raw]="raw" name="{{ icon }}"></awf-icon-ng></div><div [ngClass]= "{'apply-Italic':applyItalics}" >{{ text }}</div></div>` })

export class ImageFormatterComponent extends AwfCellRendererComponent {
public frameworkComponents = {
    'awfCellRenderer': AwfCellRendererComponent
};

  icon: string | undefined; 
  text:string | undefined;
  raw: string = '';
  applyItalics: boolean = false;

  constructor(renderer: Renderer2,
    element: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
    ) {
    super(renderer, element);
  }

  detectChanges(){
    this.changeDetectorRef.detectChanges();
  }

  get PendingIcon(): string {    
      return CustomSvgIcons.ResultPendingIcon;    
  }  

  override agInit(params: any) {
    super.agInit(params);
    params.value = 'Fail';

    switch ( params.value) {
      case "Pass":
        this.icon = "awf-success-colored";
        break;
      case "Fail":
        this.icon = "awf-error-colored";
        break;
      case "Pending":
        this.raw = this.PendingIcon;
        this.applyItalics = true;
        break;
      default:
        this.icon = "";
        this.raw = "";
    }

    this.text = params.value;
    var data = params.api!.getDisplayedRowAtIndex(params.rowIndex!)!.data;
    
  //   if (data) {
  //     if (params.column.getParent().getGroupId() === '0') {   
  //         //this.tooltipText = data.rowtooltip;
  //     } else {
  //         //this.tooltipText = data[params.column.getUniqueId() + "_tooltip"];
  //     }
  // } else if (params.node.aggData.summaryresult == "Pass") {
  //     //this.tooltipText = "overall pass";
  // } else if (params.node.aggData.summaryresult == "Fail") {
  //     //this.tooltipText = "weight out of range";
  // } else {
  //     //this.tooltipText = "sample pending";
  // }
  }
}