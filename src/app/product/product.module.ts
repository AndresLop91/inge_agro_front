import {NgModule} from "@angular/core";
import { AddProductComponent } from "./add-product/add-product.component";
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ProductImageComponent } from './product-image/product-image.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AddProductComponent, MyProductsComponent, ProductListComponent, ProductImageComponent, EditProductComponent, ProductCarouselComponent],
  exports: [
    ProductImageComponent
  ],
  imports: [ReactiveFormsModule, CommonModule, NgbModule, AgmCoreModule]
})
export class ProductModule{

}
